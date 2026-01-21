import { useEffect, useRef, useState } from "react";
import { BriefcaseIcon, RocketIcon, SparklesIcon } from "../components/Icons";
import AnimatedText from "../components/AnimatedText";
import "./Experience.css";

const experiences = [
  {
    id: 1,
    title: "Intern",
    company: "Bahrain News Agency (BNA)",
    organization: "Ministry of Information",
    period: "Sep - Nov 2024",
    type: "professional",
    Icon: BriefcaseIcon,
    logo: "/BNA logo.png",
    responsibilities: [
      "Utilized Adobe Photoshop to edit and enhance images for news covers featured on social media",
      "Managed social media content by crafting engaging posts to effectively communicate BNA news updates",
      "Published news articles on BNA's official website, ensuring accuracy and timeliness",
      "Demonstrated strong adaptability and fast decision-making skills in a fast-paced media environment",
    ],
  },
  {
    id: 2,
    title: "Intern",
    company: "Bahrain TV",
    organization: "Ministry of Information",
    period: "Dec 2024",
    type: "professional",
    Icon: BriefcaseIcon,
    logo: "/bahrain tv logo.jpg",
    responsibilities: [
      "Conducted interviews and hosted guests for various television segments",
      "Covered numerous events by documenting key moments through photography and videography",
      "Edited media content using Adobe Premiere and CapCut to produce high-quality visual materials",
      "Collaborated with production teams to ensure seamless content creation and timely delivery",
    ],
  },
  {
    id: 3,
    title: "Marketing Specialist",
    company: "Octo fusion",
    organization: "Private Company",
    period: "Nov 2022 - Present",
    type: "Professional",
    Icon: BriefcaseIcon,
    logo: "/octo logo.jpg",
    responsibilities: [
      "Successfully launched and managed a personal business, overseeing all aspects of branding and marketing",
      "Designed visually appealing Instagram posts to effectively promote products and services",
      "Managed customer inquiries and provided personalized support",
      "Ensured customer satisfaction through clear communication and efficient order fulfillment",
    ],
  },
  {
    id: 4,
    title: "Marketing Specialist",
    company: "Valour Apparel",
    organization: "Private Company",
    period: "Nov 2022 - Present",
    type: "Professional",
    Icon: BriefcaseIcon,
    logo: "/valour logo.jpg",
    responsibilities: [
      "Successfully launched and managed a personal business, overseeing all aspects of branding and marketing",
      "Designed visually appealing Instagram posts to effectively promote products and services",
      "Managed customer inquiries and provided personalized support",
      "Ensured customer satisfaction through clear communication and efficient order fulfillment",
    ],
  },
];

const Experience = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [reachedCards, setReachedCards] = useState(new Set());
  const [pathLength, setPathLength] = useState(0);
  const [currentSegment, setCurrentSegment] = useState(-1);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const cardsContainerRef = useRef(null);
  const pathRef = useRef(null);
  const previousSegment = useRef(-1);

  const totalCards = experiences.length;

  // Calculate actual path length on mount
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  // Sync reached cards with line animation
  useEffect(() => {
    if (currentSegment >= 0) {
      // Highlight the current card after line animation completes
      const timeout = setTimeout(() => {
        setReachedCards((prev) => {
          const newSet = new Set(prev);
          // Add all cards up to and including current segment
          for (let i = 0; i <= currentSegment; i++) {
            newSet.add(i);
          }
          return newSet;
        });
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentSegment]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !cardsContainerRef.current) return;

      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.5;

      // Check which cards should be visible and determine current segment
      let highestReached = -1;

      cardsRef.current.forEach((card, index) => {
        if (card) {
          const cardRect = card.getBoundingClientRect();
          const cardTop = cardRect.top;
          const cardCenter = cardTop + cardRect.height / 2;

          // Card becomes visible when entering viewport
          if (cardTop < windowHeight * 0.85) {
            setVisibleCards((prev) => new Set([...prev, index]));
          }

          // Determine which segment the line should be at based on card center
          if (cardCenter < triggerPoint) {
            highestReached = Math.max(highestReached, index);
          }
        }
      });

      setCurrentSegment(highestReached);
    };

    window.addEventListener("scroll", handleScroll);
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
        <div className="journey-container">
          {/* Curved Journey Path */}
          <svg
            className="journey-curved-path"
            viewBox="0 -50 900 1100"
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
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Starting point dot */}
            <circle
              className={`start-dot ${currentSegment >= 0 ? "active" : ""}`}
              cx="900"
              cy="-50"
              r="6"
              fill="var(--border)"
            />

            {/* Background track */}
            <path
              ref={pathRef}
              className="curve-track"
              d="M 900 -50
                 C 900 100, 100 50, 100 200
                 C 100 350, 800 300, 800 450
                 C 800 600, 100 550, 100 700
                 C 100 850, 800 800, 800 950
                 L 800 1050"
              fill="none"
              stroke="var(--border)"
              strokeWidth="2"
            />

            {/* Animated progress path */}
            <path
              className="curve-progress"
              d="M 900 -50
                 C 900 100, 100 50, 100 200
                 C 100 350, 800 300, 800 450
                 C 800 600, 100 550, 100 700
                 C 100 850, 800 800, 800 950
                 L 800 1050"
              fill="none"
              stroke="url(#curveGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              style={{
                strokeDasharray: pathLength || 3000,
                strokeDashoffset:
                  currentSegment < 0
                    ? pathLength || 3000
                    : (pathLength || 3000) -
                      ((currentSegment + 1) / totalCards) *
                        (pathLength || 3000),
              }}
            />

            {/* Glowing dot at current position - only show when journey started */}
            {currentSegment >= 0 && (
              <circle
                className="curve-dot"
                r="5"
                fill="var(--primary)"
                filter="url(#glow)"
                style={{
                  offsetPath: `path("M 900 -50 C 900 100, 100 50, 100 200 C 100 350, 800 300, 800 450 C 800 600, 100 550, 100 700 C 100 850, 800 800, 800 950 L 800 1050")`,
                  offsetDistance: `${((currentSegment + 1) / totalCards) * 100}%`,
                }}
              />
            )}
          </svg>

          {/* Experience Cards */}
          <div className="journey-cards" ref={cardsContainerRef}>
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`journey-card ${index % 2 === 0 ? "right" : "left"} ${exp.type} ${visibleCards.has(index) ? "visible" : ""} ${reachedCards.has(index) ? "reached" : ""}`}
              >
                <div className="journey-card-connector">
                  <div className="connector-dot">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="connector-image"
                    />
                  </div>
                </div>
                <div className="journey-card-content">
                  <span className={`journey-card-type ${exp.type}`}>
                    {getTypeLabel(exp.type)}
                  </span>
                  <span className="journey-card-period">{exp.period}</span>
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
