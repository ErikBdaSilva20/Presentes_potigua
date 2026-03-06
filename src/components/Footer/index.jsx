import { Container, Copyright, CoupleNames, HeartIcon, ThankYouText } from './styles';

/**
 * Componente Footer — Luxury Edition
 *
 * @param {string} message - Mensagem final.
 */
const Footer = ({ message = 'Obrigado por celebrar esse momento conosco!' }) => {
  return (
    <Container>
      <HeartIcon>❤️</HeartIcon>

      <ThankYouText>{message}</ThankYouText>

      <CoupleNames>Com amor, Romeu & Julieta</CoupleNames>

      <Copyright>
        <span>© 2026 Design Floral</span>
        <span>
          Desenvolvido por{' '}
          <a href="https://github.com/ErikBdaSilva20" target="_blank" rel="noopener noreferrer">
            Erik Borges da Silva
          </a>
        </span>
      </Copyright>
    </Container>
  );
};

export default Footer;
