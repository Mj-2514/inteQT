// server.js
require("dotenv").config();
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const fs = require("fs");

// utils
const connectDB = require("./utils/db");

// routes
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");

// middleware
const errorHandler = require("./Middleware/errorMiddleware");

const app = express();
const PORT = process.env.PORT || 5000;

// ---------- Ensure uploads directory exists ----------
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log("Created uploads directory at", uploadsDir);
}

// ---------- Connect to MongoDB ----------
if (!process.env.MONGO_URI) {
  console.warn("WARN: MONGO_URI not set. DB connection will fail if not provided.");
}
connectDB(process.env.MONGO_URI);

// ---------- Security + body parsing middlewares ----------
app.use(helmet());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// ---------- CORS CONFIG ----------
const allowedOrigins = [
  "http://localhost:5173",        // Vite dev (default)
  "http://localhost:8080",        // if you ever run frontend here
  "https://inte-qt.vercel.app",   // Vercel app
  "https://inte-qt.com",          // custom domain
  "https://www.inte-qt.com",
];

app.use(
  cors({
    origin(origin, callback) {
      // Allow non-browser tools / same-origin / curl / Postman etc.
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      console.log("❌ Blocked by CORS:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// ---------- Rate limiter ----------
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200,                  // requests per IP per window
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// ---------- Static files (uploaded images etc.) ----------
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ---------- Routes ----------
app.use("/api/auth", authRoutes);   // login/register
app.use("/api/blogs", blogRoutes);  // blog routes

// Health check
app.get("/api/health", (req, res) => {
  res.json({ up: true, time: new Date().toISOString() });
});

// ---------- Error handler (must be last) ----------
app.use(errorHandler);

// ---------- Start server ----------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
