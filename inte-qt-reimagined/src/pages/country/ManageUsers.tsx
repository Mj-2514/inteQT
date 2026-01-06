// src/pages/admin/ManageUsers.tsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  UserX,
  UserCheck,
  Trash2,
  Search,
  Mail,
  Calendar,
  RefreshCw,
  AlertCircle
} from "lucide-react";
import { useCountryAuth } from "@/context/AuthContext";

const API_BASE =import.meta.env.VITE_API_BASE;

const ManageCountryUsers = () => {
  const { user, token, isAdmin } = useCountryAuth();
  const navigate = useNavigate();
  
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  // Check admin access
  useEffect(() => {
    if (!isAdmin) {
      navigate("/country/dashboard");
    }
  }, [isAdmin, navigate]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE}/api/country/admin/all-users`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if (!response.ok) {
        if (response.status === 401) {
          navigate("/country/login");
          return;
        }
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      setUsers(data.users || []);
    } catch (err: any) {
      setError(err.message || "Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAdmin && token) {
      fetchUsers();
    }
  }, [isAdmin, token]);

  const deleteUser = async (userId: string, userName: string) => {
    if (!confirm(`Are you sure you want to delete user "${userName}"? This action cannot be undone.`)) {
      return;
    }

    setActionLoading(userId);
    try {
      const response = await fetch(`${API_BASE}/api/users/${userId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to delete user");
      }

      // Remove user from local state
      setUsers(prev => prev.filter(user => user._id !== userId));
      alert("User deleted successfully!");
    } catch (err: any) {
      alert(err.message || "Error deleting user");
    } finally {
      setActionLoading(null);
    }
  };

  const toggleUserStatus = async (userId: string, currentStatus: boolean) => {
    setActionLoading(userId);
    try {
      const response = await fetch(`${API_BASE}/api/users/toggle-status/${userId}`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to update user status");
      }

      // Update local state
      setUsers(prev => prev.map(user => 
        user._id === userId 
          ? { ...user, isActive: !currentStatus }
          : user
      ));
      
      alert(`User ${currentStatus ? 'deactivated' : 'activated'} successfully!`);
    } catch (err: any) {
      alert(err.message || "Error updating user status");
    } finally {
      setActionLoading(null);
    }
  };

  const changeUserRole = async (userId: string, currentRole: string) => {
    const newRole = currentRole === 'admin' ? 'user' : 'admin';
    
    if (!confirm(`Change user role to ${newRole}?`)) {
      return;
    }

    setActionLoading(userId);
    try {
      const response = await fetch(`${API_BASE}/api/users/change-role/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ role: newRole })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to change user role");
      }

      // Update local state
      setUsers(prev => prev.map(user => 
        user._id === userId 
          ? { ...user, role: newRole, isAdmin: newRole === 'admin' }
          : user
      ));
      
      alert(`User role changed to ${newRole}!`);
    } catch (err: any) {
      alert(err.message || "Error changing user role");
    } finally {
      setActionLoading(null);
    }
  };

  // Filter users based on search and filters
  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    const matchesStatus = statusFilter === "all" || 
      (statusFilter === "active" && user.isActive) ||
      (statusFilter === "inactive" && !user.isActive);
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  if (!isAdmin) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
              <p className="text-gray-600 mt-2">Manage all registered users in the system</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={fetchUsers}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                Refresh
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{users.length}</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Admins</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {users.filter(u => u.role === 'admin').length}
                  </p>
                </div>
                
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Users</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {users.filter(u => u.isActive).length}
                  </p>
                </div>
                <UserCheck className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">Error</h3>
                <p className="text-red-600">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="px-3 py-2 border rounded-lg"
              >
                <option value="all">All Roles</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
              
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border rounded-lg"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">
              Users ({filteredUsers.length})
            </h2>
          </div>
          
          {loading ? (
            <div className="py-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading users...</p>
            </div>
          ) : filteredUsers.length === 0 ? (
            <div className="py-12 text-center">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No users found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">User</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Role</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Created</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredUsers.map((u) => (
                    <tr key={u._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="font-semibold text-blue-800">
                              {u.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{u.name}</div>
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                              <Mail className="h-3 w-3" />
                              {u.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${u.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
                            {u.role}
                          </span>
                          
                        </div>
                      </td>
                      
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${u.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {u.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(u.createdAt).toLocaleDateString()}
                        </div>
                      </td>
                      
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => toggleUserStatus(u._id, u.isActive)}
                            disabled={actionLoading === u._id}
                            className={`px-3 py-1 rounded text-sm ${u.isActive ? 'bg-red-100 text-red-700 hover:bg-red-200' : 'bg-green-100 text-green-700 hover:bg-green-200'} disabled:opacity-50`}
                          >
                            {actionLoading === u._id ? '...' : u.isActive ? 'Deactivate' : 'Activate'}
                          </button>
                          
                          <button
                            onClick={() => deleteUser(u._id, u.name)}
                            disabled={actionLoading === u._id}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg disabled:opacity-50"
                            title="Delete User"
                          >
                            <Trash2 size={16} />
                          </button>
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
  );
};

export default ManageCountryUsers;