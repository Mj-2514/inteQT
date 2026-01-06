import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { 
  Eye, 
  EyeOff, 
  Lock, 
  CheckCircle, 
  XCircle, 
  FileText, 
  Plus,
  Menu,
  X,
  Loader2,
  Clock,
  AlertCircle,
  LogOut,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Search,
  Calendar,
  CheckCircle2,
  RefreshCw,
  Eye as ViewIcon,
  Users,
  Home
} from "lucide-react";

const API = import.meta.env.DEV ? "http://localhost:5000" : "https://inteqt.onrender.com";

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
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [passwordStrength, setPasswordStrength] = useState(0);

  const currentPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage({ text: "New passwords don't match", type: "error" });
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setMessage({ text: "Password must be at least 6 characters", type: "error" });
      return;
    }

    if (passwordData.oldPassword === passwordData.newPassword) {
      setMessage({ text: "New password must be different from old password", type: "error" });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API}/api/auth/change-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          oldPassword: passwordData.oldPassword,
          newPassword: passwordData.newPassword
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to change password");
      }

      setMessage({ text: "Password changed successfully!", type: "success" });
      
      setPasswordData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
      
      setTimeout(() => {
        onClose();
        setMessage({ text: "", type: "" });
      }, 2000);

    } catch (error: any) {
      setMessage({ 
        text: error.message || "Failed to change password. Please try again.", 
        type: "error" 
      });
    } finally {
      setLoading(false);
    }
  };

  const checkPasswordStrength = (password: string) => {
    let score = 0;
    if (password.length >= 6) score += 25;
    if (/[A-Z]/.test(password)) score += 25;
    if (/[0-9]/.test(password)) score += 25;
    if (/[^A-Za-z0-9]/.test(password)) score += 25;
    setPasswordStrength(score);
  };

  const handleNewPasswordChange = (value: string) => {
    setPasswordData(prev => ({ ...prev, newPassword: value }));
    checkPasswordStrength(value);
  };

  const getStrengthColor = () => {
    if (passwordStrength >= 75) return "bg-green-500";
    if (passwordStrength >= 50) return "bg-yellow-500";
    if (passwordStrength >= 25) return "bg-orange-500";
    return "bg-red-500";
  };

  const getStrengthText = () => {
    if (passwordStrength >= 75) return "Strong";
    if (passwordStrength >= 50) return "Good";
    if (passwordStrength >= 25) return "Weak";
    return "Very Weak";
  };

  const handleClose = () => {
    setPasswordData({
      oldPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
    setMessage({ text: "", type: "" });
    onClose();
  };

  const handleInputChange = (field: keyof typeof passwordData, value: string) => {
    setPasswordData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-gray-100">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Lock className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Change Password</h2>
              <p className="text-sm text-gray-600">Update your account password</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handlePasswordChange} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Current Password
            </label>
            <div className="relative">
              <input
                ref={currentPasswordRef}
                type={showOldPassword ? "text" : "password"}
                value={passwordData.oldPassword}
                onChange={(e) => handleInputChange('oldPassword', e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                placeholder="Enter current password"
                required
              />
              <button
                type="button"
                onClick={() => {
                  setShowOldPassword(!showOldPassword);
                  setTimeout(() => currentPasswordRef.current?.focus(), 0);
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showOldPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              New Password
            </label>
            <div className="relative">
              <input
                ref={newPasswordRef}
                type={showNewPassword ? "text" : "password"}
                value={passwordData.newPassword}
                onChange={(e) => handleNewPasswordChange(e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                placeholder="Enter new password (min 6 characters)"
                minLength={6}
                required
              />
              <button
                type="button"
                onClick={() => {
                  setShowNewPassword(!showNewPassword);
                  setTimeout(() => newPasswordRef.current?.focus(), 0);
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            
            {passwordData.newPassword && (
              <div className="mt-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Password Strength:</span>
                  <span className={`font-semibold ${
                    passwordStrength >= 75 ? "text-green-600" :
                    passwordStrength >= 50 ? "text-yellow-600" :
                    passwordStrength >= 25 ? "text-orange-600" : "text-red-600"
                  }`}>
                    {getStrengthText()}
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${getStrengthColor()} transition-all duration-300`}
                    style={{ width: `${passwordStrength}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                ref={confirmPasswordRef}
                type={showConfirmPassword ? "text" : "password"}
                value={passwordData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                placeholder="Confirm new password"
                minLength={6}
                required
              />
              <button
                type="button"
                onClick={() => {
                  setShowConfirmPassword(!showConfirmPassword);
                  setTimeout(() => confirmPasswordRef.current?.focus(), 0);
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            
            {passwordData.confirmPassword && (
              <div className="flex items-center gap-2 mt-2">
                {passwordData.newPassword === passwordData.confirmPassword ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600">Passwords match</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-red-600">Passwords don't match</span>
                  </>
                )}
              </div>
            )}
          </div>

          {message.text && (
            <div className={`p-3 rounded-lg ${
              message.type === "success" 
                ? "bg-green-50 text-green-700 border border-green-200" 
                : "bg-red-50 text-red-700 border border-red-200"
            }`}>
              <div className="flex items-center gap-2">
                {message.type === "success" ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <XCircle className="h-5 w-5" />
                )}
                <span className="text-sm">{message.text}</span>
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              disabled={loading}
              className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
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

        <div className="p-6 pt-0 border-t border-gray-100">
          <h3 className="text-sm font-medium mb-2 text-gray-700">Password Requirements:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
                passwordData.newPassword.length >= 6 ? "bg-green-500" : "bg-gray-300"
              }`} />
              At least 6 characters
            </li>
            <li className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
                /[A-Z]/.test(passwordData.newPassword) ? "bg-green-500" : "bg-gray-300"
              }`} />
              One uppercase letter
            </li>
            <li className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
                /[0-9]/.test(passwordData.newPassword) ? "bg-green-500" : "bg-gray-300"
              }`} />
              One number
            </li>
            <li className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
                /[^A-Za-z0-9]/.test(passwordData.newPassword) ? "bg-green-500" : "bg-gray-300"
              }`} />
              One special character
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Main UserDashboard Component
export default function UserDashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "published" | "pending" | "rejected">("all");
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    totalPages: 1,
    limit: 10
  });
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    pending: 0,
    rejected: 0,
    views: 0,
    approvalRate: 0
  });

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    } else {
      fetchBlogs();
      fetchStats();
    }
  }, [user, navigate]);

  useEffect(() => {
    if (user) {
      fetchBlogs();
    }
  }, [activeTab]);

  const fetchBlogs = async (page = 1) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      
      if (!token) {
        navigate("/auth");
        return;
      }
      
      let endpoint = `${API}/api/blogs/user`;
      
      switch(activeTab) {
        case 'published':
          endpoint += '/published';
          break;
        case 'pending':
          endpoint += '/pending';
          break;
        case 'rejected':
          endpoint += '/rejected';
          break;
        case 'all':
        default:
          endpoint += '/all';
      }
      
      const params = new URLSearchParams();
      params.append('page', page.toString());
      params.append('limit', '10');
      
      if (searchQuery) {
        params.append('search', searchQuery);
      }
      
      const response = await fetch(`${endpoint}?${params.toString()}`, {
        headers: { 
          Authorization: `Bearer ${token}` 
        },
      });
      
      if (!response.ok) {
        if (response.status === 401) {
          logout();
          navigate("/auth");
          return;
        }
        
        setBlogs([]);
        setPagination({
          total: 0,
          page: 1,
          totalPages: 1,
          limit: 10
        });
        return;
      }

      const data = await response.json();
      
      if (data.success) {
        let blogsData = [];
        
        if (Array.isArray(data.data)) {
          blogsData = data.data;
        } else if (data.data && Array.isArray(data.data.blogs)) {
          blogsData = data.data.blogs;
        } else if (Array.isArray(data.blogs)) {
          blogsData = data.blogs;
        } else if (data.data && typeof data.data === 'object') {
          const arrays = Object.values(data.data).filter(val => Array.isArray(val));
          if (arrays.length > 0) {
            blogsData = arrays[0];
          }
        }
        
        setBlogs(blogsData);
        
        let paginationData = {
          total: blogsData.length,
          page: page,
          totalPages: Math.max(1, Math.ceil(blogsData.length / 10)),
          limit: 10
        };
        
        if (data.data?.pagination) {
          paginationData = data.data.pagination;
        } else if (data.pagination) {
          paginationData = data.pagination;
        } else if (data.data?.total !== undefined) {
          paginationData = {
            total: data.data.total,
            page: data.data.page || page,
            totalPages: data.data.totalPages || Math.max(1, Math.ceil(data.data.total / 10)),
            limit: data.data.limit || 10
          };
        }
        
        setPagination(paginationData);
      } else {
        setBlogs([]);
        setPagination({
          total: 0,
          page: 1,
          totalPages: 1,
          limit: 10
        });
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setBlogs([]);
      setPagination({
        total: 0,
        page: 1,
        totalPages: 1,
        limit: 10
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");
      
      if (!token) {
        navigate("/auth");
        return;
      }
      
      const response = await fetch(`${API}/api/blogs/user/stats`, {
        headers: { 
          Authorization: `Bearer ${token}` 
        },
      });
      
      if (!response.ok) {
        if (response.status === 401) {
          logout();
          navigate("/auth");
          return;
        }
        
        calculateStatsFromBlogs();
        return;
      }

      const data = await response.json();
      
      if (data.success && data.data) {
        const statsData = data.data.counts || data.data;
        
        const newStats = {
          total: statsData.total || 0,
          published: statsData.published || statsData.approved || 0,
          pending: statsData.pending || 0,
          rejected: statsData.rejected || 0,
          views: statsData.views || statsData.totalViews || 0,
          approvalRate: statsData.approvalRate || 0
        };
        
        setStats(newStats);
      } else {
        calculateStatsFromBlogs();
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
      calculateStatsFromBlogs();
    }
  };

  const calculateStatsFromBlogs = () => {
    const statsFromBlogs = {
      total: blogs.length,
      published: blogs.filter(b => b.status === 'published' || b.status === 'approved').length,
      pending: blogs.filter(b => b.status === 'pending').length,
      rejected: blogs.filter(b => b.status === 'rejected').length,
      views: blogs.reduce((sum, blog) => sum + (blog.views || 0), 0),
      approvalRate: 0
    };
    
    if (statsFromBlogs.total > 0) {
      const approvedCount = statsFromBlogs.published;
      statsFromBlogs.approvalRate = Math.round((approvedCount / statsFromBlogs.total) * 100);
    }
    
    setStats(statsFromBlogs);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: 'bg-yellow-100 text-yellow-800',
      approved: 'bg-green-100 text-green-800',
      published: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusIcon = (status: string) => {
    const icons: Record<string, React.ReactNode> = {
      pending: <Clock className="h-4 w-4" />,
      approved: <CheckCircle2 className="h-4 w-4" />,
      published: <CheckCircle2 className="h-4 w-4" />,
      rejected: <AlertCircle className="h-4 w-4" />
    };
    return icons[status] || <FileText className="h-4 w-4" />;
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch (error) {
      return 'Invalid date';
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchBlogs(1);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= pagination.totalPages) {
      fetchBlogs(page);
    }
  };

  const handleDeleteBlog = async (blogId: string) => {
    if (!window.confirm('Are you sure you want to delete this blog? This action cannot be undone.')) {
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/auth");
        return;
      }

      const response = await fetch(`${API}/api/blogs/${blogId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.ok) {
        setBlogs(prev => prev.filter(blog => blog._id !== blogId));
        fetchStats();
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to delete blog');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete blog');
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
        >
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <h1 className="text-xl font-semibold text-gray-900">Blog Dashboard</h1>
        <div className="w-10"></div>
      </div>

      <div className="flex pt-16 lg:pt-0">
        {/* Sidebar */}
        <div className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:inset-auto lg:min-h-screen
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="h-full flex flex-col overflow-y-auto">
            <div className="p-4 md:p-6 border-b border-gray-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">Blog Portal</h2>
              <p className="text-xs md:text-sm text-gray-600 mt-1">User Dashboard</p>
              
              {user && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {user.name || user.email}
                      </p>
                      <p className="text-xs text-gray-600 truncate">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <nav className="flex-1 p-4 space-y-1">
              <button
                onClick={() => {
                  navigate("/");
                  setSidebarOpen(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors hover:bg-gray-100 hover:text-gray-900 text-gray-700 text-sm md:text-base"
              >
                <Home className="h-5 w-5 flex-shrink-0" />
                <span className="font-medium truncate">Home</span>
              </button>
              
              <button
                onClick={() => {
                  setActiveTab("all");
                  setSidebarOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors text-sm md:text-base ${
                  activeTab === "all" 
                    ? "bg-blue-600 text-white" 
                    : "hover:bg-gray-100 hover:text-gray-900 text-gray-700"
                }`}
              >
                <FileText className="h-5 w-5 flex-shrink-0" />
                <span className="font-medium truncate">All Blogs</span>
                <span className="ml-auto bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-full min-w-[2rem] flex justify-center">
                  {stats.total}
                </span>
              </button>

              <button
                onClick={() => {
                  setActiveTab("published");
                  setSidebarOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors text-sm md:text-base ${
                  activeTab === "published" 
                    ? "bg-green-500 text-white" 
                    : "hover:bg-gray-100 hover:text-gray-900 text-gray-700"
                }`}
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                <span className="font-medium truncate">Published</span>
                <span className="ml-auto bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full min-w-[2rem] flex justify-center">
                  {stats.published}
                </span>
              </button>

              <button
                onClick={() => {
                  setActiveTab("pending");
                  setSidebarOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors text-sm md:text-base ${
                  activeTab === "pending" 
                    ? "bg-yellow-500 text-white" 
                    : "hover:bg-gray-100 hover:text-gray-900 text-gray-700"
                }`}
              >
                <Clock className="h-5 w-5 flex-shrink-0" />
                <span className="font-medium truncate">Pending</span>
                <span className="ml-auto bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full min-w-[2rem] flex justify-center">
                  {stats.pending}
                </span>
              </button>

              <button
                onClick={() => {
                  setActiveTab("rejected");
                  setSidebarOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors text-sm md:text-base ${
                  activeTab === "rejected" 
                    ? "bg-red-500 text-white" 
                    : "hover:bg-gray-100 hover:text-gray-900 text-gray-700"
                }`}
              >
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                <span className="font-medium truncate">Rejected</span>
                <span className="ml-auto bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full min-w-[2rem] flex justify-center">
                  {stats.rejected}
                </span>
              </button>

              <div className="pt-4 mt-4 border-t border-gray-200">
                <p className="px-4 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Quick Stats</p>
                <div className="space-y-2">
                  <div className="px-4 py-2 rounded-lg bg-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs md:text-sm text-gray-700 truncate">Total Views</span>
                      <span className="font-semibold text-gray-900 text-sm md:text-base">{stats.views}</span>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-blue-500/10">
                    <div className="flex items-center justify-between">
                      <span className="text-xs md:text-sm text-blue-600 truncate">Approval Rate</span>
                      <span className="font-semibold text-blue-600 text-sm md:text-base">{stats.approvalRate}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            <div className="p-4 border-t border-gray-200">
              <button
                onClick={() => {
                  setShowChangePassword(true);
                  setSidebarOpen(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-3 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors mb-2 text-sm md:text-base"
              >
                <Lock className="h-5 w-5 flex-shrink-0" />
                <span className="font-medium truncate">Change Password</span>
              </button>

              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors text-sm md:text-base"
              >
                <LogOut className="h-5 w-5 flex-shrink-0" />
                <span className="font-medium truncate">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 lg:ml-0 min-w-0">
          <div className="p-4 md:p-6 lg:p-8">
            <div className="mb-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                  <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">
                    {activeTab === "all" ? "All Blogs" :
                     activeTab === "published" ? "Published Blogs" :
                     activeTab === "pending" ? "Pending Blogs" : "Rejected Blogs"}
                  </h1>
                  <p className="text-sm text-gray-600 truncate">
                    Welcome back, {user?.name || user?.email}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <form onSubmit={handleSearch} className="flex items-center gap-2 flex-1 min-w-0">
                    <div className="relative flex-1 min-w-0">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search blogs..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="sm:hidden inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700 whitespace-nowrap"
                    >
                      <Search className="h-4 w-4" />
                    </button>
                    <button
                      type="submit"
                      className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 whitespace-nowrap"
                    >
                      <Search className="h-4 w-4" />
                      Search
                    </button>
                  </form>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        fetchBlogs(pagination.page);
                        fetchStats();
                      }}
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 whitespace-nowrap"
                    >
                      <RefreshCw className="h-4 w-4" />
                      <span className="hidden sm:inline">Refresh</span>
                    </button>
                    <button
                      onClick={() => navigate("/create-blog")}
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700 whitespace-nowrap"
                    >
                      <Plus className="h-4 w-4" />
                      <span className="hidden sm:inline">New Blog</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Stats Cards - Responsive grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                <div className="rounded-xl md:rounded-2xl border-2 border-blue-500 bg-white p-3 md:p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs md:text-sm font-bold text-blue-700">Total Blogs</p>
                      <p className="text-xl md:text-2xl font-bold text-blue-900 mt-1">{stats.total}</p>
                    </div>
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileText className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="rounded-xl md:rounded-2xl border-2 border-green-500 bg-white p-3 md:p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs md:text-sm font-bold text-green-700">Published</p>
                      <p className="text-xl md:text-2xl font-bold text-green-900 mt-1">{stats.published}</p>
                    </div>
                    <div className="p-2 bg-green-100 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                    </div>
                  </div>
                </div>

                <div className="rounded-xl md:rounded-2xl border-2 border-yellow-500 bg-white p-3 md:p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs md:text-sm font-bold text-yellow-700">Pending</p>
                      <p className="text-xl md:text-2xl font-bold text-yellow-900 mt-1">{stats.pending}</p>
                    </div>
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Clock className="h-5 w-5 md:h-6 md:w-6 text-yellow-600" />
                    </div>
                  </div>
                </div>

                <div className="rounded-xl md:rounded-2xl border-2 border-red-500 bg-white p-3 md:p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs md:text-sm font-bold text-red-700">Rejected</p>
                      <p className="text-xl md:text-2xl font-bold text-red-900 mt-1">{stats.rejected}</p>
                    </div>
                    <div className="p-2 bg-red-100 rounded-lg">
                      <AlertCircle className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Blogs Table - Responsive */}
              <div className="rounded-xl md:rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="px-4 py-3 md:px-6 md:py-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 md:gap-4">
                  <div className="min-w-0">
                    <h2 className="text-base md:text-lg font-semibold text-gray-900 truncate">
                      {activeTab === "all" ? "All Blogs" :
                       activeTab === "published" ? "Published Blogs" :
                       activeTab === "pending" ? "Pending Blogs" : "Rejected Blogs"}
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 mt-1">
                      Showing {blogs.length} of {pagination.total} blogs
                    </p>
                  </div>
                  
                  {pagination.totalPages > 1 && (
                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <button
                        onClick={() => handlePageChange(pagination.page - 1)}
                        disabled={pagination.page === 1}
                        className="p-1.5 md:p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ChevronLeft className="h-4 w-4 text-gray-700" />
                      </button>
                      <span className="text-xs md:text-sm text-gray-600 whitespace-nowrap">
                        Page {pagination.page} of {pagination.totalPages}
                      </span>
                      <button
                        onClick={() => handlePageChange(pagination.page + 1)}
                        disabled={pagination.page === pagination.totalPages}
                        className="p-1.5 md:p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ChevronRight className="h-4 w-4 text-gray-700" />
                      </button>
                    </div>
                  )}
                </div>

                {loading ? (
                  <div className="p-6 md:p-8 text-center">
                    <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600">Loading blogs...</p>
                  </div>
                ) : blogs.length === 0 ? (
                  <div className="p-6 md:p-8 text-center">
                    <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="font-medium text-base md:text-lg text-gray-900 mb-2">No blogs found</h3>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">
                      {activeTab === "all" ? "You haven't created any blogs yet." :
                       activeTab === "published" ? "You don't have any published blogs." :
                       activeTab === "pending" ? "You don't have any pending blogs." : "You don't have any rejected blogs."}
                    </p>
                    {activeTab !== "rejected" && (
                      <button
                        onClick={() => navigate("/create-blog")}
                        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                      >
                        <Plus className="h-4 w-4" />
                        Create New Blog
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    {/* Mobile Cards View */}
                    <div className="lg:hidden">
                      {blogs.map((blog) => (
                        <div key={blog._id} className="border-b border-gray-200 p-4 hover:bg-gray-50">
                          <div className="space-y-3">
                            <div>
                              <h3 className="font-medium text-gray-900 truncate">{blog.title}</h3>
                              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                {blog.introduction ? blog.introduction.substring(0, 120) + (blog.introduction.length > 120 ? '...' : '') : 'No description'}
                              </p>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 items-center text-xs text-gray-600">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                <span>{formatDate(blog.createdAt)}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                <span>{blog.views || 0} views</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(blog.status)}`}>
                                {getStatusIcon(blog.status)}
                                {blog.status}
                              </span>
                              
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => navigate(`/blog/${blog.slug || blog._id}`)}
                                  className="p-1 text-gray-500 hover:text-gray-700"
                                  title="View Blog"
                                >
                                  <ViewIcon className="h-4 w-4" />
                                </button>
                                {blog.status === 'pending' && (
                                  <button
                                    className="p-1 text-gray-500 hover:text-yellow-600"
                                    title="Edit Blog"
                                    onClick={() => navigate(`/edit-blog/${blog._id}`)}
                                  >
                                    <Edit className="h-4 w-4" />
                                  </button>
                                )}
                                {(blog.status === 'rejected' || blog.status === 'pending') && (
                                  <button
                                    className="p-1 text-gray-500 hover:text-red-600"
                                    title="Delete Blog"
                                    onClick={() => handleDeleteBlog(blog._id)}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </button>
                                )}
                              </div>
                            </div>
                            
                            {blog.status === 'rejected' && blog.adminNote && (
                              <p className="text-xs text-red-500 mt-2">
                                <span className="font-semibold">Reason:</span> {blog.adminNote.substring(0, 80)}{blog.adminNote.length > 80 ? '...' : ''}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Desktop Table View */}
                    <table className="hidden lg:table w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blog</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {blogs.map((blog) => (
                          <tr key={blog._id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4">
                              <div className="font-medium text-gray-900 truncate max-w-[300px]">{blog.title}</div>
                              <div className="text-xs text-gray-500 mt-1 truncate max-w-[300px]">
                                {blog.introduction ? blog.introduction.substring(0, 100) + '...' : 'No description'}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm text-gray-900">{formatDate(blog.createdAt)}</div>
                              <div className="text-xs text-gray-500">
                                {blog.createdAt ? new Date(blog.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'N/A'}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(blog.status)}`}>
                                {getStatusIcon(blog.status)}
                                {blog.status}
                              </span>
                              {blog.status === 'rejected' && blog.adminNote && (
                                <p className="text-xs text-red-500 mt-1 truncate max-w-[200px]" title={blog.adminNote}>
                                  Reason: {blog.adminNote.substring(0, 50)}...
                                </p>
                              )}
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm font-medium text-gray-900">{blog.views || 0}</div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => navigate(`/blog/${blog.slug || blog._id}`)}
                                  className="p-1 text-gray-500 hover:text-gray-700"
                                  title="View Blog"
                                >
                                  <ViewIcon className="h-4 w-4" />
                                </button>
                                {blog.status === 'pending' && (
                                  <button
                                    className="p-1 text-gray-500 hover:text-yellow-600"
                                    title="Edit Blog"
                                    onClick={() => navigate(`/edit-blog/${blog._id}`)}
                                  >
                                    <Edit className="h-4 w-4" />
                                  </button>
                                )}
                                {(blog.status === 'rejected' || blog.status === 'pending') && (
                                  <button
                                    className="p-1 text-gray-500 hover:text-red-600"
                                    title="Delete Blog"
                                    onClick={() => handleDeleteBlog(blog._id)}
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
          </div>
        </div>
      </div>

      <ChangePasswordModal 
        isOpen={showChangePassword} 
        onClose={() => setShowChangePassword(false)}
        token={localStorage.getItem("token")}
      />
    </div>
  );
}