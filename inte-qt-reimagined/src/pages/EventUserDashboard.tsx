// src/pages/EventUser/Dashboard.tsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Tag, 
  AlertTriangle, 
  CheckCircle2, 
  Link as LinkIcon, 
  LogOut,
  FileText,
  Eye,
  Upload,
  Clock,
  AlertCircle,
  RefreshCw,
  Plus,
  Edit,
  Trash2,
  BarChart3,
  Menu,
  X,
  Loader2,
  TrendingUp,
  Filter,
  Search,
  ChevronLeft,
  ChevronRight,
  Lock,
  EyeOff
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

const API_BASE = import.meta.env.DEV
  ? "http://localhost:5000"
  : "https://inteqt.onrender.com";

function looksLikeUrl(s: string) {
  if (!s) return false;
  try {
    const u = new URL(s);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

function isVideoFile(f?: File | null) {
  return !!(f && f.type && f.type.startsWith("video"));
}

function isGifFile(f?: File | null) {
  return !!(f && f.type && f.type === "image/gif");
}

function revokeIfBlobUrl(url?: string | null) {
  if (!url) return;
  try {
    if (url.startsWith("blob:")) URL.revokeObjectURL(url);
  } catch (e) {
    // ignore
  }
}

interface Event {
  _id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  city: string;
  type: string;
  tags: string[];
  status: 'pending' | 'published' | 'rejected';
  views: number;
  createdAt: string;
  updatedAt: string;
  rejectionNote?: string;
  mediaType?: string;
  introMedia?: string;
  linkedPostUrl?: string;
}

interface PaginatedResponse {
  success: boolean;
  message: string;
  data: {
    events: Event[];
    pagination: {
      total: number;
      page: number;
      totalPages: number;
      limit: number;
    };
    stats?: {
      pending: number;
      published: number;
      rejected: number;
    };
    upcomingEvents?: Event[];
    warning?: any;
    rejectionStats?: any[];
  };
}

interface StatsResponse {
  success: boolean;
  message: string;
  data: {
    counts: {
      total: number;
      published: number;
      pending: number;
      rejected: number;
    };
    recentEvents: Event[];
    upcomingEvents: Event[];
    views: {
      totalViews: number;
      avgViews: number;
      maxViews: number;
    };
    monthlySubmissions: any[];
    approvalRate: number;
  };
}

interface ChangePasswordForm {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

// Separate ChangePasswordModal component
const ChangePasswordModal = ({ 
  isOpen, 
  onClose,
  token 
}: { 
  isOpen: boolean;
  onClose: () => void;
  token: string | null;
}) => {
  const [changePasswordData, setChangePasswordData] = useState<ChangePasswordForm>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [changePasswordLoading, setChangePasswordLoading] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordSuccess, setPasswordSuccess] = useState<string | null>(null);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Refs for input fields to maintain focus
  const currentPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const handleChangePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError(null);
    setPasswordSuccess(null);

    // Validation
    if (!changePasswordData.currentPassword.trim()) {
      setPasswordError('Current password is required');
      return;
    }
    if (!changePasswordData.newPassword.trim()) {
      setPasswordError('New password is required');
      return;
    }
    if (changePasswordData.newPassword.length < 6) {
      setPasswordError('New password must be at least 6 characters long');
      return;
    }
    if (changePasswordData.newPassword !== changePasswordData.confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }
    if (changePasswordData.currentPassword === changePasswordData.newPassword) {
      setPasswordError('New password must be different from current password');
      return;
    }

    try {
      setChangePasswordLoading(true);

      const response = await fetch(`${API_BASE}/api/events/user/change-password`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          currentPassword: changePasswordData.currentPassword,
          newPassword: changePasswordData.newPassword
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to change password');
      }

      if (data.success) {
        setPasswordSuccess('Password changed successfully!');
        // Reset form
        setChangePasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
        // Clear success message after 3 seconds
        setTimeout(() => {
          setPasswordSuccess(null);
          onClose();
        }, 3000);
      } else {
        throw new Error(data.message || 'Failed to change password');
      }
    } catch (err: any) {
      console.error('Change password error:', err);
      setPasswordError(err.message || 'Failed to change password. Please try again.');
    } finally {
      setChangePasswordLoading(false);
    }
  };

  const handleClose = () => {
    setChangePasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    setPasswordError(null);
    setPasswordSuccess(null);
    onClose();
  };

  // Handle input changes without losing focus
  const handleInputChange = (field: keyof ChangePasswordForm, value: string) => {
    setChangePasswordData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-2xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Change Password</h3>
              <p className="text-sm text-muted-foreground">Update your account password</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleChangePasswordSubmit} className="space-y-4">
          {/* Current Password */}
          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">
              Current Password
            </label>
            <div className="relative">
              <input
                ref={currentPasswordRef}
                type={showCurrentPassword ? "text" : "password"}
                value={changePasswordData.currentPassword}
                onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                className="w-full px-3 py-2.5 border border-border bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 pr-10"
                placeholder="Enter current password"
              />
              <button
                type="button"
                onClick={() => {
                  setShowCurrentPassword(!showCurrentPassword);
                  // Maintain focus after toggle
                  setTimeout(() => currentPasswordRef.current?.focus(), 0);
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">
              New Password
            </label>
            <div className="relative">
              <input
                ref={newPasswordRef}
                type={showNewPassword ? "text" : "password"}
                value={changePasswordData.newPassword}
                onChange={(e) => handleInputChange('newPassword', e.target.value)}
                className="w-full px-3 py-2.5 border border-border bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 pr-10"
                placeholder="Enter new password (min 6 characters)"
                minLength={6}
              />
              <button
                type="button"
                onClick={() => {
                  setShowNewPassword(!showNewPassword);
                  // Maintain focus after toggle
                  setTimeout(() => newPasswordRef.current?.focus(), 0);
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                ref={confirmPasswordRef}
                type={showConfirmPassword ? "text" : "password"}
                value={changePasswordData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className="w-full px-3 py-2.5 border border-border bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 pr-10"
                placeholder="Confirm new password"
                minLength={6}
              />
              <button
                type="button"
                onClick={() => {
                  setShowConfirmPassword(!showConfirmPassword);
                  // Maintain focus after toggle
                  setTimeout(() => confirmPasswordRef.current?.focus(), 0);
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {passwordError && (
            <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/40">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <p className="text-sm text-destructive">{passwordError}</p>
              </div>
            </div>
          )}

          {/* Success Message */}
          {passwordSuccess && (
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/40">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <p className="text-sm text-emerald-500">{passwordSuccess}</p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              disabled={changePasswordLoading}
              className="flex-1 px-4 py-2.5 border border-border text-foreground rounded-lg hover:bg-accent transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={changePasswordLoading}
              className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {changePasswordLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Changing...
                </>
              ) : (
                'Change Password'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Main Dashboard Component
const EventUserDashboard = () => {
  const navigate = useNavigate();
  const { eventUser, token, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Dashboard states
  const [stats, setStats] = useState<StatsResponse['data']>({
    counts: { total: 0, published: 0, pending: 0, rejected: 0 },
    recentEvents: [],
    upcomingEvents: [],
    views: { totalViews: 0, avgViews: 0, maxViews: 0 },
    monthlySubmissions: [],
    approvalRate: 0
  });
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState({
    stats: true,
    events: true,
    form: false
  });
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    totalPages: 1,
    limit: 10
  });

  // Form states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [eventType, setEventType] = useState("meeting");
  const [tags, setTags] = useState("");
  
  // Media handling
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [mediaUrl, setMediaUrl] = useState<string>("");
  const [mediaType, setMediaType] = useState<string>("none");
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const [isVideo, setIsVideo] = useState(false);
  const [isGif, setIsGif] = useState(false);
  
  // Linked post URL
  const [linkedPostUrl, setLinkedPostUrl] = useState("");

  // Change Password states
  const [showChangePassword, setShowChangePassword] = useState(false);

  // UI states
  const [formLoading, setFormLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"create" | "all" | "published" | "pending" | "rejected">("create");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Event type options
  const eventTypes = [
    { value: "conference", label: "Conference" },
    { value: "workshop", label: "Workshop" },
    { value: "meeting", label: "Meeting" },
    { value: "seminar", label: "Seminar" },
    { value: "networking", label: "Networking" },
    { value: "webinar", label: "Webinar" },
    { value: "hackathon", label: "Hackathon" },
    { value: "other", label: "Other" },
  ];

  // Media type options
  const mediaTypes = [
    { value: "none", label: "None" },
    { value: "image", label: "Image" },
    { value: "video", label: "Video" },
    { value: "gif", label: "GIF" },
  ];

  // Check authentication on component mount
  useEffect(() => {
    if (!token || !eventUser) {
      navigate("/login");
    } else {
      fetchStats();
      if (activeTab !== "create") {
        fetchEvents();
      }
    }
  }, [token, eventUser, navigate]);

  // Fetch events when active tab changes
  useEffect(() => {
    if (activeTab !== "create" && token) {
      fetchEvents();
    }
  }, [activeTab, token]);

  // Auto-detect media type from file
  useEffect(() => {
    if (mediaFile) {
      if (isVideoFile(mediaFile)) {
        setMediaType("video");
        setIsVideo(true);
        setIsGif(false);
      } else if (isGifFile(mediaFile)) {
        setMediaType("gif");
        setIsVideo(false);
        setIsGif(true);
      } else {
        setMediaType("image");
        setIsVideo(false);
        setIsGif(false);
      }
    } else if (mediaUrl) {
      // If URL is provided, default to image type for preview
      if (!mediaType || mediaType === "none") {
        setMediaType("image");
      }
    }
  }, [mediaFile, mediaUrl]);

  // API: Fetch user statistics
  const fetchStats = async () => {
    try {
      setLoading(prev => ({ ...prev, stats: true }));
      const response = await fetch(`${API_BASE}/api/events/user/stats`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data: StatsResponse = await response.json();
        if (data.success) {
          setStats(data.data);
        }
      }
    } catch (error) {
      console.error('Error fetching user stats:', error);
      setError('Failed to load statistics');
    } finally {
      setLoading(prev => ({ ...prev, stats: false }));
    }
  };

  // API: Fetch events based on active tab
  const fetchEvents = async (page = 1) => {
    try {
      setLoading(prev => ({ ...prev, events: true }));
      
      let endpoint = '';
      switch (activeTab) {
        case 'all':
          endpoint = `${API_BASE}/api/events/user/all?page=${page}&limit=10${searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ''}${filterType !== 'all' ? `&type=${filterType}` : ''}`;
          break;
        case 'published':
          endpoint = `${API_BASE}/api/events/user/published?page=${page}&limit=10${searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ''}${filterType !== 'all' ? `&type=${filterType}` : ''}`;
          break;
        case 'pending':
          endpoint = `${API_BASE}/api/events/user/pending?page=${page}&limit=10${searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ''}${filterType !== 'all' ? `&type=${filterType}` : ''}`;
          break;
        case 'rejected':
          endpoint = `${API_BASE}/api/events/user/rejected?page=${page}&limit=10${searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ''}${filterType !== 'all' ? `&type=${filterType}` : ''}`;
          break;
        default:
          endpoint = `${API_BASE}/api/events/user/all?page=${page}&limit=10`;
      }

      const response = await fetch(endpoint, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data: PaginatedResponse = await response.json();
        if (data.success) {
          setEvents(data.data.events);
          setPagination(data.data.pagination);
        }
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Failed to load events');
    } finally {
      setLoading(prev => ({ ...prev, events: false }));
    }
  };

  const validate = () => {
    if (!title.trim()) return "Title is required.";
    if (!description.trim()) return "Description is required.";
    if (!startDate) return "Start date is required.";
    if (!endDate) return "End date is required.";
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (end <= start) return "End date must be after start date.";
    
    if (!location.trim()) return "Location is required.";
    if (!city.trim()) return "City is required.";
    
    // Validate media
    if (mediaType !== "none" && !mediaFile && !mediaUrl) {
      return "Media file or URL is required when media type is selected.";
    }
    
    // Validate linked post URL if provided
    if (linkedPostUrl && !looksLikeUrl(linkedPostUrl)) {
      return "Linked post URL is not valid.";
    }

    return null;
  };

  // Handle file selection
  const handleFile = (f: File | null) => {
    // Clean up previous blob URL
    if (mediaPreview && mediaPreview.startsWith("blob:")) {
      revokeIfBlobUrl(mediaPreview);
    }

    setMediaFile(f);

    if (!f) {
      setMediaPreview(null);
      return;
    }

    const url = URL.createObjectURL(f);
    setMediaPreview(url);
    setMediaUrl(""); // Clear URL when file is selected
  };

  // Handle URL change
  const handleUrlChange = (url: string) => {
    setMediaUrl(url);
    
    // Clean up previous blob URL
    if (mediaPreview && mediaPreview.startsWith("blob:")) {
      revokeIfBlobUrl(mediaPreview);
    }
    
    if (!url) {
      setMediaPreview(null);
      setMediaFile(null);
      if (mediaType === "none") {
        setMediaType("none");
      }
      return;
    }
    
    setMediaPreview(url);
    setMediaFile(null);
    // If media type is still none, set it to image
    if (mediaType === "none") {
      setMediaType("image");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setFormLoading(true);

    try {
      if (!token) {
        throw new Error("Authentication required. Please login again.");
      }

      // Create form data
      const formData = new FormData();
      formData.append('title', title.trim());
      formData.append('description', description.trim());
      formData.append('startDate', new Date(startDate).toISOString());
      formData.append('endDate', new Date(endDate).toISOString());
      formData.append('location', location.trim());
      formData.append('city', city.trim());
      formData.append('type', eventType);
      formData.append('mediaType', mediaType);
      
      if (tags.trim()) {
        formData.append('tags', tags);
      }
      
      if (linkedPostUrl.trim()) {
        formData.append('linkedPostUrl', linkedPostUrl.trim());
      }
      
      if (mediaUrl.trim() && mediaType !== 'none') {
        formData.append('introMedia', mediaUrl.trim());
      }

      // If file is uploaded
      if (mediaFile && mediaType !== 'none') {
        formData.append('media', mediaFile);
      }

      // Send request to the correct API endpoint
      const response = await fetch(`${API_BASE}/api/events/create`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to create event');
      }

      setSubmitted(true);
      revokeIfBlobUrl(mediaPreview);

      // Reset form
      setTitle("");
      setDescription("");
      setStartDate("");
      setEndDate("");
      setLocation("");
      setCity("");
      setEventType("meeting");
      setTags("");
      setMediaFile(null);
      setMediaUrl("");
      setMediaType("none");
      setMediaPreview(null);
      setLinkedPostUrl("");

      // Refresh stats and events
      fetchStats();
      setActiveTab("all");

      setTimeout(() => setSubmitted(false), 3000);

    } catch (err: any) {
      console.error('Submit error:', err);
      setError(err.message || 'Something went wrong');
    } finally {
      setFormLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      published: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      rejected: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    };
    return colors[status] || 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
  };

  const getStatusIcon = (status: string) => {
    const icons: Record<string, React.ReactNode> = {
      pending: <Clock className="h-4 w-4" />,
      published: <CheckCircle2 className="h-4 w-4" />,
      rejected: <AlertCircle className="h-4 w-4" />
    };
    return icons[status] || <FileText className="h-4 w-4" />;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchEvents(1);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= pagination.totalPages) {
      fetchEvents(page);
    }
  };

  // Show loading while checking auth
  if (!eventUser) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-card border-b border-border px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg text-foreground hover:bg-accent"
        >
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <h1 className="text-xl font-semibold">Event User Dashboard</h1>
        <div className="w-10"></div>
      </div>

      <div className="flex pt-16 lg:pt-0">
        {/* Sidebar */}
        <div className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-card border-r border-border transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:inset-auto lg:min-h-screen
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="h-full flex flex-col">
            {/* Logo/Brand */}
            <div className="p-6 border-b border-border">
              <h2 className="text-2xl font-bold">Event Portal</h2>
              <p className="text-sm text-muted-foreground mt-1">User Dashboard</p>
              
              {/* User Info */}
              {eventUser && (
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium truncate">
                        {eventUser.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {eventUser.email}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
              <button
                onClick={() => {
                  setActiveTab("create");
                  setSidebarOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors ${
                  activeTab === "create" 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <Plus className="h-5 w-5" />
                <span className="font-medium">Create Event</span>
              </button>
              
              <button
                onClick={() => {
                  setActiveTab("all");
                  setSidebarOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors ${
                  activeTab === "all" 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <Calendar className="h-5 w-5" />
                <span className="font-medium">All Events</span>
                <span className="ml-auto bg-accent text-foreground text-xs font-medium px-2 py-1 rounded-full">
                  {stats.counts.total}
                </span>
              </button>

              <button
                onClick={() => {
                  setActiveTab("published");
                  setSidebarOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors ${
                  activeTab === "published" 
                    ? "bg-green-500 text-white" 
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-medium">Published</span>
                <span className="ml-auto bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                  {stats.counts.published}
                </span>
              </button>

              <button
                onClick={() => {
                  setActiveTab("pending");
                  setSidebarOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors ${
                  activeTab === "pending" 
                    ? "bg-yellow-500 text-white" 
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <Clock className="h-5 w-5" />
                <span className="font-medium">Pending</span>
                <span className="ml-auto bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                  {stats.counts.pending}
                </span>
              </button>

              <button
                onClick={() => {
                  setActiveTab("rejected");
                  setSidebarOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors ${
                  activeTab === "rejected" 
                    ? "bg-red-500 text-white" 
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <AlertCircle className="h-5 w-5" />
                <span className="font-medium">Rejected</span>
                <span className="ml-auto bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                  {stats.counts.rejected}
                </span>
              </button>

              {/* Stats Section */}
              <div className="pt-4 mt-4 border-t border-border">
                <p className="px-4 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Quick Stats</p>
                <div className="space-y-2">
                  <div className="px-4 py-2 rounded-lg bg-accent/50">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Total Views</span>
                      <span className="font-semibold">{stats.views.totalViews}</span>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-blue-500/10">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-600">Approval Rate</span>
                      <span className="font-semibold text-blue-600">{stats.approvalRate}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* Logout and Change Password */}
            <div className="p-4 border-t border-border">
              <button
                onClick={() => {
                  setShowChangePassword(true);
                  setSidebarOpen(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-3 text-primary hover:bg-primary/10 rounded-xl transition-colors mb-2"
              >
                <Lock className="h-5 w-5" />
                <span className="font-medium">Change Password</span>
              </button>

              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full px-4 py-3 text-destructive hover:bg-destructive/10 rounded-xl transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <div className="p-4 md:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                  <h1 className="text-2xl font-semibold md:text-3xl">
                    {activeTab === "create" ? "Create New Event" : 
                     activeTab === "all" ? "All Events" :
                     activeTab === "published" ? "Published Events" :
                     activeTab === "pending" ? "Pending Events" : "Rejected Events"}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    {activeTab === "create" 
                      ? "Submit your event for admin review and approval" 
                      : `View and manage your ${activeTab} events`}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {activeTab !== "create" && (
                    <form onSubmit={handleSearch} className="flex items-center gap-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search events..."
                          className="pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />
                      </div>
                      <select
                        value={filterType}
                        onChange={(e) => {
                          setFilterType(e.target.value);
                          fetchEvents(1);
                        }}
                        className="px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                      >
                        <option value="all">All Types</option>
                        {eventTypes.map(type => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary/90"
                      >
                        <Search className="h-4 w-4" />
                        Search
                      </button>
                    </form>
                  )}
                  <button
                    onClick={() => {
                      if (activeTab === "create") {
                        fetchStats();
                      } else {
                        fetchEvents(pagination.page);
                      }
                    }}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Refresh
                  </button>
                  {activeTab !== "create" && (
                    <button
                      onClick={() => setActiveTab("create")}
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary/90"
                    >
                      <Plus className="h-4 w-4" />
                      New Event
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {activeTab === "create" ? (
                <div className="grid gap-6 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.1fr)]">
                  {/* Left Column - Form */}
                  <div className="rounded-3xl border border-border bg-card p-5 shadow-md md:p-6">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Title */}
                      <div>
                        <label className="mb-1 block text-sm font-medium">
                          Event Title <span className="text-destructive">*</span>
                        </label>
                        <input
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/40"
                          placeholder="Annual Tech Conference 2024"
                          required
                          maxLength={200}
                        />
                        <p className="mt-1 text-[11px] text-muted-foreground">Max 200 characters</p>
                      </div>

                      {/* Event Type and Tags */}
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="mb-1 block text-sm font-medium">
                            Event Type <span className="text-destructive">*</span>
                          </label>
                          <select
                            value={eventType}
                            onChange={(e) => setEventType(e.target.value)}
                            className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 focus:border-primary focus:ring-1 focus:ring-primary/40"
                          >
                            {eventTypes.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="mb-1 block text-sm font-medium">Tags (comma separated)</label>
                          <input
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/40"
                            placeholder="tech, networking, innovation"
                          />
                        </div>
                      </div>

                      {/* Date and Time */}
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="mb-1 block text-sm font-medium">
                            Start Date & Time <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="datetime-local"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 focus:border-primary focus:ring-1 focus:ring-primary/40"
                            required
                          />
                        </div>

                        <div>
                          <label className="mb-1 block text-sm font-medium">
                            End Date & Time <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="datetime-local"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 focus:border-primary focus:ring-1 focus:ring-primary/40"
                            required
                          />
                        </div>
                      </div>

                      {/* Location */}
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="mb-1 block text-sm font-medium">
                            City <span className="text-destructive">*</span>
                          </label>
                          <input
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/40"
                            placeholder="New York"
                            required
                          />
                        </div>

                        <div>
                          <label className="mb-1 block text-sm font-medium">
                            Location/Venue <span className="text-destructive">*</span>
                          </label>
                          <input
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/40"
                            placeholder="Convention Center, 123 Main St"
                            required
                          />
                        </div>
                      </div>

                      {/* Linked Post URL */}
                      <div>
                        <label className="mb-1 block text-sm font-medium flex items-center gap-1">
                          <LinkIcon className="h-4 w-4" />
                          Linked Post URL (Optional)
                        </label>
                        <input
                          type="url"
                          value={linkedPostUrl}
                          onChange={(e) => setLinkedPostUrl(e.target.value)}
                          className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/40"
                          placeholder="https://blog.example.com/related-post"
                        />
                        <p className="mt-1 text-[11px] text-muted-foreground">
                          Link to a related blog post, article, or external resource
                        </p>
                      </div>

                      {/* Description */}
                      <div>
                        <div className="flex items-center justify-between">
                          <label className="mb-1 block text-sm font-medium">
                            Event Description <span className="text-destructive">*</span>
                          </label>
                        </div>
                        <textarea
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          rows={6}
                          className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/40"
                          placeholder="Describe the event details, agenda, speakers, and what attendees can expect..."
                          required
                        />
                      </div>

                      {/* Media Section */}
                      <div>
                        <label className="mb-1 block text-sm font-medium">
                          Media Type
                        </label>
                        <div className="grid gap-4 md:grid-cols-2">
                          <select
                            value={mediaType}
                            onChange={(e) => {
                              setMediaType(e.target.value);
                              if (e.target.value === "none") {
                                setMediaFile(null);
                                setMediaUrl("");
                                if (mediaPreview && mediaPreview.startsWith("blob:")) {
                                  revokeIfBlobUrl(mediaPreview);
                                }
                                setMediaPreview(null);
                              }
                            }}
                            className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 focus:border-primary focus:ring-1 focus:ring-primary/40"
                          >
                            {mediaTypes.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>

                          {mediaType !== "none" && (
                            <div className="text-[11px] text-muted-foreground">
                              Select {mediaType === "video" ? "a video" : mediaType === "gif" ? "a GIF" : "an image"} file or provide URL
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Media Upload/URL */}
                      {mediaType !== "none" && (
                        <div className="grid gap-4 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-center">
                          <div>
                            <label className="mb-1 block text-sm font-medium">
                              {mediaType.charAt(0).toUpperCase() + mediaType.slice(1)} {mediaType === "video" ? "" : "File"}
                              {mediaType !== "none" && <span className="text-destructive">*</span>}
                            </label>
                            <input
                              type="file"
                              accept={mediaType === "video" ? "video/*" : mediaType === "gif" ? "image/gif" : "image/*"}
                              onChange={(e) => handleFile(e.target.files?.[0] || null)}
                              className="block w-full text-xs text-muted-foreground file:mr-3 file:rounded-full file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-primary-foreground hover:file:bg-primary/90"
                            />
                            <p className="mt-1 text-[11px] text-muted-foreground">Or use URL below</p>

                            <div className="mt-2">
                              <label className="mb-1 block text-[12px] font-medium">
                                Media URL
                              </label>
                              <input
                                value={mediaUrl}
                                onChange={(e) => handleUrlChange(e.target.value)}
                                placeholder={`https://example.com/${mediaType}.${mediaType === "video" ? "mp4" : mediaType === "gif" ? "gif" : "jpg"}`}
                                className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/40"
                              />
                            </div>
                          </div>

                          {mediaPreview && (
                            <div className="overflow-hidden rounded-2xl border border-border bg-muted">
                              {isVideo ? (
                                <video src={mediaPreview} controls className="max-h-40 w-full object-cover" />
                              ) : (
                                <img src={mediaPreview} alt="Media preview" className="max-h-40 w-full object-cover" />
                              )}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Error Display */}
                      {error && (
                        <div className="flex items-start gap-2 rounded-xl border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive">
                          <AlertTriangle className="mt-0.5 h-4 w-4" />
                          <p>{error}</p>
                        </div>
                      )}

                      {/* Success Display */}
                      {submitted && !error && (
                        <div className="flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-500">
                          <CheckCircle2 className="h-4 w-4" />
                          <p>Event submitted for review! Redirecting to your events...</p>
                        </div>
                      )}

                      {/* Submit Buttons */}
                      <div className="mt-4 flex flex-wrap gap-3">
                        <button
                          type="submit"
                          disabled={formLoading || submitted}
                          className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {formLoading ? "Submitting..." : submitted ? "Submitted" : "Submit for Review"}
                        </button>

                        <button
                          type="button"
                          onClick={() => setActiveTab("all")}
                          className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Right Column - Sidebar */}
                  <div className="space-y-4">
                    {/* User Status */}
                    <div className="rounded-3xl border border-border bg-card p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">User Status</p>
                          <p className="mt-1 text-sm text-yellow-500">Requires Admin Approval</p>
                        </div>
                        <div className="rounded-full bg-yellow-100 p-2">
                          <Clock className="h-5 w-5 text-yellow-600" />
                        </div>
                      </div>
                      <p className="mt-2 text-[11px] text-muted-foreground">
                        Your events will be reviewed by an admin before being published.
                      </p>
                    </div>

                    {/* Content Health */}
                    <div className="space-y-4 rounded-3xl border border-border bg-card p-4 shadow-sm">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Content Health</p>
                      
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Event Dates</span>
                          <span className={startDate && endDate && new Date(endDate) > new Date(startDate) ? "text-emerald-500" : "text-muted-foreground"}>
                            {startDate && endDate ? "✓ Valid" : "Required"}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Location Info</span>
                          <span className={location && city ? "text-emerald-500" : "text-muted-foreground"}>
                            {location && city ? "✓ Complete" : "Incomplete"}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Media</span>
                          <span className={
                            mediaType === "none" ? "text-gray-500" : 
                            (mediaFile || mediaUrl) ? "text-emerald-500" : 
                            "text-yellow-500"
                          }>
                            {mediaType === "none" ? "No media" : 
                              (mediaFile || mediaUrl) ? "✓ Ready" : 
                              "Need file/URL"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Event Preview */}
                    <div className="rounded-3xl border border-border bg-card p-4 shadow-sm">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Quick Preview</p>
                      
                      {title && (
                        <div className="mb-3 space-y-2">
                          <h3 className="text-sm font-medium truncate">{title}</h3>
                          <div className="flex flex-wrap gap-1">
                            <span className="inline-flex items-center gap-1 rounded-full bg-sky-100 px-2 py-0.5 text-[10px] text-sky-800">
                              <Calendar className="h-2.5 w-2.5" />
                              {startDate && new Date(startDate).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-800">
                              <MapPin className="h-2.5 w-2.5" />
                              {city}
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-2 py-0.5 text-[10px] text-purple-800">
                              <Users className="h-2.5 w-2.5" />
                              {eventType}
                            </span>
                          </div>
                        </div>
                      )}
                      
                      {!title && (
                        <p className="text-[11px] text-muted-foreground italic">Event title will appear here</p>
                      )}
                    </div>

                    {/* Tips */}
                    <div className="rounded-3xl border border-border bg-card p-4 text-xs text-muted-foreground shadow-sm">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Tips</p>
                      <ul className="list-disc space-y-1 pl-4">
                        <li>All fields with * are required</li>
                        <li>End date must be after start date</li>
                        <li>Events require admin approval</li>
                        <li>Linked post URL is optional</li>
                        <li>You'll be notified when approved</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                /* Events List Tab */
                <div className="space-y-6">
                  {/* Stats Cards */}
                  {loading.stats ? (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="rounded-2xl border border-border bg-card p-4 animate-pulse">
                          <div className="h-8 bg-accent rounded mb-2"></div>
                          <div className="h-6 bg-accent rounded"></div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="rounded-2xl border border-border bg-card p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Total Events</p>
                            <p className="text-2xl font-bold mt-1">{stats.counts.total}</p>
                          </div>
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Calendar className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-border bg-card p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Published</p>
                            <p className="text-2xl font-bold mt-1 text-emerald-600">{stats.counts.published}</p>
                          </div>
                          <div className="p-2 bg-emerald-500/10 rounded-lg">
                            <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-border bg-card p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Pending</p>
                            <p className="text-2xl font-bold mt-1 text-yellow-600">{stats.counts.pending}</p>
                          </div>
                          <div className="p-2 bg-yellow-500/10 rounded-lg">
                            <Clock className="h-6 w-6 text-yellow-600" />
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-border bg-card p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Rejected</p>
                            <p className="text-2xl font-bold mt-1 text-destructive">{stats.counts.rejected}</p>
                          </div>
                          <div className="p-2 bg-destructive/10 rounded-lg">
                            <AlertCircle className="h-6 w-6 text-destructive" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Events Table */}
                  <div className="rounded-2xl border border-border bg-card overflow-hidden">
                    <div className="px-6 py-4 border-b border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h2 className="text-lg font-semibold">
                          {activeTab === "all" ? "All Events" :
                           activeTab === "published" ? "Published Events" :
                           activeTab === "pending" ? "Pending Events" : "Rejected Events"}
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1">
                          Showing {events.length} of {pagination.total} events
                        </p>
                      </div>
                      
                      {/* Pagination */}
                      {pagination.totalPages > 1 && (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handlePageChange(pagination.page - 1)}
                            disabled={pagination.page === 1}
                            className="p-2 rounded-lg border border-border hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          <span className="text-sm text-muted-foreground">
                            Page {pagination.page} of {pagination.totalPages}
                          </span>
                          <button
                            onClick={() => handlePageChange(pagination.page + 1)}
                            disabled={pagination.page === pagination.totalPages}
                            className="p-2 rounded-lg border border-border hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </div>

                    {loading.events ? (
                      <div className="p-8 text-center">
                        <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
                        <p className="text-muted-foreground">Loading events...</p>
                      </div>
                    ) : events.length === 0 ? (
                      <div className="p-8 text-center">
                        <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="font-medium text-lg mb-2">No events found</h3>
                        <p className="text-muted-foreground mb-4">
                          {activeTab === "all" ? "You haven't created any events yet." :
                           activeTab === "published" ? "You don't have any published events." :
                           activeTab === "pending" ? "You don't have any pending events." : "You don't have any rejected events."}
                        </p>
                        <button
                          onClick={() => setActiveTab("create")}
                          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
                        >
                          <Plus className="h-4 w-4" />
                          Create New Event
                        </button>
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-accent">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Event</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Date & Time</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Location</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Views</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border">
                            {events.map((event) => (
                              <tr key={event._id} className="hover:bg-accent/50 transition-colors">
                                <td className="px-6 py-4">
                                  <div className="font-medium">{event.title}</div>
                                  <div className="text-xs text-muted-foreground mt-1 flex items-center gap-2">
                                    <span className="capitalize">{event.type}</span>
                                    {event.tags && event.tags.length > 0 && (
                                      <span className="flex items-center gap-1">
                                        <Tag className="h-3 w-3" />
                                        {event.tags.slice(0, 2).join(', ')}
                                        {event.tags.length > 2 && ` +${event.tags.length - 2}`}
                                      </span>
                                    )}
                                  </div>
                                </td>
                                <td className="px-6 py-4">
                                  <div className="text-sm">{formatDateTime(event.startDate)}</div>
                                  <div className="text-xs text-muted-foreground">
                                    to {new Date(event.endDate).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                  </div>
                                </td>
                                <td className="px-6 py-4">
                                  <div className="text-sm">{event.city}</div>
                                  <div className="text-xs text-muted-foreground truncate max-w-[120px]">
                                    {event.location}
                                  </div>
                                </td>
                                <td className="px-6 py-4">
                                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                                    {getStatusIcon(event.status)}
                                    {event.status}
                                  </span>
                                  {event.status === 'rejected' && event.rejectionNote && (
                                    <p className="text-xs text-red-500 mt-1">Reason: {event.rejectionNote}</p>
                                  )}
                                </td>
                                <td className="px-6 py-4">
                                  <div className="text-sm font-medium">{event.views || 0}</div>
                                </td>
                                <td className="px-6 py-4">
                                  <div className="flex items-center gap-2">
                                    <button
                                      onClick={() => navigate(`/event/${event._id}`)}
                                      className="p-1 text-muted-foreground hover:text-foreground"
                                      title="View Details"
                                    >
                                      <Eye className="h-4 w-4" />
                                    </button>
                                    {event.status === 'pending' && (
                                      <button
                                        className="p-1 text-muted-foreground hover:text-yellow-600"
                                        title="Edit Event"
                                      >
                                        <Edit className="h-4 w-4" />
                                      </button>
                                    )}
                                    {event.status === 'rejected' && (
                                      <button
                                        className="p-1 text-muted-foreground hover:text-destructive"
                                        title="Delete Event"
                                      >
                                        <Trash2 className="h-4 w-4" />
                                      </button>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      <ChangePasswordModal 
        isOpen={showChangePassword} 
        onClose={() => setShowChangePassword(false)}
        token={token}
      />
    </div>
  );
};

export default EventUserDashboard;