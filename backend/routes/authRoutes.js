import express from "express";
import { body } from "express-validator";
import * as authController from "../controllers/authController.js";

const router = express.Router();

// Register
router.post(
  "/register",
  [
    body("name").isLength({ min: 2 }).withMessage("Name must be at least 2 characters"),
    body("email").isEmail().withMessage("Valid email required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  ],
  authController.register
);

// Login
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email required"),
    body("password").exists().withMessage("Password required"),
  ],
  authController.login
);

export default router;
