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

      <CoupleNames>Com amor, Amanda & Marco </CoupleNames>

      <Copyright>
        <span>
          <a
            href="https://www.instagram.com/designer_floral_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            © 2026 Design Floral
          </a>
        </span>
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
