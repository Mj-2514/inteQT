// src/pages/Auth.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

type AuthMode = "login" | "register";

const API_BASE = import.meta.env.DEV
  ? "http://localhost:5000"
  : "https://inteqt.onrender.com"; // change to your production API if different

export default function AuthPage(): JSX.Element {
  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [monkeyExpression, setMonkeyExpression] = useState<
    "normal" | "surprised"
  >("normal");
  const [error, setError] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    // playful monkey expression toggles
    const interval = setInterval(() => {
      setMonkeyExpression(Math.random() > 0.75 ? "surprised" : "normal");
      setTimeout(() => setMonkeyExpression("normal"), 600);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validate = (): string | null => {
    if (!formData.email.trim() || !formData.password.trim()) {
      return "Please enter email and password.";
    }
    // simple email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      return "Please enter a valid email address.";
    }
    if (mode === "register") {
      if (!formData.name.trim()) return "Please enter your name.";
      if (formData.password.length < 8)
        return "Password must be at least 8 characters.";
      if (formData.password !== formData.confirmPassword)
        return "Passwords do not match.";
      if (!termsAccepted)
        return "You must accept the Terms of Service and Privacy Policy.";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const clientValidationError = validate();
    if (clientValidationError) {
      setError(clientValidationError);
      return;
    }

    setIsLoading(true);
    setMonkeyExpression("surprised");

    try {
      const path = mode === "login" ? "/api/auth/login" : "/api/auth/register";
      const payload =
        mode === "login"
          ? { email: formData.email.trim(), password: formData.password }
          : {
              name: formData.name.trim(),
              email: formData.email.trim(),
              password: formData.password,
            };

      const res = await fetch(`${API_BASE}${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data: any;
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        data = { message: text || "Unexpected server response" };
      }

      if (!res.ok) {
        const message =
          data?.message ||
          (Array.isArray(data?.errors)
            ? data.errors.map((x: any) => x.msg).join(", ")
            : `Request failed with status ${res.status}`);
        throw new Error(message);
      }

      const token: string | undefined = data?.token;
      if (!token) throw new Error("No token returned from server.");

      // Persist token: if user asked "remember me", persist longer; otherwise sessionStorage could be used
      if (rememberMe) {
        localStorage.setItem("token", token);
      } else {
        // still store in localStorage for now, but you can change to sessionStorage if you want
        localStorage.setItem("token", token);
      }

      if (data.user) localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect after auth
      navigate("/create", { replace: true });
    } catch (err: any) {
      setError(err?.message || "Something went wrong — please try again.");
    } finally {
      setIsLoading(false);
      setMonkeyExpression("normal");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center p-4">
      <Helmet>
        <title>{mode === "login" ? "Sign in - inte-QT" : "Register - inte-QT"}</title>
        <meta
          name="description"
          content="Sign in or create an account to start creating blogs on inte-QT."
        />
        <link rel="canonical" href="https://www.inte-qt.com/auth" />
      </Helmet>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-center">
        {/* Left side - Animated Monkey */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center px-4">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            {/* Floating animation */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              {/* Head */}
              <div className="relative w-full h-full mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffd166] via-[#ffb347] to-[#ff9671] rounded-[40%] shadow-2xl" />
                <div className="absolute inset-4 bg-gradient-to-br from-[#ffb347] to-[#ff9671] rounded-[35%]" />
                {/* Ears */}
                <div className="absolute -left-2 top-8 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#ff9671] to-[#ff7b47] rounded-full shadow-lg" />
                <div className="absolute -right-2 top-8 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#ff9671] to-[#ff7b47] rounded-full shadow-lg" />

                {/* Face / Eyes */}
                <div className="relative z-10 w-full h-full">
                  <div className="absolute top-14 left-0 right-0 flex justify-around px-6 sm:px-8">
                    {/* Left Eye */}
                    <motion.div
                      animate={{
                        scaleY: monkeyExpression === "surprised" ? [1, 1.15, 1] : 1,
                      }}
                      transition={{ duration: 0.25 }}
                      className="relative"
                    >
                      <div className="w-10 h-14 sm:w-12 sm:h-16 bg-white rounded-full overflow-hidden shadow-lg">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute w-8 h-8 bg-gradient-to-br from-gray-900 to-black rounded-full top-2 left-2"
                        >
                          <div className="absolute w-2 h-2 bg-white rounded-full top-1 left-1" />
                        </motion.div>
                        <motion.div
                          animate={{ height: monkeyExpression === "surprised" ? "20%" : "30%" }}
                          transition={{ duration: 0.25 }}
                          className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#ff9671] to-transparent rounded-t-full"
                          style={{ height: "30%" }}
                        />
                      </div>
                    </motion.div>

                    {/* Right Eye */}
                    <motion.div
                      animate={{
                        scaleY: monkeyExpression === "surprised" ? [1, 1.15, 1] : 1,
                      }}
                      transition={{ duration: 0.25 }}
                      className="relative"
                    >
                      <div className="w-10 h-14 sm:w-12 sm:h-16 bg-white rounded-full overflow-hidden shadow-lg">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                          className="absolute w-8 h-8 bg-gradient-to-br from-gray-900 to-black rounded-full top-2 left-2"
                        >
                          <div className="absolute w-2 h-2 bg-white rounded-full top-1 right-1" />
                        </motion.div>
                        <motion.div
                          animate={{ height: monkeyExpression === "surprised" ? "20%" : "30%" }}
                          transition={{ duration: 0.25 }}
                          className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#ff9671] to-transparent rounded-t-full"
                          style={{ height: "30%" }}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Nose */}
                  <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-br from-[#ff7b47] to-[#ff5e62] rounded-full" />

                  {/* Mouth */}
                  <motion.div
                    animate={{
                      scaleY: monkeyExpression === "surprised" ? [0.6, 0.85, 0.6] : [0.6, 0.7, 0.6],
                    }}
                    transition={{ duration: 0.45 }}
                    className="absolute top-40 left-1/2 transform -translate-x-1/2 w-14 h-7 bg-gradient-to-br from-[#ff5e62] to-[#ff2e63] rounded-[40%_40%_60%_60%]"
                  />
                </div>
              </div>

              {/* Body */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-44 h-14 bg-gradient-to-br from-[#ffb347] to-[#ff7b47] rounded-full" />
            </motion.div>

            {/* Banana */}
            <motion.div
              animate={{ rotate: [0, 360], x: [0, 12, 0, -12, 0], y: [0, -8, 0, 8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 right-3 w-14 h-8"
              aria-hidden
            >
              <div className="w-full h-full bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full rotate-45" />
            </motion.div>

            {/* Speech bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, type: "spring", stiffness: 90 }}
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl p-3 shadow-2xl text-center"
            >
              <div className="text-sm font-semibold text-gray-800">
                {mode === "login" ? "Welcome back! 👋" : "Join the fun! 🎉"}
              </div>
            </motion.div>
          </div>

          <p className="text-white/80 text-center mt-6 px-4 max-w-md">
            {mode === "login" ? "Sign in to make your own blog!" : "Create an account to create your first blog."}
          </p>
        </div>

        {/* Right side - Auth Form */}
        <div className="lg:w-1/2 flex items-center justify-center px-4 w-full">
          <div className="w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-white/10 backdrop-blur rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl"
            >
              {/* Toggle Buttons */}
              <div className="flex mb-6 bg-white/10 rounded-xl p-1">
                <button
                  type="button"
                  onClick={() => {
                    setMode("login");
                    setError(null);
                  }}
                  className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    mode === "login" ? "bg-white text-purple-600 shadow" : "text-white hover:bg-white/10"
                  }`}
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMode("register");
                    setError(null);
                  }}
                  className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    mode === "register" ? "bg-white text-purple-600 shadow" : "text-white hover:bg-white/10"
                  }`}
                >
                  Register
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name (register only) */}
                {mode === "register" && (
                  <div>
                    <label htmlFor="name" className="block text-sm text-white mb-2">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20"
                      placeholder="Your full name"
                      required={mode === "register"}
                    />
                  </div>
                )}

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm text-white mb-2">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm text-white mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete={mode === "login" ? "current-password" : "new-password"}
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="w-full pl-10 pr-10 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20"
                      placeholder="••••••••"
                      required
                      minLength={8}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-white/50 hover:text-white" />
                      ) : (
                        <Eye className="h-5 w-5 text-white/50 hover:text-white" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                {mode === "register" && (
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm text-white mb-2">
                      Confirm password
                    </label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20"
                      placeholder="••••••••"
                      required
                      minLength={8}
                    />
                  </div>
                )}

                {/* Terms */}
                {mode === "register" && (
                  <div className="flex items-start">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      className="h-4 w-4 mt-1 bg-white/10 border-white/20 rounded text-purple-500 focus:ring-purple-500/50"
                      aria-required
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-white/80">
                      I agree to the{" "}
                      <a href="/terms" className="text-white hover:underline underline-offset-2">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="/privacy" className="text-white hover:underline underline-offset-2">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                )}

                {/* Remember Me */}
                {mode === "login" && (
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-4 w-4 bg-white/10 border-white/20 rounded text-purple-500 focus:ring-purple-500/50"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-white/80">
                      Remember me
                    </label>
                  </div>
                )}

                {/* Error / status */}
                <div aria-live="polite" role="status" className="min-h-[1.25rem]">
                  {error && <div className="text-sm text-rose-300">{error}</div>}
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-gradient-to-r from-white to-white/90 text-purple-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin mr-2" />
                      {mode === "login" ? "Signing in..." : "Creating account..."}
                    </div>
                  ) : mode === "login" ? (
                    "Sign In"
                  ) : (
                    "Create Account"
                  )}
                </motion.button>

                {/* Toggle link */}
                <div className="text-center text-sm text-white/80 pt-4">
                  {mode === "login" ? "Don't have an account? " : "Already have an account? "}
                  <button
                    type="button"
                    onClick={() => {
                      setMode((m) => (m === "login" ? "register" : "login"));
                      setError(null);
                    }}
                    className="text-white hover:underline font-medium"
                  >
                    {mode === "login" ? "Sign up" : "Sign in"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
