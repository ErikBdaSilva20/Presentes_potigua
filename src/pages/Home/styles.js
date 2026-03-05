import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgDark};
  overflow-x: hidden;
`;

export const MainContent = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  /* Background decorative elements */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 10%;
    width: 1px;
    height: 100%;
    background: linear-gradient(to bottom, ${({ theme }) => theme.colors.borderGold}, transparent);
    opacity: 0.1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 500px;
    right: -200px;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(201, 168, 76, 0.03) 0%, transparent 70%);
    pointer-events: none;
  }
`;

export const SectionTitle = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: ${({ theme }) => theme.spacing.xxxl} auto 0;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  z-index: 5;

  &::before {
    content: '';
    width: 40px;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
  }

  h2 {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 500;
  }
`;
