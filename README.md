# 💍 Wedding Registry System - Amanda e Marco

Este é um projeto **Full-stack** desenvolvido para gerenciar a lista de presentes de casamento de **Amanda e Marco**. A aplicação oferece uma interface elegante para os convidados e um painel administrativo seguro para a gestão do catálogo.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as tecnologias mais modernas do ecossistema JavaScript para garantir performance, escalabilidade e uma excelente experiência de usuário.

### **Frontend**

- **React 19**: Biblioteca principal para construção da interface de usuário.
- **Vite**: Build tool de última geração que proporciona um ambiente de desenvolvimento ultra-rápido.
- **Styled Components**: Utilização de CSS-in-JS para componentes estilizados e dinâmicos.
- **React Router Dom**: Gerenciamento de rotas e navegação da SPA.
- **Axios**: Cliente HTTP para comunicação com a API.
- **React Icons**: Conjunto de ícones vetoriais para melhoria visual.

### **Backend**

- **Node.js**: Ambiente de execução para o servidor.
- **Express**: Framework web minimalista para construção da API REST.
- **MongoDB & Mongoose**: Banco de dados NoSQL e ODM para modelagem e persistência dos dados.
- **Multer & Cloiudinary Storage**: Gerenciamento de uploads de imagens diretamente para a nuvem.

### **Infraestrutura e Deploy**

- **Cloudinary**: Serviço de hospedagem e otimizagem de imagens.
- **Render**: Plataforma de hospedagem para a API e o banco de dados.
- **MongoDB Atlas**: Cluster gerenciado para o banco de dados MongoDB.

---

## 🛠️ Arquitetura e Fluxos do Sistema

### **1. Lista de Presentes (Público)**

O fluxo principal permite que os convidados visualizem todos os itens desejados pelo casal. Cada item é exibido em um card responsivo contendo:

- Imagem do produto (carregada via Cloudinary).
- Descrição detalhada.
- Link direto para a loja externa (ex: Shopee).

### **2. Painel Administrativo (Privado)**

O acesso administrativo é protegido por um sistema de login baseado em credenciais seguras configuradas via variáveis de ambiente.

- **Autenticação**: O servidor valida as credenciais e o frontend armazena um token de sessão para persistência.
- **Gestão de Produtos (CRUD)**:
  - **Criação**: O administrador pode adicionar novos produtos preenchendo o nome, link e selecionando uma imagem.
  - **Upload de Imagem**: O arquivo é enviado do frontend para a API (Express + Multer), que processa e faz o upload automático para a **Cloudinary**, salvando apenas a URL segura no MongoDB.
  - **Exclusão**: Ao remover um produto, o sistema executa uma operação dupla — remove o registro do banco de dados e exclui o arquivo físico da Cloudinary, garantindo a integridade do armazenamento.

---

## 📁 Estrutura de Pastas

```bash
├── server/               # Lógica do Backend (Node/Express)
│   ├── models/           # Schemas do Mongoose (Product)
│   ├── index.js          # Entry point da API e rotas
│   └── .env              # Variáveis de ambiente (DB, Cloudinary, Admin)
├── src/                  # Lógica do Frontend (React)
│   ├── components/       # Componentes reutilizáveis (Header, Cards, Footer)
│   ├── pages/            # Páginas principais (Home, Login, Admin)
│   ├── services/         # Configurações do Axios/API
│   └── styles/           # Estilização global e temas
└── README.md
```

---

## ⚙️ Configuração do Ambiente

Para rodar o projeto localmente, são necessárias as seguintes chaves no arquivo `.env`:

```env
# SERVER CONFIGURE
PORT=5000
MONGODB_URI=sua_uri_do_atlas
CLOUDINARY_CLOUD_NAME=seu_nome
CLOUDINARY_API_KEY=sua_key
CLOUDINARY_API_SECRET=seu_secret
ADMIN_USER=seu_usuario
ADMIN_PASS=sua_senha
```

---

## 💡 Ideia do Projeto

A ideia central foi criar uma solução personalizada e eficiente que centralizasse os desejos do casal **Amanda e Marco**, facilitando a jornada dos convidados ao redirecioná-los para marketplaces conhecidos, enquanto mantinha um controle total sobre o catálogo de presentes de forma simplificada e profissional.

---

Desenvolvido com ❤️ para o casamento de **Amanda e Marco**.
