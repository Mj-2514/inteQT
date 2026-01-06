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
  User
} from "lucide-react";
import { useCountryAuth } from "@/context/AuthContext";

const API_BASE =import.meta.env.VITE_API_BASE;

const ManageSubmissions = () => {
  const { user, token, isAdmin } = useCountryAuth();
  const navigate = useNavigate();
  
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null);

  // Stats
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
  });

  // Check admin access
  useEffect(() => {
    if (!isAdmin) {
      navigate("/country/dashboard");
    }
  }, [isAdmin, navigate]);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE}/api/countries/all?limit=500`, {
        headers: {
          "Authorization": `Bearer ${token}`
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
      
      // Calculate stats
      const statsData = {
        total: submissionsList.length,
        pending: submissionsList.filter((s: any) => s.status === 'pending').length,
        approved: submissionsList.filter((s: any) => s.status === 'approved').length,
        rejected: submissionsList.filter((s: any) => s.status === 'rejected').length,
      };
      setStats(statsData);
    } catch (err: any) {
      setError(err.message || "Failed to load submissions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAdmin && token) {
      fetchSubmissions();
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
      const response = await fetch(`${API_BASE}/api/countries/review/${submissionId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
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
      const response = await fetch(`${API_BASE}/api/countries/${submissionId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to delete submission");
      }

      // Remove from local state
      setSubmissions(prev => prev.filter(sub => sub._id !== submissionId));
      alert("Submission deleted successfully!");
    } catch (err: any) {
      alert(err.message || "Error deleting submission");
    } finally {
      setActionLoading(null);
    }
  };

  const viewSubmissionDetails = (submission: any) => {
    setSelectedSubmission(submission);
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
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
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
                onClick={fetchSubmissions}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                Refresh
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Submissions</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stats.total}</p>
                </div>
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stats.pending}</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Approved</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stats.approved}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Rejected</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stats.rejected}</p>
                </div>
                <XCircle className="h-8 w-8 text-red-600" />
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
                          
                          <button
                            onClick={() => deleteSubmission(sub._id, sub.name)}
                            disabled={actionLoading === sub._id}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg disabled:opacity-50"
                            title="Delete Submission"
                          >
                            <XCircle size={16} />
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

      {/* Submission Details Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Submission Details</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Country Information</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Country Name</p>
                        <p className="font-medium">{selectedSubmission.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Slug</p>
                        <p className="font-medium">{selectedSubmission.slug}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Status</p>
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(selectedSubmission.status)}`}>
                          {selectedSubmission.status}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Submitted On</p>
                        <p className="font-medium">
                          {new Date(selectedSubmission.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Submitted By</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <User className="h-5 w-5 text-blue-800" />
                      </div>
                      <div>
                        <p className="font-medium">{selectedSubmission.createdBy?.name || 'Unknown'}</p>
                        <p className="text-sm text-gray-600">{selectedSubmission.createdBy?.email || ''}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {selectedSubmission.content && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Content</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="prose max-w-none">
                        {Object.entries(selectedSubmission.content).map(([key, value]: [string, any]) => (
                          <div key={key} className="mb-3">
                            <p className="text-sm font-medium text-gray-700 capitalize mb-1">
                              {key.replace(/_/g, ' ')}:
                            </p>
                            <p className="text-gray-900">{value || 'Not provided'}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {selectedSubmission.rejectionNote && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Rejection Note</h4>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-red-800">{selectedSubmission.rejectionNote}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                  >
                    Close
                  </button>
                  {selectedSubmission.status === 'pending' && (
                    <>
                      <button
                        onClick={() => {
                          reviewSubmission(selectedSubmission._id, 'approved');
                          closeModal();
                        }}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => {
                          reviewSubmission(selectedSubmission._id, 'rejected');
                          closeModal();
                        }}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageSubmissions;