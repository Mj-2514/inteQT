// pages/CountryUserDashboard.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText,
  Clock, 
  CheckCircle, 
  XCircle, 
  Plus,
  LogOut,
  Eye,
  Edit,
  RefreshCw,
  Menu,
  X,
  AlertCircle,
  Filter,
  Download,
  ChevronDown,
  ChevronUp,
  Trash2
} from "lucide-react";
import { useCountryAuth } from "../../context/AuthContext";

const API_BASE = import.meta.env.VITE_API_BASE;

const CountryUserDashboard = () => {
  const { user, token, logout } = useCountryAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Stats
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
  });

  // Submissions data
  const [allSubmissions, setAllSubmissions] = useState<any[]>([]);
  const [submissionsByStatus, setSubmissionsByStatus] = useState({
    pending: [] as any[],
    approved: [] as any[],
    rejected: [] as any[],
    draft: [] as any[]
  });
  
  
  // UI States
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'approved' | 'rejected' | 'draft'>('all');
  const [expandedSubmission, setExpandedSubmission] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');
  const [searchTerm, setSearchTerm] = useState('');

  // Check authentication
  useEffect(() => {
    if (!token || !user) {
      navigate("/country/login");
      return;
    }

    fetchDashboardData();
  }, [token, user, navigate]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Get stats and summary in parallel
      const [statsRes, summaryRes] = await Promise.all([
        fetch(`${API_BASE}/api/country/dashboard/my-stats`, {
          headers: { "Authorization": `Bearer ${token}` }
        }),
        fetch(`${API_BASE}/api/country/dashboard/my-submissions/summary`, {
          headers: { "Authorization": `Bearer ${token}` }
        })
      ]);

      if (!statsRes.ok || !summaryRes.ok) {
        if (statsRes.status === 401 || summaryRes.status === 401) {
          logout();
          navigate("/country/login");
          return;
        }
        throw new Error("Failed to fetch dashboard data");
      }

      const [statsData, summaryData] = await Promise.all([
        statsRes.json(),
        summaryRes.json()
      ]);

      setStats(statsData);
      
      // Set all submissions (flatten all statuses)
      const allSubs = [
        ...(summaryData.submissions?.pending || []),
        ...(summaryData.submissions?.approved || []),
        ...(summaryData.submissions?.rejected || []),
        ...(summaryData.submissions?.draft || [])
      ];
      setAllSubmissions(allSubs);
      
      // Set submissions grouped by status
      setSubmissionsByStatus({
        pending: summaryData.submissions?.pending || [],
        approved: summaryData.submissions?.approved || [],
        rejected: summaryData.submissions?.rejected || [],
        draft: summaryData.submissions?.draft || []
      });
      
    } catch (err: any) {
      console.error("Error fetching dashboard data:", err);
      setError(err.message || "Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/country/login");
  };

  const changePassword = async () => {
    const oldPassword = prompt("Enter your current password:");
    const newPassword = prompt("Enter new password:");
    const confirmPassword = prompt("Confirm new password:");

    if (!oldPassword || !newPassword || !confirmPassword) return;
    if (newPassword !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/api/country/change-password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Password changed successfully!");
      } else {
        alert(data.message || "Failed to change password");
      }
    } catch (error) {
      alert("Error changing password");
    }
  };




  const editSubmission = (id: string) => {
    navigate(`/country/edit/${id}`);
  };

  const exportToCSV = () => {
    // Simple CSV export implementation
    const submissionsToExport = getCurrentSubmissions();
    if (submissionsToExport.length === 0) {
      alert("No submissions to export");
      return;
    }

    const headers = ["Country Name", "Slug", "Status", "Created Date", "Last Updated"];
    const csvContent = [
      headers.join(","),
      ...submissionsToExport.map(sub => [
        `"${(sub.Countryname || sub.name || "").replace(/"/g, '""')}"`,
        `"${sub.slug}"`,
        `"${sub.status}"`,
        `"${new Date(sub.createdAt).toLocaleDateString()}"`,
        `"${new Date(sub.updatedAt).toLocaleDateString()}"`
      ].join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `country-submissions-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Get submissions based on active tab and filters
  const getCurrentSubmissions = () => {
    let filteredSubmissions = [];
    
    if (activeTab === 'all') {
      filteredSubmissions = [...allSubmissions];
    } else {
      filteredSubmissions = [...submissionsByStatus[activeTab]];
    }

    // Apply search filter
    if (searchTerm) {
      filteredSubmissions = filteredSubmissions.filter(sub => 
        (sub.Countryname || sub.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.slug.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    filteredSubmissions.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return filteredSubmissions;
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      approved: 'bg-green-100 text-green-800 border-green-200',
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      rejected: 'bg-red-100 text-red-800 border-red-200',
      draft: 'bg-gray-100 text-gray-800 border-gray-200'
    };
    return colors[status] || colors.draft;
  };

  const getStatusIcon = (status: string) => {
    const icons: Record<string, any> = {
      approved: <CheckCircle className="h-4 w-4" />,
      pending: <Clock className="h-4 w-4" />,
      rejected: <XCircle className="h-4 w-4" />,
      draft: <FileText className="h-4 w-4" />
    };
    return icons[status] || <FileText className="h-4 w-4" />;
  };

  if (loading && allSubmissions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const currentSubmissions = getCurrentSubmissions();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b px-4 py-3 flex items-center justify-between shadow-sm">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        >
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <h1 className="text-xl font-semibold text-gray-800">My Dashboard</h1>
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
            {/* User Profile */}
            <div className="p-6 border-b">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                  {user?.name?.charAt(0).toUpperCase() || "U"}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-800">{user?.name}</h2>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    User Account
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
              <button 
                onClick={() => setActiveTab('all')}
                className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'all' ? 'bg-blue-50 text-blue-700 border border-blue-100' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                <LayoutDashboard className="h-5 w-5" />
                <span className="font-medium">Dashboard Overview</span>
                <span className="ml-auto bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                  {stats.total}
                </span>
              </button>
              
              <button
                onClick={() => navigate("/country/submit")}
                className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <Plus className="h-5 w-5" />
                <span className="font-medium">New Submission</span>
              </button>
              
              <div className="pt-2">
                <p className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Filter by Status</p>
                {['pending', 'approved', 'rejected', 'draft'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setActiveTab(status as any)}
                    className={`w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${activeTab === status ? 'bg-blue-50 text-blue-700 border border-blue-100' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}
                  >
                    <span className="flex items-center gap-2">
                      {getStatusIcon(status)}
                      <span className="capitalize">{status}</span>
                    </span>
                    <span className="ml-auto bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                      {stats[status as keyof typeof stats] || 0}
                    </span>
                  </button>
                ))}
              </div>
              
              <div className="pt-4">
                <button
                  onClick={changePassword}
                  className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  <Edit className="h-5 w-5" />
                  <span className="font-medium">Change Password</span>
                </button>
              </div>
            </nav>

            {/* Logout */}
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

        {/* Main Content */}
        <div className="flex-1 lg:ml-0 pt-16 lg:pt-0">
          <div className="p-4 md:p-6 lg:p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">My Country Submissions</h1>
                <p className="text-gray-600 mt-2">Manage and track all your country form submissions</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("/country/submit")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <Plus className="h-4 w-4" />
                  New Submission
                </button>
                <button
                  onClick={exportToCSV}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <Download className="h-4 w-4" />
                  Export CSV
                </button>
                <button
                  onClick={fetchDashboardData}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all shadow-lg hover:shadow-xl"
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
                    <button
                      onClick={fetchDashboardData}
                      className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { key: 'total', label: 'Total Submissions', icon: <FileText className="h-6 w-6" />, color: 'from-blue-500 to-blue-600' },
                { key: 'pending', label: 'Pending Review', icon: <Clock className="h-6 w-6" />, color: 'from-yellow-500 to-yellow-600' },
                { key: 'approved', label: 'Approved', icon: <CheckCircle className="h-6 w-6" />, color: 'from-green-500 to-green-600' },
                { key: 'rejected', label: 'Rejected', icon: <XCircle className="h-6 w-6" />, color: 'from-red-500 to-red-600' },
              ].map((stat) => (
                <div key={stat.key} className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">
                        {stats[stat.key as keyof typeof stats]}
                      </p>
                    </div>
                    <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-lg text-white`}>
                      {stat.icon}
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab(stat.key as any)}
                    className="text-sm text-gray-600 hover:text-gray-800 mt-4 flex items-center gap-1"
                  >
                    View {stat.key === 'total' ? 'all' : stat.key}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Filters and Controls */}
            <div className="bg-white p-6 rounded-xl border shadow-sm mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by country name or slug..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                    />
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Filter className="h-4 w-4" />
                    Filters
                  </button>
                  
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest')}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                  </select>
                </div>
              </div>
              
              {/* Additional Filters (Collapsible) */}
              {showFilters && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                      <div className="flex flex-wrap gap-2">
                        {['all', 'pending', 'approved', 'rejected', 'draft'].map((status) => (
                          <button
                            key={status}
                            onClick={() => setActiveTab(status as any)}
                            className={`px-3 py-1.5 text-sm rounded-full capitalize ${activeTab === status ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                          >
                            {status}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                      <div className="flex gap-2">
                        <input
                          type="date"
                          className="px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                        />
                        <span className="self-center">to</span>
                        <input
                          type="date"
                          className="px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Submissions Table */}
            <div className="bg-white rounded-xl border shadow-lg overflow-hidden">
              <div className="px-6 py-4 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {activeTab === 'all' ? 'All Submissions' : `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Submissions`}
                    <span className="ml-2 bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                      {currentSubmissions.length} {currentSubmissions.length === 1 ? 'item' : 'items'}
                    </span>
                  </h2>
                  {activeTab !== 'all' && (
                    <p className="text-sm text-gray-500 mt-1">
                      Showing {submissionsByStatus[activeTab].length} of {stats[activeTab]} {activeTab} submissions
                    </p>
                  )}
                </div>
                
                <div className="text-sm text-gray-500">
                  Sorted by {sortBy === 'newest' ? 'newest' : 'oldest'} first
                </div>
              </div>
              
              {currentSubmissions.length === 0 ? (
                <div className="p-12 text-center">
                  <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No submissions found</h3>
                  <p className="text-gray-500 mb-6">
                    {searchTerm 
                      ? `No submissions match "${searchTerm}"`
                      : activeTab === 'all'
                      ? "You haven't created any submissions yet"
                      : `You don't have any ${activeTab} submissions`
                    }
                  </p>
                  {activeTab !== 'all' && searchTerm && (
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setActiveTab('all');
                      }}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      View All Submissions
                    </button>
                  )}
                  {!searchTerm && (
                    <button
                      onClick={() => navigate("/country/submit")}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
                    >
                      <Plus className="inline h-4 w-4 mr-2" />
                      Create Your First Submission
                    </button>
                  )}
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentSubmissions.map((submission) => (
                        <>
                          <tr key={submission._id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="h-10 w-10 flex-shrink-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mr-3">
                                  <span className="text-lg font-bold text-blue-800">
                                    {(submission.Countryname || submission.name || "C").charAt(0).toUpperCase()}
                                  </span>
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-gray-900">
                                    {submission.Countryname || submission.name || "Unnamed Country"}
                                  </div>
                                  <div className="text-sm text-gray-500">/{submission.slug}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border ${getStatusColor(submission.status)}`}>
                                {getStatusIcon(submission.status)}
                                <span className="capitalize">{submission.status}</span>
                              </span>
                              {submission.status === 'rejected' && submission.rejectionNote && (
                                <div className="mt-1">
                                  <button
                                    onClick={() => setExpandedSubmission(expandedSubmission === submission._id ? null : submission._id)}
                                    className="text-xs text-red-600 hover:text-red-800 flex items-center gap-1"
                                  >
                                    <AlertCircle className="h-3 w-3" />
                                    View rejection note
                                    {expandedSubmission === submission._id ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                                  </button>
                                </div>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {new Date(submission.createdAt).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric'
                                })}
                              </div>
                              <div className="text-xs text-gray-500">
                                {new Date(submission.updatedAt).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric'
                                })}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex items-center gap-2">
                                
                                
                                {/* Show Edit button only for pending and rejected submissions */}
                                {(submission.status === 'pending' || submission.status === 'rejected' || submission.status === 'draft') && (
                                  <button
                                    onClick={() => editSubmission(submission._id)}
                                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-yellow-50 text-yellow-700 hover:bg-yellow-100 border border-yellow-200 rounded-lg transition-colors text-xs font-medium"
                                    title="Edit Submission"
                                  >
                                    <Edit className="h-3 w-3" />
                                    Edit
                                  </button>
                                )}
                                
                                
                              </div>
                            </td>
                          </tr>
                          
                          {/* Expanded row for rejection note */}
                          {expandedSubmission === submission._id && submission.rejectionNote && (
                            <tr>
                              <td colSpan={4} className="px-6 py-4 bg-red-50 border-t border-red-100">
                                <div className="flex items-start">
                                  <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <h4 className="text-sm font-medium text-red-800 mb-1">Rejection Note from Admin:</h4>
                                    <p className="text-sm text-red-700 whitespace-pre-wrap">{submission.rejectionNote}</p>
                                    <div className="mt-3">
                                      <button
                                        onClick={() => editSubmission(submission._id)}
                                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-yellow-600 text-white hover:bg-yellow-700 rounded-lg text-xs font-medium"
                                      >
                                        <Edit className="h-3 w-3" />
                                        Edit & Resubmit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              
              {/* Pagination would go here if implemented */}
            </div>
            
            {/* Quick Stats Summary */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Submission Summary</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{value}</div>
                    <div className="text-sm text-gray-600 capitalize mt-1">{key} {key === 'total' ? 'Submissions' : ''}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryUserDashboard;