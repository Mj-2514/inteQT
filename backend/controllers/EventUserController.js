// controllers/EventUserController.js
import Event from "../models/Event.js";
import EventUser from "../models/EventUser.js";
import bcrypt from "bcryptjs";

// @desc    Get user events statistics
// @route   GET /api/events/user/stats
// @access  Private (Event Users only)
export const getUserStats = async (req, res) => {
  try {
    const userId = req.user._id;

    // Get basic counts
    const total = await Event.countDocuments({ 
      createdBy: userId, 
      isDeleted: false 
    });
    
    const published = await Event.countDocuments({ 
      createdBy: userId, 
      status: 'published', 
      isDeleted: false 
    });
    
    const pending = await Event.countDocuments({ 
      createdBy: userId, 
      status: 'pending', 
      isDeleted: false 
    });
    
    const rejected = await Event.countDocuments({ 
      createdBy: userId, 
      status: 'rejected', 
      isDeleted: false 
    });

    // Get recent events (last 5)
    const recentEvents = await Event.find({ 
      createdBy: userId,
      isDeleted: false 
    })
      .sort({ createdAt: -1 })
      .limit(5)
      .select('title type status startDate city views createdAt')
      .lean();

    // Get upcoming events
    const now = new Date();
    const upcomingEvents = await Event.find({ 
      createdBy: userId,
      startDate: { $gt: now },
      status: 'published',
      isDeleted: false 
    })
      .sort({ startDate: 1 })
      .limit(3)
      .select('title startDate endDate city type location')
      .lean();

    // Get views statistics
    const viewsStats = await Event.aggregate([
      { $match: { createdBy: userId, isDeleted: false } },
      { 
        $group: {
          _id: null,
          totalViews: { $sum: '$views' },
          avgViews: { $avg: '$views' },
          maxViews: { $max: '$views' }
        }
      }
    ]);

    // Get monthly submissions
    const monthlySubmissions = await Event.aggregate([
      { $match: { createdBy: userId, isDeleted: false } },
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' }
          },
          count: { $sum: 1 },
          events: { $push: { title: '$title', status: '$status' } }
        }
      },
      { $sort: { '_id.year': -1, '_id.month': -1 } },
      { $limit: 6 }
    ]);

    res.status(200).json({
      success: true,
      message: 'User statistics fetched successfully',
      data: {
        counts: {
          total,
          published,
          pending,
          rejected
        },
        recentEvents,
        upcomingEvents,
        views: viewsStats[0] || { totalViews: 0, avgViews: 0, maxViews: 0 },
        monthlySubmissions: monthlySubmissions.map(month => ({
          month: `${month._id.year}-${month._id.month.toString().padStart(2, '0')}`,
          count: month.count,
          events: month.events
        })),
        approvalRate: total > 0 ? Math.round((published / total) * 100) : 0
      }
    });

  } catch (error) {
    console.error('Error fetching user stats:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Get all events for the authenticated user with pagination
// @route   GET /api/events/user/all
// @access  Private (Event Users only)
export const getUserEvents = async (req, res) => {
  try {
    const userId = req.user._id;
    const { 
      page = 1, 
      limit = 10, 
      search = '', 
      type = '',
      sortBy = 'createdAt',
      sortOrder = 'desc' 
    } = req.query;

    // Build query
    const query = { 
      createdBy: userId,
      isDeleted: false 
    };

    // Add search functionality
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { city: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } },
        { tags: { $regex: search, $options: 'i' } }
      ];
    }

    // Filter by event type
    if (type && type !== 'all') {
      query.type = type;
    }

    // Sort configuration
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    // Execute query with pagination
    const events = await Event.find(query)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .select('-__v -isDeleted -deletedAt')
      .lean();

    // Get total count
    const total = await Event.countDocuments(query);

    // Get statistics
    const stats = await Event.aggregate([
      { $match: { createdBy: userId, isDeleted: false } },
      { 
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    // Format stats
    const statsMap = {
      pending: 0,
      published: 0,
      rejected: 0
    };
    
    stats.forEach(stat => {
      statsMap[stat._id] = stat.count;
    });

    res.status(200).json({
      success: true,
      message: 'User events fetched successfully',
      data: {
        events,
        pagination: {
          total,
          page: parseInt(page),
          totalPages: Math.ceil(total / limit),
          limit: parseInt(limit)
        },
        stats: statsMap
      }
    });

  } catch (error) {
    console.error('Error fetching user events:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Get published events for the authenticated user
// @route   GET /api/events/user/published
// @access  Private (Event Users only)
export const getPublishedEvents = async (req, res) => {
  try {
    const userId = req.user._id;
    const { 
      page = 1, 
      limit = 10,
      search = '',
      type = '',
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Build query
    const query = { 
      createdBy: userId,
      status: 'published',
      isDeleted: false 
    };

    // Add search functionality
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { city: { $regex: search, $options: 'i' } }
      ];
    }

    // Filter by event type
    if (type && type !== 'all') {
      query.type = type;
    }

    // Sort configuration
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    // Execute query
    const events = await Event.find(query)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .select('-__v -isDeleted -deletedAt -rejectionNote')
      .lean();

    // Get total count
    const total = await Event.countDocuments(query);

    // Get upcoming published events
    const now = new Date();
    const upcomingEvents = await Event.find({
      createdBy: userId,
      status: 'published',
      startDate: { $gt: now },
      isDeleted: false
    })
    .sort({ startDate: 1 })
    .limit(5)
    .select('title startDate endDate city location type views')
    .lean();

    res.status(200).json({
      success: true,
      message: 'Published events fetched successfully',
      data: {
        events,
        pagination: {
          total,
          page: parseInt(page),
          totalPages: Math.ceil(total / limit),
          limit: parseInt(limit)
        },
        upcomingEvents
      }
    });

  } catch (error) {
    console.error('Error fetching published events:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Get pending events for the authenticated user
// @route   GET /api/events/user/pending
// @access  Private (Event Users only)
export const getPendingEvents = async (req, res) => {
  try {
    const userId = req.user._id;
    const { 
      page = 1, 
      limit = 10,
      search = '',
      type = '',
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Build query
    const query = { 
      createdBy: userId,
      status: 'pending',
      isDeleted: false 
    };

    // Add search functionality
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { city: { $regex: search, $options: 'i' } }
      ];
    }

    // Filter by event type
    if (type && type !== 'all') {
      query.type = type;
    }

    // Sort configuration
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    // Execute query
    const events = await Event.find(query)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .select('-__v -isDeleted -deletedAt -rejectionNote')
      .lean();

    // Get total count
    const total = await Event.countDocuments(query);

    // Get oldest pending event (for warning if too old)
    const oldestPending = await Event.findOne({
      createdBy: userId,
      status: 'pending',
      isDeleted: false
    })
    .sort({ createdAt: 1 })
    .select('createdAt title')
    .lean();

    const warning = oldestPending ? {
      hasWarning: true,
      message: `Your oldest pending event "${oldestPending.title}" has been waiting for review since ${new Date(oldestPending.createdAt).toLocaleDateString()}`,
      daysSince: Math.floor((new Date() - new Date(oldestPending.createdAt)) / (1000 * 60 * 60 * 24))
    } : null;

    res.status(200).json({
      success: true,
      message: 'Pending events fetched successfully',
      data: {
        events,
        pagination: {
          total,
          page: parseInt(page),
          totalPages: Math.ceil(total / limit),
          limit: parseInt(limit)
        },
        warning
      }
    });

  } catch (error) {
    console.error('Error fetching pending events:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Get rejected events for the authenticated user
// @route   GET /api/events/user/rejected
// @access  Private (Event Users only)
export const getRejectedEvents = async (req, res) => {
  try {
    const userId = req.user._id;
    const { 
      page = 1, 
      limit = 10,
      search = '',
      type = '',
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Build query
    const query = { 
      createdBy: userId,
      status: 'rejected',
      isDeleted: false 
    };

    // Add search functionality
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { city: { $regex: search, $options: 'i' } }
      ];
    }

    // Filter by event type
    if (type && type !== 'all') {
      query.type = type;
    }

    // Sort configuration
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    // Execute query
    const events = await Event.find(query)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .select('-__v -isDeleted -deletedAt')
      .lean();

    // Get total count
    const total = await Event.countDocuments(query);

    // Get rejection reasons statistics
    const rejectionStats = await Event.aggregate([
      { $match: { createdBy: userId, status: 'rejected', isDeleted: false } },
      { 
        $group: {
          _id: '$rejectionNote',
          count: { $sum: 1 },
          events: { $push: { title: '$title', createdAt: '$createdAt' } }
        }
      },
      { $sort: { count: -1 } }
    ]);

    res.status(200).json({
      success: true,
      message: 'Rejected events fetched successfully',
      data: {
        events,
        pagination: {
          total,
          page: parseInt(page),
          totalPages: Math.ceil(total / limit),
          limit: parseInt(limit)
        },
        rejectionStats: rejectionStats.map(stat => ({
          reason: stat._id || 'No reason provided',
          count: stat.count,
          events: stat.events
        }))
      }
    });

  } catch (error) {
    console.error('Error fetching rejected events:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Get single event by ID (user's own event)
// @route   GET /api/events/user/:id
// @access  Private (Event Users only)
export const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const event = await Event.findOne({
      _id: id,
      createdBy: userId,
      isDeleted: false
    })
    .select('-__v -isDeleted -deletedAt')
    .lean();

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found or you do not have permission to view it'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Event fetched successfully',
      data: event
    });

  } catch (error) {
    console.error('Error fetching event:', error);
    
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid event ID'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};
export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user._id;

    // Validate input
    if (!newPassword) {
      return res.status(400).json({
        success: false,
        message: 'New password is required'
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'New password must be at least 6 characters long'
      });
    }

    // Find the user
    const user = await EventUser.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // If user has NO password (new user or social login)
    if (!user.password) {
      // Just set the new password without checking current password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      
      user.password = hashedPassword;
      user.updatedAt = Date.now();
      await user.save();

      return res.status(200).json({
        success: true,
        message: 'Password set successfully',
        data: {
          userId: user._id,
          email: user.email,
          updatedAt: user.updatedAt
        }
      });
    }

    // If user HAS a password, validate current password
    if (!currentPassword) {
      return res.status(400).json({
        success: false,
        message: 'Current password is required to change existing password'
      });
    }

    if (currentPassword === newPassword) {
      return res.status(400).json({
        success: false,
        message: 'New password must be different from current password'
      });
    }

    // Verify current password
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Current password is incorrect'
      });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update password
    user.password = hashedPassword;
    user.updatedAt = Date.now();
    await user.save();

    (`Password changed for user: ${user.email} at ${new Date().toISOString()}`);

    res.status(200).json({
      success: true,
      message: 'Password changed successfully',
      data: {
        userId: user._id,
        email: user.email,
        updatedAt: user.updatedAt
      }
    });

  } catch (error) {
    console.error('Error changing password:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to change password',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};