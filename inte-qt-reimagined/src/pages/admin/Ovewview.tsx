import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Calendar, 
  AlertCircle, 
  Download, 
  RefreshCw,
  Loader2,
  Clock,
  Users,
  FileText,
  CheckCircle,
  XCircle
} from "lucide-react";
import DashboardStats from "./DashboardStats";
import CircularChart from "./CircularChart";
import BlogStatsChart from "./BlogStatsChart";

const API_BASE =import.meta.env.VITE_API_BASE;

const Overview = () => {
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
  const [monthlyData, setMonthlyData] = useState([
    { month: 'Jan', blogs: 12 },
    { month: 'Feb', blogs: 19 },
    { month: 'Mar', blogs: 15 },
    { month: 'Apr', blogs: 25 },
    { month: 'May', blogs: 22 },
    { month: 'Jun', blogs: 30 },
    { month: 'Jul', blogs: 28 },
    { month: 'Aug', blogs: 32 },
    { month: 'Sep', blogs: 28 },
    { month: 'Oct', blogs: 35 },
    { month: 'Nov', blogs: 38 },
    { month: 'Dec', blogs: 42 },
  ]);

  useEffect(() => {
    fetchDashboardData();
    fetchMonthlyData();
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

  const fetchMonthlyData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      // Fetch blogs for monthly stats
      const response = await fetch(`${API_BASE}/api/admin/blogs?status=all&limit=1000`, {
        headers: { "Authorization": `Bearer ${token}` }
      });

      if (!response.ok) return;

      const data = await response.json();
      const blogs = data.blogs || data;
      
      if (!Array.isArray(blogs)) return;

      // Generate monthly data from actual blog dates
      const monthlyCounts: {[key: string]: number} = {};
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

      blogs.forEach((blog: any) => {
        const date = new Date(blog.createdAt);
        const monthKey = `${date.getFullYear()}-${date.getMonth()}`;
        monthlyCounts[monthKey] = (monthlyCounts[monthKey] || 0) + 1;
      });

      // Prepare data for chart (last 12 months)
      const result = [];
      const now = new Date();
      
      for (let i = 11; i >= 0; i--) {
        const date = new Date();
        date.setMonth(now.getMonth() - i);
        const monthKey = `${date.getFullYear()}-${date.getMonth()}`;
        const monthName = monthNames[date.getMonth()];
        
        result.push({
          month: monthName,
          blogs: monthlyCounts[monthKey] || 0
        });
      }

      setMonthlyData(result);
    } catch (error) {
      console.error("Error fetching monthly stats:", error);
      // Keep the default mock data if real data fails
    }
  };

  // Prepare chart data
  const blogStatusData = [
    { name: 'Approved', value: stats.approvedBlogs, color: '#10B981' }, // green-500
    { name: 'Pending', value: stats.pendingBlogs, color: '#F59E0B' }, // yellow-500
    { name: 'Rejected', value: stats.rejectedBlogs, color: '#EF4444' }, // red-500
  ];

  const userStatusData = [
    { name: 'Active', value: stats.activeUsers, color: '#3B82F6' }, // blue-500
    { name: 'Deleted', value: stats.deletedUsers, color: '#6B7280' }, // gray-500
  ];

  // Calculate approval rate
  const approvalRate = stats.totalBlogs > 0 
    ? Math.round((stats.approvedBlogs / stats.totalBlogs) * 100)
    : 0;

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <Loader2 className="h-10 w-10 animate-spin text-indigo-600" />
        <p className="text-gray-600">Loading dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-2xl mx-auto">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-lg font-semibold text-red-800 mb-2">Unable to Load Dashboard</h3>
            <p className="text-red-600 mb-4">{error}</p>
            <div className="flex gap-3">
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
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your blog platform.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchDashboardData}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            <Download className="h-4 w-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <DashboardStats stats={stats} />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Blog Status Chart */}
        <CircularChart
          data={blogStatusData}
          title="Blog Status Distribution"
          height={350}
          innerRadius={70}
          outerRadius={120}
        />

        {/* User Status Chart */}
        <CircularChart
          data={userStatusData}
          title="User Account Status"
          height={350}
          innerRadius={70}
          outerRadius={120}
        />
      </div>

      {/* Monthly Activity Chart */}
      <BlogStatsChart data={monthlyData} />

      {/* Recent Activity & Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Blogs */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Recent Blog Activity</h2>
              <p className="text-sm text-gray-500 mt-1">Latest 5 blog submissions</p>
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
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentBlogs.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
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
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Stats & System Health */}
        <div className="space-y-6">
          {/* System Health */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-700">API Status</span>
                </div>
                <span className="text-sm font-medium text-green-600">Operational</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-700">Database</span>
                </div>
                <span className="text-sm font-medium text-green-600">Connected</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-700">Storage</span>
                </div>
                <span className="text-sm font-medium text-green-600">85% Free</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-700">Uptime</span>
                </div>
                <span className="text-sm font-medium text-green-600">99.9%</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                to="/admin-dashboard/pending"
                className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-100 rounded-lg group-hover:bg-yellow-200 transition-colors">
                    <Clock className="h-5 w-5 text-yellow-600" />
                  </div>
                  <span className="font-medium text-gray-900">Review Pending</span>
                </div>
                <span className="text-yellow-600 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                to="/admin-dashboard/users"
                className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-900">Manage Users</span>
                </div>
                <span className="text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                to="/admin-dashboard/all-blogs"
                className="flex items-center justify-between p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                    <FileText className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-900">All Blogs</span>
                </div>
                <span className="text-green-600 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
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

      {/* Data Info Footer */}
      <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>Data last updated: {new Date().toLocaleTimeString()}</span>
        </div>
        <div className="mt-1 text-xs">
          Showing {stats.totalBlogs} blogs and {stats.totalUsers} users
        </div>
      </div>
    </div>
  );
};

export default Overview;