// routes/countryRoutes.js
import express from "express";
import {
  createOrUpdateCountry,
  getMySubmissions,
  getAllSubmissions,
  reviewSubmission,
  getAdminStats,
  getUserStats,
  saveDraft,
  getMySubmissionsByStatus,
  getMySubmissionsSummary,
  getSubmissionBySlug,
  getMySubmission,
  getMySubmissionForEdit,
  updateUserSubmission,
  userSubmissionById,
  updateUserSubmissionById
} from "../controllers/countryUserController.js";
import { protectCountry } from "../Middleware/countryAuthMiddleware.js";

const router = express.Router();

// User routes
router.post("/submit", protectCountry, createOrUpdateCountry);
router.get("/my-submissions", protectCountry, getMySubmissions);
router.get("/my-stats", protectCountry, getUserStats);
router.post("/draft", protectCountry, saveDraft);
router.get("/my-submissions/summary", protectCountry, getMySubmissionsSummary);
router.get("/my-submissions/status/:status", protectCountry, getMySubmissionsByStatus);
router.get("/submission/:slug", protectCountry, getSubmissionBySlug);
router.get("/my-submission/:id", protectCountry, getMySubmissionForEdit);
router.get('/users/submission/:id', protectCountry, getMySubmissionForEdit);
router.put('/user/submission/:id', protectCountry, updateUserSubmission);
// Admin routes
router.get("/all", protectCountry, getAllSubmissions);
router.put("/review/:id", protectCountry, reviewSubmission);
router.get("/admin-stats", protectCountry, getAdminStats);


export default router;