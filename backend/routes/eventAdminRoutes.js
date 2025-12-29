// routes/eventAdminRoutes.js
import express from 'express';
import {
  getPendingEvents,
  getApprovedEvents,
  getAllEvents,
  approveEvent,
  rejectEvent,
  getAllUsers,
  deleteUser,
  getAdminStats,
  getEventDetails,
  getPendingEventById,
} from '../controllers/EventAdminController.js';
import { eventProtect, eventAdminOnly } from '../Middleware/auth.middleware.js';

const router = express.Router();

// All routes are protected with admin middleware
router.use(eventProtect);
router.use(eventAdminOnly);

// Dashboard statistics
router.get('/stats', getAdminStats);

// Event management
router.get('/pending', getPendingEvents);
router.get('/approved', getApprovedEvents);
router.get('/all', getAllEvents);
router.get('/event/:id', getEventDetails);
router.put('/approve/:id', approveEvent);
router.put('/reject/:id', rejectEvent);
router.get('/pending/:id', getPendingEventById);

// User management
router.get('/users', getAllUsers);
router.delete('/users/:id', deleteUser);

export default router;