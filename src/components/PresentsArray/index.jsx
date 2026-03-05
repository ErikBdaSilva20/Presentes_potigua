import CardProduto from '../CardProduto';
import { EmptyState, GridContainer } from './styles';

/**
 * Componente PresentsArray — Galeria de Itens
 *
 * @param {Array} products - Lista de produtos para renderizar.
 */
const PresentsArray = ({ products = [] }) => {
  if (!products || products.length === 0) {
    return (
      <EmptyState>
        <p>Nenhum presente disponível no momento.</p>
      </EmptyState>
    );
  }

  return (
    <GridContainer>
      {products.map((produto, index) => (
        <CardProduto
          key={produto._id || produto.id || index}
          imagem={produto.image}
          titulo={produto.name}
          descricao={produto.description}
          link={produto.link}
          delay={index}
        />
      ))}
    </GridContainer>
  );
};

export default PresentsArray;
