export const theme = {
  colors: {
    // Brand
    primary: '#C9A84C', // Warm antique gold
    primaryLight: '#E8C97A', // Light gold for hover
    primaryDark: '#9A7B2F', // Deep gold
    primaryGlow: 'rgba(201, 168, 76, 0.25)',

    // Backgrounds
    bgDeep: '#0D0D0D', // Near black
    bgDark: '#141414', // Main dark bg
    bgCard: '#1C1C1E', // Card bg
    bgCardHover: '#242426', // Card hover bg
    bgSurface: '#252527', // Elevated surface

    // Header / Footer
    headerBg: '#0A0A0A',
    headerGradient: 'linear-gradient(160deg, #0D0D0D 0%, #1a1a1a 100%)',

    // Text
    textPrimary: '#F5F5F0', // Off-white, easy to read
    textSecondary: '#AAAAAA', // Muted gray
    textMuted: '#666666', // Very muted

    // Accents
    border: 'rgba(255, 255, 255, 0.07)',
    borderGold: 'rgba(201, 168, 76, 0.4)',
    shopee: '#EE4D2D',
    shopeeHover: '#FF6040',
  },
  fonts: {
    heading: "'Cormorant Garamond', serif",
    body: "'Inter', sans-serif",
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '56px',
    xxxl: '96px',
  },
  radius: {
    sm: '8px',
    md: '14px',
    lg: '20px',
    pill: '999px',
  },
  shadows: {
    card: '0 4px 24px rgba(0, 0, 0, 0.5)',
    cardHover: '0 16px 48px rgba(0, 0, 0, 0.7)',
    glow: '0 0 30px rgba(201, 168, 76, 0.3)',
    glowStrong: '0 0 50px rgba(201, 168, 76, 0.5)',
    shopee: '0 4px 20px rgba(238, 77, 45, 0.35)',
    shopeeHover: '0 6px 28px rgba(238, 77, 45, 0.5)',
  },
};
