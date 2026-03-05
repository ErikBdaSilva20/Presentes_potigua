import { Si1Dot1Dot1Dot1 } from 'react-icons/si';

import {
  ActionWrapper,
  Badge,
  Button,
  CardContainer,
  Category,
  Content,
  Description,
  ImageContainer,
  ProductImage,
  Title,
} from './styles.js';

/**
 * Componente CardProduto — Estilo Loja de Luxo
 *
 * @param {string} imagem - URL da imagem.
 * @param {string} titulo - Nome do produto.
 * @param {string} descricao - Descrição detalhada.
 * @param {string} link - Link Shopee.
 * @param {number} delay - Index para animação escalonada.
 */
const CardProduto = ({ imagem, titulo, descricao, link, delay = 0 }) => {
  return (
    <CardContainer href={link} target="_blank" rel="noopener noreferrer" $delay={delay}>
      <ImageContainer>
        <Badge>Novo</Badge>
        <ProductImage src={imagem} alt={titulo} loading="lazy" />
      </ImageContainer>

      <Content>
        <Category>Presente de Casamento</Category>
        <Title>{titulo}</Title>
        <Description>{descricao}</Description>

        <ActionWrapper>
          <Si1Dot1Dot1Dot1 />
          <Button>Presentear</Button>
        </ActionWrapper>
      </Content>
    </CardContainer>
  );
};

export default CardProduto;
