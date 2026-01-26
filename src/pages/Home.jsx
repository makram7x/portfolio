import { Link } from 'react-router-dom';
import AnimatedText from '../components/AnimatedText';
import { homeSkills, homeTools } from '../content/home';
import './Home.css';

const Home = () => {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">
              <AnimatedText>Habiba </AnimatedText>
              <AnimatedText className="accent-text" delay={0.5}>Salah</AnimatedText>
            </h1>
            <img src="/HS Arabic 2.png" alt="حبيبة صالح" className="hero-arabic" />
            <h2 className="hero-title">Digital Media Specialist</h2>
            <p className="hero-description">
              Passionate about creating impactful digital experiences through
              UI/UX design, social media management, and multimedia production.
              Based in Bahrain, bringing creative visions to life.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">View My Work</Link>
              <Link to="/contact" className="btn btn-outline">Get In Touch</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <div className="hero-image-glow"></div>
              <img src="/profile1.png" alt="Habiba Salah" className="hero-image" />
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
              <p>
                I'm a Digital Media graduate from the University of Bahrain with a
                strong foundation in Mass Communication. My journey in digital media
                has taken me through diverse experiences - from crafting news content
                at Bahrain News Agency to hosting TV segments at Bahrain TV.
              </p>
              <p>
                I've also ventured into entrepreneurship, running my own business
                @bahrain_anime, where I handled everything from branding to customer
                engagement. This blend of creative and business experience gives me
                a unique perspective on digital media projects.
              </p>
              <p>
                Currently, I'm focused on UI/UX design and web development, helping
                clients create meaningful digital experiences that connect with their
                audiences.
              </p>
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
                <div className="skill-icon">
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
                <div className="tool-icon">
                  <tool.Icon size={40} />
                </div>
                <span className="tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="container cta-content">
          <h2>
            <AnimatedText>Let&apos;s Work </AnimatedText>
            <AnimatedText className="accent-text" delay={0.45}>Together</AnimatedText>
          </h2>
          <p>Have a project in mind? I&apos;d love to hear about it.</p>
          <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
