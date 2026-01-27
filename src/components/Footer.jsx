import { Link } from "react-router-dom";
import { EmailIcon, LinkedInIcon, BehanceIcon } from "./Icons";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img
              src="/HS LOGO 3.png"
              alt="HS Logo"
              className="footer-logo-img"
            />
          </Link>
          <p>
            Digital Media Specialist creating impactful digital experiences.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/education">Education</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="mailto:hbibasalahm@gmail.com" aria-label="Email">
              <EmailIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/habiba-salah-00718a268/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={24} />
            </a>
            <a
              href="https://www.behance.net/habibasalah7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
            >
              <BehanceIcon size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Habiba Salah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
