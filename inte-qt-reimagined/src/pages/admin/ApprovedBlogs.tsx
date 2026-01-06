import { useEffect, useState } from "react";
import { CheckCircle, Trash2, Eye, Calendar, User, Tag, Loader2, AlertCircle } from "lucide-react";
import { format } from "date-fns";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"

interface Blog {
  _id: string;
  title: string;
  authorName: string;
  slug: string;
  introduction?: string;
  tags?: string[];
  introImage?: string;
  status: string;
  createdAt: string;
  createdBy: {
    _id: string;
    name: string;
    email: string;
  };
  published: boolean;
}

export default function ApprovedBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    fetchApprovedBlogs();
  }, []);

  const fetchApprovedBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No authentication token found");
      }

      // FIXED: Correct API endpoint
      const response = await fetch(`${API_BASE}/api/admin/blogs/status/approved`, {
        headers: { 
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      // Log response for debugging
      ("Response status:", response.status);
      
      if (!response.ok) {
        // Try to get error message from response
        const errorText = await response.text();
        console.error("Error response:", errorText);
        
        let errorMessage = `Server error: ${response.status}`;
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.message || errorMessage;
        } catch {
          errorMessage = errorText || errorMessage;
        }
        
        throw new Error(errorMessage);
      }

      const data = await response.json();
      ("Approved blogs data:", data);
      
      // Ensure data is an array
      if (!Array.isArray(data)) {
        throw new Error("Invalid response format: expected an array");
      }
      
      setBlogs(data);
    } catch (err: any) {
      console.error("Error fetching approved blogs:", err);
      setError(err.message || "Failed to load approved blogs");
      setBlogs([]); // Reset to empty array on error
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBlog = async (blogId: string) => {
    if (!window.confirm("Are you sure you want to delete this approved blog? This action cannot be undone.")) {
      return;
    }

    try {
      setDeletingId(blogId);
      const token = localStorage.getItem("token");

      const response = await fetch(`${API_BASE}/api/admin/blogs/${blogId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to delete blog: ${response.status} - ${errorText}`);
      }

      // Remove deleted blog from list
      setBlogs(prev => prev.filter(blog => blog._id !== blogId));
      
      // Show success message
      alert("Blog deleted successfully!");
    } catch (err: any) {
      console.error("Error deleting blog:", err);
      alert(`Failed to delete blog: ${err.message}`);
    } finally {
      setDeletingId(null);
    }
  };

  const handleViewBlog = (slug: string) => {
    window.open(`/blog/${slug}`, "_blank");
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <Loader2 className="h-10 w-10 animate-spin text-indigo-600" />
        <p className="text-gray-600">Loading approved blogs...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-2xl mx-auto">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-lg font-semibold text-red-800 mb-2">Unable to Load Approved Blogs</h3>
            <p className="text-red-600 mb-4">{error}</p>
            <div className="flex gap-3">
              <button
                onClick={fetchApprovedBlogs}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => setError(null)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Approved Blogs</h1>
          <p className="text-gray-600 mt-2">
            View and manage all approved blog posts
          </p>
        </div>
        <div className="text-sm text-gray-500 bg-green-50 px-4 py-2 rounded-lg">
          {blogs.length} approved blog{blogs.length !== 1 ? 's' : ''}
        </div>
      </div>

      {blogs.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Approved Blogs</h3>
          <p className="text-gray-500">No blogs have been approved yet.</p>
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
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                        <CheckCircle className="h-3 w-3" />
                        Approved
                      </span>
                      {blog.published && (
                        <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                          Published
                        </span>
                      )}
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{blog.title}</h2>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>By: {blog.authorName}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Approved: {format(new Date(blog.createdAt), "MMM dd, yyyy")}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>Author: {blog.createdBy?.name} ({blog.createdBy?.email})</span>
                      </div>
                    </div>

                    {/* Tags */}
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
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
                      title="View blog"
                    >
                      <Eye className="h-4 w-4" />
                      View
                    </button>
                    <button
                      onClick={() => handleDeleteBlog(blog._id)}
                      disabled={deletingId === blog._id}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      title="Delete blog"
                    >
                      {deletingId === blog._id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Trash2 className="h-4 w-4" />
                      )}
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              {/* Blog Content Preview */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Introduction */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Introduction</h3>
                    <p className="text-gray-600 line-clamp-4">
                      {blog.introduction || "No introduction provided"}
                    </p>
                  </div>

                  {/* Blog Image Preview */}
                  {blog.introImage && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Featured Image</h3>
                      <div className="h-40 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={blog.introImage}
                          alt={blog.title}
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
            </div>
          ))}
        </div>
      )}

      {/* Debug info (remove in production) */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
        <p>Debug Info:</p>
        <p>API Endpoint: {API_BASE}/api/admin/blogs/status/approved</p>
        <p>Total Blogs: {blogs.length}</p>
        <p>Sample Data: {blogs.length > 0 ? JSON.stringify(blogs[0], null, 2) : 'No data'}</p>
      </div>
    </div>
  );
}