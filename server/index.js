// DEPLOY RENDER: Verifique se as variáveis de ambiente estão configuradas no painel do Render.
// Você precisará de MONGODB_URI, CLOUDINARY_*, ADMIN_USER, ADMIN_PASS.
import { v2 as cloudinary } from 'cloudinary';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import Product from './models/Product.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// DEPLOY MONGODB: Certifique-se de que o MONGODB_URI no Render seja o seu link do MongoDB Atlas.
// Lembre-se de liberar o acesso de IP (0.0.0.0/0) no painel do MongoDB Atlas.
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer Storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'wedding-gifts',
    format: async (req, file) => 'png', // Force PNG or handle dynamically
    public_id: (req, file) => `gift-${Date.now()}`,
  },
});

const upload = multer({ storage: storage });

// Routes
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ message: err.message });
  }
});

app.post(
  '/api/products',
  (req, res, next) => {
    console.log('--- Iniciando processo de upload ---');
    upload.single('image')(req, res, (err) => {
      if (err) {
        console.error('❌ ERRO NO UPLOAD (MULTER/CLOUDINARY):', err);
        return res.status(500).json({
          message: 'Erro no processamento da imagem pela Cloudinary',
          error: err.message,
          tip: 'Verifique se suas chaves no .env estão corretas',
        });
      }
      console.log('✅ Upload concluído com sucesso!');
      next();
    });
  },
  async (req, res) => {
    try {
      const { name, link, description, price } = req.body;

      if (!req.file) {
        return res.status(400).json({ message: 'A imagem é obrigatória' });
      }

      const imageUrl = req.file.path;
      console.log('Salvando no banco de dados:', name);

      const newProduct = new Product({
        name,
        link,
        description,
        price,
        image: imageUrl,
      });

      await newProduct.save();
      console.log('🎉 Produto salvo com sucesso ID:', newProduct._id);
      res.status(201).json(newProduct);
    } catch (err) {
      console.error('❌ SERVER ERROR DETAIL:', err);
      res.status(500).json({
        message: 'Erro interno ao salvar produto no banco',
        error: err.message,
      });
    }
  }
);

// ROTA PARA DELETAR PRODUTO (MongoDB + Cloudinary)
app.delete('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('--- Iniciando processo de deleção --- ID:', id);

    const product = await Product.findById(id);

    if (!product) {
      console.log('⚠️ Produto não encontrado no banco de dados');
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    // Tentar deletar do Cloudinary apenas se for uma URL da Cloudinary
    try {
      const imageUrl = product.image;
      if (imageUrl && imageUrl.includes('cloudinary.com')) {
        const parts = imageUrl.split('/');
        const folderAndFile = parts.slice(-2).join('/'); // Pega 'wedding-gifts/gift-123.png'
        const publicId = folderAndFile.split('.')[0]; // Pega 'wedding-gifts/gift-123'

        console.log('🗑️ Tentando deletar da Cloudinary:', publicId);
        await cloudinary.uploader.destroy(publicId);
      } else {
        console.log('ℹ️ Imagem não é da Cloudinary, removendo apenas do banco.');
      }
    } catch (cloudErr) {
      console.error(
        '⚠️ Erro ao tentar remover da Cloudinary (continuando deleção no banco):',
        cloudErr.message
      );
    }

    // Deletar do MongoDB
    await Product.findByIdAndDelete(id);
    console.log('✅ Produto removido do MongoDB com sucesso!');

    res.json({ message: 'Produto deletado com sucesso!' });
  } catch (err) {
    console.error('❌ Erro ao deletar produto:', err);
    res.status(500).json({ message: 'Erro ao deletar o produto', error: err.message });
  }
});

// Admin Login Route (Simples)
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('💥 Global Error Handler:', err);
  res.status(500).json({
    message: 'Algo deu errado no servidor',
    error: err.message,
  });
});

// Basic health check route
app.get('/', (req, res) => {
  res.send('API de Presentes Rodando! (Build: 2026-03-06) 🚀');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.group('🚀 Servidor Iniciado');
  console.log(`Porta: ${PORT}`);
  console.log(`Ambiente: ${process.env.NODE_ENV || 'development'}`);

  // Log check for required env vars (without showing secrets)
  const requiredVars = ['MONGODB_URI', 'CLOUDINARY_CLOUD_NAME', 'ADMIN_USER'];
  requiredVars.forEach((v) => {
    console.log(`${v}: ${process.env[v] ? '✅ Configurado' : '❌ AUSENTE'}`);
  });

  console.groupEnd();
});
