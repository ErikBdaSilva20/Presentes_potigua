import styled, { keyframes } from 'styled-components';

// ── Animations ────────────────────────────────────────────────────────────────
const fadeSlideDown = keyframes`
  from { opacity: 0; transform: translateY(-16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.6; }
`;

const ringPop = keyframes`
  0%   { transform: rotate(-15deg) scale(0.8); opacity: 0; }
  60%  { transform: rotate(10deg) scale(1.1); }
  100% { transform: rotate(0deg) scale(1); opacity: 1; }
`;

// ── Outer wrapper ─────────────────────────────────────────────────────────────
export const Wrapper = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.headerBg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGold};
  position: sticky;
  top: 0;
  z-index: 200;
`;

// ── Top bar  ──────────────────────────────────────────────────────────────────
export const TopBar = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  padding: 7px ${({ theme }) => theme.spacing.md};
  text-align: center;
  font-size: 0.78rem;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.bgDeep};
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

// ── Nav bar ───────────────────────────────────────────────────────────────────
export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1240px;
  margin: 0 auto;
  padding: 16px ${({ theme }) => theme.spacing.md};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  animation: ${fadeSlideDown} 0.5s ease-out;
`;

export const RingIcon = styled.span`
  display: inline-flex;
  font-size: 1.5rem;
  animation: ${ringPop} 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s backwards;
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoBrand = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.45rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1;
  letter-spacing: 0.5px;
`;

export const LogoSub = styled.span`
  font-size: 0.68rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-top: 2px;
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavLink = styled.li`
  font-size: 0.82rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: default;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavBadge = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.bgDeep};
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.radius.pill};
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-left: 6px;
  animation: ${pulse} 2.5s ease-in-out infinite;
`;

// ── Hero Section ──────────────────────────────────────────────────────────────
export const HeroSection = styled.div`
  position: relative;
  width: 100%;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md};
  overflow: hidden;
  background:
    radial-gradient(ellipse 80% 60% at 50% -20%, rgba(201, 168, 76, 0.18) 0%, transparent 70%),
    ${({ theme }) => theme.colors.headerGradient};

  /* Decorative bottom border */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      ${({ theme }) => theme.colors.primary},
      transparent
    );
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 420px;
  }
`;

export const HeroSup = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  animation: ${fadeSlideDown} 0.5s ease-out;
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.4rem, 6vw, 4.5rem);
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.5px;
  line-height: 1.1;
  animation: ${fadeSlideDown} 0.6s ease-out 0.1s backwards;

  em {
    font-style: italic;
    color: ${({ theme }) => theme.colors.primary};
    /* Gold shimmer on the italic name */
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.primaryLight},
      ${({ theme }) => theme.colors.primary}
    );
    background-size: 800px 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${shimmer} 4s linear infinite;
  }
`;

export const HeroDivider = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.lg} 0;
  animation: ${fadeSlideDown} 0.7s ease-out 0.2s backwards;

  span {
    width: 60px;
    height: 1px;
    background: linear-gradient(to right, transparent, ${({ theme }) => theme.colors.borderGold});
  }
  span:last-child {
    background: linear-gradient(to left, transparent, ${({ theme }) => theme.colors.borderGold});
  }
  em {
    font-size: 1.3rem;
    font-style: normal;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  max-width: 520px;
  line-height: 1.7;
  animation: ${fadeSlideDown} 0.8s ease-out 0.3s backwards;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.1rem;
  }
`;

export const HeroStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xxl};
  animation: ${fadeSlideDown} 0.9s ease-out 0.4s backwards;
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const StatValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1;
`;

export const StatLabel = styled.span`
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Login = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.bgDeep};
  font-size: 0.75rem;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.radius.sm};
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(201, 168, 76, 0.2);

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(201, 168, 76, 0.4);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 6px 12px;
    font-size: 0.65rem;
  }
`;
