// src/pages/EventReview.tsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  FileText,
  Tag,
  Globe,
  Phone,
  Mail,
  Image as ImageIcon,
  Video,
  Gift,
  CheckCircle,
  XCircle,
  AlertCircle,
  ArrowLeft,
  ExternalLink,
  Eye,
  ThumbsUp,
  ThumbsDown,
  TrendingUp,
  Trash2,
  Link as LinkIcon,
  CalendarDays
} from "lucide-react";

const API_BASE = import.meta.env.VITE_API_BASE;

interface EventData {
  _id: string;
  title: string;
  slug: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  city: string;
  type: string;
  tags: string[];
  introMedia: string;
  mediaType: 'image' | 'video' | 'gif' | 'none';
  linkedPostUrl: string;
  status: 'pending' | 'published' | 'rejected';
  rejectionNote?: string;
  views: number;
  isDeleted: boolean;
  deletedAt?: string;
  createdAt: string;
  updatedAt: string;
  createdBy: {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    profilePicture?: string;
  };
}

interface ApiResponse {
  success: boolean;
  message: string;
  data?: EventData;
  event?: EventData;
}

const EventReview = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { token } = useAuth();
  
  const [event, setEvent] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState(false);
  
  // Rejection state
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectionNote, setRejectionNote] = useState('');
  
  // Preview state
  const [previewMedia, setPreviewMedia] = useState<string | null>(null);

  useEffect(() => {
    if (id && token) {
      fetchEventDetails();
    }
  }, [id, token]);

  const fetchEventDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      
      
      
      const res = await fetch(`${API_BASE}/api/events/auth/pending/${id}`, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      
      
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error('Event not found or has been deleted');
        }
        if (res.status === 401 || res.status === 403) {
          throw new Error('Unauthorized to view this event');
        }
        throw new Error(`Failed to fetch event: ${res.status}`);
      }
      
      const data: ApiResponse = await res.json();
      
      
      if (data.success) {
        // Handle both response formats: data.data or data.event
        setEvent(data.data || data.event || null);
      } else {
        throw new Error(data.message || 'Failed to load event details');
      }
    } catch (err) {
      console.error('Error fetching event:', err);
      setError(err instanceof Error ? err.message : 'Failed to load event');
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async () => {
    if (!confirm('Are you sure you want to publish this event? This will make it visible to all users.')) {
      return;
    }

    try {
      setActionLoading(true);
      
      const res = await fetch(`${API_BASE}/api/events/auth/approve/${id}`, {
        method: 'PUT',
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || `Failed to approve: ${res.status}`);
      }
      
      const data = await res.json();
      
      if (data.success) {
        alert('Event published successfully!');
        navigate('/event-admin-dashboard/pending');
      } else {
        throw new Error(data.message || 'Failed to publish event');
      }
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to publish event');
      console.error('Error publishing event:', err);
    } finally {
      setActionLoading(false);
    }
  };

  const handleReject = async () => {
    if (!rejectionNote.trim()) {
      alert('Please provide a rejection note for the organizer');
      return;
    }

    if (!confirm('Are you sure you want to reject this event? This will notify the organizer and hide the event.')) {
      return;
    }

    try {
      setActionLoading(true);
      
      const res = await fetch(`${API_BASE}/api/events/auth/reject/${id}`, {
        method: 'PUT',
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          rejectionNote: rejectionNote.trim()
        })
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || `Failed to reject: ${res.status}`);
      }
      
      const data = await res.json();
      
      if (data.success) {
        alert('Event rejected successfully!');
        setShowRejectModal(false);
        navigate('/event-admin-dashboard/pending');
      } else {
        throw new Error(data.message || 'Failed to reject event');
      }
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to reject event');
      console.error('Error rejecting event:', err);
    } finally {
      setActionLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return 'Invalid date';
    }
  };

  const formatDateTime = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Invalid date';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
            <Clock className="w-4 h-4 mr-1.5" />
            Pending Review
          </span>
        );
      case 'published':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
            <CheckCircle className="w-4 h-4 mr-1.5" />
            Published
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 border border-red-200">
            <XCircle className="w-4 h-4 mr-1.5" />
            Rejected
          </span>
        );
      default:
        return null;
    }
  };

  const getMediaIcon = (mediaType: string) => {
    switch (mediaType) {
      case 'image':
        return <ImageIcon className="w-5 h-5 mr-2" />;
      case 'video':
        return <Video className="w-5 h-5 mr-2" />;
      case 'gif':
        return <Gift className="w-5 h-5 mr-2" />;
      default:
        return null;
    }
  };

  const getEventTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      conference: 'bg-purple-100 text-purple-800 border-purple-200',
      workshop: 'bg-blue-100 text-blue-800 border-blue-200',
      meeting: 'bg-green-100 text-green-800 border-green-200',
      seminar: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      networking: 'bg-pink-100 text-pink-800 border-pink-200',
      webinar: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      hackathon: 'bg-orange-100 text-orange-800 border-orange-200',
      other: 'bg-gray-100 text-gray-800 border-gray-200'
    };
    return colors[type] || colors.other;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/admin/pending-events')}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Pending Events
          </button>
          
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600 text-lg">Loading event details...</p>
              <p className="text-gray-400 text-sm mt-2">Please wait</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/admin/pending-events')}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Pending Events
          </button>
          
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
            <AlertCircle className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-red-800 mb-2">
              {error?.includes('Unauthorized') ? 'Unauthorized Access' : 'Event Not Found'}
            </h3>
            <p className="text-red-600 mb-4">
              {error || 'The event you are looking for does not exist.'}
            </p>
            <button
              onClick={() => navigate('/admin/pending-events')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              Return to Pending Events
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Check if event is deleted
  if (event.isDeleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <div className="max-w-7xl mxauto">
          <button
            onClick={() => navigate('/admin/pending-events')}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Pending Events
          </button>
          
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
            <Trash2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Event Deleted</h3>
            <p className="text-gray-600 mb-2">This event has been deleted.</p>
            {event.deletedAt && (
              <p className="text-gray-500 text-sm">
                Deleted on: {formatDateTime(event.deletedAt)}
              </p>
            )}
            <button
              onClick={() => navigate('/admin/pending-events')}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
            >
              Return to Pending Events
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Rejection Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Reject Event</h3>
              <button
                onClick={() => setShowRejectModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rejection Note *
                </label>
                <textarea
                  value={rejectionNote}
                  onChange={(e) => setRejectionNote(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Please provide specific feedback for the organizer about why the event was rejected and what needs to be improved..."
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  This note will be visible to the event organizer
                </p>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => setShowRejectModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                  disabled={actionLoading}
                >
                  Cancel
                </button>
                <button
                  onClick={handleReject}
                  disabled={actionLoading || !rejectionNote.trim()}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  {actionLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Rejecting...
                    </>
                  ) : (
                    <>
                      <ThumbsDown className="w-4 h-4 mr-2" />
                      Reject Event
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Media Preview Modal */}
      {previewMedia && event.mediaType !== 'none' && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setPreviewMedia(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              ✕ Close
            </button>
            {event.mediaType === 'image' || event.mediaType === 'gif' ? (
              <img
                src={previewMedia}
                alt="Event media"
                className="w-full h-auto rounded-lg"
              />
            ) : event.mediaType === 'video' ? (
              <video
                src={previewMedia}
                controls
                autoPlay
                className="w-full h-auto rounded-lg"
              />
            ) : null}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/admin/pending-events')}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Pending Events
          </button>
          
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center flex-wrap gap-3 mb-3">
                {getStatusBadge(event.status)}
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getEventTypeColor(event.type)}`}>
                  <Tag className="w-4 h-4 mr-1.5" />
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
                {event.views > 0 && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 border border-gray-200">
                    <TrendingUp className="w-4 h-4 mr-1.5" />
                    {event.views} views
                  </span>
                )}
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {event.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-1.5" />
                  Submitted by {event.createdBy?.name || 'Unknown User'}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1.5" />
                  {formatDate(event.createdAt)}
                </span>
                {event.slug && (
                  <span className="flex items-center">
                    <LinkIcon className="w-4 h-4 mr-1.5" />
                    {event.slug}
                  </span>
                )}
              </div>
            </div>
            
            {/* Action Buttons */}
            {event.status === 'pending' && (
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleApprove}
                  disabled={actionLoading}
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {actionLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Publishing...
                    </>
                  ) : (
                    <>
                      <ThumbsUp className="w-5 h-5 mr-2" />
                      Publish Event
                    </>
                  )}
                </button>
                
                <button
                  onClick={() => setShowRejectModal(true)}
                  disabled={actionLoading}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 font-medium border border-red-300 rounded-lg hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ThumbsDown className="w-5 h-5 mr-2" />
                  Reject Event
                </button>
              </div>
            )}

            {/* Show rejection note if event is already rejected */}
            {event.status === 'rejected' && event.rejectionNote && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-md">
                <div className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-red-800 mb-1">Rejection Note:</p>
                    <p className="text-red-700 text-sm">{event.rejectionNote}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Event Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Intro Media */}
            {event.mediaType !== 'none' && event.introMedia && (
              <div className="bg-white rounded-xl shadow-sm border p-5">
                <div className="flex items-center mb-4">
                  {getMediaIcon(event.mediaType)}
                  <h3 className="text-lg font-semibold text-gray-900">Event Media</h3>
                  <span className="ml-2 text-sm text-gray-500 capitalize">
                    ({event.mediaType})
                  </span>
                </div>
                
                <div className="relative">
                  <button
                    onClick={() => setPreviewMedia(event.introMedia)}
                    className="w-full rounded-lg overflow-hidden border border-gray-200 hover:border-blue-400 transition-colors group"
                  >
                    {event.mediaType === 'image' || event.mediaType === 'gif' ? (
                      <img
                        src={event.introMedia}
                        alt="Event media"
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x400?text=Image+Not+Available';
                        }}
                      />
                    ) : event.mediaType === 'video' ? (
                      <div className="relative h-64 bg-black">
                        <video
                          src={event.introMedia}
                          className="w-full h-full object-contain"
                          muted
                          loop
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center">
                            <Video className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                    ) : null}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                  </button>
                  <button
                    onClick={() => setPreviewMedia(event.introMedia)}
                    className="mt-3 text-sm text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <Eye className="w-4 h-4 mr-1.5" />
                    Click to view full screen
                  </button>
                </div>
              </div>
            )}

            {/* Description */}
            <div className="bg-white rounded-xl shadow-sm border p-5">
              <div className="flex items-center mb-4">
                <FileText className="w-5 h-5 text-gray-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Description</h3>
              </div>
              <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                {event.description || 'No description provided.'}
              </div>
            </div>

            {/* Event Details */}
            <div className="bg-white rounded-xl shadow-sm border p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date & Time */}
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <CalendarDays className="w-5 h-5 mr-2" />
                      <span className="font-medium">Start Date & Time</span>
                    </div>
                    <p className="text-gray-900 pl-7">
                      {formatDateTime(event.startDate)}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <CalendarDays className="w-5 h-5 mr-2" />
                      <span className="font-medium">End Date & Time</span>
                    </div>
                    <p className="text-gray-900 pl-7">
                      {formatDateTime(event.endDate)}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-4">
                  {(event.location || event.city) && (
                    <div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span className="font-medium">Location</span>
                      </div>
                      <p className="text-gray-900 pl-7">
                        {event.location}
                        {event.city && <>, {event.city}</>}
                      </p>
                    </div>
                  )}

                  {/* Linked Post URL */}
                  {event.linkedPostUrl && (
                    <div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <LinkIcon className="w-5 h-5 mr-2" />
                        <span className="font-medium">Linked Post</span>
                      </div>
                      <a
                        href={event.linkedPostUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 pl-7 flex items-center break-all"
                      >
                        {event.linkedPostUrl}
                        <ExternalLink className="w-4 h-4 ml-1.5 flex-shrink-0" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Tags */}
            {event.tags && event.tags.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 border border-gray-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Organizer & Info */}
          <div className="space-y-6">
            {/* Organizer Info */}
            <div className="bg-white rounded-xl shadow-sm border p-5">
              <div className="flex items-center mb-4">
                <User className="w-5 h-5 text-gray-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Submitted By</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {event.createdBy?.profilePicture ? (
                      <img
                        src={event.createdBy.profilePicture}
                        alt={event.createdBy.name}
                        className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/48?text=User';
                        }}
                      />
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-white shadow-sm flex items-center justify-center">
                        <User className="h-6 w-6 text-blue-600" />
                      </div>
                    )}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">{event.createdBy?.name || 'Unknown User'}</p>
                    <p className="text-sm text-gray-500">{event.createdBy?.email || 'No email provided'}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {event.createdBy?.phone && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{event.createdBy.phone}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="truncate">{event.createdBy?.email || 'No email'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Information */}
            <div className="bg-white rounded-xl shadow-sm border p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Information</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Created</p>
                  <p className="text-gray-900">{formatDateTime(event.createdAt)}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Last Updated</p>
                  <p className="text-gray-900">{formatDateTime(event.updatedAt)}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Event ID</p>
                  <p className="text-gray-900 font-mono text-sm truncate">{event._id}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Slug</p>
                  <p className="text-gray-900 font-mono text-sm truncate">{event.slug}</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <button
                  onClick={() => window.open(`/events/${event.slug}`, '_blank')}
                  className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Preview Event Page
                </button>
                
                <button
                  onClick={() => navigator.clipboard.writeText(`${window.location.origin}/events/${event.slug}`)}
                  className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <LinkIcon className="w-4 h-4 mr-2" />
                  Copy Event Link
                </button>
                
                {event.linkedPostUrl && (
                  <a
                    href={event.linkedPostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Linked Post
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventReview;