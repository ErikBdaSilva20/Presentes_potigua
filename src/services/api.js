// DEPLOY VERCEL: No painel da Vercel, adicione a variável de ambiente VITE_API_URL.
// O valor deve ser a URL gerada pelo Render (ex: https://seu-app.onrender.com/api)
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export default api;
