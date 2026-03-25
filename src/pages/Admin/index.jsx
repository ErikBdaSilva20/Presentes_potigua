import { useEffect, useState } from 'react';
import { FiHome, FiImage, FiLink, FiLogOut, FiPackage, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import api from '../../services/api';

const Admin = () => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('link', link);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('image', image);

    try {
      await api.post('/api/products', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSuccess(true);
      setName('');
      setLink('');
      setPrice('');
      setDescription('');
      setImage(null);
      // Reset file input manually if needed
      document.getElementById('file-upload').value = '';
    } catch (err) {
      console.error('Error adding product:', err);
      alert('Erro ao adicionar produto. Verifique sua conexão e o backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <SideBar>
        <SidebarTitle>Painel Admin</SidebarTitle>
        <NavGroup>
          <HomeBtn onClick={() => navigate('/')}>
            <FiHome /> Ver Loja
          </HomeBtn>
          <LogoutBtn onClick={handleLogout}>
            <FiLogOut /> Sair
          </LogoutBtn>
        </NavGroup>
      </SideBar>

      <Content>
        <Header>
          <h1>Adicionar Novo Presente</h1>
          <p>Preencha os dados abaixo para incluir um item na lista principal</p>
        </Header>

        {success && <SuccessCard>Produto adicionado com sucesso à galeria!</SuccessCard>}

        <FormCard onSubmit={handleSubmit}>
          <FormGrid>
            <InputGroup>
              <Label>
                <FiPackage /> Nome do Produto
              </Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Jogo de Copos de Cristal"
                required
              />
            </InputGroup>

            <InputGroup>
              <Label>
                <FiLink /> Link da Loja (Shopee/Outros)
              </Label>
              <Input
                type="url"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="https://shopee.com.br/..."
                required
              />
            </InputGroup>

            <InputGroup style={{ gridColumn: '1 / -1' }}>
              <Label>Valor do Produto (Opcional)</Label>
              <Input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Ex: 69,99"
              />
            </InputGroup>

            <InputGroup style={{ gridColumn: '1 / -1' }}>
              <Label>Descrição Curta</Label>
              <TextArea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Uma breve descrição sobre o item..."
                rows="3"
              />
            </InputGroup>

            <InputGroup style={{ gridColumn: '1 / -1' }}>
              <Label>
                <FiImage /> Imagem do Produto
              </Label>
              <FileInputWrapper>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  required
                />
                <p>{image ? image.name : 'Clique para selecionar uma imagem...'}</p>
              </FileInputWrapper>
            </InputGroup>
          </FormGrid>

          <SubmitBtn type="submit" disabled={loading}>
            {loading ? (
              'Enviando ao Cloudinary...'
            ) : (
              <>
                <FiPlus /> Adicionar à Home
              </>
            )}
          </SubmitBtn>
        </FormCard>
      </Content>
    </Container>
  );
};

export default Admin;

// Styles
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bgDark};
  color: white;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const SideBar = styled.aside`
  width: 280px;
  background: ${({ theme }) => theme.colors.bgDeep};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  padding: 40px 24px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    padding: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const NavGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    width: auto;
  }
`;

const HomeBtn = styled.button`
  background: rgba(201, 168, 76, 0.1);
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 12px;
  border-radius: 8px;
  transition: all 0.2s;
  border: 1px solid ${({ theme }) => theme.colors.borderGold};

  &:hover {
    background: rgba(201, 168, 76, 0.2);
  }
`;

const SidebarTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 0;
  }
`;

const LogoutBtn = styled.button`
  background: transparent;
  color: #ff4d4d;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 12px;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 77, 77, 0.1);
  }
`;

const Content = styled.main`
  flex-grow: 1;
  padding: 60px;
  max-width: 1000px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 30px 20px;
  }
`;

const Header = styled.div`
  margin-bottom: 48px;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1.8rem;
    }
  }
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const FormCard = styled.form`
  background: ${({ theme }) => theme.colors.bgCard};
  padding: 40px;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.card};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 24px;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Input = styled.input`
  background: ${({ theme }) => theme.colors.bgDeep};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 16px;
  border-radius: 10px;
  color: white;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  background: ${({ theme }) => theme.colors.bgDeep};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 16px;
  border-radius: 10px;
  color: white;
  resize: none;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FileInputWrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.bgDeep};
  border: 2px dashed ${({ theme }) => theme.colors.border};
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;

  input {
    position: absolute;
    inset: 0;
    opacity: 0;
    cursor: pointer;
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: rgba(201, 168, 76, 0.05);
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  margin-top: 40px;
  padding: 18px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.bgDeep};
  border-radius: 12px;
  font-weight: 800;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primaryLight};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SuccessCard = styled.div`
  background: rgba(76, 175, 80, 0.1);
  color: #4caf50;
  padding: 16px 24px;
  border-radius: 8px;
  border: 1px solid #4caf50;
  margin-bottom: 30px;
  font-weight: 500;
`;
