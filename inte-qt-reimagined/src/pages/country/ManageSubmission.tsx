// src/pages/admin/ManageSubmissions.tsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  Search,
  Eye,
  Filter,
  Download,
  RefreshCw,
  AlertCircle,
  Globe,
  User,
  Users,
  BarChart3,
  TrendingUp
} from "lucide-react";
import { useCountryAuth } from "@/context/AuthContext";

const API_BASE = import.meta.env.VITE_API_BASE;

interface AdminStats {
  totalSubmissions: number;
  pendingSubmissions: number;
  approvedSubmissions: number;
  rejectedSubmissions: number;
  totalUsers: number;
  newSubmissionsToday: number;
  approvalRate: number;
  averageReviewTime?: number;
}

const ManageSubmissions = () => {
  const { user, token, isAdmin } = useCountryAuth();
  const navigate = useNavigate();
  
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [statsLoading, setStatsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null);

  // Admin Stats
  const [adminStats, setAdminStats] = useState<AdminStats>({
    totalSubmissions: 0,
    pendingSubmissions: 0,
    approvedSubmissions: 0,
    rejectedSubmissions: 0,
    totalUsers: 0,
    newSubmissionsToday: 0,
    approvalRate: 0
  });

  // Check admin access
  useEffect(() => {
    if (!isAdmin) {
      navigate("/country/dashboard");
    }
  }, [isAdmin, navigate]);

  const fetchAdminStats = async () => {
    try {
      setStatsLoading(true);
      
      // Get token from localStorage as fallback (like CountryAdminDashboard does)
      const effectiveToken = token || localStorage.getItem("countryToken");
      
      if (!effectiveToken) {
        navigate("/country/login");
        return;
      }

      const response = await fetch(`${API_BASE}/api/country/dashboard/admin-stats`, {
        headers: {
          "Authorization": `Bearer ${effectiveToken}`
        }
      });

      if (!response.ok) {
        if (response.status === 401) {
          navigate("/country/login");
          return;
        }
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch admin stats");
      }

      const data = await response.json();
      
      // Transform API response to match our interface
      const statsData: AdminStats = {
        totalSubmissions: data.totalSubmissions || 0,
        pendingSubmissions: data.pendingSubmissions || 0,
        approvedSubmissions: data.approvedSubmissions || 0,
        rejectedSubmissions: data.rejectedSubmissions || 0,
        totalUsers: data.totalUsers || 0,
        newSubmissionsToday: data.newSubmissionsToday || 0,
        approvalRate: data.approvalRate || 0,
        averageReviewTime: data.averageReviewTime
      };
      
      setAdminStats(statsData);
    } catch (err: any) {
      console.error("Error fetching admin stats:", err);
      // Don't set error state for stats - use fallback from submissions
    } finally {
      setStatsLoading(false);
    }
  };

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      
      // Get token from localStorage as fallback
      const effectiveToken = token || localStorage.getItem("countryToken");
      
      if (!effectiveToken) {
        navigate("/country/login");
        return;
      }

      // Use the same API endpoint as CountryAdminDashboard
      const response = await fetch(`${API_BASE}/api/country/dashboard/all?limit=500`, {
        headers: {
          "Authorization": `Bearer ${effectiveToken}`
        }
      });

      if (!response.ok) {
        if (response.status === 401) {
          navigate("/country/login");
          return;
        }
        throw new Error("Failed to fetch submissions");
      }

      const data = await response.json();
      const submissionsList = data.submissions || [];
      
      setSubmissions(submissionsList);
      setFilteredSubmissions(submissionsList);
      
      // Only calculate stats from submissions if stats API fails
      if (statsLoading) {
        const statsData = {
          totalSubmissions: submissionsList.length,
          pendingSubmissions: submissionsList.filter((s: any) => s.status === 'pending').length,
          approvedSubmissions: submissionsList.filter((s: any) => s.status === 'approved').length,
          rejectedSubmissions: submissionsList.filter((s: any) => s.status === 'rejected').length,
          totalUsers: 0, // Not available from submissions API
          newSubmissionsToday: submissionsList.filter((s: any) => {
            const subDate = new Date(s.createdAt);
            const today = new Date();
            return subDate.toDateString() === today.toDateString();
          }).length,
          approvalRate: 0 // Will be calculated
        };
        
        // Calculate approval rate
        if (statsData.totalSubmissions > 0) {
          statsData.approvalRate = Math.round((statsData.approvedSubmissions / statsData.totalSubmissions) * 100);
        }
        
        setAdminStats(prev => ({
          ...prev,
          ...statsData
        }));
      }
    } catch (err: any) {
      setError(err.message || "Failed to load submissions");
    } finally {
      setLoading(false);
    }
  };

  const fetchAllData = async () => {
    setError(null);
    
    // Fetch both stats and submissions in parallel (like CountryAdminDashboard does)
    await Promise.all([
      fetchAdminStats(),
      fetchSubmissions()
    ]);
  };

  useEffect(() => {
    if (isAdmin && token) {
      fetchAllData();
    }
  }, [isAdmin, token]);

  // Filter submissions
  useEffect(() => {
    let filtered = [...submissions];
    
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(sub => 
        sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (sub.createdBy?.name && sub.createdBy.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter(sub => sub.status === statusFilter);
    }
    
    // Date filter
    if (dateFilter !== "all") {
      const now = new Date();
      filtered = filtered.filter(sub => {
        const subDate = new Date(sub.createdAt);
        
        switch (dateFilter) {
          case "today":
            return subDate.toDateString() === now.toDateString();
          case "week":
            const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
            return subDate >= weekAgo;
          case "month":
            const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
            return subDate >= monthAgo;
          default:
            return true;
        }
      });
    }
    
    setFilteredSubmissions(filtered);
  }, [searchTerm, statusFilter, dateFilter, submissions]);

  const reviewSubmission = async (submissionId: string, status: "approved" | "rejected") => {
    const rejectionNote = status === "rejected" ? prompt("Enter rejection reason:") : "";
    if (status === "rejected" && !rejectionNote) return;

    setActionLoading(submissionId);
    try {
      // Get token from localStorage as fallback
      const effectiveToken = token || localStorage.getItem("countryToken");
      
      if (!effectiveToken) {
        alert("Authentication required");
        return;
      }

      // Use the same API endpoint as CountryAdminDashboard
      const response = await fetch(`${API_BASE}/api/country/dashboard/review/${submissionId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${effectiveToken}`
        },
        body: JSON.stringify({ 
          status, 
          rejectionNote: rejectionNote || undefined 
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to review submission");
      }

      // Update local state
      setSubmissions(prev => prev.map(sub => 
        sub._id === submissionId 
          ? { 
              ...sub, 
              status, 
              reviewedAt: new Date().toISOString(),
              rejectionNote: rejectionNote || undefined 
            }
          : sub
      ));
      
      // Refresh stats after action
      fetchAdminStats();
      
      alert(`Submission ${status}!`);
    } catch (err: any) {
      alert(err.message || "Error reviewing submission");
    } finally {
      setActionLoading(null);
    }
  };

  const deleteSubmission = async (submissionId: string, countryName: string) => {
    if (!confirm(`Are you sure you want to delete submission for "${countryName}"?`)) {
      return;
    }

    setActionLoading(submissionId);
    try {
      // Get token from localStorage as fallback
      const effectiveToken = token || localStorage.getItem("countryToken");
      
      if (!effectiveToken) {
        alert("Authentication required");
        return;
      }

      // Note: CountryAdminDashboard doesn't have a delete submission API
      // You might need to use the same endpoint or create one
      const response = await fetch(`${API_BASE}/api/countries/${submissionId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${effectiveToken}`
        }
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to delete submission");
      }

      // Remove from local state
      setSubmissions(prev => prev.filter(sub => sub._id !== submissionId));
      
      // Refresh stats after deletion
      fetchAdminStats();
      
      alert("Submission deleted successfully!");
    } catch (err: any) {
      alert(err.message || "Error deleting submission");
    } finally {
      setActionLoading(null);
    }
  };

  const viewSubmissionDetails = (submission: any) => {
    // Use the same navigation pattern as CountryAdminDashboard
    navigate(`/country/admin/submission/${submission.slug}`);
  };

  const closeModal = () => {
    setSelectedSubmission(null);
  };

  const exportToCSV = () => {
    const headers = ["Country", "Slug", "Submitted By", "Status", "Created At", "Reviewed At", "Rejection Note"];
    const csvData = filteredSubmissions.map(sub => [
      `"${sub.name}"`,
      `"${sub.slug}"`,
      `"${sub.createdBy?.name || 'Unknown'}"`,
      `"${sub.status}"`,
      `"${new Date(sub.createdAt).toLocaleString()}"`,
      `"${sub.reviewedAt ? new Date(sub.reviewedAt).toLocaleString() : 'Not reviewed'}"`,
      `"${sub.rejectionNote || ''}"`
    ]);
    
    const csvContent = [
      headers.join(","),
      ...csvData.map(row => row.join(","))
    ].join("\n");
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `country-submissions-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'rejected': return <XCircle className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  if (!isAdmin) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-20 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Submissions Management</h1>
              <p className="text-gray-600 mt-2">Review and manage country content submissions</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={exportToCSV}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Download className="h-4 w-4" />
                Export CSV
              </button>
              <button
                onClick={fetchAllData}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                Refresh
              </button>
            </div>
          </div>

          {/* Admin Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Submissions</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {statsLoading ? '...' : adminStats.totalSubmissions.toLocaleString()}
                  </p>
                </div>
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending Review</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {statsLoading ? '...' : adminStats.pendingSubmissions.toLocaleString()}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Approval Rate</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {statsLoading ? '...' : `${adminStats.approvalRate}%`}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {statsLoading ? '...' : adminStats.totalUsers.toLocaleString()}
                  </p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </div>

          {/* Additional Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Approved</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {statsLoading ? '...' : adminStats.approvedSubmissions.toLocaleString()}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Rejected</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {statsLoading ? '...' : adminStats.rejectedSubmissions.toLocaleString()}
                  </p>
                </div>
                <XCircle className="h-8 w-8 text-red-600" />
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">New Today</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {statsLoading ? '...' : adminStats.newSubmissionsToday.toLocaleString()}
                  </p>
                </div>
                <BarChart3 className="h-8 w-8 text-indigo-600" />
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
                  placeholder="Search by country, slug, or submitter..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border rounded-lg"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
              
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="px-3 py-2 border rounded-lg"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">Last 7 Days</option>
                <option value="month">Last 30 Days</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submissions Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">
              Submissions ({filteredSubmissions.length})
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Showing {filteredSubmissions.length} of {submissions.length} total submissions
            </p>
          </div>
          
          {loading ? (
            <div className="py-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading submissions...</p>
            </div>
          ) : filteredSubmissions.length === 0 ? (
            <div className="py-12 text-center">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No submissions found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Country</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Submitted By</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Created</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredSubmissions.map((sub) => (
                    <tr key={sub._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <Globe className="h-5 w-5 text-blue-800" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{sub.name}</div>
                            <div className="text-sm text-gray-500">{sub.slug}</div>
                          </div>
                        </div>
                      </td>
                      
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span>{sub.createdBy?.name || 'Unknown'}</span>
                        </div>
                        <div className="text-sm text-gray-500">{sub.createdBy?.email || ''}</div>
                      </td>
                      
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600">
                          {new Date(sub.createdAt).toLocaleDateString()}
                        </div>
                        <div className="text-xs text-gray-500">
                          {new Date(sub.createdAt).toLocaleTimeString()}
                        </div>
                      </td>
                      
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(sub.status)}`}>
                            {getStatusIcon(sub.status)}
                            {sub.status}
                          </span>
                        </div>
                      </td>
                      
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => viewSubmissionDetails(sub)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                            title="View Details"
                          >
                            <Eye size={16} />
                          </button>
                          
                          {sub.status === 'pending' && (
                            <>
                              <button
                                onClick={() => reviewSubmission(sub._id, 'approved')}
                                disabled={actionLoading === sub._id}
                                className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm hover:bg-green-200 disabled:opacity-50"
                              >
                                {actionLoading === sub._id ? '...' : 'Approve'}
                              </button>
                              <button
                                onClick={() => reviewSubmission(sub._id, 'rejected')}
                                disabled={actionLoading === sub._id}
                                className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200 disabled:opacity-50"
                              >
                                {actionLoading === sub._id ? '...' : 'Reject'}
                              </button>
                            </>
                          )}
                          
                          {/* Remove delete button or update API endpoint */}
                          {/*
                          <button
                            onClick={() => deleteSubmission(sub._id, sub.name)}
                            disabled={actionLoading === sub._id}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg disabled:opacity-50"
                            title="Delete Submission"
                          >
                            <XCircle size={16} />
                          </button>
                          */}
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

export default ManageSubmissions;