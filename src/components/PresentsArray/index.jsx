import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import CardProduto from '../CardProduto';
import {
  ArrowButton,
  CarouselContainer,
  ControlsContainer,
  EmptyState,
  GridContainer,
  PageIndicator,
} from './styles';

/**
 * Componente PresentsArray — Galeria de Itens com Carrossel
 *
 * @param {Array} products - Lista de produtos para renderizar.
 * @param {function} onDelete - Função para remover do estado local.
 */
const PresentsArray = ({ products = [], onDelete }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
    if (isRightSwipe && currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (!products || products.length === 0) {
    return (
      <EmptyState>
        <p>Nenhum presente disponível no momento.</p>
      </EmptyState>
    );
  }

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const currentProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <CarouselContainer
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEndHandler}
    >
      <GridContainer>
        {currentProducts.map((produto, index) => (
          <CardProduto
            key={produto._id || produto.id || index}
            id={produto._id}
            imagem={produto.image}
            titulo={produto.name}
            descricao={produto.description}
            valor={produto.price}
            link={produto.link}
            delay={index}
            onDelete={onDelete}
          />
        ))}
      </GridContainer>

      {totalPages > 1 && (
        <ControlsContainer>
          <ArrowButton onClick={handlePrev} disabled={currentPage === 0}>
            <FiChevronLeft size={24} />
          </ArrowButton>

          <PageIndicator>
            {String(currentPage + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
          </PageIndicator>

          <ArrowButton onClick={handleNext} disabled={currentPage === totalPages - 1}>
            <FiChevronRight size={24} />
          </ArrowButton>
        </ControlsContainer>
      )}
    </CarouselContainer>
  );
};

export default PresentsArray;
