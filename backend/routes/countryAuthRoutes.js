import express from "express";
import Country from "../models/Country.js";
import {
    registerFirstAdmin,
  createNewUser,
  loginCountryUser,
  changePassword,
  createAdminByAdmin,
  getAllUsers,
  deleteUser
} from "../controllers/countryAuthController.js";
import { protectCountry } from "../Middleware/countryAuthMiddleware.js";

const router = express.Router();

router.post("/bootstrap-admin", registerFirstAdmin);  // run only once
router.post("/login", loginCountryUser);
router.post("/admin/create-user", protectCountry, createNewUser);
router.put("/change-password", protectCountry, changePassword);
router.post("/admin/create-admin", protectCountry, createAdminByAdmin);
router.get("/admin/all-users", protectCountry, getAllUsers);
router.delete("/user/:id", protectCountry, deleteUser);
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    
    console.log(`[PUBLIC API] Fetching country with slug: ${slug}`);
    
    // Find approved country by slug
    const country = await Country.findOne({ 
      slug: { $regex: new RegExp(`^${slug}$`, 'i') },
      status: 'approved' 
    })
    .populate('createdBy', 'name email')
    .lean();

    if (!country) {
      return res.status(404).json({ 
        success: false,
        message: `Country "${slug}" not found or not approved` 
      });
    }
    
    // Clean up response
    delete country.__v;
    
    res.json({
      success: true,
      data: country
    });
    
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ 
      success: false,
      message: "Server error"
    });
  }
});



export default router;
