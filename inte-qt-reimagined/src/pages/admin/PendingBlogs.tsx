import { useEffect, useState } from "react";
import { CheckCircle, XCircle, Eye, Calendar, User, Tag, Loader2 } from "lucide-react";
import { format } from "date-fns";

const API_BASE = import.meta.env.DEV ? "http://localhost:5000" : "https://inteqt.onrender.com";

interface Blog {
  _id: string;
  title: string;
  authorName: string;
  introduction?: string;
  description?: string;
  conclusion?: string;
  tags?: string[];
  introImage?: string;
  descriptionImage?: string;
  status: string;
  createdAt: string;
  createdBy: {
    _id: string;
    name: string;
    email: string;
  };
  adminNote?: string;
}

const PendingBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rejectionNotes, setRejectionNotes] = useState<Record<string, string>>({});
  const [processing, setProcessing] = useState<string | null>(null);

  useEffect(() => {
    fetchPendingBlogs();
  }, []);

  const fetchPendingBlogs = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      
      const response = await fetch(`${API_BASE}/api/admin/blogs/status/pending`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch pending blogs: ${response.status}`);
      }

      const data = await response.json();
      setBlogs(data);
    } catch (err: any) {
      console.error("Error fetching pending blogs:", err);
      setError(err.message || "Failed to load pending blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (blogId: string) => {
    try {
      setProcessing(blogId);
      const token = localStorage.getItem("token");
      
      const response = await fetch(`${API_BASE}/api/admin/blogs/${blogId}/approve`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to approve blog: ${response.status}`);
      }

      // Remove approved blog from list
      setBlogs(prev => prev.filter(blog => blog._id !== blogId));
      
      // Show success message
      alert("Blog approved successfully!");
    } catch (err: any) {
      console.error("Error approving blog:", err);
      alert(`Failed to approve blog: ${err.message}`);
    } finally {
      setProcessing(null);
    }
  };

  const handleReject = async (blogId: string) => {
    const note = rejectionNotes[blogId]?.trim();
    
    if (!note) {
      alert("Please provide a rejection note");
      return;
    }

    try {
      setProcessing(blogId);
      const token = localStorage.getItem("token");
      
      const response = await fetch(`${API_BASE}/api/admin/blogs/${blogId}/reject`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ note })
      });

      if (!response.ok) {
        throw new Error(`Failed to reject blog: ${response.status}`);
      }

      // Remove rejected blog from list
      setBlogs(prev => prev.filter(blog => blog._id !== blogId));
      
      // Clear rejection note
      setRejectionNotes(prev => ({ ...prev, [blogId]: "" }));
      
      // Show success message
      alert("Blog rejected successfully!");
    } catch (err: any) {
      console.error("Error rejecting blog:", err);
      alert(`Failed to reject blog: ${err.message}`);
    } finally {
      setProcessing(null);
    }
  };

  const handleViewBlog = (slug: string) => {
    window.open(`/blog/${slug}`, "_blank");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
        <span className="ml-3 text-gray-600">Loading pending blogs...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-600 font-medium">{error}</p>
        <button
          onClick={fetchPendingBlogs}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Pending Blogs Review</h1>
          <p className="text-gray-600 mt-2">
            Review and manage blog submissions from users
          </p>
        </div>
        <div className="text-sm text-gray-500">
          {blogs.length} blog{blogs.length !== 1 ? 's' : ''} pending review
        </div>
      </div>

      {blogs.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border">
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Pending Blogs</h3>
          <p className="text-gray-500">All blogs have been reviewed. Check back later for new submissions.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Blog Header */}
              <div className="p-6 border-b">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{blog.title}</h2>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>By: {blog.authorName}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Submitted: {format(new Date(blog.createdAt), "MMM dd, yyyy")}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>User: {blog.createdBy?.name} ({blog.createdBy?.email})</span>
                      </div>
                    </div>

                    {/* Tags */}
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full"
                          >
                            <Tag className="h-3 w-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleViewBlog(blog.slug)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      title="Preview blog"
                    >
                      <Eye className="h-4 w-4" />
                      Preview
                    </button>
                  </div>
                </div>
              </div>

              {/* Blog Content Preview */}
              <div className="p-6 border-b">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Introduction */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Introduction</h3>
                    <p className="text-gray-600 line-clamp-4">
                      {blog.introduction || "No introduction provided"}
                    </p>
                  </div>

                  {/* Description Preview */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Description Preview</h3>
                    <p className="text-gray-600 line-clamp-4">
                      {blog.description || "No description provided"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Media Preview */}
              {(blog.introImage || blog.descriptionImage) && (
                <div className="p-6 border-b">
                  <h3 className="font-semibold text-gray-900 mb-3">Media Preview</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {blog.introImage && (
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Intro Image</p>
                        <div className="h-40 bg-gray-100 rounded-lg overflow-hidden">
                          <img
                            src={blog.introImage}
                            alt="Intro"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                              (e.target as HTMLImageElement).parentElement!.innerHTML = 
                                '<div class="w-full h-full flex items-center justify-center text-gray-400">Image not available</div>';
                            }}
                          />
                        </div>
                      </div>
                    )}
                    {blog.descriptionImage && (
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Description Image</p>
                        <div className="h-40 bg-gray-100 rounded-lg overflow-hidden">
                          <img
                            src={blog.descriptionImage}
                            alt="Description"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                              (e.target as HTMLImageElement).parentElement!.innerHTML = 
                                '<div class="w-full h-full flex items-center justify-center text-gray-400">Image not available</div>';
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Action Section */}
              <div className="p-6 bg-gray-50">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rejection Note (required for rejection)
                    </label>
                    <textarea
                      value={rejectionNotes[blog._id] || ""}
                      onChange={(e) =>
                        setRejectionNotes(prev => ({
                          ...prev,
                          [blog._id]: e.target.value
                        }))
                      }
                      placeholder="Provide constructive feedback for the author..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-black"
                      rows={3}
                    />
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => handleApprove(blog._id)}
                      disabled={processing === blog._id}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {processing === blog._id ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-4 w-4" />
                          Approve Blog
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleReject(blog._id)}
                      disabled={processing === blog._id || !rejectionNotes[blog._id]?.trim()}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {processing === blog._id ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <XCircle className="h-4 w-4" />
                          Reject Blog
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PendingBlogs;