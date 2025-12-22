import express from "express";
import {
  registerEventUser,
  loginEventUser,
} from "../controllers/eventAuthController.js";

const router = express.Router();

router.post("/register", registerEventUser);
router.post("/login", loginEventUser);
export default router;
