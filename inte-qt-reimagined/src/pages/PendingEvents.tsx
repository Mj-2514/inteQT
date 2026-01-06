// src/pages/PendingEvents.tsx
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { 
  CalendarDays, 
  User, 
  Clock, 
  FileText, 
  AlertCircle, 
  CheckCircle, 
  XCircle,
  Search,
  Filter,
  ChevronDown,
  Users,
  Calendar
} from "lucide-react";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"

interface PendingEvent {
  _id: string;
  title: string;
  type: string;
  description?: string;
  createdAt: string;
  startDate?: string;
  status: 'pending' | 'approved' | 'rejected';
  category?: string;
  location?: string;
  city?: string;
  createdBy: {
    _id: string;
    name: string;
    email: string;
  };
}

interface UserStat {
  userId: string;
  userName: string;
  userEmail: string;
  pendingCount: number;
}

interface PaginationInfo {
  total: number;
  page: number;
  totalPages: number;
  limit: number;
}

interface Statistics {
  totalPending: number;
  pendingByUser: UserStat[];
  oldestPending: string | null;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: {
    events: PendingEvent[];
    pagination: PaginationInfo;
    statistics: Statistics;
  };
}

const PendingEvents = () => {
  const { token } = useAuth();
  const [pending, setPending] = useState<PendingEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [stats, setStats] = useState<Statistics | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  
  // Advanced filters
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('desc');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  useEffect(() => {
    fetchPending();
  }, [currentPage, sortBy, sortOrder]);

  const fetchPending = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Build query parameters
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: itemsPerPage.toString(),
        sortBy,
        sortOrder,
        ...(search && { search }),
        ...(filter !== 'all' && { type: filter })
      });

      const res = await fetch(`${API_BASE}/api/events/auth/pending`, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
      }
      
      const data: ApiResponse = await res.json();
      
      if (data.success && data.data) {
        setPending(data.data.events || []);
        setPagination(data.data.pagination);
        setStats(data.data.statistics);
      } else {
        throw new Error(data.message || 'Failed to load data');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load pending events');
      console.error('Error fetching pending events:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to first page when searching
    fetchPending();
  };

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
    setCurrentPage(1);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </span>
        );
      default:
        return null;
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'No date set';
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  // Extract unique event types from pending events
  const eventTypes = Array.from(new Set(pending.map(e => e.type)));

  if (loading && !pending.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600 text-lg">Loading pending events...</p>
              <p className="text-gray-400 text-sm mt-2">Fetching data from server</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error && !pending.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-lg font-medium text-red-800">Error loading events</h3>
                <p className="mt-2 text-red-700">{error}</p>
                <p className="mt-2 text-sm text-red-600">
                  Please check your connection and try again.
                </p>
                <div className="mt-4 flex space-x-3">
                  <button
                    onClick={fetchPending}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Try Again
                  </button>
                  <button
                    onClick={() => {
                      setError(null);
                      setCurrentPage(1);
                    }}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Clear Error
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Pending Events Review</h1>
              <p className="mt-2 text-gray-600">
                Review and approve event submissions from users
              </p>
            </div>
            <div className="flex items-center space-x-3">
              {stats && (
                <div className="hidden md:flex items-center space-x-3">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200">
                    <Users className="w-4 h-4 mr-1.5" />
                    {stats.pendingByUser.length} Submitters
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-orange-50 text-orange-700 border border-orange-200">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    Total: {stats.totalPending}
                  </span>
                </div>
              )}
              <button
                onClick={fetchPending}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Refresh
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          {stats && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-sm border">
                <div className="flex items-center">
                  <div className="rounded-lg bg-blue-100 p-3">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Pending</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalPending}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-sm border">
                <div className="flex items-center">
                  <div className="rounded-lg bg-green-100 p-3">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Active Submitters</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.pendingByUser.length}</p>
                  </div>
                </div>
              </div>

              {stats.oldestPending && (
                <div className="bg-white rounded-xl p-4 shadow-sm border">
                  <div className="flex items-center">
                    <div className="rounded-lg bg-amber-100 p-3">
                      <CalendarDays className="h-6 w-6 text-amber-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Oldest Pending</p>
                      <p className="text-lg font-bold text-gray-900">
                        {formatTimeAgo(stats.oldestPending)}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-white rounded-xl p-4 shadow-sm border">
                <div className="flex items-center">
                  <div className="rounded-lg bg-purple-100 p-3">
                    <Filter className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Current Page</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {pagination?.page || 1} / {pagination?.totalPages || 1}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Filters */}
          <div className="mt-6 bg-white rounded-xl shadow-sm border p-4">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search events by title, description, city, or location..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                </div>

                {/* Filter by type */}
                <div className="w-full md:w-64">
                  <select
                    value={filter}
                    onChange={(e) => {
                      setFilter(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-sm"
                  >
                    <option value="all">All Event Types</option>
                    {eventTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Search button */}
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors text-sm"
                >
                  Search
                </button>
              </div>

              {/* Advanced Filters Toggle */}
              <div className="pt-2 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                  className="flex items-center text-sm text-gray-600 hover:text-gray-900"
                >
                  <ChevronDown className={`h-4 w-4 mr-1 transition-transform ${showAdvancedFilters ? 'rotate-180' : ''}`} />
                  Advanced Filters
                </button>

                {showAdvancedFilters && (
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sort By
                      </label>
                      <div className="flex space-x-2">
                        <button
                          type="button"
                          onClick={() => handleSort('createdAt')}
                          className={`px-3 py-2 text-sm rounded-lg ${sortBy === 'createdAt' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}
                        >
                          Date {sortBy === 'createdAt' && (sortOrder === 'desc' ? '↓' : '↑')}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSort('title')}
                          className={`px-3 py-2 text-sm rounded-lg ${sortBy === 'title' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}
                        >
                          Title {sortBy === 'title' && (sortOrder === 'desc' ? '↓' : '↑')}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Top Submitters */}
        {stats?.pendingByUser && stats.pendingByUser.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Top Submitters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
              {stats.pendingByUser.map(user => (
                <div key={user.userId} className="bg-white rounded-lg p-3 border shadow-sm">
                  <p className="font-medium text-gray-900 truncate">{user.userName}</p>
                  <p className="text-sm text-gray-500 truncate">{user.userEmail}</p>
                  <div className="mt-2 flex items-center">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800">
                      {user.pendingCount} pending
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Events Grid */}
        <div className="mb-8">
          {pending.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
              <div className="max-w-md mx-auto">
                <CalendarDays className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {search || filter !== 'all' ? 'No matching events found' : 'No pending events'}
                </h3>
                <p className="text-gray-500 mb-4">
                  {search || filter !== 'all' 
                    ? 'Try adjusting your search or filter criteria.' 
                    : 'All event submissions have been reviewed and approved.'}
                </p>
                {(search || filter !== 'all') && (
                  <button
                    onClick={() => {
                      setSearch('');
                      setFilter('all');
                      setCurrentPage(1);
                    }}
                    className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pending.map(event => (
                  <Link
                    key={event._id}
                    to={`/event-admin-dashboard/events/${event._id}`}
                    className="group bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-blue-400 transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                  >
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          {getStatusBadge(event.status)}
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-800 border">
                          {event.type}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-3 line-clamp-2">
                        {event.title}
                      </h3>
                      
                      {event.description && (
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {event.description}
                        </p>
                      )}

                      <div className="space-y-3 mt-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <User className="h-4 w-4 mr-2 flex-shrink-0 text-gray-400" />
                          <div>
                            <p className="font-medium">{event.createdBy?.name || 'Unknown User'}</p>
                            <p className="text-xs text-gray-500 truncate">{event.createdBy?.email}</p>
                          </div>
                        </div>
                        
                        {event.startDate && (
                          <div className="flex items-center text-sm text-gray-600">
                            <CalendarDays className="h-4 w-4 mr-2 flex-shrink-0 text-gray-400" />
                            <span>{formatDate(event.startDate)}</span>
                          </div>
                        )}
                        
                        {(event.location || event.city) && (
                          <div className="text-sm text-gray-600 truncate">
                            📍 {event.city ? `${event.city}, ${event.location}` : event.location}
                          </div>
                        )}
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">
                            Submitted {formatTimeAgo(event.createdAt)}
                          </span>
                          <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-800 transition-colors inline-flex items-center">
                            Review 
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {pagination && pagination.totalPages > 1 && (
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between">
                  <div className="text-sm text-gray-700 mb-4 sm:mb-0">
                    Showing <span className="font-semibold">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
                    <span className="font-semibold">{Math.min(currentPage * itemsPerPage, pagination.total)}</span> of{' '}
                    <span className="font-semibold">{pagination.total}</span> results
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      Previous
                    </button>
                    
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                        let pageNum;
                        if (pagination.totalPages <= 5) {
                          pageNum = i + 1;
                        } else if (currentPage <= 3) {
                          pageNum = i + 1;
                        } else if (currentPage >= pagination.totalPages - 2) {
                          pageNum = pagination.totalPages - 4 + i;
                        } else {
                          pageNum = currentPage - 2 + i;
                        }
                        
                        return (
                          <button
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`px-3 py-1 text-sm rounded-lg ${currentPage === pageNum 
                              ? 'bg-blue-600 text-white' 
                              : 'text-gray-700 hover:bg-gray-100'}`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                    </div>
                    
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, pagination.totalPages))}
                      disabled={currentPage === pagination.totalPages}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PendingEvents;