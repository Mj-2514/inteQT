// controllers/blogUserController.js
import Blog from '../models/blogs.js';
import User from '../models/user.js';

// Get all blogs of the logged-in user (with optional filtering)
export const getUserBlogs = async (req, res) => {
  try {
    const { status, page = 1, limit = 10, search } = req.query;
    const userId = req.user.id; // From protect middleware
    
    (`Fetching blogs for user: ${userId}, status: ${status}`);
    
    // Build query
    const query = { createdBy: userId };
    
    // Add status filter if provided
    if (status && status !== 'all') {
      query.status = status;
    }
    
    // Add search filter if provided
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { tags: { $regex: search, $options: 'i' } },
        { authorName: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    // Get total count for pagination
    const total = await Blog.countDocuments(query);
    
    // Get blogs with pagination
    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .populate('reviewedBy', 'name email')
      .lean();
    
    // Calculate status counts
    const statusCounts = await Blog.aggregate([
      { $match: { createdBy: userId } },
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);
    
    // Format status counts
    const counts = {
      total: total,
      approved: 0,
      pending: 0,
      rejected: 0
    };
    
    statusCounts.forEach(item => {
      if (item._id === 'approved') counts.approved = item.count;
      else if (item._id === 'pending') counts.pending = item.count;
      else if (item._id === 'rejected') counts.rejected = item.count;
    });
    
    res.json({
      success: true,
      message: 'Blogs retrieved successfully',
      data: {
        blogs,
        pagination: {
          total,
          page: parseInt(page),
          totalPages: Math.ceil(total / parseInt(limit)),
          limit: parseInt(limit)
        },
        counts
      }
    });
    
  } catch (error) {
    console.error('Error in getUserBlogs:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Get all blogs of the logged-in user
export const getAllUserBlogs = async (req, res) => {
  try {
    const { page = 1, limit = 10, search } = req.query;
    const userId = req.user.id; // From protect middleware
    
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const query = { createdBy: userId };
    
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { tags: { $regex: search, $options: 'i' } },
        { authorName: { $regex: search, $options: 'i' } }
      ];
    }
    
    const total = await Blog.countDocuments(query);
    
    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .populate('reviewedBy', 'name email')
      .lean();
    
    res.json({
      success: true,
      message: 'All user blogs retrieved successfully',
      data: {
        blogs,
        pagination: {
          total,
          page: parseInt(page),
          totalPages: Math.ceil(total / parseInt(limit)),
          limit: parseInt(limit)
        }
      }
    });
    
  } catch (error) {
    console.error('Error in getAllUserBlogs:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Get only published (approved) blogs of the logged-in user
export const getPublishedUserBlogs = async (req, res) => {
  try {
    const { page = 1, limit = 10, search } = req.query;
    const userId = req.user.id; // From protect middleware
    
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const query = { 
      createdBy: userId,
      status: 'approved'
    };
    
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { tags: { $regex: search, $options: 'i' } },
        { authorName: { $regex: search, $options: 'i' } }
      ];
    }
    
    const total = await Blog.countDocuments(query);
    
    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .populate('reviewedBy', 'name email')
      .lean();
    
    res.json({
      success: true,
      message: 'Published user blogs retrieved successfully',
      data: {
        blogs,
        pagination: {
          total,
          page: parseInt(page),
          totalPages: Math.ceil(total / parseInt(limit)),
          limit: parseInt(limit)
        }
      }
    });
    
  } catch (error) {
    console.error('Error in getPublishedUserBlogs:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Get only pending blogs of the logged-in user
export const getPendingUserBlogs = async (req, res) => {
  try {
    const { page = 1, limit = 10, search } = req.query;
    const userId = req.user.id; // From protect middleware
    
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const query = { 
      createdBy: userId,
      status: 'pending'
    };
    
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { tags: { $regex: search, $options: 'i' } },
        { authorName: { $regex: search, $options: 'i' } }
      ];
    }
    
    const total = await Blog.countDocuments(query);
    
    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .populate('reviewedBy', 'name email')
      .lean();
    
    res.json({
      success: true,
      message: 'Pending user blogs retrieved successfully',
      data: {
        blogs,
        pagination: {
          total,
          page: parseInt(page),
          totalPages: Math.ceil(total / parseInt(limit)),
          limit: parseInt(limit)
        }
      }
    });
    
  } catch (error) {
    console.error('Error in getPendingUserBlogs:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Get only rejected blogs of the logged-in user
export const getRejectedUserBlogs = async (req, res) => {
  try {
    const { page = 1, limit = 10, search } = req.query;
    const userId = req.user.id; // From protect middleware
    
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const query = { 
      createdBy: userId,
      status: 'rejected'
    };
    
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { tags: { $regex: search, $options: 'i' } },
        { authorName: { $regex: search, $options: 'i' } }
      ];
    }
    
    const total = await Blog.countDocuments(query);
    
    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .populate('reviewedBy', 'name email')
      .lean();
    
    res.json({
      success: true,
      message: 'Rejected user blogs retrieved successfully',
      data: {
        blogs,
        pagination: {
          total,
          page: parseInt(page),
          totalPages: Math.ceil(total / parseInt(limit)),
          limit: parseInt(limit)
        }
      }
    });
    
  } catch (error) {
    console.error('Error in getRejectedUserBlogs:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Get user blog statistics
export const getUserBlogStats = async (req, res) => {
  try {
    console.log("STATS USER:", req.user);

    if (!req.user || !req.user._id) {
      return res.status(401).json({ message: "Unauthorized access" });
    }

    const userId = new mongoose.Types.ObjectId(req.user._id);

    // Get counts by status
    const statusCounts = await Blog.aggregate([
      { $match: { createdBy: userId } },
      { $group: { _id: "$status", count: { $sum: 1 } } }
    ]);

    // Get total views
    const totalViews = await Blog.aggregate([
      { $match: { createdBy: userId } },
      { $group: { _id: null, totalViews: { $sum: "$views" } } }
    ]);

    // Convert status counts to object
    const counts = { 
      total: 0, 
      published: 0,  // Changed from "approved" to "published"
      pending: 0, 
      rejected: 0,
      views: totalViews[0]?.totalViews || 0 
    };

    // Map the aggregation results
    statusCounts.forEach(s => {
      if (s._id === "approved" || s._id === "published") {
        counts.published += s.count;
      } else if (s._id === "pending") {
        counts.pending = s.count;
      } else if (s._id === "rejected") {
        counts.rejected = s.count;
      }
      counts.total += s.count;
    });

    // Calculate approval rate
    counts.approvalRate = counts.total > 0 
      ? Math.round((counts.published / counts.total) * 100) 
      : 0;

    // Alternative: Get all counts in one query if you want to be more efficient
    const allStats = await Blog.aggregate([
      { $match: { createdBy: userId } },
      {
        $group: {
          _id: null,
          total: { $sum: 1 },
          published: {
            $sum: {
              $cond: [{ $in: ["$status", ["approved", "published"]] }, 1, 0]
            }
          },
          pending: {
            $sum: {
              $cond: [{ $eq: ["$status", "pending"] }, 1, 0]
            }
          },
          rejected: {
            $sum: {
              $cond: [{ $eq: ["$status", "rejected"] }, 1, 0]
            }
          },
          totalViews: { $sum: "$views" }
        }
      }
    ]);

    // Use the alternative aggregation if it exists
    const stats = allStats[0] || counts;

    // Ensure all required fields exist
    const result = {
      total: stats.total || 0,
      published: stats.published || 0,
      pending: stats.pending || 0,
      rejected: stats.rejected || 0,
      views: stats.totalViews || stats.views || 0,
      approvalRate: stats.total > 0 
        ? Math.round((stats.published / stats.total) * 100) 
        : 0
    };

    res.json({ 
      success: true, 
      data: result  // Return directly, not nested in "counts"
    });

  } catch (err) {
    console.error("STATS ERROR:", err);
    res.status(500).json({ 
      success: false, 
      message: "Failed to fetch stats", 
      error: err.message 
    });
  }
};

// Get single blog by ID (only if created by user)
export const getUserBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id; // From protect middleware
    
    const blog = await Blog.findOne({
      _id: id,
      createdBy: userId
    })
      .populate('reviewedBy', 'name email')
      .lean();
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found or you do not have permission to view it'
      });
    }
    
    res.json({
      success: true,
      message: 'Blog retrieved successfully',
      data: blog
    });
    
  } catch (error) {
    console.error('Error in getUserBlogById:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Update user blog (only if status is pending)
export const updateUserBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id; // From protect middleware
    const updateData = req.body;
    
    // Check if blog exists and belongs to user
    const existingBlog = await Blog.findOne({
      _id: id,
      createdBy: userId
    });
    
    if (!existingBlog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found or you do not have permission to edit it'
      });
    }
    
    // Only allow editing if blog is pending
    if (existingBlog.status !== 'pending') {
      return res.status(400).json({
        success: false,
        message: 'Only pending blogs can be edited. Contact admin if you need to modify this blog.'
      });
    }
    
    // Remove fields that shouldn't be updated
    delete updateData.status;
    delete updateData.adminNote;
    delete updateData.reviewedBy;
    delete updateData.createdBy;
    
    // Update the blog
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { 
        ...updateData,
        updatedAt: Date.now()
      },
      { new: true, runValidators: true }
    ).populate('reviewedBy', 'name email');
    
    res.json({
      success: true,
      message: 'Blog updated successfully',
      data: updatedBlog
    });
    
  } catch (error) {
    console.error('Error in updateUserBlog:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Delete user blog (only if status is pending or rejected)
export const deleteUserBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id; // From protect middleware
    
    // Check if blog exists and belongs to user
    const existingBlog = await Blog.findOne({
      _id: id,
      createdBy: userId
    });
    
    if (!existingBlog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found or you do not have permission to delete it'
      });
    }
    
    // Only allow deletion if blog is pending or rejected
    if (!['pending', 'rejected'].includes(existingBlog.status)) {
      return res.status(400).json({
        success: false,
        message: 'Only pending or rejected blogs can be deleted. Contact admin if you need to delete this blog.'
      });
    }
    
    // Delete the blog
    await Blog.findByIdAndDelete(id);
    
    res.json({
      success: true,
      message: 'Blog deleted successfully'
    });
    
  } catch (error) {
    console.error('Error in deleteUserBlog:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};