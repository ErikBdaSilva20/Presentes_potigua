// DEPLOY VERCEL: No painel da Vercel, adicione a variável de ambiente VITE_API_URL.
// O valor deve ser a URL gerada pelo Render (ex: https://seu-app.onrender.com/api)
import axios from 'axios';

const getBaseURL = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  if (!envUrl) return 'http://localhost:5000';

  // Remove trailing slash and /api if present to keep it base
  return envUrl.replace(/\/$/, '').replace(/\/api$/, '');
};

const api = axios.create({
  baseURL: getBaseURL(),
});

export default api;
