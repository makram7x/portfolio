import { useState, useEffect, useRef, useCallback } from 'react';
import AnimatedText from '../components/AnimatedText';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Guide Map',
    subtitle: 'Mobile App Design',
    date: 'May 2024',
    category: 'ui-ux',
    description: 'A user-friendly mobile app that guides travelers to popular destinations in any country, designed as a practical solution to reduce the need for traditional tour guides.',
    details: [
      'Applied UI/UX design principles for intuitive navigation',
      'Created engaging visuals for optimal user experience',
      'Comprehensive destination descriptions with images & reviews',
    ],
    tools: ['Figma', 'Adobe XD'],
    connections: [2, 3], // Connected to other UI/UX projects
  },
  {
    id: 2,
    title: 'Students Pick-Up',
    subtitle: 'Graduation Project',
    date: 'Dec 2024',
    category: 'ui-ux',
    description: 'A mobile and web prototype to streamline school pick-ups through QR code scanning, enhancing security and organization.',
    details: [
      'Designed dual interfaces for parents and staff',
      'Implemented QR code verification system',
      'Focused on children\'s privacy and protection',
    ],
    tools: ['Figma', 'Adobe Creative Suite'],
    connections: [1, 4],
  },
  {
    id: 3,
    title: 'Champion Within Us',
    subtitle: 'Website Design',
    date: 'Feb 2025',
    category: 'web',
    description: 'Collaborated with Al Ain University students in UAE to design a website meeting their vision and requirements.',
    details: [
      'Effective client communication',
      'Creative design solutions',
      'Met all project specifications',
    ],
    tools: ['Figma', 'VS Code'],
    connections: [1, 4],
  },
  {
    id: 4,
    title: 'ICMC Conference',
    subtitle: 'Conference Website',
    date: 'Mar 2025',
    category: 'web',
    description: 'Professional interface for the International Communication & Media Conference with intuitive layout and easy access to details.',
    details: [
      'Enhanced user engagement through UX',
      'Professional, formal aesthetic',
      'Strong visual principles applied',
    ],
    tools: ['Figma', 'Adobe Creative Suite'],
    connections: [2, 3],
  },
];


const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cardTransforms, setCardTransforms] = useState({});
  const [stars, setStars] = useState([]);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef({});
  const starIdRef = useRef(0);
  const lastStarTime = useRef(0);

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
    switch (category) {
      case 'ui-ux': return '#C17F59';
      case 'web': return '#5C6B5E';
      default: return '#C17F59';
    }
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
            {projects.map((project, index) => {
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
          </div>
        </div>
      )}
    </main>
  );
};

export default Projects;
