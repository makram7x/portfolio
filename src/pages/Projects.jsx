import { useState, useEffect, useRef } from 'react';
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

// Constellation positions (percentage based for responsiveness)
const constellationPositions = [
  { x: 25, y: 25 },
  { x: 75, y: 20 },
  { x: 20, y: 60 },
  { x: 70, y: 65 },
  { x: 45, y: 42 },
  { x: 30, y: 80 },
  { x: 80, y: 45 },
  { x: 50, y: 75 },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePos({ x: x * 20, y: y * 20 });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

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

  const getProjectPosition = (index) => {
    const pos = constellationPositions[index % constellationPositions.length];
    return pos;
  };

  const isConnected = (projectId) => {
    if (!hoveredProject) return false;
    const hovered = projects.find(p => p.id === hoveredProject);
    return hovered?.connections.includes(projectId) || projectId === hoveredProject;
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'ui-ux': return '#00D4FF';
      case 'web': return '#7B2CBF';
      default: return '#00D4FF';
    }
  };

  return (
    <main className="projects-page">
      <section className="page-header">
        <div className="container">
          <h1>My <span className="gradient-text">Projects</span></h1>
          <p>Explore my constellation of creative work</p>
        </div>
      </section>

      <section className="constellation-section" ref={sectionRef}>
        <div className="constellation-container" ref={containerRef}>
          {/* Background stars */}
          <div className="stars-bg">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="star"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                }}
              />
            ))}
          </div>

          {/* Connection lines SVG */}
          <svg className="constellation-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
            {projects.map((project, index) => {
              const pos = getProjectPosition(index);
              return project.connections.map((connId) => {
                const connIndex = projects.findIndex(p => p.id === connId);
                if (connIndex === -1 || connIndex < index) return null;
                const connPos = getProjectPosition(connIndex);
                const isActive = isConnected(project.id) && isConnected(connId);
                return (
                  <line
                    key={`${project.id}-${connId}`}
                    x1={pos.x}
                    y1={pos.y}
                    x2={connPos.x}
                    y2={connPos.y}
                    className={`constellation-line ${isActive ? 'active' : ''} ${isVisible ? 'visible' : ''}`}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  />
                );
              });
            })}
          </svg>

          {/* Project nodes */}
          <div
            className="constellation-nodes"
            style={{
              transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            }}
          >
            {projects.map((project, index) => {
              const pos = getProjectPosition(index);
              const isHovered = hoveredProject === project.id;
              const connected = isConnected(project.id);
              return (
                <div
                  key={project.id}
                  className={`constellation-node ${isHovered ? 'hovered' : ''} ${connected ? 'connected' : ''} ${isVisible ? 'visible' : ''}`}
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    '--node-color': getCategoryColor(project.category),
                    animationDelay: `${index * 0.15}s`,
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => setActiveProject(project)}
                >
                  <div className="node-glow"></div>
                  <div className="node-core"></div>
                  <div className="node-ring"></div>
                  <div className="node-label">
                    <span className="node-title">{project.title}</span>
                    <span className="node-subtitle">{project.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="constellation-legend">
            <div className="legend-item">
              <span className="legend-dot" style={{ background: '#00D4FF' }}></span>
              <span>UI/UX Design</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot" style={{ background: '#7B2CBF' }}></span>
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
