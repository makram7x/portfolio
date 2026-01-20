import {
  GraduationIcon,
  AdobeIcon,
  FigmaIcon,
  CapCutIcon,
  VsCodeIcon,
  BlenderIcon,
} from '../components/Icons';
import './Education.css';

const technicalSkills = [
  { name: 'Web & Mobile UI/UX', level: 90 },
  { name: 'Graphic Design', level: 85 },
  { name: 'Social Media Management', level: 88 },
  { name: 'Video Editing', level: 80 },
  { name: 'Photography', level: 75 },
  { name: 'Animation Production', level: 70 },
  { name: 'Branding', level: 85 },
];

const softwareSkills = [
  { name: 'Adobe Creative Suite', Icon: AdobeIcon, items: ['Photoshop', 'Premiere', 'Illustrator'] },
  { name: 'Figma', Icon: FigmaIcon, items: ['UI Design', 'Prototyping', 'Components'] },
  { name: 'CapCut', Icon: CapCutIcon, items: ['Video Editing', 'Effects', 'Transitions'] },
  { name: 'VS Code', Icon: VsCodeIcon, items: ['HTML/CSS', 'JavaScript', 'React'] },
  { name: 'Blender', Icon: BlenderIcon, items: ['3D Modeling', 'Animation', 'Rendering'] },
];

const certificates = [
  { name: 'Learn CSS Course', issuer: 'Codecademy', date: 'Oct 2024', file: '/certificates/Habiba_Salah\'s profile _ Codecademy.pdf', noGlow: true },
  { name: 'Learn HTML Course', issuer: 'Codecademy', date: 'Oct 2024', file: '/certificates/Habiba_Salah\'s profile _ Codecademy_html.pdf', noGlow: true },
  { name: 'Start Your Career Path Workshop', issuer: 'General Assembly', date: 'Oct 2024', file: '/certificates/general assembly certificate.jpg' },
  { name: 'Information Analysis', issuer: 'ARIJ Network', date: 'May 2024', file: '/certificates/ARIJ Network certificfate.jpg' },
  { name: 'Adobe Premiere Pro 2.0', issuer: 'Udemy', date: 'Apr 2023', file: '/certificates/udemy certificate.pdf' },
  { name: 'Adobe Photoshop CS', issuer: 'Maharat', date: 'Jul 2022', file: '/certificates/Adobe illustrator and Photoshop Certificate.jpg' },
];

const Education = () => {
  return (
    <main className="education-page">
      <section className="page-header">
        <div className="container">
          <h1>Education & <span className="accent-text">Skills</span></h1>
          <p>My academic background and technical expertise</p>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section section">
        <div className="container">
          <h2 className="section-title">
            <span className="accent-text">Education</span>
          </h2>

          <div className="education-card">
            <div className="education-icon">
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
            <span className="accent-text">Certificates</span>
          </h2>

          <div className="certificates-grid">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`certificate-card${cert.noGlow ? ' no-glow' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {!cert.noGlow && <div className="certificate-glow"></div>}
                <div className="certificate-inner">
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
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    <span>View</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="skills-section section">
        <div className="container">
          <h2 className="section-title">
            Technical <span className="accent-text">Skills</span>
          </h2>

          <div className="skills-bars">
            {technicalSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-bar-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-bar-header">
                  <span className="skill-bar-name">{skill.name}</span>
                  <span className="skill-bar-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
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
            Software <span className="accent-text">Proficiency</span>
          </h2>

          <div className="software-grid">
            {softwareSkills.map((software) => (
              <div key={software.name} className="software-card">
                <div className="software-icon">
                  <software.Icon size={48} />
                </div>
                <h3 className="software-name">{software.name}</h3>
                <ul className="software-items">
                  {software.items.map((item) => (
                    <li key={item}>{item}</li>
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
