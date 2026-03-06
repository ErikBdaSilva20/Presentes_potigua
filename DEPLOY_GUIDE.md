# 🚀 Guia Completo de Deploy - Presentes Casamento

Este guia orienta o deploy da aplicação utilizando **MongoDB Atlas** (Banco de Dados), **Render** (Backend Node.js) e **Vercel** (Frontend React).

---

## 1. 🍃 MongoDB Atlas (Banco de Dados)

O MongoDB será responsável por armazenar as informações dos produtos/presentes.

1.  **Crie uma conta:** Acesse [mongodb.com](https://www.mongodb.com/cloud/atlas/register).
2.  **Crie um Cluster:** Selecione o plano gratuito (Shared).
3.  **Configuração de Segurança:**
    - **Network Access:** Clique em "Add IP Address" e selecione **"Allow Access From Anywhere" (0.0.0.0/0)** para que o Render consiga conectar.
    - **Database Access:** Crie um usuário e senha (anote-os).
4.  **Obtenha a String de Conexão:**
    - No painel do Cluster, clique em **Connect** > **Drivers** > **Node.js**.
    - Copie a string (ex: `mongodb+srv://usuario:<senha>@cluster0.xxxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).
    - Substitua `<senha>` pela senha que você criou.

---

## 2. 🚀 Render (Backend - Node.js)

O Render hospedará sua API.

1.  **Crie uma conta:** Acesse [render.com](https://render.com/) e conecte seu GitHub.
2.  **Novo Serviço:** Clique em **New +** > **Web Service**.
3.  **Conecte o Repositório:** Selecione o repositório do seu projeto.
4.  **Configurações do Serviço:**
    - **Name:** `presentes-casamento-api` (ou o que desejar).
    - **Root Directory:** `server`
    - **Build Command:** `npm install`
    - **Start Command:** `npm start`
5.  **Variáveis de Ambiente (Environment):** Clique em **Add Environment Variable** e adicione:
    - `MONGODB_URI`: Sua string do MongoDB Atlas (passo 1).
    - `CLOUDINARY_CLOUD_NAME`: Seu Cloud Name do Cloudinary.
    - `CLOUDINARY_API_KEY`: Sua API Key do Cloudinary.
    - `CLOUDINARY_API_SECRET`: Sua API Secret do Cloudinary.
    - `ADMIN_USER`: Nome de usuário para o login administrativo.
    - `ADMIN_PASS`: Senha para o login administrativo.
6.  **Deploy:** Clique em **Create Web Service**.
    - Após o log mostrar `API de Presentes Rodando! 🚀`, copie a URL gerada (ex: `https://seu-app.onrender.com`).

---

## 3. 📐 Vercel (Frontend - React/Vite)

A Vercel hospedará a interface do site.

1.  **Crie uma conta:** Acesse [vercel.com](https://vercel.com/) e conecte seu GitHub.
2.  **Importar Projeto:** Clique em **Add New** > **Project** e selecione seu repositório.
3.  **Configurações do Projeto:**
    - **Framework Preset:** Vite (será detectado automaticamente).
    - **Root Directory:** `./` (o padrão).
4.  **Variáveis de Ambiente (Environment Variables):**
    - `VITE_API_URL`: `https://seu-app.onrender.com/api` (URL que você copiou do Render + `/api`).
    - `VITE_ADMIN_USER`: O mesmo nome de usuário que você colocou no Render.
    - `VITE_ADMIN_PASS`: A mesma senha que você colocou no Render.
5.  **Deploy:** Clique em **Deploy**.

---

## 🛠️ Onde alterar no código (Resumo)

Os comentários `// DEPLOY ...` foram adicionados nos seguintes arquivos para te guiar:

- **[`server/index.js`](file:///c:/Users/erikb/OneDrive/Desktop/PresentesCasamentoAmanda/server/index.js):** Onde o backend lê as variáveis do Render e conecta ao MongoDB.
- **[`src/services/api.js`](file:///c:/Users/erikb/OneDrive/Desktop/PresentesCasamentoAmanda/src/services/api.js):** Onde o frontend define qual API chamar (ajustado via Vercel).

### Dicas importantes:

- **Render Free:** O plano gratuito do Render "dorme" após 15 minutos de inatividade. O primeiro acesso após isso pode demorar uns 30 segundos para carregar.
- **CORS:** O backend já está configurado com `app.use(cors())`, o que permite que a Vercel converse com o Render sem problemas.
