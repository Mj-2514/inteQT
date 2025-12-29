import express from "express";
import { body } from "express-validator";
import { login, changePassword, bootstrapAdmin,adminCreateUser } from "../controllers/authController.js";
import { protect, adminOnly } from "../Middleware/authMiddleware.js";

const router = express.Router();

/* ---------- BOOTSTRAP FIRST ADMIN ---------- */
router.post("/bootstrap-admin", bootstrapAdmin);

/* ---------- LOGIN ---------- */
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email required"),
    body("password").exists().withMessage("Password required"),
  ],
  login
);

/* ---------- CHANGE PASSWORD (AUTH REQUIRED) ---------- */
router.post(
  "/change-password",
  protect,
  [
    body("oldPassword").exists().withMessage("Old password required"),
    body("newPassword").isLength({ min: 6 }).withMessage("New password must be at least 6 characters"),
  ],
  changePassword
);
/* ---------- ADMIN CREATE USER ---------- */
router.post(
  "/create-user",
  protect,
  adminOnly,
  [
    body("name").notEmpty().withMessage("Name required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("tempPassword")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters"),
  ],
  adminCreateUser
);

export default router;
