import express from "express";
import {
    registerFirstAdmin,
  createUserByAdmin,
  loginCountryUser,
  changePassword,
  createAdminByAdmin
} from "../controllers/countryAuthController.js";
import { protectCountry } from "../middleware/countryAuthMiddleware.js";

const router = express.Router();

router.post("/bootstrap-admin", registerFirstAdmin);  // run only once
router.post("/login", loginCountryUser);
router.post("/admin/create-user", protectCountry, createUserByAdmin);
router.post("/change-password", protectCountry, changePassword);
router.post("/admin/create-admin", protectCountry, createAdminByAdmin);


export default router;
