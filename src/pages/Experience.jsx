import { useEffect, useRef, useState, useCallback } from "react";
import AnimatedText from "../components/AnimatedText";
import { experiencesList } from "../content/experience";
import "./Experience.css";

const Experience = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [activeCard, setActiveCard] = useState(-1);
  const [pathLength, setPathLength] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  const totalCards = experiencesList.length;

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate path length
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [isMobile]);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.5;

      // Check which cards should be visible and determine progress
      let highestReached = -1;

      cardsRef.current.forEach((card, index) => {
        if (card) {
          const cardRect = card.getBoundingClientRect();
          const cardTop = cardRect.top;
          const cardCenter = cardTop + cardRect.height / 2;

          if (cardTop < windowHeight * 0.85) {
            setVisibleCards((prev) => new Set([...prev, index]));
          }

          if (cardCenter < triggerPoint) {
            highestReached = Math.max(highestReached, index);
          }
        }
      });

      setActiveCard(highestReached);

      // Calculate scroll progress for the curved path
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const progress = Math.min(
        Math.max((triggerPoint - containerTop) / containerHeight, 0),
        1
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getTypeLabel = (type) => {
    switch (type) {
      case "professional":
        return "Professional";
      case "entrepreneurial":
        return "Entrepreneurial";
      case "freelance":
        return "Freelance";
      default:
        return type;
    }
  };

  // Generate curved path that connects to card positions
  const generateCurvedPath = () => {
    // Path flows from top-right, curves left for card 1, right for card 2, etc.
    return `M 85 0
            C 85 80, 15 60, 15 140
            C 15 220, 85 200, 85 280
            C 85 360, 15 340, 15 420
            C 15 500, 85 480, 85 560
            L 85 600`;
  };

  const curvedPath = generateCurvedPath();

  return (
    <main className="experience-page">
      <section className="page-header">
        <div className="container">
          <h1>
            <AnimatedText>My </AnimatedText>
            <AnimatedText className="accent-text" delay={0.15}>Journey</AnimatedText>
          </h1>
          <p>
            Follow my path through professional growth and creative exploration
          </p>
        </div>
      </section>

      <section className="journey-section" ref={sectionRef}>
        <div className="journey-container" ref={containerRef}>
          {/* Curved Journey Path - Desktop/Tablet */}
          {!isMobile && (
            <svg
              className="journey-curved-path"
              viewBox="0 0 100 600"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="curveGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="50%" stopColor="var(--secondary)" />
                  <stop offset="100%" stopColor="var(--primary)" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background track */}
              <path
                ref={pathRef}
                className="curve-track"
                d={curvedPath}
                fill="none"
                stroke="var(--border)"
                strokeWidth="0.5"
              />

              {/* Animated progress path */}
              <path
                className="curve-progress"
                d={curvedPath}
                fill="none"
                stroke="url(#curveGradient)"
                strokeWidth="0.8"
                strokeLinecap="round"
                style={{
                  strokeDasharray: pathLength || 1000,
                  strokeDashoffset: pathLength
                    ? pathLength - scrollProgress * pathLength
                    : 1000,
                }}
              />

              {/* Glowing dot at current position */}
              {scrollProgress > 0 && (
                <circle
                  className="curve-dot"
                  r="1.5"
                  fill="var(--primary)"
                  filter="url(#glow)"
                  style={{
                    offsetPath: `path("${curvedPath}")`,
                    offsetDistance: `${scrollProgress * 100}%`,
                  }}
                />
              )}
            </svg>
          )}

          {/* Simple Timeline - Mobile */}
          {isMobile && (
            <div className="timeline-mobile">
              <div className="timeline-track" />
              <div
                className="timeline-progress"
                style={{ height: `${scrollProgress * 100}%` }}
              />
              {scrollProgress > 0 && (
                <div
                  className="timeline-dot"
                  style={{ top: `${scrollProgress * 100}%` }}
                />
              )}
            </div>
          )}

          {/* Experience Cards */}
          <div className="journey-cards">
            {experiencesList.map((exp, index) => (
              <div
                key={exp.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`journey-card ${index % 2 === 0 ? "left" : "right"} ${visibleCards.has(index) ? "visible" : ""} ${activeCard >= index ? "reached" : ""}`}
              >
                {/* Connector */}
                <div className="card-connector">
                  <div className="connector-line" />
                  <div className={`connector-node ${activeCard >= index ? "active" : ""}`}>
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="connector-image"
                    />
                  </div>
                </div>

                <div className="journey-card-content">
                  <div className="card-header">
                    <span className={`journey-card-type ${exp.type}`}>
                      {getTypeLabel(exp.type)}
                    </span>
                    <span className="journey-card-period">{exp.period}</span>
                  </div>
                  <h3 className="journey-card-title">{exp.title}</h3>
                  <h4 className="journey-card-company">{exp.company}</h4>
                  <p className="journey-card-org">{exp.organization}</p>
                  <ul className="journey-card-list">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;
