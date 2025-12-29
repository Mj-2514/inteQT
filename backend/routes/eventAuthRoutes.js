import express from "express";
import { login, registerUserByAdmin } from "../controllers/eventAuthController.js";
import { eventProtect, eventAdminOnly } from "../Middleware/auth.middleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", eventProtect, eventAdminOnly, registerUserByAdmin);

export default router;
