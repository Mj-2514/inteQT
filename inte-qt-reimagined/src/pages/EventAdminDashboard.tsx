import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  Calendar,
  Clock, 
  CheckCircle, 
  XCircle, 
  Users, 
  Trash2,
  LogOut,
  Menu,
  X,
  TrendingUp, 
  AlertCircle, 
  RefreshCw,
  Loader2,
  Plus,
  Edit,
  Eye,
  UserPlus,
  MapPin,
  Building,
  DollarSign,
  BarChart3,
  FileText,
  ExternalLink,
  Tag
} from "lucide-react";
// Change this import to use the EventAuthContext instead
import { useAuth } from "../context/AuthContext"; // Updated import path

const API_BASE = import.meta.env.VITE_API_BASE;

const EventAdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { eventUser, token, logout } = useAuth(); // Get all auth properties from EventAuthContext

  // Overview states
  const [stats, setStats] = useState({
    totalEvents: 0,
    upcomingEvents: 0,
    pastEvents: 0,
    approvedEvents: 0,
    pendingEvents: 0,
    draftEvents: 0,
    rejectedEvents: 0,
    totalViews: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [recentEvents, setRecentEvents] = useState<any[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<any[]>([]);

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login page instead of home
  };

  // Check authentication on mount
  useEffect(() => {
    // Check if user is authenticated
    if (!token || !eventUser) {
      navigate("/login");
      return;
    }
    
    // Optional: Check if user has admin role
    if (!eventUser.isAdmin && (!eventUser.role || eventUser.role !== 'admin')) {
      navigate("/unauthorized");
      return;
    }

    fetchDashboardData();
  }, [token, eventUser, navigate]);

  // Fetch dashboard data
  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Use token from auth context
      if (!token) {
        throw new Error("No authentication token found");
      }

      // Fetch all event-related data based on your schema
      const [eventsRes, pendingRes, approvedRes, draftRes, rejectedRes] = await Promise.all([
        fetch(`${API_BASE}/api/admin/events?limit=100`, {
          headers: { 
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }),
        fetch(`${API_BASE}/api/admin/events?status=pending`, {
          headers: { 
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }),
        fetch(`${API_BASE}/api/admin/events?status=approved`, {
          headers: { 
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }),
        fetch(`${API_BASE}/api/admin/events?status=draft`, {
          headers: { 
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }),
        fetch(`${API_BASE}/api/admin/events?status=rejected`, {
          headers: { 
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        })
      ]);

      // Check responses
      const responses = [eventsRes, pendingRes, approvedRes, draftRes, rejectedRes];
      const parsedResponses = [];
      
      for (const res of responses) {
        if (!res.ok) {
          if (res.status === 401) {
            // Token expired or invalid, logout and redirect
            logout();
            navigate("/login");
            return;
          }
          console.warn(`API warning: ${res.status}`);
          parsedResponses.push([]);
        } else {
          const data = await res.json();
          parsedResponses.push(Array.isArray(data) ? data : (data.events || []));
        }
      }

      const [eventsArray, pendingArray, approvedArray, draftArray, rejectedArray] = parsedResponses;
      
      const now = new Date();
      const upcomingEvents = eventsArray.filter((event: any) => 
        new Date(event.startDate) > now
      );
      const pastEvents = eventsArray.filter((event: any) => 
        new Date(event.endDate) <= now
      );

      // Calculate total views
      const totalViews = eventsArray.reduce((sum: number, event: any) => 
        sum + (event.views || 0), 0
      );

      setStats({
        totalEvents: eventsArray.length,
        upcomingEvents: upcomingEvents.length,
        pastEvents: pastEvents.length,
        approvedEvents: approvedArray.length,
        pendingEvents: pendingArray.length,
        draftEvents: draftArray.length,
        rejectedEvents: rejectedArray.length,
        totalViews: totalViews,
      });

      // Sort recent events by creation date
      const sortedRecent = [...eventsArray].sort((a, b) => 
        new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
      ).slice(0, 5);

      // Sort upcoming events by start date
      const sortedUpcoming = [...upcomingEvents].sort((a, b) => 
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      ).slice(0, 3);

      setRecentEvents(sortedRecent);
      setUpcomingEvents(sortedUpcoming);
    } catch (err: any) {
      console.error("Error fetching dashboard data:", err);
      setError(err.message || "Failed to load dashboard data");
      
      // If unauthorized, logout and redirect
      if (err.message.includes("401") || err.message.includes("Unauthorized")) {
        logout();
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  const getEventTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      conference: 'bg-blue-100 text-blue-800',
      workshop: 'bg-green-100 text-green-800',
      meeting: 'bg-purple-100 text-purple-800',
      seminar: 'bg-amber-100 text-amber-800',
      networking: 'bg-indigo-100 text-indigo-800',
      webinar: 'bg-cyan-100 text-cyan-800',
      hackathon: 'bg-pink-100 text-pink-800',
      other: 'bg-gray-100 text-gray-800'
    };
    return colors[type] || colors.other;
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      approved: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      rejected: 'bg-red-100 text-red-800',
      draft: 'bg-gray-100 text-gray-800'
    };
    return colors[status] || colors.draft;
  };

  const getMediaTypeIcon = (type: string) => {
    const icons: Record<string, string> = {
      image: '🖼️',
      video: '🎥',
      gif: '🎬',
      external_link: '🔗',
      none: '📄'
    };
    return icons[type] || icons.none;
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
          <h1 className="text-xl font-semibold text-gray-800">Event Admin Dashboard</h1>
          <div className="w-10"></div>
        </div>

        <div className="flex flex-1 pt-16 lg:pt-0">
          {/* Sidebar - Loading state */}
          <div className="fixed inset-y-0 left-0 z-40 w-64 bg-white border-r lg:static lg:inset-auto">
            <div className="h-full flex flex-col">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-800">inte-QT Events</h2>
                <p className="text-sm text-gray-500 mt-1">Event Dashboard</p>
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
              <p className="text-gray-600">Loading event dashboard...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Calculate approval rate
  const approvalRate = stats.totalEvents > 0 
    ? Math.round((stats.approvedEvents / stats.totalEvents) * 100)
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
        <h1 className="text-xl font-semibold text-gray-800">Event Admin Dashboard</h1>
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
              <h2 className="text-2xl font-bold text-gray-800">inte-QT Events</h2>
              <p className="text-sm text-gray-500 mt-1">Event Dashboard</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
              <Link
                to="/event-admin-dashboard"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100"
              >
                <LayoutDashboard className="h-5 w-5" />
                <span className="font-medium">Event Overview</span>
              </Link>
              <Link
                to="/event-admin-dashboard/events"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <Calendar className="h-5 w-5" />
                <span className="font-medium">All Events</span>
              </Link>
              <Link
                to="/event-admin-dashboard/pending"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <Clock className="h-5 w-5" />
                <span className="font-medium">Pending Review</span>
                {stats.pendingEvents > 0 && (
                  <span className="ml-auto bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                    {stats.pendingEvents}
                  </span>
                )}
              </Link>
              <Link
                to="/event-admin-dashboard/approved"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Approved Events</span>
              </Link>
              
              <Link
                to="/event-admin-dashboard/rejected"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <XCircle className="h-5 w-5" />
                <span className="font-medium">Rejected Events</span>
              </Link>
              <Link
                to="/event-admin-dashboard/manage-users"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <Users className="h-5 w-5" />
                <span className="font-medium">Manage Users</span>
              </Link>
              
              {/* Additional Admin Actions */}
              <div className="pt-4 mt-4 border-t">
                <p className="px-4 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Event Actions</p>
                <Link
                  to="/admin/create-event"
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  <Plus className="h-5 w-5" />
                  <span className="font-medium">Create Event</span>
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
                  <h1 className="text-3xl font-bold text-gray-900">Event Admin Dashboard</h1>
                  <p className="text-gray-600 mt-2">
                    Welcome back{eventUser ? `, ${eventUser.name}` : ''}! Manage and monitor all events, reviews, and analytics.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {/* This link should point to the correct route for creating users */}
                  <Link
                    to="/event-admin-dashboard/create-user"
                    onClick={() => setSidebarOpen(false)}
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
                    {/* Total Events */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Total Events</p>
                          <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalEvents}</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <Calendar className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                        <TrendingUp className="h-4 w-4" />
                        <span>All event submissions</span>
                      </div>
                    </div>

                    {/* Pending Review */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Pending Review</p>
                          <p className="text-3xl font-bold text-gray-900 mt-2">{stats.pendingEvents}</p>
                        </div>
                        <div className="p-3 bg-yellow-50 rounded-lg">
                          <Clock className="h-6 w-6 text-yellow-600" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link
                          to="/event-admin-dashboard/pending"
                          className="text-sm text-yellow-600 hover:text-yellow-700 font-medium"
                        >
                          Review now →
                        </Link>
                      </div>
                    </div>

                    {/* Approved Events */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Approved Events</p>
                          <p className="text-3xl font-bold text-gray-900 mt-2">{stats.approvedEvents}</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg">
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                        <span>{approvalRate}% approval rate</span>
                      </div>
                    </div>

                    {/* Total Views */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Total Views</p>
                          <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalViews.toLocaleString()}</p>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-lg">
                          <Eye className="h-6 w-6 text-purple-600" />
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                        <TrendingUp className="h-4 w-4" />
                        <span>Across all events</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Create User Card (Updated from Create Event) */}
                    <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Add New User</h3>
                          <p className="text-gray-600 text-sm mb-4">Create new admin, manager, or staff accounts</p>
                          <Link
                            to="/event-admin-dashboard/create-user"
                            onClick={() => setSidebarOpen(false)}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                          >
                            <UserPlus className="h-4 w-4" />
                            Create User
                          </Link>
                        </div>
                        <UserPlus className="h-8 w-8 text-indigo-600 opacity-50" />
                      </div>
                    </div>

                    {/* Review Pending Card */}
                    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Review Pending Events</h3>
                          <p className="text-gray-600 text-sm mb-4">{stats.pendingEvents} events awaiting approval</p>
                          <Link
                            to="/event-admin-dashboard/pending"
                            onClick={() => setSidebarOpen(false)}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                          >
                            <Eye className="h-4 w-4" />
                            Review Now
                          </Link>
                        </div>
                        <Clock className="h-8 w-8 text-yellow-600 opacity-50" />
                      </div>
                    </div>

                    {/* Analytics Card */}
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Event Analytics</h3>
                          <p className="text-gray-600 text-sm mb-4">View detailed analytics, views, and performance</p>
                          <Link
                            to="/event-admin/analytics"
                            onClick={() => setSidebarOpen(false)}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                          >
                            <BarChart3 className="h-4 w-4" />
                            View Analytics
                          </Link>
                        </div>
                        <BarChart3 className="h-8 w-8 text-purple-600 opacity-50" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Recent Events */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                        <div>
                          <h2 className="text-lg font-semibold text-gray-900">Recent Events</h2>
                          <p className="text-sm text-gray-500 mt-1">Latest event submissions</p>
                        </div>
                        <Link
                          to="/event-admin-dashboard/events"
                          onClick={() => setSidebarOpen(false)}
                          className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                        >
                          View all →
                        </Link>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Location</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {recentEvents.length === 0 ? (
                              <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                                  No events found
                                </td>
                              </tr>
                            ) : (
                              recentEvents.map((event) => (
                                <tr key={event._id} className="hover:bg-gray-50 transition-colors">
                                  <td className="px-6 py-4">
                                    <div className="font-medium text-gray-900 truncate max-w-xs">{event.title}</div>
                                    <div className="flex items-center gap-2 mt-1">
                                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getEventTypeColor(event.type)}`}>
                                        {event.type}
                                      </span>
                                      <span className="text-xs text-gray-500 flex items-center gap-1">
                                        👁️ {event.views || 0}
                                      </span>
                                      {event.mediaType && event.mediaType !== 'none' && (
                                        <span className="text-xs text-gray-500" title={`Media: ${event.mediaType}`}>
                                          {getMediaTypeIcon(event.mediaType)}
                                        </span>
                                      )}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4">
                                    <div className="text-sm text-gray-900">
                                      {new Date(event.startDate).toLocaleDateString('en-US', { 
                                        month: 'short', 
                                        day: 'numeric',
                                        year: 'numeric'
                                      })}
                                    </div>
                                    <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                                      <MapPin className="h-3 w-3" />
                                      <span className="truncate max-w-[120px]">{event.city}, {event.location}</span>
                                    </div>
                                  </td>
                                  <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                                      {event.status}
                                    </span>
                                  </td>
                                  <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                      <Link
                                        to={`/event-admin-dashboard/events/${event._id}`}
                                        onClick={() => setSidebarOpen(false)}
                                        className="p-1 text-gray-600 hover:text-indigo-600 transition-colors"
                                        title="View Details"
                                      >
                                        <Eye className="h-4 w-4" />
                                      </Link>
                                      <Link
                                        to={`/event-admin-dashboard/events/${event._id}/edit`}
                                        onClick={() => setSidebarOpen(false)}
                                        className="p-1 text-gray-600 hover:text-green-600 transition-colors"
                                        title="Edit Event"
                                      >
                                        <Edit className="h-4 w-4" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Upcoming Events */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                        <div>
                          <h2 className="text-lg font-semibold text-gray-900">Upcoming Events</h2>
                          <p className="text-sm text-gray-500 mt-1">Events happening soon</p>
                        </div>
                        <Link
                          to="/event-admin-dashboard/upcoming"
                          onClick={() => setSidebarOpen(false)}
                          className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                        >
                          View all →
                        </Link>
                      </div>
                      <div className="p-4">
                        {upcomingEvents.length === 0 ? (
                          <div className="text-center py-8 text-gray-500">
                            No upcoming events scheduled
                          </div>
                        ) : (
                          <div className="space-y-4">
                            {upcomingEvents.map((event) => (
                              <div key={event._id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <div className="flex justify-between items-start">
                                  <div className="flex-1">
                                    <h3 className="font-medium text-gray-900">{event.title}</h3>
                                    <div className="flex items-center gap-2 mt-2">
                                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getEventTypeColor(event.type)}`}>
                                        {event.type}
                                      </span>
                                      <span className="text-xs text-gray-500 flex items-center gap-1">
                                        <MapPin className="h-3 w-3" />
                                        {event.city}
                                      </span>
                                    </div>
                                    <div className="mt-3 text-sm text-gray-600">
                                      <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        <span>
                                          {new Date(event.startDate).toLocaleDateString('en-US', { 
                                            weekday: 'short',
                                            month: 'short', 
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                          })} - {new Date(event.endDate).toLocaleTimeString('en-US', {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                          })}
                                        </span>
                                      </div>
                                      <div className="mt-2 flex items-center gap-2">
                                        {event.tags?.slice(0, 2).map((tag: string, index: number) => (
                                          <span key={index} className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-800 rounded text-xs">
                                            <Tag className="h-3 w-3" />
                                            {tag}
                                          </span>
                                        ))}
                                        {event.tags?.length > 2 && (
                                          <span className="text-xs text-gray-500">+{event.tags.length - 2} more</span>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                  <Link
                                    to={`/event-admin-dashboard/events/${event._id}`}
                                    onClick={() => setSidebarOpen(false)}
                                    className="text-indigo-600 hover:text-indigo-700 text-sm font-medium ml-4"
                                  >
                                    View →
                                  </Link>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
                      <div className="text-3xl font-bold">{stats.approvedEvents}</div>
                      <div className="text-blue-100 mt-1">Approved Events</div>
                      <div className="flex items-center mt-4">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        <span className="text-sm">
                          {stats.approvedEvents > 0 ? 'Ready to publish' : 'No approved events yet'}
                        </span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-6 rounded-xl text-white">
                      <div className="text-3xl font-bold">{stats.upcomingEvents}</div>
                      <div className="text-emerald-100 mt-1">Upcoming Events</div>
                      <div className="flex items-center mt-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">
                          Scheduled for future dates
                        </span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 rounded-xl text-white">
                      <div className="text-3xl font-bold">{approvalRate}%</div>
                      <div className="text-amber-100 mt-1">Approval Rate</div>
                      <div className="flex items-center mt-4">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        <span className="text-sm">
                          {approvalRate > 80 ? 'Excellent' : approvalRate > 60 ? 'Good' : 'Needs review'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Additional Stats */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Status Breakdown</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{stats.approvedEvents}</div>
                        <div className="text-sm text-gray-600 mt-1">Approved</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-600">{stats.pendingEvents}</div>
                        <div className="text-sm text-gray-600 mt-1">Pending</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-600">{stats.draftEvents}</div>
                        <div className="text-sm text-gray-600 mt-1">Drafts</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">{stats.rejectedEvents}</div>
                        <div className="text-sm text-gray-600 mt-1">Rejected</div>
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

export default EventAdminDashboard;