import { Link } from 'react-router-dom';
import AnimatedText from '../components/AnimatedText';
import { homeSkills, homeTools, heroContent, aboutContent, cvContent, ctaContent } from '../content/home';
import './Home.css';

const Home = () => {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <p className="hero-greeting">{heroContent.greeting}</p>
            <h1 className="hero-name">
              <AnimatedText>{heroContent.firstName} </AnimatedText>
              <AnimatedText className="accent-text" delay={0.5}>{heroContent.lastName}</AnimatedText>
            </h1>
            <img src={heroContent.arabicImage} alt="حبيبة صالح" className="hero-arabic" />
            <h2 className="hero-title">{heroContent.title}</h2>
            <p className="hero-description">{heroContent.description}</p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">View My Work</Link>
              <Link to="/contact" className="btn btn-outline">Get In Touch</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <div className="hero-image-glow"></div>
              <img src={heroContent.profileImage} alt={`${heroContent.firstName} ${heroContent.lastName}`} className="hero-image" />
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll Down</span>
          <div className="scroll-indicator"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="about section">
        <div className="container">
          <h2 className="section-title">
            <AnimatedText>About </AnimatedText>
            <AnimatedText className="accent-text" delay={0.25}>Me</AnimatedText>
          </h2>
          <div className="about-content">
            <div className="about-text">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills section">
        <div className="container">
          <h2 className="section-title">
            <AnimatedText>My </AnimatedText>
            <AnimatedText className="accent-text" delay={0.15}>Skills</AnimatedText>
          </h2>
          <div className="skills-grid">
            {homeSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`skill-icon icon-dance-${index}`}>
                  <skill.Icon size={48} />
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>

          <h3 className="tools-title">
              <AnimatedText>Tools I </AnimatedText>
              <AnimatedText className="accent-text" delay={0.35}>Use</AnimatedText>
            </h3>
          <div className="tools-grid">
            {homeTools.map((tool, index) => (
              <div
                key={tool.name}
                className="tool-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`tool-icon tool-dance-${index}`}>
                  <tool.Icon size={40} />
                </div>
                <span className="tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section className="cv-section section">
        <div className="container cv-content">
          <div className="cv-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <h2>
            <AnimatedText>View My </AnimatedText>
            <AnimatedText className="accent-text" delay={0.35}>Resume</AnimatedText>
          </h2>
          <p>Take a closer look at my qualifications, experience, and skills.</p>
          <a
            href={cvContent.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View CV
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="container cta-content">
          <h2>
            <AnimatedText>Let&apos;s Work </AnimatedText>
            <AnimatedText className="accent-text" delay={0.45}>Together</AnimatedText>
          </h2>
          <p>{ctaContent.message}</p>
          <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
