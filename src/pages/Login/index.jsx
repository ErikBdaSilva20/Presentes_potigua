import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const envUser = import.meta.env.VITE_ADMIN_USER;
    const envPass = import.meta.env.VITE_ADMIN_PASS;

    if (username === envUser && password === envPass) {
      localStorage.setItem('admin_token', 'true');
      navigate('/admin');
    } else {
      setError('Credenciais inválidas. Verifique o nome e a senha.');
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <BackBtn onClick={() => navigate('/')}>
          <FiArrowLeft /> Voltar para o Site
        </BackBtn>
        <Title>Área Administrativa</Title>
        <Subtitle>Identifique-se para gerenciar a lista</Subtitle>

        {error && <ErrorMsg>{error}</ErrorMsg>}

        <InputGroup>
          <Label>Nome de Usuário</Label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Digite seu nome"
            required
          />
        </InputGroup>

        <InputGroup>
          <Label>Senha</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </InputGroup>

        <SubmitBtn type="submit">Entrar</SubmitBtn>
      </LoginForm>
    </Container>
  );
};

export default Login;

// Styles
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.bgDeep};
  padding: 20px;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const LoginForm = styled.form`
  background: ${({ theme }) => theme.colors.bgCard};
  padding: 48px;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderGold};
  width: 100%;
  max-width: 450px;
  box-shadow: ${({ theme }) => theme.shadows.cardHover};
  animation: ${fadeIn} 0.8s ease-out;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 32px 24px;
  }
`;

const BackBtn = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  margin-bottom: 24px;
  transition: color 0.2s;
  padding: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  margin-bottom: 32px;
  font-size: 0.9rem;
`;

const InputGroup = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.colors.bgDeep};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 14px;
  color: white;
  border-radius: ${({ theme }) => theme.radius.md};
  font-family: ${({ theme }) => theme.fonts.body};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 10px rgba(201, 168, 76, 0.2);
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.bgDeep};
  font-weight: 700;
  border-radius: ${({ theme }) => theme.radius.md};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
  margin-top: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const ErrorMsg = styled.p`
  color: #ff4d4d;
  background: rgba(255, 77, 77, 0.1);
  padding: 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  margin-bottom: 20px;
  text-align: center;
`;
