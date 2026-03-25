import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const CardContainer = styled.a`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  text-decoration: none;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: ${({ theme }) => theme.shadows.card};
  height: 100%;
  position: relative;
  animation: ${fadeIn} 0.8s ease-out backwards;
  animation-delay: ${({ $delay }) => $delay * 0.1}s;

  &:hover {
    transform: translateY(-12px);
    background: ${({ theme }) => theme.colors.bgCardHover};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    border-color: ${({ theme }) => theme.colors.borderGold};

    &::after {
      opacity: 1;
    }
  }

  /* Decorative glow on hover */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: ${({ theme }) => theme.radius.lg};
    box-shadow: ${({ theme }) => theme.shadows.glow};
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
  position: relative;

  /* Overlay gradient */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 60%, rgba(13, 13, 13, 0.7));
  }
`;

export const Badge = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.bgDeep};
  font-size: 0.65rem;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 4px;
  z-index: 10;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1);

  ${CardContainer}:hover & {
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  z-index: 1;
`;

export const Category = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 2px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 600;
  line-height: 1.2;
`;

export const Price = styled.span`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  margin-bottom: 12px;
  display: block;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  flex-grow: 1;
`;

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  gap: 12px;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.shopee};
  color: #fff;
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.radius.md};
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadows.shopee};

  svg {
    font-size: 1.2rem;
  }

  ${CardContainer}:hover & {
    background: ${({ theme }) => theme.colors.shopeeHover};
    box-shadow: ${({ theme }) => theme.shadows.shopeeHover};
    transform: translateY(-2px);
  }
`;

export const DeleteButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #ff4d4d;
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: #e60000;
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(255, 77, 77, 0.3);
  }

  svg {
    font-size: 1rem;
  }
`;
