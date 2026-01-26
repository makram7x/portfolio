import { AuthenticIcon, QualityIcon, LocalIcon, SupportIcon } from '../components/Icons';

// Shop/brand information
export const shopInfo = {
  brandName: "Bahrain's Anime",
  instagramHandle: '@bahrains_anime',
  instagramUrl: 'https://www.instagram.com/bahrains_anime/',
  logo: '/bahrain anime logo.jpg',
  elfsightAppId: '047e5681-6d34-4259-9997-3f70efd289c9',
};

// Product categories/samples
export const shopProducts = [
  {
    id: 1,
    name: 'Anime T-Shirt',
    category: 'T-Shirts',
    image: '/anime tshirt.jpeg',
  },
  {
    id: 2,
    name: 'Anime Hoodie',
    category: 'Hoodies',
    image: '/anime hoodie.jpeg',
  },
  {
    id: 3,
    name: 'Anime Accessories',
    category: 'Accessories',
    image: '/anime accessories.jpeg',
  },
];

// Shop features/benefits
export const shopFeatures = [
  {
    Icon: AuthenticIcon,
    title: 'Authentic Designs',
    description: 'Curated anime-inspired fashion that lets you express your fandom',
  },
  {
    Icon: QualityIcon,
    title: 'Quality Materials',
    description: 'Premium fabrics that are comfortable and built to last',
  },
  {
    Icon: LocalIcon,
    title: 'Local to Bahrain',
    description: 'Fast local delivery and personalized customer service',
  },
  {
    Icon: SupportIcon,
    title: 'Direct Support',
    description: 'Easy communication through Instagram DMs for orders and inquiries',
  },
];

// About shop content
export const shopAboutContent = {
  paragraphs: [
    `Bahrain's Anime was born from a passion for anime culture and fashion.
    What started as a love for anime has grown into a mission to bring
    high-quality anime-inspired clothing to fellow fans in Bahrain.`,
    `Every piece in our collection is carefully selected to help you express
    your unique style while celebrating the anime characters and series you love.
    From classic designs to trending styles, we've got something for every anime enthusiast.`,
  ],
};

// Hero section content
export const shopHeroContent = {
  description: `Your destination for authentic anime-inspired clothing in Bahrain.
    Express your love for anime through fashion.`,
};

// CTA section content
export const shopCtaContent = {
  message: 'Visit our Instagram shop and find your perfect anime-inspired look today!',
};
