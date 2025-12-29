// routes/eventUserRoutes.js
import express from 'express';
import {
  getUserEvents,
  getPublishedEvents,
  getPendingEvents,
  getRejectedEvents,
  getUserStats,
  getEventById,
  changePassword
} from '../controllers/EventUserController.js';
import { eventProtect } from '../Middleware/auth.middleware.js';


const router = express.Router();

// All routes are protected with eventProtect middleware
router.use(eventProtect);

// Stats
router.get('/stats', getUserStats);

// All events with pagination
router.get('/all', getUserEvents);

// Published events
router.get('/published', getPublishedEvents);

// Pending events
router.get('/pending', getPendingEvents);

// Rejected events
router.get('/rejected', getRejectedEvents);

// Single event
router.get('/:id', getEventById);
router.put('/change-password', changePassword);



export default router;