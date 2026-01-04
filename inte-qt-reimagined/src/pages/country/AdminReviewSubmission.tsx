// pages/AdminReviewSubmission.tsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  Globe,
  Shield,
  User,
  Calendar,
  Check,
  X,
  AlertCircle,
  Image as ImageIcon,
  ExternalLink,
  Download,
  Printer,
  Mail,
  BarChart3,
  Wifi,
  Cloud,
  HardDrive,
  Server,
  Shield as ShieldIcon,
  Zap,
  Package,
  Eye,
  Edit,
  Copy,
  ChevronLeft,
  ChevronRight,
  RefreshCw
} from "lucide-react";
import { useCountryAuth } from "../../context/AuthContext";

const API_BASE = import.meta.env.DEV ? "http://localhost:5000" : "https://inteqt.onrender.com";

const AdminReviewSubmission = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { user, token, isAdmin, logout } = useCountryAuth();
  
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rejectionNote, setRejectionNote] = useState("");
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'image' | 'history'>('details');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Submission data
  const [submission, setSubmission] = useState<any>(null);
  const [userDetails, setUserDetails] = useState<any>(null);

  // Check authentication and admin status
  useEffect(() => {
    console.log('=== REVIEW PAGE AUTH CHECK ===');
    console.log('slug:', slug);
    console.log('token:', token ? 'Exists' : 'Missing');
    console.log('user:', user);
    console.log('isAdmin:', isAdmin);
    
    if (!token || !user) {
      console.log('No auth, redirecting to login');
      navigate("/country/login");
      return;
    }
    
    if (!isAdmin) {
      console.log('Not admin, redirecting to dashboard');
      navigate("/country/dashboard");
      return;
    }

    if (slug) {
      fetchSubmissionDetails();
    } else {
      setError("No submission specified");
      setLoading(false);
    }
  }, [slug, token, user, isAdmin, navigate]);

  const fetchSubmissionDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const effectiveToken = token || localStorage.getItem("countryToken");
      console.log('Fetching submission with token:', effectiveToken ? 'Exists' : 'Missing');
      
      // Fetch submission details
      const url = `${API_BASE}/api/country/dashboard/submission/${slug}`;
      console.log('Fetching from URL:', url);
      
      const submissionRes = await fetch(url, {
        headers: { 
          "Authorization": `Bearer ${effectiveToken}`,
          "Content-Type": "application/json"
        }
      });

      console.log('Response status:', submissionRes.status);
      console.log('Response headers:', Object.fromEntries(submissionRes.headers.entries()));

      if (!submissionRes.ok) {
        if (submissionRes.status === 401) {
          console.log('Unauthorized, logging out');
          logout();
          navigate("/country/login");
          return;
        }
        if (submissionRes.status === 403) {
          setError("Admin access required to view this submission");
          return;
        }
        if (submissionRes.status === 404) {
          setError("Submission not found");
          return;
        }
        
        const errorText = await submissionRes.text();
        console.error('Error response text:', errorText);
        
        let errorMessage = `Failed to fetch submission: ${submissionRes.status}`;
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.message || errorMessage;
        } catch {
          // Not JSON
        }
        
        throw new Error(errorMessage);
      }

      const submissionData = await submissionRes.json();
      console.log('Submission data received:', submissionData);
      setSubmission(submissionData);
      
      // If we have user info in the submission, fetch additional user details
      if (submissionData.createdBy?._id) {
        fetchUserDetails(submissionData.createdBy._id);
      }
      
    } catch (err: any) {
      console.error("Error fetching submission:", err);
      setError(err.message || "Failed to load submission details");
    } finally {
      setLoading(false);
    }
  };

  const fetchUserDetails = async (userId: string) => {
    try {
      const effectiveToken = token || localStorage.getItem("countryToken");
      const url = `${API_BASE}/api/country/dashboard/user/${userId}`;
      console.log('Fetching user details from:', url);
      
      const res = await fetch(url, {
        headers: { "Authorization": `Bearer ${effectiveToken}` }
      });
      
      console.log('User details response:', res.status);
      
      if (res.ok) {
        const data = await res.json();
        console.log('User details data:', data);
        setUserDetails(data.user);
      } else {
        console.log('Failed to fetch user details:', res.status);
      }
    } catch (err) {
      console.error("Error fetching user details:", err);
    }
  };

  const handleApprove = async () => {
    if (!confirm("Are you sure you want to approve this submission?")) {
      return;
    }

    await submitReview("approved");
  };

  const handleReject = async () => {
    if (!rejectionNote.trim()) {
      alert("Please provide a rejection note");
      return;
    }

    await submitReview("rejected", rejectionNote);
    setShowRejectModal(false);
    setRejectionNote("");
  };

  const submitReview = async (status: "approved" | "rejected", note?: string) => {
    try {
      setSubmitting(true);
      
      const effectiveToken = token || localStorage.getItem("countryToken");
      const url = `${API_BASE}/api/country/dashboard/review/${submission._id}`;
      console.log('Submitting review to:', url);
      console.log('With status:', status);
      
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${effectiveToken}`
        },
        body: JSON.stringify({
          status,
          rejectionNote: note || ""
        })
      });

      console.log('Review response:', res.status);

      if (!res.ok) {
        const errorText = await res.text();
        console.error('Review error response:', errorText);
        let errorMessage = `Failed to ${status} submission`;
        try {
          const data = JSON.parse(errorText);
          errorMessage = data.message || errorMessage;
        } catch {
          // Not JSON
        }
        throw new Error(errorMessage);
      }

      const data = await res.json();
      console.log('Review success:', data);
      
      alert(`Submission ${status} successfully!`);
      
      // Navigate back to admin dashboard or submissions list
      navigate("/country/admin/submissions");
      
    } catch (err: any) {
      console.error("Error reviewing submission:", err);
      alert(err.message || `Failed to ${status} submission`);
    } finally {
      setSubmitting(false);
    }
  };

  const deleteSubmission = async () => {
    if (!confirm("Are you sure you want to delete this submission? This action cannot be undone.")) {
      return;
    }

    try {
      setSubmitting(true);
      const effectiveToken = token || localStorage.getItem("countryToken");
      const url = `${API_BASE}/api/country/dashboard/submission/${submission._id}`;
      console.log('Deleting submission:', url);
      
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${effectiveToken}`
        }
      });

      console.log('Delete response:', res.status);

      if (!res.ok) {
        const errorText = await res.text();
        console.error('Delete error:', errorText);
        throw new Error("Failed to delete submission");
      }

      alert("Submission deleted successfully!");
      navigate("/country/admin/submissions");
      
    } catch (err: any) {
      console.error("Error deleting submission:", err);
      alert(err.message || "Failed to delete submission");
    } finally {
      setSubmitting(false);
    }
  };

  const copyToClipboard = (text: string, field: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Invalid date';
    }
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
    switch(status) {
      case 'approved': return <CheckCircle className="h-5 w-5" />;
      case 'rejected': return <XCircle className="h-5 w-5" />;
      case 'pending': return <Clock className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  const exportToCSV = () => {
    if (!submission) return;
    
    const headers = [
      'Field', 'Value'
    ];
    
    const data = [
      ['Country Name', submission.Countryname || submission.name || ''],
      ['Slug', submission.slug || ''],
      ['Status', submission.status || ''],
      ['Submitted By', submission.createdBy?.name || ''],
      ['Submitted Email', submission.createdBy?.email || ''],
      ['Submitted Date', formatDate(submission.createdAt)],
      ['Partners Range', submission.partnersRange || ''],
      ['IPv4 Peers', submission.avgIpv4PeersRange || submission.Ipv4PeersRange || ''],
      ['IPv6 Peers', submission.avgIpv6PeersRange || submission.Ipv6PeersRange || ''],
      ['IXP Partners', submission.avgIxpPartnersRange || submission.IxpPartnersRange || ''],
      ['IPv4 Gateways', submission.avgIpv4GatewaysRange || submission.Ipv4GatewaysRange || ''],
      ['IPv6 Gateways', submission.avgIpv6GatewaysRange || submission.Ipv6GatewaysRange || ''],
      ['Cloud Partners', submission.avgCloudPartnersRange || submission.CloudPartnersRange || ''],
      ['DDoS Protection', submission.ddosProtection ? 'Enabled' : 'Disabled'],
      ['Min Service Latency', submission.minServiceLatencyRange || ''],
      ['Avg Service Latency', submission.avgServiceLatencyRange || ''],
      ['Commercial Offer Date', submission.commercialOfferDateRange || ''],
      ['Delivery Date', submission.deliveryDateRange || ''],
      ['Submarine Cable Link', submission.submarineCableLink || ''],
    ];
    
    const csvContent = [
      headers.join(','),
      ...data.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `submission-${submission.slug || submission._id}-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading submission details...</p>
          <button
            onClick={fetchSubmissionDetails}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RefreshCw className="inline h-4 w-4 mr-2" />
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl border shadow-lg p-8 max-w-md w-full">
          <div className="text-center">
            <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                <ArrowLeft className="inline h-4 w-4 mr-2" />
                Go Back
              </button>
              <button
                onClick={() => navigate("/country/admin/submissions")}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All Submissions
              </button>
              <button
                onClick={fetchSubmissionDetails}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <RefreshCw className="inline h-4 w-4 mr-2" />
                Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!submission) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Submission Not Found</h2>
          <button
            onClick={() => navigate("/country/admin/submissions")}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Submissions
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Rejection Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Reject Submission</h3>
              <button
                onClick={() => {
                  setShowRejectModal(false);
                  setRejectionNote("");
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-600 mb-4">
                Please provide a detailed reason for rejecting this submission. This note will be visible to the user.
              </p>
              <textarea
                value={rejectionNote}
                onChange={(e) => setRejectionNote(e.target.value)}
                placeholder="Enter rejection reason..."
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none text-black"
                autoFocus
              />
              <p className="text-sm text-gray-500 mt-2">Minimum 20 characters recommended.</p>
            </div>
            
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowRejectModal(false);
                  setRejectionNote("");
                }}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                disabled={submitting}
              >
                Cancel
              </button>
              <button
                onClick={handleReject}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
                disabled={submitting || !rejectionNote.trim()}
              >
                {submitting ? (
                  <>
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    Rejecting...
                  </>
                ) : (
                  <>
                    <XCircle className="h-4 w-4" />
                    Confirm Reject
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/country/admin/submissions")}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Review Submission</h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(submission.status)}`}>
                    {getStatusIcon(submission.status)}
                    <span className="capitalize">{submission.status}</span>
                  </span>
                  <span className="text-sm text-gray-500">
                    • Submitted {formatDate(submission.createdAt)}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={fetchSubmissionDetails}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                Refresh
              </button>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Printer className="h-4 w-4" />
                Print
              </button>
              <button
                onClick={() => {
                  const subject = encodeURIComponent(`Regarding your submission: ${submission.Countryname || submission.name}`);
                  const body = encodeURIComponent(`Hello ${submission.createdBy?.name || 'User'},\n\nRegarding your submission for "${submission.Countryname || submission.name}"...`);
                  window.open(`mailto:${submission.createdBy?.email}?subject=${subject}&body=${body}`);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                disabled={!submission.createdBy?.email}
              >
                <Mail className="h-4 w-4" />
                Email User
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Submission Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Status Card */}
            <div className="bg-white rounded-xl border shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Submission Status & Actions
                </h2>
              </div>
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg ${submission.status === 'approved' ? 'bg-green-100 text-green-600' : submission.status === 'rejected' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'}`}>
                        {getStatusIcon(submission.status)}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 capitalize">{submission.status} Submission</h3>
                        <p className="text-gray-600">
                          {submission.status === 'pending' 
                            ? 'Awaiting admin review and approval'
                            : submission.status === 'approved'
                            ? 'Approved and published'
                            : submission.status === 'rejected'
                            ? 'Rejected - requires user action'
                            : 'Draft - not submitted for review'}
                        </p>
                      </div>
                    </div>
                    
                    {submission.rejectionNote && submission.status === 'rejected' && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                          <div>
                            <h4 className="text-sm font-medium text-red-800 mb-1">Rejection Note:</h4>
                            <p className="text-red-700 whitespace-pre-wrap">{submission.rejectionNote}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {submission.status === 'pending' && (
                    <div className="flex flex-col gap-3 min-w-[200px]">
                      <button
                        onClick={handleApprove}
                        disabled={submitting}
                        className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                      >
                        {submitting ? (
                          <>
                            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            <CheckCircle className="h-5 w-5" />
                            Approve Submission
                          </>
                        )}
                      </button>
                      
                      <button
                        onClick={() => setShowRejectModal(true)}
                        disabled={submitting}
                        className="w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                      >
                        <XCircle className="h-5 w-5" />
                        Reject Submission
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Tabs Navigation */}
            <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
              <div className="border-b">
                <nav className="flex -mb-px">
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`flex-1 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'details' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                    <FileText className="inline h-4 w-4 mr-2" />
                    Details
                  </button>
                  <button
                    onClick={() => setActiveTab('image')}
                    className={`flex-1 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'image' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                    disabled={!submission.submarineCableImage}
                  >
                    <ImageIcon className="inline h-4 w-4 mr-2" />
                    Submarine Cable Image
                  </button>
                  <button
                    onClick={() => setActiveTab('history')}
                    className={`flex-1 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'history' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                    <BarChart3 className="inline h-4 w-4 mr-2" />
                    Activity History
                  </button>
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'details' && (
                  <div className="space-y-8">
                    {/* Country Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Globe className="h-5 w-5" />
                        Country Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Country Name</label>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                                <p className="text-gray-900 font-medium">{submission.Countryname || submission.name || 'Not specified'}</p>
                              </div>
                              <button
                                onClick={() => copyToClipboard(submission.Countryname || submission.name, 'countryName')}
                                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                                title="Copy to clipboard"
                              >
                                {copiedField === 'countryName' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                              </button>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">URL Slug</label>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                                <p className="text-gray-900 font-mono">/{submission.slug || 'not-specified'}</p>
                              </div>
                              <button
                                onClick={() => copyToClipboard(submission.slug, 'slug')}
                                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                                title="Copy to clipboard"
                              >
                                {copiedField === 'slug' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                              </button>
                            </div>
                          </div>
                          
                          {submission.ddosProtection !== undefined && (
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">DDoS Protection</label>
                              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${submission.ddosProtection ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                <ShieldIcon className="h-4 w-4" />
                                <span>{submission.ddosProtection ? 'Enabled' : 'Disabled'}</span>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        {/* Network Ranges */}
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Partners Range</label>
                            <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                              <p className="text-gray-900">{submission.partnersRange || 'Not specified'}</p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">IPv4 Peers</label>
                              <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                                <p className="text-gray-900">{submission.avgIpv4PeersRange || submission.Ipv4PeersRange || 'N/A'}</p>
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">IPv6 Peers</label>
                              <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                                <p className="text-gray-900">{submission.avgIpv6PeersRange || submission.Ipv6PeersRange || 'N/A'}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Network Infrastructure */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Wifi className="h-5 w-5" />
                        Network Infrastructure
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                              <Server className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">IXP Partners</p>
                              <p className="text-lg font-semibold text-gray-900">{submission.avgIxpPartnersRange || submission.IxpPartnersRange || 'N/A'}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                              <HardDrive className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">IPv4 Gateways</p>
                              <p className="text-lg font-semibold text-gray-900">{submission.avgIpv4GatewaysRange || submission.Ipv4GatewaysRange || 'N/A'}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                              <Cloud className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Cloud Partners</p>
                              <p className="text-lg font-semibold text-gray-900">{submission.avgCloudPartnersRange || submission.CloudPartnersRange || 'N/A'}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Service Performance */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Zap className="h-5 w-5" />
                        Service Performance
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Service Latency</label>
                          <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                            <p className="text-gray-900">{submission.minServiceLatencyRange || 'Not specified'}</p>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Average Service Latency</label>
                          <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                            <p className="text-gray-900">{submission.avgServiceLatencyRange || 'Not specified'}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features & Services */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Package className="h-5 w-5" />
                        Features & Services
                      </h3>
                      
                      {submission.features && (
                        <div className="mb-6">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
                          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg whitespace-pre-wrap text-black">
                            {submission.features}
                          </div>
                        </div>
                      )}
                      
                      {submission.ourServices && (
                        <div className="mb-6">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Our Services</label>
                          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg whitespace-pre-wrap text-black">
                            {submission.ourServices}
                          </div>
                        </div>
                      )}
                      
                      {submission.capabilities && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Capabilities</label>
                          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg whitespace-pre-wrap text-black">
                            {submission.capabilities}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Delivery & Integration */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Delivery & Integration
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Commercial Offer Date</label>
                          <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                            <p className="text-gray-900">{submission.commercialOfferDateRange || 'Not specified'}</p>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Date</label>
                          <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                            <p className="text-gray-900">{submission.deliveryDateRange || 'Not specified'}</p>
                          </div>
                        </div>
                      </div>
                      
                      {submission.integrationNote && (
                        <div className="mt-6">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Integration Note</label>
                          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg whitespace-pre-wrap text-black">
                            {submission.integrationNote}
                          </div>
                        </div>
                      )}
                      
                      {submission.whyChooseUs && (
                        <div className="mt-6">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Why Choose Us</label>
                          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg whitespace-pre-wrap text-black">
                            {submission.whyChooseUs}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'image' && submission.submarineCableImage && (
                  <div className="space-y-6">
                    <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                      {!imageLoaded && (
                        <div className="flex items-center justify-center h-64">
                          <div className="text-center">
                            <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-500">Loading image...</p>
                          </div>
                        </div>
                      )}
                      <img
                        src={submission.submarineCableImage}
                        alt="Submarine Cable Map"
                        className={`max-w-full h-auto rounded-lg shadow-lg mx-auto ${!imageLoaded ? 'hidden' : ''}`}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageLoaded(false)}
                      />
                    </div>
                    
                    {submission.submarineCableLink && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="text-sm font-medium text-blue-800 mb-2">Submarine Cable Link</h4>
                        <div className="flex items-center gap-3">
                          <a
                            href={submission.submarineCableLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 p-3 bg-white border border-blue-200 rounded-lg text-blue-600 hover:text-blue-800 hover:border-blue-300 transition-colors truncate"
                          >
                            {submission.submarineCableLink}
                          </a>
                          <a
                            href={submission.submarineCableLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            title="Open link"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    )}
                    
                    {!imageLoaded && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                          <div>
                            <h4 className="text-sm font-medium text-red-800 mb-1">Image Failed to Load</h4>
                            <p className="text-red-700 text-sm">The submarine cable image could not be loaded. You can try opening the link directly:</p>
                            {submission.submarineCableImage && (
                              <a
                                href={submission.submarineCableImage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 mt-2 text-blue-600 hover:text-blue-800 text-sm"
                              >
                                Open image URL
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'history' && (
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-sm font-medium text-gray-700 mb-4">Submission Timeline</h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                              <FileText className="h-4 w-4 text-blue-600" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">Submission Created</p>
                            <p className="text-sm text-gray-500">{formatDate(submission.createdAt)}</p>
                            <p className="text-sm text-gray-600 mt-1">User submitted the country form for review</p>
                          </div>
                        </div>
                        
                        {submission.updatedAt && submission.updatedAt !== submission.createdAt && (
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0">
                              <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                                <Edit className="h-4 w-4 text-yellow-600" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">Last Updated</p>
                              <p className="text-sm text-gray-500">{formatDate(submission.updatedAt)}</p>
                              <p className="text-sm text-gray-600 mt-1">Submission was last modified</p>
                            </div>
                          </div>
                        )}
                        
                        {submission.status === 'rejected' && submission.rejectionNote && (
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0">
                              <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                                <XCircle className="h-4 w-4 text-red-600" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">Rejected</p>
                              <p className="text-sm text-gray-500">
                                {submission.updatedAt ? formatDate(submission.updatedAt) : 'Unknown date'}
                              </p>
                              <div className="mt-2 p-3 bg-red-50 border border-red-100 rounded-lg">
                                <p className="text-sm text-red-700 whitespace-pre-wrap">{submission.rejectionNote}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - User Info & Actions */}
          <div className="space-y-8">
            {/* User Information */}
            <div className="bg-white rounded-xl border shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Submitted By
                </h2>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                    {(submission.createdBy?.name || 'U').charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{submission.createdBy?.name || 'Unknown User'}</h3>
                    <p className="text-sm text-gray-500">{submission.createdBy?.email || 'No email provided'}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button
                    onClick={() => copyToClipboard(submission.createdBy?.email || '', 'userEmail')}
                    className="w-full p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors text-left"
                  >
                    <p className="text-sm text-gray-600">Email</p>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-900 truncate">{submission.createdBy?.email || 'N/A'}</p>
                      <span className="text-gray-400">
                        {copiedField === 'userEmail' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                      </span>
                    </div>
                  </button>
                  
                  {submission.createdBy?._id && (
                    <button
                      onClick={() => copyToClipboard(submission.createdBy?._id || '', 'userId')}
                      className="w-full p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors text-left"
                    >
                      <p className="text-sm text-gray-600">User ID</p>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-900 font-mono text-sm truncate">{submission.createdBy?._id || 'N/A'}</p>
                        <span className="text-gray-400">
                          {copiedField === 'userId' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                        </span>
                      </div>
                    </button>
                  )}
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <button
                    onClick={() => {
                      navigate(`/country/admin/users`);
                    }}
                    className="w-full px-4 py-2.5 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Eye className="h-4 w-4" />
                    View All Users
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
              </div>
              <div className="p-6 space-y-3">
                <button
                  onClick={exportToCSV}
                  className="w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Export as CSV
                </button>
                
                <button
                  onClick={() => {
                    const text = `Country: ${submission.Countryname || submission.name}\nSlug: ${submission.slug}\nStatus: ${submission.status}\nSubmitted by: ${submission.createdBy?.name} (${submission.createdBy?.email})\n\nReview URL: ${window.location.href}`;
                    copyToClipboard(text, 'summary');
                    alert('Submission summary copied to clipboard!');
                  }}
                  className="w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Copy className="h-4 w-4" />
                  Copy Summary
                </button>
                
                <button
                  onClick={deleteSubmission}
                  disabled={submitting}
                  className="w-full px-4 py-3 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <X className="h-4 w-4" />
                  Delete Submission
                </button>
              </div>
            </div>

            {/* Submission Metadata */}
            <div className="bg-white rounded-xl border shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Metadata</h2>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Submission ID</p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-gray-900 font-mono text-sm truncate">{submission._id}</p>
                    <button
                      onClick={() => copyToClipboard(submission._id, 'submissionId')}
                      className="p-1 text-gray-400 hover:text-gray-600"
                      title="Copy ID"
                    >
                      {copiedField === 'submissionId' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Created</p>
                    <p className="text-gray-900">{new Date(submission.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Last Updated</p>
                    <p className="text-gray-900">{submission.updatedAt ? new Date(submission.updatedAt).toLocaleDateString() : 'Never'}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-600">Current Status</p>
                  <span className={`inline-flex items-center gap-1 px-3 py-1 mt-1 rounded-full text-sm font-medium border ${getStatusColor(submission.status)}`}>
                    {getStatusIcon(submission.status)}
                    <span className="capitalize">{submission.status}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg lg:static lg:bg-transparent lg:border-0 lg:shadow-none mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-600">
                Reviewing: <span className="font-medium text-gray-900">{submission.Countryname || submission.name}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => navigate("/country/admin/submissions")}
                  className="w-full sm:w-auto px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to List
                </button>
                
                {submission.status === 'pending' && (
                  <>
                    <button
                      onClick={handleApprove}
                      disabled={submitting}
                      className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
                    >
                      {submitting ? (
                        <>
                          <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-5 w-5" />
                          Approve Now
                        </>
                      )}
                    </button>
                    
                    <button
                      onClick={() => setShowRejectModal(true)}
                      disabled={submitting}
                      className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
                    >
                      <XCircle className="h-5 w-5" />
                      Reject
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReviewSubmission;