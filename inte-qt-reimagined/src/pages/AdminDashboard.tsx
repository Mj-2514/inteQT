import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Users, 
  Trash2,
  LogOut,
  Menu,
  X,
  TrendingUp, 
  Calendar, 
  AlertCircle, 
  Download, 
  RefreshCw,
  Loader2,
  Plus,
  Edit,
  Eye,
  Send,
  UserPlus,
  FilePlus
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

const API_BASE = import.meta.env.DEV ? "http://localhost:5000" : "https://inteqt.onrender.com";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  // Overview states
  const [stats, setStats] = useState({
    totalBlogs: 0,
    pendingBlogs: 0,
    approvedBlogs: 0,
    rejectedBlogs: 0,
    totalUsers: 0,
    activeUsers: 0,
    deletedUsers: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [recentBlogs, setRecentBlogs] = useState<any[]>([]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Fetch dashboard data
  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      
      if (!token) {
        throw new Error("No authentication token found");
      }

      // Fetch all data
      const [blogsRes, pendingRes, approvedRes, rejectedRes, usersRes, recentRes] = await Promise.all([
        fetch(`${API_BASE}/api/admin/blogs?status=all&limit=100`, {
          headers: { "Authorization": `Bearer ${token}` }
        }),
        fetch(`${API_BASE}/api/admin/blogs/status/pending`, {
          headers: { "Authorization": `Bearer ${token}` }
        }),
        fetch(`${API_BASE}/api/admin/blogs/status/approved`, {
          headers: { "Authorization": `Bearer ${token}` }
        }),
        fetch(`${API_BASE}/api/admin/blogs/status/rejected`, {
          headers: { "Authorization": `Bearer ${token}` }
        }),
        fetch(`${API_BASE}/api/admin/users`, {
          headers: { "Authorization": `Bearer ${token}` }
        }),
        fetch(`${API_BASE}/api/admin/blogs?status=all&limit=5&sort=-createdAt`, {
          headers: { "Authorization": `Bearer ${token}` }
        })
      ]);

      // Check responses
      const responses = [blogsRes, pendingRes, approvedRes, rejectedRes, usersRes, recentRes];
      for (const res of responses) {
        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`API error: ${res.status} - ${errorText}`);
        }
      }

      // Parse responses
      const blogsData = await blogsRes.json();
      const pendingData = await pendingRes.json();
      const approvedData = await approvedRes.json();
      const rejectedData = await rejectedRes.json();
      const usersData = await usersRes.json();
      const recentData = await recentRes.json();

      // Ensure we have arrays
      const pendingArray = Array.isArray(pendingData) ? pendingData : [];
      const approvedArray = Array.isArray(approvedData) ? approvedData : [];
      const rejectedArray = Array.isArray(rejectedData) ? rejectedData : [];
      const usersArray = Array.isArray(usersData) ? usersData : [];

      setStats({
        totalBlogs: blogsData.total || blogsData.blogs?.length || 0,
        pendingBlogs: pendingArray.length,
        approvedBlogs: approvedArray.length,
        rejectedBlogs: rejectedArray.length,
        totalUsers: usersArray.length,
        activeUsers: usersArray.filter((u: any) => !u.isDeleted).length,
        deletedUsers: usersArray.filter((u: any) => u.isDeleted).length,
      });

      setRecentBlogs(recentData.blogs || recentData || []);
    } catch (err: any) {
      console.error("Error fetching dashboard data:", err);
      setError(err.message || "Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Mobile sidebar toggle */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>
          <div className="w-10"></div>
        </div>

        <div className="flex flex-1 pt-16 lg:pt-0">
          {/* Sidebar - Loading state */}
          <div className="fixed inset-y-0 left-0 z-40 w-64 bg-white border-r lg:static lg:inset-auto">
            <div className="h-full flex flex-col">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-800">inte-QT Admin</h2>
                <p className="text-sm text-gray-500 mt-1">Dashboard</p>
              </div>
              <div className="flex-1 p-4">
                <div className="animate-pulse space-y-3">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="h-12 bg-gray-200 rounded-lg"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main content - Loading */}
          <div className="flex-1 p-8 flex items-center justify-center">
            <div className="text-center">
              <Loader2 className="h-12 w-12 animate-spin text-indigo-600 mx-auto mb-4" />
              <p className="text-gray-600">Loading dashboard...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Calculate approval rate
  const approvalRate = stats.totalBlogs > 0 
    ? Math.round((stats.approvedBlogs / stats.totalBlogs) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
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
        `}>
          <div className="h-full flex flex-col">
            {/* Logo/Brand */}
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">inte-QT Admin</h2>
              <p className="text-sm text-gray-500 mt-1">Dashboard</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
              <Link
                to="/admin-dashboard"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100"
              >
                <LayoutDashboard className="h-5 w-5" />
                <span className="font-medium">Overview</span>
              </Link>
              <Link
                to="/admin-dashboard/pending"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <Clock className="h-5 w-5" />
                <span className="font-medium">Pending Blogs</span>
              </Link>
              <Link
                to="/admin-dashboard/approved"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Approved Blogs</span>
              </Link>
              <Link
                to="/admin-dashboard/rejected"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <XCircle className="h-5 w-5" />
                <span className="font-medium">Rejected Blogs</span>
              </Link>
              <Link
                to="/admin-dashboard/all-blogs"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <FileText className="h-5 w-5" />
                <span className="font-medium">All Blogs</span>
              </Link>
              <Link
                to="/admin-dashboard/users"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <Users className="h-5 w-5" />
                <span className="font-medium">Manage Users</span>
              </Link>
              <Link
                to="/admin-dashboard/deleted-users"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <Trash2 className="h-5 w-5" />
                <span className="font-medium">Deleted Users</span>
              </Link>
              
              {/* Additional Admin Actions */}
              <div className="pt-4 mt-4 border-t">
                <p className="px-4 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Admin Actions</p>
                <Link
                  to="/admin/create-user"
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  <UserPlus className="h-5 w-5" />
                  <span className="font-medium">Create User</span>
                </Link>
                <Link
                  to="/admin/create-blog"
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  <FilePlus className="h-5 w-5" />
                  <span className="font-medium">Publish Blog</span>
                </Link>
              </div>
            </nav>

            {/* Logout button */}
            <div className="p-4 border-t">
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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

        {/* Main content */}
        <div className="flex-1 lg:ml-0 pt-16 lg:pt-0">
          <div className="p-4 md:p-6 lg:p-8">
            {/* Overview Dashboard Content */}
            <div className="space-y-6">
              {/* Header with Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                  <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your blog platform.</p>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    to="/admin/create-blog"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <FilePlus className="h-4 w-4" />
                    Publish Blog
                  </Link>
                  <Link
                    to="/admin/create-user"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <UserPlus className="h-4 w-4" />
                    Create User
                  </Link>
                  <button
                    onClick={fetchDashboardData}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Refresh
                  </button>
                </div>
              </div>

              {error ? (
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-2xl mx-auto">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-800 mb-2">Unable to Load Dashboard</h3>
                      <p className="text-red-600 mb-4">{error}</p>
                      <button
                        onClick={fetchDashboardData}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <RefreshCw className="h-4 w-4" />
                        Try Again
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Total Blogs */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Total Blogs</p>
                          <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalBlogs}</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <FileText className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                    </div>

                    {/* Pending Blogs */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Pending Blogs</p>
                          <p className="text-3xl font-bold text-gray-900 mt-2">{stats.pendingBlogs}</p>
                        </div>
                        <div className="p-3 bg-yellow-50 rounded-lg">
                          <Clock className="h-6 w-6 text-yellow-600" />
                        </div>
                      </div>
                    </div>

                    {/* Approved Blogs */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Approved Blogs</p>
                          <p className="text-3xl font-bold text-gray-900 mt-2">{stats.approvedBlogs}</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg">
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        </div>
                      </div>
                    </div>

                    {/* Total Users */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Total Users</p>
                          <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalUsers}</p>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-lg">
                          <Users className="h-6 w-6 text-purple-600" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Create User Card */}
                    <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Create New User</h3>
                          <p className="text-gray-600 text-sm mb-4">Add new users to the platform with custom roles</p>
                          <Link
                            to="/admin/create-user"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                          >
                            <UserPlus className="h-4 w-4" />
                            Create User
                          </Link>
                        </div>
                        <UserPlus className="h-8 w-8 text-indigo-600 opacity-50" />
                      </div>
                    </div>

                    {/* Publish Blog Card */}
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Publish Blog</h3>
                          <p className="text-gray-600 text-sm mb-4">Create and publish blog posts directly as admin</p>
                          <Link
                            to="/admin/create-blog"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                          >
                            <FilePlus className="h-4 w-4" />
                            Publish Blog
                          </Link>
                        </div>
                        <FilePlus className="h-8 w-8 text-green-600 opacity-50" />
                      </div>
                    </div>

                    {/* View Pending Card */}
                    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Review Pending</h3>
                          <p className="text-gray-600 text-sm mb-4">{stats.pendingBlogs} blogs awaiting approval</p>
                          <Link
                            to="/admin-dashboard/pending"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                          >
                            <Eye className="h-4 w-4" />
                            Review Now
                          </Link>
                        </div>
                        <Clock className="h-8 w-8 text-yellow-600 opacity-50" />
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900">Recent Blog Activity</h2>
                        <p className="text-sm text-gray-500 mt-1">Latest blog submissions</p>
                      </div>
                      <Link
                        to="/admin-dashboard/all-blogs"
                        className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                      >
                        View all →
                      </Link>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {recentBlogs.length === 0 ? (
                            <tr>
                              <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                No recent blogs found
                              </td>
                            </tr>
                          ) : (
                            recentBlogs.slice(0, 5).map((blog) => (
                              <tr key={blog._id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                  <div className="font-medium text-gray-900 truncate max-w-xs">{blog.title}</div>
                                </td>
                                <td className="px-6 py-4">
                                  <div className="text-sm text-gray-900">{blog.authorName || blog.createdBy?.name}</div>
                                  <div className="text-xs text-gray-500">{blog.createdBy?.email}</div>
                                </td>
                                <td className="px-6 py-4">
                                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    blog.status === 'approved' ? 'bg-green-100 text-green-800' :
                                    blog.status === 'rejected' ? 'bg-red-100 text-red-800' :
                                    'bg-yellow-100 text-yellow-800'
                                  }`}>
                                    {blog.status || 'pending'}
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                  {new Date(blog.createdAt || blog.updatedAt).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4">
                                  <div className="flex items-center gap-2">
                                    <Link
                                      to={`/admin-dashboard/blogs/${blog._id}`}
                                      className="p-1 text-gray-600 hover:text-indigo-600 transition-colors"
                                      title="View Details"
                                    >
                                      <Eye className="h-4 w-4" />
                                    </Link>
                                    {blog.status === 'pending' && (
                                      <button
                                        onClick={() => {
                                          // Implement approve logic here
                                          alert(`Approve blog: ${blog.title}`);
                                        }}
                                        className="p-1 text-gray-600 hover:text-green-600 transition-colors"
                                        title="Approve"
                                      >
                                        <CheckCircle className="h-4 w-4" />
                                      </button>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
                      <div className="text-3xl font-bold">{stats.approvedBlogs}</div>
                      <div className="text-blue-100 mt-1">Published Blogs</div>
                      <div className="flex items-center mt-4">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        <span className="text-sm">
                          {stats.approvedBlogs > 0 ? '+15%' : '0%'} this month
                        </span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl text-white">
                      <div className="text-3xl font-bold">{stats.activeUsers}</div>
                      <div className="text-purple-100 mt-1">Active Users</div>
                      <div className="flex items-center mt-4">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        <span className="text-sm">
                          {stats.activeUsers > 0 ? '+8%' : '0%'} this month
                        </span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-6 rounded-xl text-white">
                      <div className="text-3xl font-bold">{approvalRate}%</div>
                      <div className="text-emerald-100 mt-1">Approval Rate</div>
                      <div className="flex items-center mt-4">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        <span className="text-sm">
                          {approvalRate > 80 ? 'Excellent' : approvalRate > 60 ? 'Good' : 'Needs improvement'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Data last updated: {new Date().toLocaleTimeString()}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;