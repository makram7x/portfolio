import {
  AdobeIcon,
  FigmaIcon,
  CapCutIcon,
  VsCodeIcon,
  BlenderIcon,
} from '../components/Icons';

// Technical skills with proficiency levels (percentage)
export const technicalSkillsList = [
  { name: 'Web & Mobile UI/UX', level: 90 },
  { name: 'Graphic Design', level: 85 },
  { name: 'Social Media Management', level: 88 },
  { name: 'Video Editing', level: 80 },
  { name: 'Photography', level: 75 },
  { name: 'Animation Production', level: 70 },
  { name: 'Branding', level: 85 },
];

// Software proficiency with specific tools/items
export const softwareSkillsList = [
  { name: 'Adobe Creative Suite', Icon: AdobeIcon, items: ['Photoshop', 'Premiere', 'Illustrator'], animation: 'pulse' },
  { name: 'Figma', Icon: FigmaIcon, items: ['UI Design', 'Prototyping', 'Components'], animation: 'spin' },
  { name: 'CapCut', Icon: CapCutIcon, items: ['Video Editing', 'Effects', 'Transitions'], animation: 'bounce' },
  { name: 'VS Code', Icon: VsCodeIcon, items: ['HTML/CSS', 'JavaScript', 'React'], animation: 'type' },
  { name: 'Blender', Icon: BlenderIcon, items: ['3D Modeling', 'Animation', 'Rendering'], animation: 'rotate3d' },
];

// Professional certificates
export const certificatesList = [
  { name: 'Learn CSS Course', issuer: 'Codecademy', date: 'Oct 2024', file: "/certificates/Habiba_Salah's profile _ Codecademy.pdf", description: 'Comprehensive CSS styling and layouts' },
  { name: 'Learn HTML Course', issuer: 'Codecademy', date: 'Oct 2024', file: "/certificates/Habiba_Salah's profile _ Codecademy_html.pdf", description: 'HTML structure and semantic markup' },
  { name: 'Start Your Career Path Workshop', issuer: 'General Assembly', date: 'Oct 2024', file: '/certificates/general assembly certificate.jpg', description: 'Professional development and career guidance' },
  { name: 'Information Analysis', issuer: 'ARIJ Network', date: 'May 2024', file: '/certificates/ARIJ Network certificfate.jpg', description: 'Data analysis and information verification' },
  { name: 'Adobe Premiere Pro 2.0', issuer: 'Udemy', date: 'Apr 2023', file: '/certificates/udemy certificate.pdf', description: 'Professional video editing techniques' },
  { name: 'Adobe Photoshop CS', issuer: 'Maharat', date: 'Jul 2022', file: '/certificates/Adobe illustrator and Photoshop Certificate.jpg', description: 'Image editing and graphic design' },
];

// Education/Degree information
export const educationInfo = {
  degree: 'Bachelor of Arts in Mass Communication',
  university: 'University of Bahrain (UOB)',
  specialization: 'Digital Media',
  gpa: '3.27',
  graduationDate: 'January 2025',
  degreeFile: '/certificates/bachelor degree.pdf',
};

// Page header content
export const educationPageHeader = {
  title: 'Education & Skills',
  subtitle: 'My academic background and technical expertise',
};
