import {
  EmailIcon,
  PhoneIcon,
  LinkedInIcon,
  BehanceIcon,
  LocationIcon,
  AvailabilityIcon,
} from '../components/Icons';
import AnimatedText from '../components/AnimatedText';
import './Contact.css';

const contactMethods = [
  {
    name: "Email",
    Icon: EmailIcon,
    value: "hbibasalahm@gmail.com",
    href: "mailto:hbibasalahm@gmail.com",
    description: "Drop me an email anytime",
  },
  {
    name: "Phone",
    Icon: PhoneIcon,
    value: "+973 38800575",
    href: "tel:+97338800575",
    description: "Available for calls",
  },
  {
    name: "LinkedIn",
    Icon: LinkedInIcon,
    value: "Habiba Salah",
    href: "https://www.linkedin.com/in/habiba-salah-00718a268/",
    description: "Let's connect professionally",
  },
  {
    name: "Behance",
    Icon: BehanceIcon,
    value: "View My Portfolio",
    href: "https://www.behance.net/habibasalah7",
    description: "See more of my work",
  },
];

const Contact = () => {
  return (
    <main className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1>
            <AnimatedText>Get In </AnimatedText>
            <AnimatedText className="accent-text" delay={0.3}>Touch</AnimatedText>
          </h1>
          <p>Let's discuss your next project or just say hello</p>
        </div>
      </section>

      <section className="contact-section section">
        <div className="container">
          {/* Hero Message */}
          <div className="contact-hero">
            <div className="contact-hero-content">
              <h2>
                <AnimatedText>Let's Create Something </AnimatedText>
                <AnimatedText className="accent-text" delay={0.8}>Amazing</AnimatedText>
                <AnimatedText delay={1.05}> Together</AnimatedText>
              </h2>
              <p>
                I'm always excited to collaborate on new projects, whether it's designing
                a brand identity, creating a stunning UI/UX, or managing your social media presence.
                Feel free to reach out through any of the channels below.
              </p>
            </div>
            <div className="contact-hero-visual">
              <div className="floating-shape shape-1"></div>
              <div className="floating-shape shape-2"></div>
              <div className="floating-shape shape-3"></div>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="contact-grid">
            {contactMethods.map((method, index) => (
              <a
                key={method.name}
                href={method.href}
                className="contact-card"
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="contact-card-icon">
                  <method.Icon size={40} />
                </div>
                <div className="contact-card-content">
                  <h3>{method.name}</h3>
                  <p className="contact-card-value">{method.value}</p>
                  <p className="contact-card-desc">{method.description}</p>
                </div>
                <div className="contact-card-arrow">→</div>
              </a>
            ))}
          </div>

          {/* Location & Availability */}
          <div className="contact-info-section">
            <div className="info-card location">
              <span className="info-icon">
                <LocationIcon size={28} />
              </span>
              <div>
                <h4>Based in</h4>
                <p>Bahrain</p>
              </div>
            </div>
            <div className="info-card availability">
              <span className="info-icon">
                <AvailabilityIcon size={28} />
              </span>
              <div>
                <h4>Availability</h4>
                <p>Open for freelance projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
