// src/pages/EventAdmin/ManageUsers.tsx
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { 
  Trash2, 
  Search, 
  User, 
  UserCheck, 
  Mail, 
  Eye, 
  Shield,
  AlertTriangle,
  RefreshCw,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const API_BASE = import.meta.env.DEV ? "http://localhost:5000" : "https://inteqt.onrender.com";

interface UserStats {
  totalEvents: number;
  publishedEvents: number;
  pendingEvents: number;
  rejectedEvents: number;
  totalViews: number;
}

interface UserType {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
  statistics: UserStats;
  role?: string;
}

interface PaginationData {
  total: number;
  page: number;
  totalPages: number;
  limit: number;
}

const EventManageUsers = () => {
  const { token, eventUser } = useAuth();
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("createdAt");
  const [pagination, setPagination] = useState<PaginationData>({
    total: 0,
    page: 1,
    totalPages: 1,
    limit: 12
  });
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, [pagination.page, searchQuery, roleFilter, sortBy]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        sortBy: sortBy,
        sortOrder: "desc"
      });

      if (searchQuery) params.append("search", searchQuery);
      if (roleFilter !== "all") params.append("role", roleFilter);

      const res = await fetch(`${API_BASE}/api/events/auth/users`, {
        headers: { 
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      if (!res.ok) throw new Error("Failed to fetch users");

      const data = await res.json();
      if (data.success) {
        setUsers(data.data?.users || []);
        setPagination(data.data?.pagination || {
          total: 0,
          page: 1,
          totalPages: 1,
          limit: 12
        });
      } else {
        throw new Error(data.message || "Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setError(error instanceof Error ? error.message : "Failed to load users");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPagination(prev => ({ ...prev, page: 1 }));
  };

  const handleRoleToggle = async (userId: string, makeAdmin: boolean) => {
    try {
      const res = await fetch(`${API_BASE}/api/events/admin/users/${userId}/role`, {
        method: "PUT",
        headers: { 
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ isAdmin: makeAdmin })
      });

      if (res.ok) {
        fetchUsers();
      }
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  const deleteUser = async (id: string) => {
    try {
      const res = await fetch(`${API_BASE}/api/events/auth/users/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });

      if (res.ok) {
        setUsers(prev => prev.filter(u => u._id !== id));
        setDeleteConfirm(null);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };

  const getApprovalRate = (user: UserType) => {
    const total = user.statistics?.totalEvents || 0;
    const published = user.statistics?.publishedEvents || 0;
    return total > 0 ? Math.round((published / total) * 100) : 0;
  };

  const getActivityLevel = (user: UserType) => {
    const total = user.statistics?.totalEvents || 0;
    if (total === 0) return "New";
    if (total <= 3) return "Low";
    if (total <= 10) return "Medium";
    return "High";
  };

  const getActivityColor = (level: string) => {
    switch (level) {
      case "High": return "text-emerald-600 bg-emerald-50";
      case "Medium": return "text-amber-600 bg-amber-50";
      case "Low": return "text-blue-600 bg-blue-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  const UserDetailModal = () => {
    if (!selectedUser) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedUser.name}</h2>
                <p className="text-gray-500">{selectedUser.email}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedUser.isAdmin 
                    ? "bg-purple-100 text-purple-800" 
                    : "bg-blue-100 text-blue-800"
                }`}>
                  {selectedUser.isAdmin ? "Admin" : "User"}
                </span>
                <button 
                  onClick={() => setShowUserModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* User Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Account Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Member Since</span>
                      <span className="font-medium">{formatDate(selectedUser.createdAt)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Last Active</span>
                      <span className="font-medium">{formatDate(selectedUser.updatedAt)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Account Status</span>
                      <span className="font-medium text-emerald-600">Active</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Quick Actions</h3>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleRoleToggle(selectedUser._id, !selectedUser.isAdmin)}
                      className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      {selectedUser.isAdmin ? "Remove Admin" : "Make Admin"}
                    </button>
                    <button 
                      onClick={() => {
                        setShowUserModal(false);
                        setDeleteConfirm(selectedUser._id);
                      }}
                      className="flex-1 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                    >
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Event Statistics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{selectedUser.statistics?.totalEvents || 0}</div>
                    <div className="text-sm text-gray-500">Total Events</div>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">{selectedUser.statistics?.publishedEvents || 0}</div>
                    <div className="text-sm text-emerald-500">Published</div>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600">{selectedUser.statistics?.pendingEvents || 0}</div>
                    <div className="text-sm text-amber-500">Pending</div>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">{selectedUser.statistics?.rejectedEvents || 0}</div>
                    <div className="text-sm text-red-500">Rejected</div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Approval Rate</span>
                    <span className="font-medium">{getApprovalRate(selectedUser)}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${getApprovalRate(selectedUser)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Level */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Activity Level</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getActivityColor(getActivityLevel(selectedUser))}`}>
                    {getActivityLevel(selectedUser)} Activity
                  </div>
                  <span className="text-sm text-gray-600">
                    {(selectedUser.statistics?.totalViews || 0).toLocaleString()} total views
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  Avg. {selectedUser.statistics?.totalEvents > 0 ? 
                    Math.round((selectedUser.statistics?.totalViews || 0) / (selectedUser.statistics?.totalEvents || 1)) : 0} views per event
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const DeleteConfirmModal = () => {
    if (!deleteConfirm) return null;

    const userToDelete = users.find(u => u._id === deleteConfirm);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Delete User Account</h3>
              <p className="text-gray-600">This action cannot be undone</p>
            </div>
          </div>

          {userToDelete && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="font-medium">{userToDelete.name}</p>
                  <p className="text-sm text-gray-500">{userToDelete.email}</p>
                </div>
              </div>
              <div className="text-sm text-gray-600 mt-2">
                <p>• {userToDelete.statistics?.totalEvents || 0} events will be removed</p>
                <p>• All user data will be permanently deleted</p>
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => setDeleteConfirm(null)}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => deleteUser(deleteConfirm)}
              className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              <Trash2 className="h-4 w-4" />
              Delete Permanently
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (!eventUser?.isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Shield className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h2>
          <p className="text-gray-600">Admin privileges required to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
            <p className="text-gray-600 mt-2">Manage all user accounts and permissions</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={fetchUsers}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </button>
            <div className="text-sm text-gray-500">
              Total: <span className="font-semibold">{pagination.total}</span> users
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or email..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </form>

            {/* Role Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Role</label>
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="all">All Roles</option>
                <option value="admin">Admins Only</option>
                <option value="user">Regular Users</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="createdAt">Registration Date</option>
                <option value="name">Name</option>
                <option value="totalEvents">Event Count</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Error State */}
      {error && !loading && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <div>
              <p className="text-red-800">{error}</p>
              <button
                onClick={fetchUsers}
                className="mt-2 text-sm text-red-600 hover:text-red-800"
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Users Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 animate-pulse">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      ) : !users || users.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Users Found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setRoleFilter("all");
              setSortBy("createdAt");
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            Reset Filters
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <div key={user._id} className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-lg">
                {/* Card Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                        user.isAdmin ? "bg-purple-100" : "bg-blue-100"
                      }`}>
                        {user.isAdmin ? (
                          <Shield className="h-6 w-6 text-purple-600" />
                        ) : (
                          <User className="h-6 w-6 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{user.name}</h3>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleRoleToggle(user._id, !user.isAdmin)}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          user.isAdmin 
                            ? "bg-purple-100 text-purple-800 hover:bg-purple-200" 
                            : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                        } transition-colors`}
                      >
                        {user.isAdmin ? "Admin" : "Make Admin"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{user.statistics?.totalEvents || 0}</div>
                      <div className="text-xs text-gray-500">Total Events</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">{user.statistics?.publishedEvents || 0}</div>
                      <div className="text-xs text-emerald-500">Published</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-600">{user.statistics?.pendingEvents || 0}</div>
                      <div className="text-xs text-amber-500">Pending</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{user.statistics?.rejectedEvents || 0}</div>
                      <div className="text-xs text-red-500">Rejected</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-600">Approval Rate</span>
                      <span className="text-xs font-medium">{getApprovalRate(user)}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${getApprovalRate(user)}%` }}
                      />
                    </div>
                  </div>

                  {/* Activity Info */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${getActivityColor(getActivityLevel(user))}`}>
                        {getActivityLevel(user)} Activity
                      </span>
                    </div>
                    <div className="text-gray-500">
                      {(user.statistics?.totalViews || 0).toLocaleString()} views
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    Joined {formatDate(user.createdAt)}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setShowUserModal(true);
                      }}
                      className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                      title="View Details"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    {user._id !== eventUser._id && (
                      <button
                        onClick={() => setDeleteConfirm(user._id)}
                        className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete User"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="mt-8 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing {(pagination.page - 1) * pagination.limit + 1} to {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} users
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
                  disabled={pagination.page === 1}
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                    let pageNum;
                    if (pagination.totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (pagination.page <= 3) {
                      pageNum = i + 1;
                    } else if (pagination.page >= pagination.totalPages - 2) {
                      pageNum = pagination.totalPages - 4 + i;
                    } else {
                      pageNum = pagination.page - 2 + i;
                    }
                    
                    return (
                      <button
                        key={i}
                        onClick={() => setPagination(prev => ({ ...prev, page: pageNum }))}
                        className={`h-8 w-8 rounded-lg flex items-center justify-center ${
                          pagination.page === pageNum
                            ? "bg-indigo-600 text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
                  disabled={pagination.page === pagination.totalPages}
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Modals */}
      {showUserModal && <UserDetailModal />}
      {deleteConfirm && <DeleteConfirmModal />}
    </div>
  );
};

export default EventManageUsers;