// backend/routes/uploadRoutes.js
import express from "express";
import multer from "multer";
import { uploadImage } from "../controllers/uploadController.js";
import { protectCountry } from "../Middleware/countryAuthMiddleware.js";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

router.post(
  "/image",
  protectCountry,
  upload.single("image"),
  uploadImage
);

export default router;