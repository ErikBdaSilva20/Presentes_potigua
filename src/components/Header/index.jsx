import { useNavigate } from 'react-router-dom';
import {
  HeroDivider,
  HeroSection,
  HeroStats,
  HeroSubtitle,
  HeroSup,
  HeroTitle,
  Login,
  Logo,
  LogoBrand,
  LogoSub,
  LogoText,
  NavActions,
  NavBar,
  NavLink,
  NavLinks,
  RingIcon,
  StatItem,
  StatValue,
  TopBar,
  Wrapper,
} from './styles';

/**
 * Componente Header — Versão Loja Online Dark Premium
 * Inclui: barra de anúncio, navbar com logo, hero section com título animado e stats.
 *
 * @param {string} title       - Título principal do hero.
 * @param {string} subtitle    - Subtítulo descritivo.
 */
const Header = ({
  title = 'Lista de Presentes',
  subtitle = 'Escolha um presente com carinho e faça parte dessa história de amor.',
}) => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('admin_token') === 'true';

  return (
    <Wrapper>
      {/* Announcement Bar */}
      <TopBar>
        ✦ Lista de Presentes de Casamento · Clique no presente para ir direto à Loja Online ✦
      </TopBar>

      {/* Navigation Bar */}
      <NavBar>
        <Logo onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <RingIcon>💍</RingIcon>
          <LogoText>
            <LogoBrand>Romeu & Julieta</LogoBrand>
            <LogoSub>Casamento • 2026</LogoSub>
          </LogoText>
        </Logo>

        <NavActions>
          <NavLinks>
            <NavLink>Romeu e Julieta</NavLink>
          </NavLinks>
          <Login onClick={() => navigate(isLoggedIn ? '/admin' : '/login')}>
            {isLoggedIn ? 'Painel Admin' : 'Login'}
          </Login>
        </NavActions>
      </NavBar>

      {/* Hero Section */}
      <HeroSection>
        <HeroSup>✦ Nossa Lista Especial ✦</HeroSup>

        <HeroTitle>
          {title.includes('Casamento') ? (
            <>
              Lista de <em>Presentes</em>
            </>
          ) : (
            title
          )}
        </HeroTitle>

        <HeroDivider>
          <span />
          <em>💍</em>
          <span />
        </HeroDivider>

        <HeroSubtitle>{subtitle}</HeroSubtitle>

        <HeroStats>
          <StatItem>
            <StatValue>Esperamos</StatValue>
          </StatItem>
          <StatItem>
            <StatValue>você</StatValue>
          </StatItem>
          <StatItem>
            <StatValue>Lá</StatValue>
          </StatItem>
        </HeroStats>
      </HeroSection>
    </Wrapper>
  );
};

export default Header;
