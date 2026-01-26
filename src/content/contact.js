import {
  EmailIcon,
  PhoneIcon,
  LinkedInIcon,
  BehanceIcon,
} from '../components/Icons';

// Contact methods/channels
export const contactMethods = [
  {
    name: 'Email',
    Icon: EmailIcon,
    value: 'hbibasalahm@gmail.com',
    href: 'mailto:hbibasalahm@gmail.com',
    description: 'Drop me an email anytime',
  },
  {
    name: 'Phone',
    Icon: PhoneIcon,
    value: '+973 38800575',
    href: 'tel:+97338800575',
    description: 'Available for calls',
  },
  {
    name: 'LinkedIn',
    Icon: LinkedInIcon,
    value: 'Habiba Salah',
    href: 'https://www.linkedin.com/in/habiba-salah-00718a268/',
    description: "Let's connect professionally",
  },
  {
    name: 'Behance',
    Icon: BehanceIcon,
    value: 'View My Portfolio',
    href: 'https://www.behance.net/habibasalah7',
    description: 'See more of my work',
  },
];

// Location and availability info
export const locationInfo = {
  location: 'Bahrain',
  availability: 'Open for freelance projects',
};

// Page header content
export const contactPageHeader = {
  title: 'Get In Touch',
  subtitle: "Let's discuss your next project or just say hello",
};

// Hero section content
export const contactHeroContent = {
  message: `I'm always excited to collaborate on new projects, whether it's designing
    a brand identity, creating a stunning UI/UX, or managing your social media presence.
    Feel free to reach out through any of the channels below.`,
};
