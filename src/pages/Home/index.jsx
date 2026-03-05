import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import PresentsArray from '../../components/PresentsArray';
import api from '../../services/api';
import { products as staticProducts } from '../../utils/products';
import { LayoutWrapper, MainContent, SectionTitle } from './styles';

/**
 * Página Home — Versão com Integração Backend (MongoDB)
 */
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        // Se houver produtos no banco, usa eles. Se não, mostra os estáticos como exemplo inicial.
        if (response.data && response.data.length > 0) {
          setProducts(response.data);
        } else {
          setProducts(staticProducts);
        }
      } catch (err) {
        console.error('API Error, falling back to static data:', err);
        setProducts(staticProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <LayoutWrapper>
      <Header
        title="Nossa Lista de Presentes"
        subtitle="Sua presença é o nosso maior presente, mas se desejar nos presentear, escolhemos alguns itens com carinho."
        totalItems={products.length}
      />

      <MainContent>
        <SectionTitle>
          <p>Galeria de Desejos</p>
          <h2>Sugestões de Presentes</h2>
        </SectionTitle>

        {loading ? (
          <p style={{ textAlign: 'center', padding: '100px', color: '#C9A84C' }}>
            Carregando presentes especiais...
          </p>
        ) : (
          <PresentsArray products={products} />
        )}
      </MainContent>

      <Footer message="Cada presente reflete um pouco do nosso futuro lar. Obrigado por fazer parte disso!" />
    </LayoutWrapper>
  );
};

export default Home;
