// pages/CountryAdminDashboard.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  CheckCircle, 
  XCircle, 
  Clock, 
  FileText,
  UserPlus,
  Trash2,
  Eye,
  LogOut,
  Shield,
  RefreshCw,
  AlertCircle,
  Menu,
  X,
  Search,
  Key,
  Settings,
  UserCog,
  FileSpreadsheet,
  Globe,
  Home
} from "lucide-react";
import { useCountryAuth } from "../../context/AuthContext";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"

const CountryAdminDashboard = () => {
  const { user, token, logout, isAdmin, loading: authLoading } = useCountryAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // State for change password modal
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [changingPassword, setChangingPassword] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  // Stats
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
    totalUsers: 0,
  });

  // Users
  const [users, setUsers] = useState<any[]>([]);
  const [showUserForm, setShowUserForm] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "user" as "user" | "admin"
  });

  // Submissions
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Check authentication
  useEffect(() => {
    ('=== DASHBOARD AUTH CHECK ===');
    ('authLoading:', authLoading);
    ('user:', user);
    ('isAdmin:', isAdmin);

    if (authLoading) {
      ('Auth still loading... waiting');
      return;
    }

    // Check if token exists in localStorage as fallback
    const localStorageToken = localStorage.getItem("countryToken");
    const localStorageUserStr = localStorage.getItem("countryUser");
    const localStorageUser = localStorageUserStr ? JSON.parse(localStorageUserStr) : null;
    
    // Determine effective auth state
    const effectiveToken = token || localStorageToken;
    const effectiveUser = user || localStorageUser;
    
    if (!effectiveToken || !effectiveUser) {
      ('No authentication found, redirecting to login');
      navigate("/country/login");
      return;
    }

    // Check admin status more reliably
    const userIsAdmin = effectiveUser?.role === 'admin' || effectiveUser?.isAdmin === true;
    ('Final admin check - userIsAdmin:', userIsAdmin);
    
    if (!userIsAdmin) {
      ('User is NOT admin, redirecting to user dashboard');
      navigate("/country/dashboard");
      return;
    }

    ('✅ User is admin, proceeding to fetch dashboard data');
    fetchDashboardData();
  }, [token, user, isAdmin, navigate, authLoading]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Get token from localStorage as fallback
      const effectiveToken = token || localStorage.getItem("countryToken");
      ('Fetching data with token:', effectiveToken);
      
      if (!effectiveToken) {
        ('No token for API calls');
        navigate("/country/login");
        return;
      }

      const [statsRes, usersRes, submissionsRes] = await Promise.all([
        fetch(`${API_BASE}/api/country/dashboard/admin-stats`, {
          headers: { "Authorization": `Bearer ${effectiveToken}` }
        }),
        fetch(`${API_BASE}/api/country/admin/all-users`, {
          headers: { "Authorization": `Bearer ${effectiveToken}` }
        }),
        fetch(`${API_BASE}/api/country/dashboard/all?limit=10`, {
          headers: { "Authorization": `Bearer ${effectiveToken}` }
        })
      ]);

      ('Stats response:', statsRes.status);
      ('Users response:', usersRes.status);
      ('Submissions response:', submissionsRes.status);

      if (!statsRes.ok || !usersRes.ok || !submissionsRes.ok) {
        if (statsRes.status === 401) {
          ('Unauthorized, logging out');
          logout();
          navigate("/country/login");
          return;
        }
        throw new Error("Failed to fetch dashboard data");
      }

      const [statsData, usersData, submissionsData] = await Promise.all([
        statsRes.json(),
        usersRes.json(),
        submissionsRes.json()
      ]);

      ('Stats data:', statsData);
      ('Users data count:', usersData.users?.length);
      ('Submissions data count:', submissionsData.submissions?.length);

      setStats({
        ...statsData,
        totalUsers: usersData.users?.length || 0
      });
      setUsers(usersData.users || []);
      setSubmissions(submissionsData.submissions || []);
      setFilteredSubmissions(submissionsData.submissions || []);
    } catch (err: any) {
      console.error("Error:", err);
      setError(err.message || "Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  // Handle Change Password
  const handleChangePassword = async () => {
    setPasswordError(null);
    
    if (!passwordData.oldPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      setPasswordError("All fields are required");
      return;
    }
    
    if (passwordData.newPassword.length < 6) {
      setPasswordError("New password must be at least 6 characters");
      return;
    }
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError("New passwords do not match");
      return;
    }
    
    if (passwordData.oldPassword === passwordData.newPassword) {
      setPasswordError("New password must be different from old password");
      return;
    }
    
    setChangingPassword(true);
    
    try {
      const effectiveToken = token || localStorage.getItem("countryToken");
      if (!effectiveToken) {
        setPasswordError("Authentication required");
        return;
      }
      
      const response = await fetch(`${API_BASE}/api/country/change-password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${effectiveToken}`
        },
        body: JSON.stringify({
          oldPassword: passwordData.oldPassword,
          newPassword: passwordData.newPassword
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Password change failed");
      }
      
      alert("Password changed successfully!");
      setShowChangePassword(false);
      setPasswordData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
    } catch (err: any) {
      setPasswordError(err.message || "Failed to change password");
    } finally {
      setChangingPassword(false);
    }
  };

  const handleLogout = () => {
    logout();
    window.location.href = '/country/login';
  };

  const createNewUser = async () => {
    if (!newUser.name || !newUser.email || !newUser.password) {
      alert("All fields are required!");
      return;
    }

    try {
      const effectiveToken = token || localStorage.getItem("countryToken");
      if (!effectiveToken) {
        alert("Authentication required");
        return;
      }

      const res = await fetch(`${API_BASE}/api/country/admin/create-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${effectiveToken}`
        },
        body: JSON.stringify(newUser),
      });

      const data = await res.json();
      if (res.ok) {
        alert("User created successfully!");
        setNewUser({ name: "", email: "", password: "", role: "user" });
        setShowUserForm(false);
        fetchDashboardData();
      } else {
        alert(data.message || "Failed to create user");
      }
    } catch (error) {
      alert("Error creating user");
    }
  };

  const deleteUser = async (userId: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      const effectiveToken = token || localStorage.getItem("countryToken");
      if (!effectiveToken) {
        alert("Authentication required");
        return;
      }

      const res = await fetch(`${API_BASE}/api/country/user/${userId}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${effectiveToken}` }
      });

      if (res.ok) {
        alert("User deleted successfully!");
        fetchDashboardData();
      } else {
        const data = await res.json();
        alert(data.message || "Failed to delete user");
      }
    } catch (error) {
      alert("Error deleting user");
    }
  };
  
  const toggleUserStatus = async (userId: string, currentStatus: boolean) => {
    try {
      const effectiveToken = token || localStorage.getItem("countryToken");
      if (!effectiveToken) {
        alert("Authentication required");
        return;
      }

      const res = await fetch(`${API_BASE}/api/country/users/toggle-status/${userId}`, {
        method: "PUT",
        headers: { "Authorization": `Bearer ${effectiveToken}` }
      });

      if (res.ok) {
        alert(`User ${currentStatus ? 'deactivated' : 'activated'}!`);
        fetchDashboardData();
      }
    } catch (error) {
      alert("Error updating user status");
    }
  };

  // FIXED: viewSubmissionDetails function
  const viewSubmissionDetails = (submissionSlug: string) => {
    // Navigate to detailed view
    ('Navigating to review page with slug:', submissionSlug);
    navigate(`/country/admin/submission/${submissionSlug}`);
  };

  // ADDED: reviewSubmission function
  const reviewSubmission = async (submissionId: string, status: "approved" | "rejected") => {
    if (!confirm(`Are you sure you want to ${status} this submission?`)) return;

    try {
      const effectiveToken = token || localStorage.getItem("countryToken");
      if (!effectiveToken) {
        alert("Authentication required");
        return;
      }

      const res = await fetch(`${API_BASE}/api/country/dashboard/review/${submissionId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${effectiveToken}`
        },
        body: JSON.stringify({
          status,
          rejectionNote: status === "rejected" ? "Rejected by admin" : ""
        })
      });

      if (res.ok) {
        alert(`Submission ${status} successfully!`);
        fetchDashboardData();
      } else {
        const data = await res.json();
        alert(data.message || `Failed to ${status} submission`);
      }
    } catch (error) {
      alert("Error reviewing submission");
    }
  };

  useEffect(() => {
    let filtered = [...submissions];
    if (searchTerm) {
      filtered = filtered.filter(sub => 
        sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (sub.createdBy?.name && sub.createdBy.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    if (statusFilter !== "all") {
      filtered = filtered.filter(sub => sub.status === statusFilter);
    }
    setFilteredSubmissions(filtered);
  }, [searchTerm, statusFilter, submissions]);

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-16 w-16 text-red-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
          <p className="text-gray-600 mb-4">Admin privileges required</p>
          <button
            onClick={() => window.location.href = '/country/dashboard'}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to User Dashboard
          </button>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      approved: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      rejected: 'bg-red-100 text-red-800',
      draft: 'bg-gray-100 text-gray-800'
    };
    return colors[status] || colors.draft;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Change Password Modal */}
      {showChangePassword && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Change Password</h3>
              <button
                onClick={() => {
                  setShowChangePassword(false);
                  setPasswordError(null);
                  setPasswordData({
                    oldPassword: "",
                    newPassword: "",
                    confirmPassword: ""
                  });
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                ✕
              </button>
            </div>
            
            {passwordError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                <p className="text-red-600 text-sm">{passwordError}</p>
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  value={passwordData.oldPassword}
                  onChange={(e) => setPasswordData({...passwordData, oldPassword: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  disabled={changingPassword}
                  placeholder="Enter current password"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  disabled={changingPassword}
                  placeholder="Enter new password"
                />
                <p className="text-xs text-gray-500 mt-1">Minimum 6 characters</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  disabled={changingPassword}
                  placeholder="Confirm new password"
                />
              </div>
              
              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={() => {
                    setShowChangePassword(false);
                    setPasswordError(null);
                    setPasswordData({
                      oldPassword: "",
                      newPassword: "",
                      confirmPassword: ""
                    });
                  }}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  disabled={changingPassword}
                >
                  Cancel
                </button>
                <button
                  onClick={handleChangePassword}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
                  disabled={changingPassword}
                >
                  {changingPassword ? (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                      Changing...
                    </>
                  ) : (
                    <>
                      <Key className="h-4 w-4" />
                      Change Password
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b px-4 py-3 flex items-center justify-between shadow-sm">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
        >
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>
        <div className="w-10"></div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:inset-auto lg:min-h-screen
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          shadow-xl lg:shadow-none
        `}>
          <div className="h-full flex flex-col">
            <div className="p-6 border-b">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Country Admin</h2>
                  <p className="text-sm text-gray-500">Welcome, {user?.name}</p>
                </div>
              </div>
            </div>

            <nav className="flex-1 p-4 space-y-1">
              <button className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-100">
                <LayoutDashboard className="h-5 w-5" />
                <span className="font-semibold">Dashboard</span>
              </button>
              
              <button
                onClick={() => setShowUserForm(true)}
                className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <UserPlus className="h-5 w-5" />
                <span className="font-medium">Create User</span>
              </button>
              
              <button
                onClick={() => navigate("/country/admin/users")}
                className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <UserCog className="h-5 w-5" />
                <span className="font-medium">Manage Users</span>
                <span className="ml-auto bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                  {users.length}
                </span>
              </button>
              
              <button
                onClick={() => navigate("/country/admin/submissions")}
                className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <FileSpreadsheet className="h-5 w-5" />
                <span className="font-medium">All Submissions</span>
                <span className="ml-auto bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                  {stats.total}
                </span>
              </button>
              
              
              
              
            </nav>

            <div className="p-4 border-t space-y-1">
              <button
                onClick={() => setShowChangePassword(true)}
                className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <Key className="h-5 w-5" />
                <span className="font-medium">Change Password</span>
              </button>
              
              <button
                onClick={handleLogout}
                className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span className="font-medium">Logout</span>
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
        <div className="flex-1 lg:ml-0 pt-16 lg:pt-0">
          <div className="p-4 md:p-6 lg:p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600 mt-2">Manage users and country submissions</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("/country/admin/users")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg hover:shadow-xl"
                >
                  <UserCog className="h-4 w-4" />
                  Manage Users
                </button>
                <button
                  onClick={() => navigate("/country/admin/submissions")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <FileSpreadsheet className="h-4 w-4" />
                  All Submissions
                </button>
                <button
                  onClick={fetchDashboardData}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <RefreshCw className="h-4 w-4" />
                  Refresh
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Error</h3>
                    <p className="text-red-600">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Users</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalUsers}</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <button
                  onClick={() => navigate("/country/admin/users")}
                  className="text-sm text-purple-600 hover:text-purple-800 mt-4 flex items-center gap-1"
                >
                  View all users
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Pending</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.pending}</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <button
                  onClick={() => {
                    setStatusFilter("pending");
                    navigate("/country/admin/submissions");
                  }}
                  className="text-sm text-yellow-600 hover:text-yellow-800 mt-4 flex items-center gap-1"
                >
                  Review pending
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Approved</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.approved}</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <button
                  onClick={() => {
                    setStatusFilter("approved");
                    navigate("/country/admin/submissions");
                  }}
                  className="text-sm text-green-600 hover:text-green-800 mt-4 flex items-center gap-1"
                >
                  View approved
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Rejected</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.rejected}</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
                    <XCircle className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <button
                  onClick={() => {
                    setStatusFilter("rejected");
                    navigate("/country/admin/submissions");
                  }}
                  className="text-sm text-red-600 hover:text-red-800 mt-4 flex items-center gap-1"
                >
                  View rejected
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Create User Form */}
            {showUserForm && (
              <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <UserPlus className="h-5 w-5" />
                  Create New User
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={newUser.name}
                      onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="user@inte-qt.com"
                      value={newUser.email}
                      onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={newUser.password}
                      onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                    <select
                      value={newUser.role}
                      onChange={(e) => setNewUser({...newUser, role: e.target.value as "user" | "admin"})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-black"
                    >
                      <option value="user">Regular User</option>
                      <option value="admin">Administrator</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={createNewUser}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl text-black"
                  >
                    Create User
                  </button>
                  <button
                    onClick={() => setShowUserForm(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Recent Users & Submissions Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Users */}
              <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Recent Users
                  </h2>
                  <button
                    onClick={() => navigate("/country/admin/users")}
                    className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    View All
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">User</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Role</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {users.slice(0, 5).map((u) => (
                        <tr key={u._id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4">
                            <div>
                              <div className="font-medium text-gray-900">{u.name}</div>
                              <div className="text-sm text-gray-500">{u.email}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${u.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
                              {u.role}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${u.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                              {u.isActive ? 'Active' : 'Inactive'}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <button
                                onClick={() => toggleUserStatus(u._id, u.isActive)}
                                className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
                              >
                                {u.isActive ? 'Deactivate' : 'Activate'}
                              </button>
                              <button
                                onClick={() => deleteUser(u._id)}
                                className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                                title="Delete User"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recent Submissions */}
              <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Recent Submissions
                  </h2>
                  <div className="flex gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-auto text-black"
                      />
                    </div>
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="all">All</option>
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Country</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Submitted By</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredSubmissions.slice(0, 5).map((s) => (
                        <tr key={s._id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="font-medium text-gray-900">{s.name}</div>
                            <div className="text-sm text-gray-500">{s.slug}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900">{s.createdBy?.name || 'Unknown'}</div>
                            <div className="text-xs text-gray-500">
                              {new Date(s.createdAt).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(s.status)}`}>
                              {s.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <button
                                onClick={() => viewSubmissionDetails(s.slug)}
                                className="p-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                title="View Details"
                              >
                                <Eye className="h-4 w-4" />
                              </button>
                              {s.status === 'pending' && (
                                <>
                                  <button
                                    onClick={() => reviewSubmission(s._id, 'approved')}
                                    className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
                                  >
                                    Approve
                                  </button>
                                  <button
                                    onClick={() => reviewSubmission(s._id, 'rejected')}
                                    className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
                                  >
                                    Reject
                                  </button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryAdminDashboard;
