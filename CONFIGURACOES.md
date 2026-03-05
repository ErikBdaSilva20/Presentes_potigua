# 🛠️ Guia de Configuração — Painel Admin & Backend

Este guia explica como configurar o backend para que a **Amanda Potigua** possa adicionar presentes diretamente pelo site.

## 1. Variáveis de Ambiente (`.env`)

No diretório `/server`, você encontrará um arquivo chamado `.env.example`. Renomeie-o para `.env` e preencha as seguintes chaves:

### 🍃 MongoDB Atlas (Banco de Dados)

Para salvar os nomes e links dos produtos:

1. Crie uma conta no [MongoDB Atlas](https://www.mongodb.com/atlas/database).
2. Crie um Cluster gratuito (M0).
3. Vá em **Database Access** e crie um usuário com permissão de leitura e escrita.
4. Vá em **Network Access** e libere o acesso IP (0.0.0.0/0 para testes).
5. Clique em **Connect** -> **Drivers** -> Copie a `SRV Connection String`.
6. No `.env`, substitua `<password>` pela senha do usuário que você criou.

### ☁️ Cloudinary (Armazenamento de Imagens)

Para hospedar as fotos dos presentes:

1. Crie uma conta no [Cloudinary](https://www.cloudinary.com/).
2. No seu Dashboard, você verá o `Cloud Name`, `API Key` e `API Secret`.
3. Copie esses valores para o arquivo `.env`.

### 🔑 Acesso Admin

O login agora é verificado diretamente pelo frontend para garantir que você sempre consiga entrar no painel, mesmo que o servidor ainda esteja iniciando:

- **Nome:** `AmandaPotigua` (sem espaços)
- **Senha:** `mkdircs2139asd`

> **Nota:** Certifique-se de que o arquivo `.env` na RAIZ do projeto tenha estas mesmas credenciais (`VITE_ADMIN_USER` e `VITE_ADMIN_PASS`).

---

## 2. Como Rodar o Projeto

### Frontend (Raiz)

```bash
npm install
npm run dev
```

### Backend (`/server`)

```bash
cd server
npm install
node index.js
```

_Dica: Você pode usar `npx nodemon index.js` para reiniciar o servidor automaticamente ao fazer mudanças._

---

## 🚀 Como Adicionar Produtos

1. Com o servidor e o frontend rodando, vá para `http://localhost:5173/login`.
2. Digite as credenciais da Amanda.
3. No painel, você poderá preencher:
   - **Nome do Produto**
   - **Link da Shopee**
   - **Descrição** (opcional)
   - **Foto do Produto** (será enviada automaticamente para o Cloudinary).
4. Ao clicar em "Adicionar", o item aparecerá imediatamente na Home!
