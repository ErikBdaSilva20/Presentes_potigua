// Verifique isso na produção.
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

// MongoDB Connection
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
      const { name, link, description } = req.body;

      if (!req.file) {
        return res.status(400).json({ message: 'A imagem é obrigatória' });
      }

      const imageUrl = req.file.path;
      console.log('Salvando no banco de dados:', name);

      const newProduct = new Product({
        name,
        link,
        description,
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.group('🚀 Servidor Iniciado');
  console.log(`Porta: ${PORT}`);
  console.log(`Cloudinary Cloud: ${process.env.CLOUDINARY_CLOUD_NAME}`);
  console.groupEnd();
});
