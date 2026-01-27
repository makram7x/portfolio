// Behance configuration
export const behanceConfig = {
  username: 'habibasalah7',
  // List of CORS proxies to try (in order of preference)
  corsProxies: [
    'https://corsproxy.io/?',
    'https://api.allorigins.win/raw?url=',
  ],
};

// Featured projects displayed in the constellation section
export const featuredProjects = [
  {
    id: 1,
    title: 'Guide Map',
    subtitle: 'Mobile App Design',
    date: 'May 2024',
    category: 'ui-ux',
    description: 'A user-friendly mobile app that guides travelers to popular destinations in any country, designed as a practical solution to reduce the need for traditional tour guides.',
    details: [
      'Applied UI/UX design principles for intuitive navigation',
      'Created engaging visuals for optimal user experience',
      'Comprehensive destination descriptions with images & reviews',
    ],
    tools: ['Figma', 'Adobe XD'],
  },
  {
    id: 2,
    title: 'Students Pick-Up',
    subtitle: 'Graduation Project',
    date: 'Dec 2024',
    category: 'ui-ux',
    description: 'A mobile and web prototype to streamline school pick-ups through QR code scanning, enhancing security and organization.',
    details: [
      'Designed dual interfaces for parents and staff',
      'Implemented QR code verification system',
      "Focused on children's privacy and protection",
    ],
    tools: ['Figma', 'Adobe Creative Suite'],
  },
  {
    id: 3,
    title: 'Champion Within Us',
    subtitle: 'Website Design',
    date: 'Feb 2025',
    category: 'web',
    description: 'Collaborated with Al Ain University students in UAE to design a website meeting their vision and requirements.',
    details: [
      'Effective client communication',
      'Creative design solutions',
      'Met all project specifications',
    ],
    tools: ['Figma', 'VS Code'],
  },
  {
    id: 4,
    title: 'ICMC Conference',
    subtitle: 'Conference Website',
    date: 'Mar 2025',
    category: 'web',
    description: 'Professional interface for the International Communication & Media Conference with intuitive layout and easy access to details.',
    details: [
      'Enhanced user engagement through UX',
      'Professional, formal aesthetic',
      'Strong visual principles applied',
    ],
    tools: ['Figma', 'Adobe Creative Suite'],
  },
  {
    id: 5,
    title: 'ICMC Test',
    subtitle: 'Conference Website Test',
    date: 'Jan 2026',
    category: 'Mobile app',
    description: 'makram is testing',
    details: [
      'Testing UX',
      'Testing aesthetic',
      'Testing Strong visual principles applied',
      'whatever',
    ],
    tools: ['laptop', 'Testing','whatever'],
  },
];

// Project category colors
export const projectCategoryColors = {
  'ui-ux': '#C17F59',
  'web': '#5C6B5E',
};

// Page header content
export const projectsPageHeader = {
  title: 'My Projects',
  subtitle: 'Explore my constellation of creative work',
};

// Legend items for project categories
export const projectLegend = [
  { label: 'UI/UX Design', color: '#C17F59' },
  { label: 'Web Design', color: '#5C6B5E' },
];
