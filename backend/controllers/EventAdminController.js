// controllers/EventAdminController.js
import Event from "../models/Event.js";
import EventUser from "../models/EventUser.js";
import sendMail from "../utils/sendMail.js";
import mongoose from "mongoose";

// @desc    Get all pending events
// @route   GET /api/events/admin/pending
// @access  Private (Admin only)
export const getPendingEvents = async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 20,
      search = '',
      type = '',
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Build query
    const query = { 
      status: "pending",
      isDeleted: false 
    };

    // Add search functionality
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { city: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } }
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
      .populate("createdBy", "name email _id")
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .select('-__v -isDeleted -deletedAt')
      .lean();

    // Get total count
    const total = await Event.countDocuments(query);

    // Get pending events by user count
    const pendingByUser = await Event.aggregate([
      { $match: { status: "pending", isDeleted: false } },
      {
        $group: {
          _id: "$createdBy",
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);

    // Populate user details for pendingByUser
    const userIds = pendingByUser.map(item => item._id);
    const users = await EventUser.find({ _id: { $in: userIds } }, 'name email');
    
    const pendingByUserWithDetails = pendingByUser.map(item => {
      const user = users.find(u => u._id.toString() === item._id.toString());
      return {
        userId: item._id,
        userName: user?.name || 'Unknown',
        userEmail: user?.email || '',
        pendingCount: item.count
      };
    });

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
        statistics: {
          totalPending: total,
          pendingByUser: pendingByUserWithDetails,
          oldestPending: events.length > 0 ? events[events.length - 1]?.createdAt : null
        }
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

// @desc    Get all approved/published events
// @route   GET /api/events/admin/approved
// @access  Private (Admin only)
export const getApprovedEvents = async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 20,
      search = '',
      type = '',
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Build query
    const query = { 
      status: "published",
      isDeleted: false 
    };

    // Add search functionality
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { city: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } }
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
      .populate("createdBy", "name email _id")
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .select('-__v -isDeleted -deletedAt -rejectionNote')
      .lean();

    // Get total count
    const total = await Event.countDocuments(query);

    // Get upcoming approved events
    const now = new Date();
    const upcomingEvents = await Event.find({
      status: "published",
      startDate: { $gt: now },
      isDeleted: false
    })
    .sort({ startDate: 1 })
    .limit(10)
    .select('title startDate endDate city createdBy views')
    .populate("createdBy", "name email")
    .lean();

    // Get views statistics
    const viewsStats = await Event.aggregate([
      { $match: { status: "published", isDeleted: false } },
      { 
        $group: {
          _id: null,
          totalViews: { $sum: '$views' },
          avgViews: { $avg: '$views' },
          maxViews: { $max: '$views' }
        }
      }
    ]);

    res.status(200).json({
      success: true,
      message: 'Approved events fetched successfully',
      data: {
        events,
        pagination: {
          total,
          page: parseInt(page),
          totalPages: Math.ceil(total / limit),
          limit: parseInt(limit)
        },
        statistics: {
          totalApproved: total,
          upcomingEvents,
          views: viewsStats[0] || { totalViews: 0, avgViews: 0, maxViews: 0 }
        }
      }
    });

  } catch (error) {
    console.error('Error fetching approved events:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Get all events (including pending, rejected, published)
// @route   GET /api/events/admin/all
// @access  Private (Admin only)
export const getAllEvents = async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 30,
      search = '',
      type = '',
      status = '',
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Build query
    const query = { 
      isDeleted: false 
    };

    // Add search functionality
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { city: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } }
      ];
    }

    // Filter by event type
    if (type && type !== 'all') {
      query.type = type;
    }

    // Filter by status
    if (status && status !== 'all') {
      query.status = status;
    }

    // Sort configuration
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    // Execute query with pagination
    const events = await Event.find(query)
      .populate("createdBy", "name email _id")
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .select('-__v -isDeleted -deletedAt')
      .lean();

    // Get total count
    const total = await Event.countDocuments(query);

    // Get statistics by status
    const statsByStatus = await Event.aggregate([
      { $match: { isDeleted: false } },
      { 
        $group: {
          _id: '$status',
          count: { $sum: 1 },
          avgViews: { $avg: '$views' }
        }
      },
      { $sort: { count: -1 } }
    ]);

    // Get statistics by type
    const statsByType = await Event.aggregate([
      { $match: { isDeleted: false } },
      { 
        $group: {
          _id: '$type',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } }
    ]);

    // Get monthly events
    const monthlyEvents = await Event.aggregate([
      { $match: { isDeleted: false } },
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' },
            status: '$status'
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { '_id.year': -1, '_id.month': -1 } },
      { $limit: 12 }
    ]);

    res.status(200).json({
      success: true,
      message: 'All events fetched successfully',
      data: {
        events,
        pagination: {
          total,
          page: parseInt(page),
          totalPages: Math.ceil(total / limit),
          limit: parseInt(limit)
        },
        statistics: {
          byStatus: statsByStatus.map(stat => ({
            status: stat._id,
            count: stat.count,
            avgViews: stat.avgViews
          })),
          byType: statsByType.map(stat => ({
            type: stat._id,
            count: stat.count
          })),
          monthlyEvents: monthlyEvents.map(month => ({
            month: `${month._id.year}-${month._id.month.toString().padStart(2, '0')}`,
            status: month._id.status,
            count: month.count
          }))
        }
      }
    });

  } catch (error) {
    console.error('Error fetching all events:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Approve an event by ID
// @route   PUT /api/events/admin/approve/:id
// @access  Private (Admin only)
export const approveEvent = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid event ID'
      });
    }

    // Find the event
    const event = await Event.findById(id).populate("createdBy", "name email");

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found'
      });
    }

    // Check if already approved
    if (event.status === 'published') {
      return res.status(400).json({
        success: false,
        message: 'Event is already approved'
      });
    }

    // Update event status
    event.status = "published";
    event.rejectionNote = null;
    event.updatedAt = new Date();
    await event.save();

    // Send approval email to event creator
    if (event.createdBy?.email) {
      try {
        await sendMail({
          to: event.createdBy.email,
          subject: "🎉 Your Event Has Been Approved!",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #4CAF50;">Congratulations!</h2>
              <p>Your event <strong>"${event.title}"</strong> has been approved and is now live on our platform.</p>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <p><strong>Event Details:</strong></p>
                <p>📅 Date: ${new Date(event.startDate).toLocaleDateString()}</p>
                <p>📍 Location: ${event.city}, ${event.location}</p>
                <p>🔗 You can view your event here: [Event Link]</p>
              </div>
              <p>Thank you for sharing your event with our community!</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
              <p style="color: #666; font-size: 12px;">
                This is an automated message. Please do not reply to this email.
              </p>
            </div>
          `
        });
      } catch (emailError) {
        console.error('Error sending approval email:', emailError);
        // Continue even if email fails
      }
    }

    res.status(200).json({
      success: true,
      message: 'Event approved successfully',
      data: event
    });

  } catch (error) {
    console.error('Error approving event:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to approve event',
      error: error.message
    });
  }
};

// @desc    Reject an event by ID
// @route   PUT /api/events/admin/reject/:id
// @access  Private (Admin only)
export const rejectEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { rejectionNote } = req.body;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid event ID'
      });
    }

    // Validate rejection note
    if (!rejectionNote || rejectionNote.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Rejection note is required'
      });
    }

    if (rejectionNote.trim().length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Rejection note must be at least 10 characters'
      });
    }

    // Find the event
    const event = await Event.findById(id).populate("createdBy", "name email");

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found'
      });
    }

    // Check if already rejected
    if (event.status === 'rejected') {
      return res.status(400).json({
        success: false,
        message: 'Event is already rejected'
      });
    }

    // Update event status
    event.status = "rejected";
    event.rejectionNote = rejectionNote.trim();
    event.updatedAt = new Date();
    await event.save();

    // Send rejection email to event creator
    if (event.createdBy?.email) {
      try {
        await sendMail({
          to: event.createdBy.email,
          subject: "❌ Your Event Submission Needs Revisions",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #dc3545;">Event Submission Update</h2>
              <p>We've reviewed your event <strong>"${event.title}"</strong> and it requires some revisions before it can be published.</p>
              
              <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #ffc107;">
                <p><strong>📝 Admin Feedback:</strong></p>
                <p style="font-style: italic;">"${rejectionNote}"</p>
              </div>
              
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <p><strong>Next Steps:</strong></p>
                <ol>
                  <li>Review the feedback above</li>
                  <li>Edit your event submission</li>
                  <li>Resubmit for review</li>
                </ol>
              </div>
              
              <p>You can edit your event from your dashboard and resubmit it for review.</p>
              
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
              <p style="color: #666; font-size: 12px;">
                This is an automated message. Please do not reply to this email.
              </p>
            </div>
          `
        });
      } catch (emailError) {
        console.error('Error sending rejection email:', emailError);
        // Continue even if email fails
      }
    }

    res.status(200).json({
      success: true,
      message: 'Event rejected successfully',
      data: event
    });

  } catch (error) {
    console.error('Error rejecting event:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to reject event',
      error: error.message
    });
  }
};

// @desc    Get all users
// @route   GET /api/events/admin/users
// @access  Private (Admin only)
export const getAllUsers = async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 20,
      search = '',
      role = '',
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Build query
    const query = { 
      isDeleted: false 
    };

    // Add search functionality
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    // Filter by role
    if (role && role !== 'all') {
      if (role === 'admin') {
        query.isAdmin = true;
      } else if (role === 'user') {
        query.isAdmin = false;
      }
    }

    // Sort configuration
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    // Execute query with pagination
    const users = await EventUser.find(query)
      .select('-password -__v -isDeleted -deletedAt')
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .lean();

    // Get total count
    const total = await EventUser.countDocuments(query);

    // Get user statistics
    const userStats = await EventUser.aggregate([
      { $match: { isDeleted: false } },
      { 
        $group: {
          _id: null,
          totalUsers: { $sum: 1 },
          adminCount: { $sum: { $cond: [{ $eq: ['$isAdmin', true] }, 1, 0] } },
          regularUserCount: { $sum: { $cond: [{ $eq: ['$isAdmin', false] }, 1, 0] } }
        }
      }
    ]);

    // Get events count per user
    const eventsByUser = await Event.aggregate([
      { $match: { isDeleted: false } },
      {
        $group: {
          _id: "$createdBy",
          totalEvents: { $sum: 1 },
          publishedEvents: { $sum: { $cond: [{ $eq: ['$status', 'published'] }, 1, 0] } },
          pendingEvents: { $sum: { $cond: [{ $eq: ['$status', 'pending'] }, 1, 0] } },
          rejectedEvents: { $sum: { $cond: [{ $eq: ['$status', 'rejected'] }, 1, 0] } },
          totalViews: { $sum: '$views' }
        }
      }
    ]);

    // Combine user data with event statistics
    const usersWithStats = users.map(user => {
      const userEvents = eventsByUser.find(e => e._id?.toString() === user._id.toString());
      return {
        ...user,
        statistics: {
          totalEvents: userEvents?.totalEvents || 0,
          publishedEvents: userEvents?.publishedEvents || 0,
          pendingEvents: userEvents?.pendingEvents || 0,
          rejectedEvents: userEvents?.rejectedEvents || 0,
          totalViews: userEvents?.totalViews || 0
        }
      };
    });

    res.status(200).json({
      success: true,
      message: 'Users fetched successfully',
      data: {
        users: usersWithStats,
        pagination: {
          total,
          page: parseInt(page),
          totalPages: Math.ceil(total / limit),
          limit: parseInt(limit)
        },
        statistics: userStats[0] || {
          totalUsers: 0,
          adminCount: 0,
          regularUserCount: 0
        }
      }
    });

  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Delete a user (soft delete)
// @route   DELETE /api/events/admin/users/:id
// @access  Private (Admin only)
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid user ID'
      });
    }

    // Prevent deleting yourself
    if (id === req.user._id.toString()) {
      return res.status(400).json({
        success: false,
        message: 'You cannot delete your own account'
      });
    }

    // Find the user
    const user = await EventUser.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // PERMANENTLY delete only the user from database
    // Events will remain in database with the user's ID in createdBy field
    const deletedUser = await EventUser.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: 'Failed to delete user'
      });
    }

    // Get count of events created by this user (for informational purposes)
    const userEventCount = await Event.countDocuments({ createdBy: id });

    res.status(200).json({
      success: true,
      message: 'User deleted successfully. Events remain in the system.',
      data: {
        userId: user._id,
        email: user.email,
        name: user.name,
        eventsCount: userEventCount, // Number of events still associated with this user
        deletedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete user',
      error: error.message
    });
  }
};

// @desc    Get admin dashboard statistics
// @route   GET /api/events/admin/stats
// @access  Private (Admin only)
export const getAdminStats = async (req, res) => {
  try {
    // Get user statistics
    const userStats = await EventUser.aggregate([
      { $match: { isDeleted: false } },
      { 
        $group: {
          _id: null,
          totalUsers: { $sum: 1 },
          adminCount: { $sum: { $cond: [{ $eq: ['$isAdmin', true] }, 1, 0] } },
          regularUserCount: { $sum: { $cond: [{ $eq: ['$isAdmin', false] }, 1, 0] } }
        }
      }
    ]);

    // Get event statistics
    const eventStats = await Event.aggregate([
      { $match: { isDeleted: false } },
      { 
        $group: {
          _id: '$status',
          count: { $sum: 1 },
          views: { $sum: '$views' }
        }
      }
    ]);

    // Format event stats
    const statsByStatus = {
      pending: 0,
      published: 0,
      rejected: 0,
      totalViews: 0
    };

    eventStats.forEach(stat => {
      statsByStatus[stat._id] = stat.count;
      statsByStatus.totalViews += stat.views || 0;
    });

    // Get recent events (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const recentEvents = await Event.countDocuments({
      createdAt: { $gte: sevenDaysAgo },
      isDeleted: false
    });

    // Get pending events that need immediate attention (older than 3 days)
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

    const oldPendingEvents = await Event.countDocuments({
      status: 'pending',
      createdAt: { $lt: threeDaysAgo },
      isDeleted: false
    });

    // Get top events by views
    const topEvents = await Event.find({ 
      status: 'published',
      isDeleted: false 
    })
    .sort({ views: -1 })
    .limit(5)
    .select('title views createdBy')
    .populate('createdBy', 'name')
    .lean();

    // Get events by month for the last 6 months
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const monthlyEvents = await Event.aggregate([
      { 
        $match: { 
          createdAt: { $gte: sixMonthsAgo },
          isDeleted: false 
        } 
      },
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' }
          },
          total: { $sum: 1 },
          published: { $sum: { $cond: [{ $eq: ['$status', 'published'] }, 1, 0] } },
          pending: { $sum: { $cond: [{ $eq: ['$status', 'pending'] }, 1, 0] } }
        }
      },
      { $sort: { '_id.year': 1, '_id.month': 1 } }
    ]);

    res.status(200).json({
      success: true,
      message: 'Admin statistics fetched successfully',
      data: {
        users: userStats[0] || {
          totalUsers: 0,
          adminCount: 0,
          regularUserCount: 0
        },
        events: {
          total: statsByStatus.pending + statsByStatus.published + statsByStatus.rejected,
          pending: statsByStatus.pending,
          published: statsByStatus.published,
          rejected: statsByStatus.rejected,
          totalViews: statsByStatus.totalViews
        },
        recentActivity: {
          eventsLast7Days: recentEvents,
          oldPendingEvents,
          approvalRate: statsByStatus.published > 0 ? 
            Math.round((statsByStatus.published / (statsByStatus.published + statsByStatus.rejected)) * 100) : 0
        },
        topEvents,
        monthlyEvents: monthlyEvents.map(month => ({
          month: `${month._id.year}-${month._id.month.toString().padStart(2, '0')}`,
          total: month.total,
          published: month.published,
          pending: month.pending
        }))
      }
    });

  } catch (error) {
    console.error('Error fetching admin stats:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Get single event details (admin view)
// @route   GET /api/events/admin/event/:id
// @access  Private (Admin only)
export const getEventDetails = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid event ID'
      });
    }

    const event = await Event.findById(id)
      .populate("createdBy", "name email _id isAdmin")
      .select('-__v -isDeleted -deletedAt')
      .lean();

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found'
      });
    }

    // Get similar events by same user
    const similarEvents = await Event.find({
      createdBy: event.createdBy._id,
      _id: { $ne: event._id },
      isDeleted: false
    })
    .limit(5)
    .select('title status createdAt')
    .sort({ createdAt: -1 })
    .lean();

    res.status(200).json({
      success: true,
      message: 'Event details fetched successfully',
      data: {
        event,
        similarEvents,
        userStats: {
          totalEvents: await Event.countDocuments({ createdBy: event.createdBy._id, isDeleted: false }),
          publishedEvents: await Event.countDocuments({ 
            createdBy: event.createdBy._id, 
            status: 'published',
            isDeleted: false 
          }),
          approvalRate: await Event.countDocuments({ createdBy: event.createdBy._id, isDeleted: false }).then(total => {
            const published = event.createdBy.totalEvents || 0;
            return total > 0 ? Math.round((published / total) * 100) : 0;
          })
        }
      }
    });

  } catch (error) {
    console.error('Error fetching event details:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};
// controllers/eventController.js

// Get specific pending event by ID (for admin review)
export const getPendingEventById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid event ID'
      });
    }

    // Find event - only pending and not deleted
    const event = await Event.findOne({
      _id: id,
      status: 'pending',
      isDeleted: false
    })
    .populate('createdBy', 'name email phone profilePicture')
    .select('-__v -isDeleted -deletedAt')
    .lean();

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Pending event not found. It may have been reviewed, deleted, or already published.'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Pending event fetched successfully',
      data: event
    });

  } catch (error) {
    console.error('Error fetching pending event:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching event',
      error: error.message
    });
  }
};