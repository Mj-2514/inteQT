// server.js
import dotenv from "dotenv";
dotenv.config();


import express from "express";
import path from "path";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { fileURLToPath } from "url";


// utils
import connectDB from "./utils/db.js";

// routes
import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import formRoutes from "./routes/formRoutes.js";
import socialRoutes from "./routes/socialRoutes.js";
import eventRoutes from "./routes/EventRoutes.js";
import eventAuthRoutes from "./routes/eventAuthRoutes.js";


// middleware
import errorHandler from "./Middleware/errorMiddleware.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Needed for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------- Connect to MongoDB ----------
if (!process.env.MONGO_URI) {
  console.warn("⚠️  MONGO_URI not set");
}
connectDB(process.env.MONGO_URI);

// ---------- Security + body parsing ----------
app.use(helmet());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// ---------- CORS ----------
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:8080",
  "https://inte-qt.vercel.app",
  "https://inte-qt.com",
  "https://www.inte-qt.com",
];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      console.log("❌ Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// ---------- Rate limiter ----------
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

// ---------- Routes ----------
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/forms", formRoutes);
app.use("/api/social", socialRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/events/auth", eventAuthRoutes);

// ---------- Health ----------
app.get("/api/health", (req, res) => {
  res.json({ up: true, time: new Date().toISOString() });
});

// ---------- Error handler ----------
app.use(errorHandler);

// ---------- Start ----------
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
