import React, { useState, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import MonkeySVG, { MonkeySVGRef } from "@/components/MonkeySVG";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useAuth } from "@/context/AuthContext";

const API_BASE = import.meta.env.DEV
  ? "http://localhost:5000"
  : "https://inteqt.onrender.com";

export default function AuthPage(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const monkeyRef = useRef<MonkeySVGRef>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  /* ===========================
     MONKEY EYE ANIMATIONS
  =========================== */

  const moveEyes = useCallback((cursorPosition: number, inputLength: number) => {
    if (!monkeyRef.current) return;
    const { leftPupil, rightPupil } = monkeyRef.current;
    if (!leftPupil || !rightPupil) return;

    const maxMove = 6;
    const progress =
      inputLength > 0 ? cursorPosition / Math.max(inputLength, 1) : 0.5;
    const xOffset = (progress - 0.5) * maxMove * 2;

    gsap.to([leftPupil, rightPupil], {
      attr: {
        cx: (i) => (i === 0 ? 75 + xOffset : 125 + xOffset),
        cy: 97,
      },
      duration: 0.2,
      ease: "power2.out",
    });
  }, []);

  const resetEyes = useCallback(() => {
    if (!monkeyRef.current) return;
    const { leftPupil, rightPupil } = monkeyRef.current;
    if (!leftPupil || !rightPupil) return;

    gsap.to([leftPupil, rightPupil], {
      attr: {
        cx: (i) => (i === 0 ? 75 : 125),
        cy: 95,
      },
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  const coverEyes = useCallback(() => {
    if (!monkeyRef.current) return;
    const { leftHand, rightHand } = monkeyRef.current;
    if (!leftHand || !rightHand) return;

    gsap.to(leftHand, { x: 25, y: -35, duration: 0.35, ease: "power2.out" });
    gsap.to(rightHand, { x: -25, y: -35, duration: 0.35, ease: "power2.out" });
  }, []);

  const uncoverEyes = useCallback(() => {
    if (!monkeyRef.current) return;
    const { leftHand, rightHand } = monkeyRef.current;
    if (!leftHand || !rightHand) return;

    gsap.to([leftHand, rightHand], {
      x: 0,
      y: 0,
      duration: 0.35,
      ease: "power2.out",
    });
  }, []);

  const peekThroughFingers = useCallback(() => {
    if (!monkeyRef.current) return;
    const { leftHand, rightHand } = monkeyRef.current;
    if (!leftHand || !rightHand) return;

    gsap.to(leftHand, { x: 15, y: -25, duration: 0.25 });
    gsap.to(rightHand, { x: -15, y: -25, duration: 0.25 });
  }, []);

  /* ===========================
     HAND / FOCUS BEHAVIOR
  =========================== */

  useEffect(() => {
    if (isPasswordFocused) {
      showPassword ? peekThroughFingers() : coverEyes();
    } else {
      uncoverEyes();
    }
  }, [isPasswordFocused, showPassword, coverEyes, uncoverEyes, peekThroughFingers]);

  useEffect(() => {
    if (!isPasswordFocused && emailInputRef.current) {
      const cursorPos = emailInputRef.current.selectionStart || 0;
      moveEyes(cursorPos, email.length);
    }
  }, [email, isPasswordFocused, moveEyes]);

  const toggleShowPassword = () => {
    setShowPassword((prev) => {
      const next = !prev;
      if (isPasswordFocused) {
        next ? peekThroughFingers() : coverEyes();
      }
      return next;
    });
  };

  /* ===========================
     LOGIN HANDLER
  =========================== */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Enter both email and password.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email: email.trim(), 
          password 
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      login(data.user, data.token);

      if (data.user?.isAdmin) {
        navigate("/admin-dashboard", { replace: true });
      } else {
        navigate("/user-dashboard", { replace: true });
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Helmet>
        <title>Login - inte-QT</title>
      </Helmet>

      <div className="w-full max-w-md">
        {/* Monkey */}
        <div className="relative w-48 h-48 mx-auto -mb-12 z-10">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-xl border-4 border-white">
            <div className="w-36 h-36 relative">
              <MonkeySVG ref={monkeyRef} />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/20 to-transparent rounded-full blur-sm"></div>
            </div>
          </div>
          {/* Decorative ring around monkey */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-200/50 animate-spin-slow"></div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl p-8 pt-16 shadow-2xl border border-gray-100">
          <h1 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Login to inte-QT
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  ref={emailInputRef}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsPasswordFocused(false)}
                  onBlur={resetEyes}
                  onSelect={(e) =>
                    moveEyes(
                      (e.target as HTMLInputElement).selectionStart || 0,
                      email.length
                    )
                  }
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 disabled:opacity-50"
                  placeholder="you@example.com"
                  disabled={loading}
                  style={{ color: "#000" }} // Force black text
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  className="w-full pl-10 pr-12 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 disabled:opacity-50"
                  placeholder="Enter your password"
                  disabled={loading}
                  style={{ color: "#000" }} // Force black text
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <button
                type="button"
                onClick={() => {
                  // Add forgot password logic here
                }}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-sm text-red-600 flex items-center">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {error}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Footer */}
          
        </div>
      </div>
    </div>
  );
}