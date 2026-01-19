import { useEffect, useRef, useState } from 'react';
import { BriefcaseIcon, RocketIcon, SparklesIcon } from '../components/Icons';
import './Experience.css';

const experiences = [
  {
    id: 1,
    title: 'Intern',
    company: 'Bahrain News Agency (BNA)',
    organization: 'Ministry of Information',
    period: 'Sep - Nov 2024',
    type: 'professional',
    Icon: BriefcaseIcon,
    responsibilities: [
      'Utilized Adobe Photoshop to edit and enhance images for news covers featured on social media',
      'Managed social media content by crafting engaging posts to effectively communicate BNA news updates',
      'Published news articles on BNA\'s official website, ensuring accuracy and timeliness',
      'Demonstrated strong adaptability and fast decision-making skills in a fast-paced media environment',
    ],
  },
  {
    id: 2,
    title: 'Intern',
    company: 'Bahrain TV',
    organization: 'Ministry of Information',
    period: 'Dec 2024',
    type: 'professional',
    Icon: BriefcaseIcon,
    responsibilities: [
      'Conducted interviews and hosted guests for various television segments',
      'Covered numerous events by documenting key moments through photography and videography',
      'Edited media content using Adobe Premiere and CapCut to produce high-quality visual materials',
      'Collaborated with production teams to ensure seamless content creation and timely delivery',
    ],
  },
  {
    id: 3,
    title: 'Founder & Manager',
    company: '@bahrain_anime',
    organization: 'Personal Business',
    period: 'Nov 2022 - Present',
    type: 'entrepreneurial',
    Icon: RocketIcon,
    responsibilities: [
      'Successfully launched and managed a personal business, overseeing all aspects of branding and marketing',
      'Designed visually appealing Instagram posts to effectively promote products and services',
      'Managed customer inquiries and provided personalized support',
      'Ensured customer satisfaction through clear communication and efficient order fulfillment',
    ],
  },
  {
    id: 4,
    title: 'Web Designer',
    company: 'Champion Within Us',
    organization: 'Al Ain University, UAE',
    period: 'Feb 2025',
    type: 'freelance',
    Icon: SparklesIcon,
    responsibilities: [
      'Collaborated with students from Al Ain University in UAE to design a website',
      'Ensured the design met the vision and project requirements',
      'Delivered creative design solutions through effective communication',
    ],
  },
  {
    id: 5,
    title: 'UI/UX Designer',
    company: 'ICMC Conference Website',
    organization: 'International Communication & Media Conference',
    period: 'Mar 2025',
    type: 'freelance',
    Icon: SparklesIcon,
    responsibilities: [
      'Designed a professional interface creating an intuitive layout to enhance user engagement',
      'Provided easy access to conference details through thoughtful UX',
      'Applied strong visual principles to ensure a professional, formal aesthetic',
    ],
  },
];

const Experience = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the section
      const scrolled = windowHeight - sectionTop;
      const totalScrollable = sectionHeight + windowHeight;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      setScrollProgress(progress);

      // Check which cards should be visible
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.top + cardRect.height / 2;
          if (cardCenter < windowHeight * 0.85) {
            setVisibleCards(prev => new Set([...prev, index]));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTypeLabel = (type) => {
    switch (type) {
      case 'professional': return 'Professional';
      case 'entrepreneurial': return 'Entrepreneurial';
      case 'freelance': return 'Freelance';
      default: return type;
    }
  };

  return (
    <main className="experience-page">
      <section className="page-header">
        <div className="container">
          <h1>My <span className="gradient-text">Journey</span></h1>
          <p>Follow my path through professional growth and creative exploration</p>
        </div>
      </section>

      <section className="journey-section" ref={sectionRef}>
        <div className="journey-container">
          {/* SVG Path */}
          <svg
            className="journey-path-svg"
            viewBox="0 0 1200 2400"
            preserveAspectRatio="xMidYMin slice"
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="50%" stopColor="#7B2CBF" />
                <stop offset="100%" stopColor="#00D4FF" />
              </linearGradient>
            </defs>
            {/* Background path (track) */}
            <path
              className="journey-path-track"
              d="M 900 0
                 Q 900 150, 600 200
                 Q 200 260, 200 400
                 Q 200 540, 600 600
                 Q 1000 660, 1000 800
                 Q 1000 940, 600 1000
                 Q 200 1060, 200 1200
                 Q 200 1340, 600 1400
                 Q 1000 1460, 1000 1600
                 Q 1000 1740, 600 1800
                 Q 200 1860, 200 2000
                 Q 200 2140, 600 2200
                 Q 1000 2260, 1000 2400"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="4"
            />
            {/* Animated path (progress) */}
            <path
              className="journey-path-progress"
              d="M 900 0
                 Q 900 150, 600 200
                 Q 200 260, 200 400
                 Q 200 540, 600 600
                 Q 1000 660, 1000 800
                 Q 1000 940, 600 1000
                 Q 200 1060, 200 1200
                 Q 200 1340, 600 1400
                 Q 1000 1460, 1000 1600
                 Q 1000 1740, 600 1800
                 Q 200 1860, 200 2000
                 Q 200 2140, 600 2200
                 Q 1000 2260, 1000 2400"
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                strokeDasharray: '6000',
                strokeDashoffset: `${6000 - (scrollProgress * 6000)}`,
              }}
            />
            {/* Glowing dot at current position */}
            <circle
              className="journey-dot"
              r="8"
              fill="#00D4FF"
              filter="url(#glow)"
              style={{
                offsetPath: `path("M 900 0 Q 900 150, 600 200 Q 200 260, 200 400 Q 200 540, 600 600 Q 1000 660, 1000 800 Q 1000 940, 600 1000 Q 200 1060, 200 1200 Q 200 1340, 600 1400 Q 1000 1460, 1000 1600 Q 1000 1740, 600 1800 Q 200 1860, 200 2000 Q 200 2140, 600 2200 Q 1000 2260, 1000 2400")`,
                offsetDistance: `${scrollProgress * 100}%`,
              }}
            />
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>

          {/* Experience Cards */}
          <div className="journey-cards">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                ref={el => cardsRef.current[index] = el}
                className={`journey-card ${index % 2 === 0 ? 'left' : 'right'} ${exp.type} ${visibleCards.has(index) ? 'visible' : ''}`}
              >
                <div className="journey-card-connector">
                  <div className="connector-dot">
                    <exp.Icon size={20} />
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
