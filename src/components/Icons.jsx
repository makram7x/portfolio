// Gradient definitions to be included once in the app
export const GradientDefs = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }}>
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C17F59" />
        <stop offset="100%" stopColor="#5C6B5E" />
      </linearGradient>
      <linearGradient id="iconGradientReverse" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#5C6B5E" />
        <stop offset="100%" stopColor="#C17F59" />
      </linearGradient>
    </defs>
  </svg>
);

// UI/UX Design Icon
export const UiUxIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="40" height="28" rx="3" stroke="url(#iconGradient)" strokeWidth="2.5" fill="none"/>
    <path d="M4 14h40" stroke="url(#iconGradient)" strokeWidth="2"/>
    <circle cx="8" cy="11" r="1.5" fill="#C17F59"/>
    <circle cx="12" cy="11" r="1.5" fill="#5C6B5E"/>
    <circle cx="16" cy="11" r="1.5" fill="url(#iconGradient)"/>
    <rect x="8" y="18" width="14" height="14" rx="2" stroke="url(#iconGradient)" strokeWidth="2" fill="rgba(193,127,89,0.1)"/>
    <rect x="26" y="18" width="14" height="6" rx="1" stroke="url(#iconGradientReverse)" strokeWidth="1.5" fill="rgba(92,107,94,0.1)"/>
    <rect x="26" y="26" width="14" height="6" rx="1" stroke="url(#iconGradientReverse)" strokeWidth="1.5" fill="rgba(92,107,94,0.1)"/>
    <path d="M20 40v4M28 40v4" stroke="url(#iconGradient)" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M16 44h16" stroke="url(#iconGradient)" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

// Graphic Design Icon
export const GraphicDesignIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 40L20 8h8l12 32" stroke="url(#iconGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 32h24" stroke="url(#iconGradient)" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="24" cy="16" r="4" fill="url(#iconGradient)"/>
    <path d="M38 8l4 4-4 4" stroke="#C17F59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 36l-2 2 2 2" stroke="#5C6B5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Social Media Icon
export const SocialMediaIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="32" height="40" rx="4" stroke="url(#iconGradient)" strokeWidth="2.5"/>
    <circle cx="24" cy="38" r="2" fill="url(#iconGradient)"/>
    <rect x="12" y="10" width="24" height="22" rx="2" fill="rgba(193,127,89,0.1)" stroke="url(#iconGradient)" strokeWidth="1.5"/>
    <circle cx="20" cy="18" r="3" stroke="#C17F59" strokeWidth="1.5"/>
    <path d="M26 16l6 4-6 4V16z" fill="#5C6B5E"/>
    <path d="M14 26h8M14 29h12" stroke="url(#iconGradient)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Video Editing Icon
export const VideoEditingIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="10" width="44" height="28" rx="3" stroke="url(#iconGradient)" strokeWidth="2.5"/>
    <path d="M20 18v12l10-6-10-6z" fill="url(#iconGradient)"/>
    <path d="M2 32h44" stroke="url(#iconGradient)" strokeWidth="1.5"/>
    <rect x="6" y="34" width="4" height="2" rx="0.5" fill="#C17F59"/>
    <rect x="12" y="34" width="8" height="2" rx="0.5" fill="#5C6B5E"/>
    <rect x="22" y="34" width="6" height="2" rx="0.5" fill="#C17F59"/>
    <rect x="30" y="34" width="10" height="2" rx="0.5" fill="#5C6B5E"/>
    <circle cx="42" cy="14" r="3" stroke="url(#iconGradient)" strokeWidth="1.5"/>
  </svg>
);

// Photography Icon
export const PhotographyIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="12" width="40" height="28" rx="4" stroke="url(#iconGradient)" strokeWidth="2.5"/>
    <circle cx="24" cy="26" r="8" stroke="url(#iconGradient)" strokeWidth="2.5"/>
    <circle cx="24" cy="26" r="4" fill="url(#iconGradient)"/>
    <path d="M16 12V8h16v4" stroke="url(#iconGradient)" strokeWidth="2.5"/>
    <circle cx="38" cy="18" r="2" fill="#C17F59"/>
    <path d="M8 18h6" stroke="#5C6B5E" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Animation Icon
export const AnimationIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="18" stroke="url(#iconGradient)" strokeWidth="2.5" strokeDasharray="4 2"/>
    <circle cx="24" cy="24" r="12" stroke="url(#iconGradientReverse)" strokeWidth="2"/>
    <circle cx="24" cy="24" r="6" fill="url(#iconGradient)"/>
    <circle cx="24" cy="6" r="3" fill="#C17F59"/>
    <circle cx="42" cy="24" r="3" fill="#5C6B5E"/>
    <circle cx="24" cy="42" r="3" fill="#C17F59"/>
    <circle cx="6" cy="24" r="3" fill="#5C6B5E"/>
  </svg>
);

// Branding Icon
export const BrandingIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4L42 14v20L24 44 6 34V14L24 4z" stroke="url(#iconGradient)" strokeWidth="2.5" fill="rgba(193,127,89,0.05)"/>
    <path d="M24 4v40M6 14l36 20M42 14L6 34" stroke="url(#iconGradient)" strokeWidth="1.5" strokeOpacity="0.5"/>
    <circle cx="24" cy="24" r="8" fill="url(#iconGradient)"/>
    <path d="M20 24l3 3 5-6" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Web Design Icon
export const WebDesignIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" stroke="url(#iconGradient)" strokeWidth="2.5"/>
    <ellipse cx="24" cy="24" rx="8" ry="20" stroke="url(#iconGradient)" strokeWidth="2"/>
    <path d="M4 24h40M6 14h36M6 34h36" stroke="url(#iconGradient)" strokeWidth="1.5"/>
    <circle cx="24" cy="24" r="4" fill="url(#iconGradient)"/>
  </svg>
);

// Briefcase Icon (Professional)
export const BriefcaseIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="10" width="28" height="18" rx="3" stroke="url(#iconGradient)" strokeWidth="2"/>
    <path d="M10 10V7a3 3 0 013-3h6a3 3 0 013 3v3" stroke="url(#iconGradient)" strokeWidth="2"/>
    <path d="M2 16h28" stroke="url(#iconGradient)" strokeWidth="1.5"/>
    <circle cx="16" cy="16" r="2" fill="url(#iconGradient)"/>
  </svg>
);

// Rocket Icon (Entrepreneurial)
export const RocketIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4c-4 4-6 10-6 16h12c0-6-2-12-6-16z" stroke="url(#iconGradient)" strokeWidth="2" fill="rgba(193,127,89,0.1)"/>
    <circle cx="16" cy="14" r="2" fill="url(#iconGradient)"/>
    <path d="M10 20l-4 6h4v-6zM22 20l4 6h-4v-6z" stroke="url(#iconGradient)" strokeWidth="1.5" fill="rgba(92,107,94,0.2)"/>
    <path d="M12 28h8" stroke="url(#iconGradient)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Sparkles Icon (Freelance)
export const SparklesIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" fill="url(#iconGradient)"/>
    <path d="M6 18l1.5 4.5L12 24l-4.5 1.5L6 30l-1.5-4.5L0 24l4.5-1.5L6 18z" fill="#C17F59"/>
    <path d="M26 16l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" fill="#5C6B5E"/>
  </svg>
);

// Email Icon
export const EmailIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="10" width="40" height="28" rx="3" stroke="url(#iconGradient)" strokeWidth="2.5"/>
    <path d="M4 14l20 12 20-12" stroke="url(#iconGradient)" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M4 34l14-10M44 34L30 24" stroke="url(#iconGradient)" strokeWidth="1.5" strokeOpacity="0.5"/>
  </svg>
);

// Phone Icon
export const PhoneIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="4" width="24" height="40" rx="4" stroke="url(#iconGradient)" strokeWidth="2.5"/>
    <circle cx="24" cy="38" r="2" fill="url(#iconGradient)"/>
    <path d="M18 8h12" stroke="url(#iconGradient)" strokeWidth="2" strokeLinecap="round"/>
    <rect x="16" y="12" width="16" height="20" rx="1" fill="rgba(193,127,89,0.1)"/>
  </svg>
);

// LinkedIn Icon
export const LinkedInIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="40" height="40" rx="8" stroke="url(#iconGradient)" strokeWidth="2.5" fill="rgba(193,127,89,0.05)"/>
    <path d="M14 20v14M14 14v.01" stroke="url(#iconGradient)" strokeWidth="3" strokeLinecap="round"/>
    <path d="M22 34v-8c0-2 1-4 4-4s4 2 4 4v8" stroke="url(#iconGradient)" strokeWidth="3" strokeLinecap="round"/>
    <path d="M22 24v-4" stroke="url(#iconGradient)" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

// Behance Icon
export const BehanceIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="40" height="40" rx="8" stroke="url(#iconGradient)" strokeWidth="2.5" fill="rgba(193,127,89,0.05)"/>
    <path d="M10 16h8c2 0 4 1 4 4s-2 4-4 4h-8v-8z" stroke="url(#iconGradient)" strokeWidth="2"/>
    <path d="M10 24h9c2.5 0 5 1.5 5 4.5S21.5 33 19 33h-9v-9z" stroke="url(#iconGradient)" strokeWidth="2" fill="rgba(193,127,89,0.1)"/>
    <path d="M28 18h10M33 14c6 0 7 6 7 8H28c0-4 2-8 5-8z" stroke="url(#iconGradient)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28 26c0 4 3 7 7 7 3 0 5-2 6-4" stroke="url(#iconGradient)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Location Icon
export const LocationIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2C10 2 6 7 6 12c0 8 10 18 10 18s10-10 10-18c0-5-4-10-10-10z" stroke="url(#iconGradient)" strokeWidth="2" fill="rgba(193,127,89,0.1)"/>
    <circle cx="16" cy="12" r="4" fill="url(#iconGradient)"/>
  </svg>
);

// Availability Icon
export const AvailabilityIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="12" stroke="url(#iconGradient)" strokeWidth="2"/>
    <path d="M16 8v8l6 4" stroke="url(#iconGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="16" cy="16" r="2" fill="url(#iconGradient)"/>
  </svg>
);

// Graduation Icon
export const GraduationIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 6L4 16l20 10 20-10L24 6z" stroke="url(#iconGradient)" strokeWidth="2.5" fill="rgba(193,127,89,0.1)"/>
    <path d="M10 20v12c0 4 6 8 14 8s14-4 14-8V20" stroke="url(#iconGradient)" strokeWidth="2.5"/>
    <path d="M44 16v14" stroke="url(#iconGradient)" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="44" cy="32" r="2" fill="url(#iconGradient)"/>
  </svg>
);

// Adobe Icon
export const AdobeIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="40" height="40" rx="4" stroke="url(#iconGradient)" strokeWidth="2.5" fill="rgba(193,127,89,0.05)"/>
    <path d="M12 36V12h10l10 24" stroke="url(#iconGradient)" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M36 12v24H26L16 12" stroke="url(#iconGradient)" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M18 28h12" stroke="url(#iconGradient)" strokeWidth="2"/>
  </svg>
);

// Figma Icon
export const FigmaIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="17" cy="10" r="6" stroke="#C17F59" strokeWidth="2.5"/>
    <circle cx="31" cy="10" r="6" stroke="url(#iconGradient)" strokeWidth="2.5" fill="rgba(92,107,94,0.2)"/>
    <circle cx="17" cy="24" r="6" stroke="#5C6B5E" strokeWidth="2.5"/>
    <circle cx="31" cy="24" r="6" stroke="url(#iconGradient)" strokeWidth="2.5" fill="url(#iconGradient)"/>
    <path d="M17 30a6 6 0 100 12 6 6 0 006-6v-6h-6z" stroke="#C17F59" strokeWidth="2.5"/>
  </svg>
);

// CapCut Icon
export const CapCutIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" stroke="url(#iconGradient)" strokeWidth="2.5"/>
    <path d="M20 16v16l12-8-12-8z" fill="url(#iconGradient)"/>
    <path d="M4 24h8M36 24h8" stroke="url(#iconGradient)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 4v8M24 36v8" stroke="url(#iconGradient)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// VS Code Icon
export const VsCodeIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34 8l8 4v24l-8 4-24-12v-8l24-12z" stroke="url(#iconGradient)" strokeWidth="2.5" fill="rgba(193,127,89,0.1)"/>
    <path d="M34 8v32M10 20l14 4-14 4" stroke="url(#iconGradient)" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M34 14L18 24l16 10" stroke="#5C6B5E" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

// Blender Icon
export const BlenderIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="28" cy="28" rx="14" ry="12" stroke="url(#iconGradient)" strokeWidth="2.5" fill="rgba(193,127,89,0.05)"/>
    <ellipse cx="28" cy="28" rx="6" ry="5" fill="url(#iconGradient)"/>
    <circle cx="28" cy="28" r="2" fill="#0D0D0D"/>
    <path d="M4 24h14" stroke="url(#iconGradient)" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M8 12l10 8" stroke="url(#iconGradient)" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);
