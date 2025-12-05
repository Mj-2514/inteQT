// server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const fs = require('fs');


// utils
const connectDB = require('./utils/db');


// routes
const authRoutes = require('./routes/authRoutes');
// const noteRoutes = require('./routes/noteRoutes');
const blogRoutes = require('./routes/blogRoutes');

// middleware
const errorHandler = require('./Middleware/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 5000;

// --- ensure uploads dir exists (for any disk-based uploads; notes used disk storage earlier) ---
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log('Created uploads directory at', uploadsDir);
}

// --- connect to MongoDB ---
if (!process.env.MONGO_URI) {
  console.warn('WARN: MONGO_URI not set. DB connection will fail if not provided.');
}
connectDB(process.env.MONGO_URI);

// --- security + parsing middlewares ---
app.use(helmet());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// CORS: restrict in production via FRONTEND_URL
const FRONTEND = 'https://inte-qt.vercel.app' || 'localhost:8080';
const cors = require("cors");

app.use(
  cors({
    origin: [
      "http://localhost:8080",   // Vite dev
      "https://inte-qt.vercel.app"
    ],
    credentials: true,
  })
);


// --- rate limiter (basic) ---
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // requests per window per IP
  standardHeaders: true,
  legacyHeaders: false
});
app.use(limiter);

// --- serve uploaded files (notes or any other disk-stored uploads) ---
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// --- routes ---
app.use('/api/auth', authRoutes);   // register/login
// app.use('/api/notes', noteRoutes);  // notes (requires auth for CRUD per your earlier setup)
app.use('/api/blogs', blogRoutes);  // blogs (public GETs; POST requires auth; PUT/DELETE require admin)

// health check
app.get('/api/health', (req, res) => {
  res.json({ up: true, time: new Date().toISOString() });
});

// error handler (must be last middleware)
app.use(errorHandler);

// start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
