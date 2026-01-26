import { useState, useEffect, useRef, useCallback } from 'react';
import AnimatedText from '../components/AnimatedText';
import { featuredProjects, behanceConfig, projectCategoryColors } from '../content/projects';
import './Projects.css';


const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cardTransforms, setCardTransforms] = useState({});
  const [stars, setStars] = useState([]);
  const [behanceProjects, setBehanceProjects] = useState([]);
  const [behanceLoading, setBehanceLoading] = useState(true);
  const [behanceError, setBehanceError] = useState(null);
  const [lightboxProject, setLightboxProject] = useState(null);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef({});
  const starIdRef = useRef(0);
  const lastStarTime = useRef(0);

  // Fetch Behance RSS feed with fallback proxies
  useEffect(() => {
    const fetchBehanceProjects = async () => {
      const feedUrl = `https://www.behance.net/feeds/user?username=${behanceConfig.username}`;
      let lastError = null;

      // Try each proxy until one works
      for (const proxy of behanceConfig.corsProxies) {
        try {
          const proxyUrl = proxy.includes('allorigins')
            ? `${proxy}${encodeURIComponent(feedUrl)}`
            : `${proxy}${feedUrl}`;

          const response = await fetch(proxyUrl);

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }

          const xmlText = await response.text();
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

          // Check if we got valid XML
          const parseError = xmlDoc.querySelector('parsererror');
          if (parseError) {
            throw new Error('Invalid XML response');
          }

          const items = xmlDoc.querySelectorAll('item');
          if (items.length === 0) {
            throw new Error('No items found in feed');
          }

          const parsedProjects = Array.from(items).map((item, index) => {
            const title = item.querySelector('title')?.textContent || 'Untitled';
            const link = item.querySelector('link')?.textContent || '';
            const pubDate = item.querySelector('pubDate')?.textContent || '';

            // Try multiple sources for the image
            const contentEncoded = item.getElementsByTagName('content:encoded')[0]?.textContent || '';
            const description = item.querySelector('description')?.textContent || '';
            const contentToSearch = contentEncoded || description;

            // Extract image - handle both single and double quotes
            let thumbnail = null;
            const imgMatchSingle = contentToSearch.match(/<img[^>]+src='([^']+)'/);
            const imgMatchDouble = contentToSearch.match(/<img[^>]+src="([^"]+)"/);
            thumbnail = imgMatchSingle?.[1] || imgMatchDouble?.[1] || null;

            // Extract project ID from link
            const idMatch = link.match(/\/gallery\/(\d+)\//);
            const behanceId = idMatch ? idMatch[1] : null;

            return {
              id: `behance-${index}`,
              title,
              link,
              thumbnail,
              pubDate: new Date(pubDate).toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric'
              }),
              behanceId,
              isBehance: true,
            };
          });

          setBehanceProjects(parsedProjects);
          setBehanceLoading(false);
          return; // Success, exit the loop
        } catch (error) {
          console.warn(`Proxy ${proxy} failed:`, error.message);
          lastError = error;
        }
      }

      // All proxies failed
      console.error('All proxies failed to fetch Behance projects:', lastError);
      setBehanceError('Unable to load Behance projects');
      setBehanceLoading(false);
    };

    fetchBehanceProjects();
  }, []);

  // Magnetic cursor effect + Star trail
  const handleMouseMove = useCallback((e) => {
    const transforms = {};
    const magneticStrength = 0.15;
    const magneticRange = 250;

    Object.entries(cardRefs.current).forEach(([id, cardEl]) => {
      if (!cardEl) return;

      const rect = cardEl.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      const deltaX = e.clientX - cardCenterX;
      const deltaY = e.clientY - cardCenterY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < magneticRange) {
        const strength = (1 - distance / magneticRange) * magneticStrength;
        transforms[id] = {
          x: deltaX * strength,
          y: deltaY * strength,
        };
      } else {
        transforms[id] = { x: 0, y: 0 };
      }
    });

    setCardTransforms(transforms);

    // Star trail effect - throttled to every 50ms
    const now = Date.now();
    if (now - lastStarTime.current > 50) {
      lastStarTime.current = now;

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newStar = {
          id: starIdRef.current++,
          x,
          y,
          size: Math.random() * 4 + 2,
        };

        setStars(prev => [...prev.slice(-15), newStar]); // Keep max 15 stars
      }
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const resetTransforms = {};
    Object.keys(cardRefs.current).forEach((id) => {
      resetTransforms[id] = { x: 0, y: 0 };
    });
    setCardTransforms(resetTransforms);
    setStars([]); // Clear stars when leaving
  }, []);

  // Clean up old stars
  useEffect(() => {
    if (stars.length === 0) return;

    const timer = setTimeout(() => {
      setStars(prev => prev.slice(1));
    }, 600);

    return () => clearTimeout(timer);
  }, [stars]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [handleMouseMove, handleMouseLeave]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getCategoryColor = (category) => {
    return projectCategoryColors[category] || projectCategoryColors['ui-ux'];
  };

  return (
    <main className="projects-page">
      <section className="page-header">
        <div className="container">
          <h1>
              <AnimatedText>My </AnimatedText>
              <AnimatedText className="accent-text" delay={0.15}>Projects</AnimatedText>
            </h1>
          <p>Explore my constellation of creative work</p>
        </div>
      </section>

      <section className="constellation-section" ref={sectionRef}>
        <div className="constellation-container" ref={containerRef}>
          {/* Cursor star trail */}
          <div className="star-trail">
            {stars.map((star) => (
              <div
                key={star.id}
                className="trail-star"
                style={{
                  left: star.x,
                  top: star.y,
                  width: star.size,
                  height: star.size,
                }}
              />
            ))}
          </div>

          {/* Project cards */}
          <div className="constellation-nodes">
            {featuredProjects.map((project, index) => {
              const isHovered = hoveredProject === project.id;
              const transform = cardTransforms[project.id] || { x: 0, y: 0 };
              return (
                <div
                  key={project.id}
                  ref={(el) => (cardRefs.current[project.id] = el)}
                  className="magnetic-wrapper"
                  style={{
                    transform: `translate(${transform.x}px, ${transform.y}px)`,
                  }}
                >
                  <div
                    className={`constellation-node ${isHovered ? 'hovered' : ''} ${isVisible ? 'visible' : ''}`}
                    style={{
                      '--node-color': getCategoryColor(project.category),
                      '--stagger-delay': `${index * 0.1}s`,
                    }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => setActiveProject(project)}
                  >
                    {/* Border draw SVG */}
                    <svg className="border-draw" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <rect
                        x="0"
                        y="0"
                        width="100"
                        height="100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                    <div className="node-core">
                      <div className="orbit-path"></div>
                      <div className="orbit-ring">
                        <div className="orbit-dot"></div>
                      </div>
                      <div className="orbit-ring orbit-ring-reverse">
                        <div className="orbit-dot orbit-dot-small"></div>
                      </div>
                    </div>
                    <div className="node-label">
                      <span className="node-title">{project.title}</span>
                      <span className="node-subtitle">{project.subtitle}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="constellation-legend">
            <div className="legend-item">
              <span className="legend-dot" style={{ background: '#C17F59' }}></span>
              <span>UI/UX Design</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot" style={{ background: '#5C6B5E' }}></span>
              <span>Web Design</span>
            </div>
          </div>

          {/* Instructions */}
          <div className="constellation-hint">
            <span>Hover to explore connections • Click to view details</span>
          </div>
        </div>
      </section>

      {/* Behance Projects Section */}
      <section className="behance-section">
        <div className="container">
          <div className="behance-header">
            <h2>
              <AnimatedText>From </AnimatedText>
              <AnimatedText className="accent-text" delay={0.15}>Behance</AnimatedText>
            </h2>
            <a
              href={`https://www.behance.net/${behanceConfig.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="behance-profile-link"
            >
              View Profile →
            </a>
          </div>

          {behanceLoading && (
            <div className="behance-loading">
              <div className="loading-spinner"></div>
              <p>Loading projects...</p>
            </div>
          )}

          {behanceError && (
            <div className="behance-error">
              <p>{behanceError}</p>
              <a
                href={`https://www.behance.net/${behanceConfig.username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Behance Profile
              </a>
            </div>
          )}

          {!behanceLoading && !behanceError && (
            <div className="bento-grid">
              {behanceProjects.map((project) => (
                <div
                  key={project.id}
                  className="bento-item"
                  onClick={() => setLightboxProject(project)}
                >
                  {project.thumbnail ? (
                    <img src={project.thumbnail} alt={project.title} loading="lazy" />
                  ) : (
                    <div className="bento-placeholder">
                      <span>Bē</span>
                    </div>
                  )}
                  <div className="bento-overlay">
                    <div className="bento-content">
                      <h3>{project.title}</h3>
                      <span className="bento-date">{project.pubDate}</span>
                    </div>
                    <span className="bento-icon">↗</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Behance Lightbox */}
      {lightboxProject && (
        <div className="lightbox-overlay" onClick={() => setLightboxProject(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxProject(null)}>
              ×
            </button>
            <button
              className="lightbox-nav lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = behanceProjects.findIndex(p => p.id === lightboxProject.id);
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : behanceProjects.length - 1;
                setLightboxProject(behanceProjects[prevIndex]);
              }}
            >
              ‹
            </button>
            <button
              className="lightbox-nav lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = behanceProjects.findIndex(p => p.id === lightboxProject.id);
                const nextIndex = currentIndex < behanceProjects.length - 1 ? currentIndex + 1 : 0;
                setLightboxProject(behanceProjects[nextIndex]);
              }}
            >
              ›
            </button>
            <div className="lightbox-image-container">
              {lightboxProject.thumbnail ? (
                <img src={lightboxProject.thumbnail} alt={lightboxProject.title} />
              ) : (
                <div className="lightbox-placeholder">
                  <span>Bē</span>
                </div>
              )}
            </div>
            <div className="lightbox-info">
              <h3>{lightboxProject.title}</h3>
              <span className="lightbox-date">{lightboxProject.pubDate}</span>
              <a
                href={lightboxProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="lightbox-link"
              >
                View on Behance →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Project Detail Modal */}
      {activeProject && (
        <div className="project-modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)}>
              ×
            </button>
            <div className="modal-header">
              <span
                className="modal-category"
                style={{ color: getCategoryColor(activeProject.category) }}
              >
                {activeProject.category === 'ui-ux' ? 'UI/UX Design' : 'Web Design'}
              </span>
              <span className="modal-date">{activeProject.date}</span>
            </div>
            <h2 className="modal-title">{activeProject.title}</h2>
            <p className="modal-subtitle">{activeProject.subtitle}</p>
            <p className="modal-description">{activeProject.description}</p>

            <div className="modal-details">
              <h4>Key Features</h4>
              <ul>
                {activeProject.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="modal-tools">
              <h4>Tools Used</h4>
              <div className="tools-list">
                {activeProject.tools.map((tool) => (
                  <span key={tool} className="tool-badge">{tool}</span>
                ))}
              </div>
            </div>

            {activeProject.behanceId && (
              <div className="modal-behance">
                <h4>View on Behance</h4>
                <div className="behance-embed">
                  <iframe
                    src={`https://www.behance.net/embed/project/${activeProject.behanceId}?ilo0=1`}
                    height="316"
                    width="404"
                    allowFullScreen
                    loading="lazy"
                    frameBorder="0"
                    allow="clipboard-write"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title={`${activeProject.title} on Behance`}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default Projects;
