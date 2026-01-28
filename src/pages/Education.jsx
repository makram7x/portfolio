import { useState } from 'react';
import { GraduationIcon } from '../components/Icons';
import AnimatedText from '../components/AnimatedText';
import { softwareSkillsList, certificatesList, educationInfo } from '../content/education';
import './Education.css';

// Sparkle component for particle effects
const Sparkles = ({ count = 6 }) => {
  return (
    <div className="sparkles-container">
      {[...Array(count)].map((_, i) => (
        <span
          key={i}
          className="sparkle"
          style={{
            '--delay': `${Math.random() * 2}s`,
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--size': `${4 + Math.random() * 6}px`,
            '--duration': `${1.5 + Math.random() * 1}s`,
          }}
        />
      ))}
    </div>
  );
};

const Education = () => {
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [hoveredSoftware, setHoveredSoftware] = useState(null);

  const handleCardFlip = (index) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <main className="education-page">
      <section className="page-header">
        <div className="container">
          <h1>
            <AnimatedText>Education & </AnimatedText>
            <AnimatedText className="accent-text" delay={0.5}>Skills</AnimatedText>
          </h1>
          <p>My academic background and technical expertise</p>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section section">
        <div className="container">
          <h2 className="section-title">
            <AnimatedText className="accent-text">Education</AnimatedText>
          </h2>

          <div className="education-card">
            <div className="education-icon floating">
              <GraduationIcon size={64} />
            </div>
            <div className="education-content">
              <h3>Bachelor of Arts in Mass Communication</h3>
              <h4>University of Bahrain (UOB)</h4>
              <p className="specialization">Specialization: Digital Media</p>
              <div className="education-meta">
                <span className="gpa">GPA: 3.27</span>
                <span className="graduation-date">Graduated: January 2025</span>
              </div>
              <a
                href="/certificates/bachelor degree.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="degree-link"
              >
                <span>View Degree</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="certificates-section section">
        <div className="container">
          <h2 className="section-title">
            <AnimatedText className="accent-text">Certificates</AnimatedText>
          </h2>

          <div className="certificates-grid">
            {certificatesList.map((cert, index) => (
              <div
                key={index}
                className={`certificate-card-3d ${flippedCards.has(index) ? 'flipped' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => handleCardFlip(index)}
              >
                <div className="card-inner">
                  {/* Front Face */}
                  <div className="card-face card-front">
                    <Sparkles count={3} />
                    <div className="certificate-icon">
                      <div className="icon-ring"></div>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="6" />
                        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                    </div>
                    <div className="certificate-content">
                      <h3 className="certificate-name">{cert.name}</h3>
                      <p className="certificate-issuer">{cert.issuer}</p>
                      <span className="certificate-date">{cert.date}</span>
                    </div>
                    <div className="flip-hint">
                      <span>Click to flip</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 1l4 4-4 4" />
                        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                        <path d="M7 23l-4-4 4-4" />
                        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className="card-face card-back">
                    <div className="back-content">
                      <h4>{cert.name}</h4>
                      <p className="back-description">{cert.description}</p>
                      <div className="back-meta">
                        <span className="back-issuer">{cert.issuer}</span>
                        <span className="back-date">{cert.date}</span>
                      </div>
                      <a
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>View Certificate</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    </div>
                    <div className="flip-hint">
                      <span>Click to flip back</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Skills Section */}
      <section className="software-section section">
        <div className="container">
          <h2 className="section-title">
            <AnimatedText>Software </AnimatedText>
            <AnimatedText className="accent-text" delay={0.35}>Proficiency</AnimatedText>
          </h2>

          <div className="software-grid">
            {softwareSkillsList.map((software, index) => (
              <div
                key={software.name}
                className={`software-card ${software.animation}`}
                onMouseEnter={() => setHoveredSoftware(index)}
                onMouseLeave={() => setHoveredSoftware(null)}
              >
                <div className={`software-icon icon-${software.animation}`}>
                  <software.Icon size={48} />
                </div>
                <h3 className="software-name">{software.name}</h3>
                <ul className={`software-items ${hoveredSoftware === index ? 'floating' : ''}`}>
                  {software.items.map((item, i) => (
                    <li
                      key={item}
                      style={{
                        '--float-delay': `${i * 0.1}s`,
                        '--float-x': `${(i - 1) * 15}px`,
                        '--float-y': `${-10 - i * 5}px`,
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Education;
