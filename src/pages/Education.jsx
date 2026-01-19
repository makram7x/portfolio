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

const Education = () => {
  return (
    <main className="education-page">
      <section className="page-header">
        <div className="container">
          <h1>Education & <span className="gradient-text">Skills</span></h1>
          <p>My academic background and technical expertise</p>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section section">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
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
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="skills-section section">
        <div className="container">
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
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
            Software <span className="gradient-text">Proficiency</span>
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
