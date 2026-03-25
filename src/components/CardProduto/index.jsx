import { FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

import {
  ActionWrapper,
  Badge,
  Button,
  CardContainer,
  Category,
  Content,
  DeleteButton,
  Description,
  ImageContainer,
  Price,
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
 * @param {string} id - ID do produto no MongoDB.
 * @param {function} onDelete - Callback para atualizar a lista após deletar.
 */
const CardProduto = ({ id, imagem, titulo, descricao, link, delay = 0, onDelete, valor }) => {
  const isAdmin = localStorage.getItem('admin_token') === 'true';

  const formatPrice = (val) => {
    if (!val) return null;
    // Se o valor for puramente números, tratamos como centavos.
    // Ex: 2555 -> 25.55
    const numericValue = val.replace(/\D/g, '');
    if (!numericValue) return val;

    const valueInReais = parseFloat(numericValue) / 100;
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valueInReais);
  };

  const handleDelete = async (e) => {
    e.preventDefault(); // Previne o clique no link
    e.stopPropagation();

    if (
      window.confirm(
        `Tem certeza que deseja deletar "${titulo}"? Esta ação removerá a imagem da Cloudinary também.`
      )
    ) {
      try {
        await api.delete(`/api/products/${id}`);
        if (onDelete) onDelete(id);
        alert('Produto removido com sucesso!');
      } catch (err) {
        console.error('Erro ao deletar produto:', err);
        alert('Erro ao deletar produto. Tente novamente.');
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <CardContainer href={link} target="_blank" rel="noopener noreferrer" $delay={delay}>
        <ImageContainer>
          <Badge>Novo</Badge>
          <ProductImage src={imagem} alt={titulo} loading="lazy" />
        </ImageContainer>

        <Content>
          <Category>Presente de Casamento</Category>
          <Title>{titulo}</Title>
          {valor && <Price>{formatPrice(valor)}</Price>}
          <Description>{descricao}</Description>

          <ActionWrapper>
            <Button>Presentear</Button>
          </ActionWrapper>
        </Content>
      </CardContainer>

      {isAdmin && id && (
        <DeleteButton onClick={handleDelete} title="Excluir Produto">
          <FiTrash2 /> Deletar Presente
        </DeleteButton>
      )}
    </div>
  );
};

export default CardProduto;
