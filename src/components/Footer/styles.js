import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.bgDeep};
  border-top: 1px solid ${({ theme }) => theme.colors.borderGold};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxl};
  margin-top: auto;
  position: relative;
  overflow: hidden;

  /* Ambient light at the bottom */
  &::after {
    content: '';
    position: absolute;
    bottom: -100px;
    width: 600px;
    height: 300px;
    background: radial-gradient(circle, rgba(201, 168, 76, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

export const HeartIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  filter: drop-shadow(0 0 10px rgba(201, 168, 76, 0.5));
  margin-bottom: 8px;
`;

export const ThankYouText = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
  max-width: 600px;
  line-height: 1.1;
  letter-spacing: -0.5px;
`;

export const CoupleNames = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 1px;
`;

export const Copyright = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
  max-width: 1240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s ease;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};

    padding-bottom: 2px;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryLight};
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 24px;
`;
