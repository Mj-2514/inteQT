import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import { Eye, EyeOff, Lock, CheckCircle, XCircle } from "lucide-react";

const API = import.meta.env.DEV ? "http://localhost:5000" : "https://inteqt.onrender.com";

export default function UserDashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [passwordStrength, setPasswordStrength] = useState(0);

  useEffect(() => {
    fetch(`${API}/api/blogs/my`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((r) => r.json())
      .then(setBlogs);
  }, []);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });

    // Validation
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage({ text: "New passwords don't match", type: "error" });
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setMessage({ text: "Password must be at least 6 characters", type: "error" });
      return;
    }

    if (passwordData.oldPassword === passwordData.newPassword) {
      setMessage({ text: "New password must be different from old password", type: "error" });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API}/api/auth/change-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          oldPassword: passwordData.oldPassword,
          newPassword: passwordData.newPassword
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to change password");
      }

      setMessage({ text: "Password changed successfully!", type: "success" });
      
      // Reset form
      setPasswordData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
      
      // Close modal after success
      setTimeout(() => {
        setShowPasswordModal(false);
        setMessage({ text: "", type: "" });
      }, 2000);

    } catch (error: any) {
      setMessage({ 
        text: error.message || "Failed to change password. Please try again.", 
        type: "error" 
      });
    } finally {
      setLoading(false);
    }
  };

  const checkPasswordStrength = (password: string) => {
    let score = 0;
    if (password.length >= 6) score += 25;
    if (/[A-Z]/.test(password)) score += 25;
    if (/[0-9]/.test(password)) score += 25;
    if (/[^A-Za-z0-9]/.test(password)) score += 25;
    setPasswordStrength(score);
  };

  const handleNewPasswordChange = (value: string) => {
    setPasswordData(prev => ({ ...prev, newPassword: value }));
    checkPasswordStrength(value);
  };

  const getStrengthColor = () => {
    if (passwordStrength >= 75) return "bg-green-500";
    if (passwordStrength >= 50) return "bg-yellow-500";
    if (passwordStrength >= 25) return "bg-orange-500";
    return "bg-red-500";
  };

  const getStrengthText = () => {
    if (passwordStrength >= 75) return "Strong";
    if (passwordStrength >= 50) return "Good";
    if (passwordStrength >= 25) return "Weak";
    return "Very Weak";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Change Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2 text-black">
                <Lock className="w-6 h-6 text-black" />
                Change Password
              </h2>
              <button
                onClick={() => {
                  setShowPasswordModal(false);
                  setMessage({ text: "", type: "" });
                  setPasswordData({
                    oldPassword: "",
                    newPassword: "",
                    confirmPassword: ""
                  });
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handlePasswordChange} className="space-y-4">
              {/* Old Password */}
              <div>
                <label className="block text-sm font-medium mb-2 text-black">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showOldPassword ? "text" : "password"}
                    value={passwordData.oldPassword}
                    onChange={(e) => setPasswordData(prev => ({ ...prev, oldPassword: e.target.value }))}
                    className="w-full p-3 border rounded-lg pr-10 text-black"
                    placeholder="Enter current password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowOldPassword(!showOldPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showOldPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div>
                <label className="block text-sm font-medium mb-2 text-black">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={passwordData.newPassword}
                    onChange={(e) => handleNewPasswordChange(e.target.value)}
                    className="w-full p-3 border rounded-lg pr-10 text-black"
                    placeholder="Enter new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                
                {/* Password Strength Indicator */}
                {passwordData.newPassword && (
                  <div className="mt-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Password Strength:</span>
                      <span className={`font-semibold ${
                        passwordStrength >= 75 ? "text-green-600" :
                        passwordStrength >= 50 ? "text-yellow-600" :
                        passwordStrength >= 25 ? "text-orange-600" : "text-red-600"
                      }`}>
                        {getStrengthText()}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getStrengthColor()} transition-all duration-300`}
                        style={{ width: `${passwordStrength}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium mb-2 text-black">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                    className="w-full p-3 border rounded-lg pr-10 text-black"
                    placeholder="Confirm new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                
                {/* Password Match Indicator */}
                {passwordData.confirmPassword && (
                  <div className="flex items-center gap-2 mt-2">
                    {passwordData.newPassword === passwordData.confirmPassword ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-600">Passwords match</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-red-600">Passwords don't match</span>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Message Display */}
              {message.text && (
                <div className={`p-3 rounded-lg ${
                  message.type === "success" 
                    ? "bg-green-50 text-green-700 border border-green-200" 
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}>
                  <div className="flex items-center gap-2">
                    {message.type === "success" ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <XCircle className="w-5 h-5" />
                    )}
                    <span>{message.text}</span>
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Changing Password..." : "Change Password"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordModal(false);
                    setMessage({ text: "", type: "" });
                    setPasswordData({
                      oldPassword: "",
                      newPassword: "",
                      confirmPassword: ""
                    });
                  }}
                  className="px-6 py-3 border rounded-lg hover:bg-gray-50 transition-colors text-black"
                  disabled={loading}
                >
                  Cancel
                </button>
              </div>
            </form>

            {/* Password Requirements */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h3 className="text-sm font-medium mb-2">Password Requirements:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    passwordData.newPassword.length >= 6 ? "bg-green-500" : "bg-gray-300"
                  }`} />
                  At least 6 characters
                </li>
                <li className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    /[A-Z]/.test(passwordData.newPassword) ? "bg-green-500" : "bg-gray-300"
                  }`} />
                  One uppercase letter
                </li>
                <li className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    /[0-9]/.test(passwordData.newPassword) ? "bg-green-500" : "bg-gray-300"
                  }`} />
                  One number
                </li>
                <li className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    /[^A-Za-z0-9]/.test(passwordData.newPassword) ? "bg-green-500" : "bg-gray-300"
                  }`} />
                  One special character
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-6xl mx-auto pt-24 px-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">My Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, {user?.name || user?.email}</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/create-blog")}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Create Blog
            </button>
            <button
              onClick={() => setShowPasswordModal(true)}
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Change Password
            </button>
            <button
              onClick={() => {
                logout();
                navigate("/auth");
              }}
              className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Account Security Card */}
        <div className="bg-white border rounded-xl p-6 mb-6 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-black">Account Security</h2>
              
            </div>
            <button
              onClick={() => setShowPasswordModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Lock className="w-4 h-4" />
              Change Password
            </button>
          </div>
        </div>

        {/* My Blogs Section */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-black">My Blogs</h2>
          {blogs.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p className="mb-2">You haven't created any blogs yet.</p>
              <button
                onClick={() => navigate("/create-blog")}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Create your first blog →
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {blogs.map((b) => (
                <div key={b._id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{b.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Created: {new Date(b.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      b.status === "approved" 
                        ? "bg-green-100 text-green-800" 
                        : b.status === "rejected" 
                        ? "bg-red-100 text-red-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {b.status.charAt(0).toUpperCase() + b.status.slice(1)}
                    </span>
                  </div>
                  
                  {b.status === "rejected" && (
                    <div className="mt-3 p-3 bg-red-50 border border-red-100 rounded-lg">
                      <p className="text-red-700 font-medium">Rejected by: {b.reviewedBy?.name || "Admin"}</p>
                      <p className="text-red-600 text-sm mt-1">{b.adminNote}</p>
                    </div>
                  )}

                  {b.status === "approved" && (
                    <div className="mt-3 p-3 bg-green-50 border border-green-100 rounded-lg">
                      <p className="text-green-700 font-medium">
                        Approved by: {b.reviewedBy?.name || "Admin"}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}