import { useState, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import MonkeySVG, { MonkeySVGRef } from "../components/MonkeySVG";
import { Eye, EyeOff } from "lucide-react";

const EventAuth = () => {
  const API_BASE = import.meta.env.DEV
    ? "http://localhost:5000"
    : "https://inteqt.onrender.com";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
     LOGIN HANDLER (FIXED)
  =========================== */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Enter both email and password.");
      return;
    }

    if (!/^[^\s@]+@inte-qt\.com$/.test(email)) {
      setError("Use your @inte-qt.com email");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/event-auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      window.location.href = data.user.isAdmin
        ? "/event/admin-dashboard"
        : "/event/dashboard";
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  /* ===========================
     UI
  =========================== */

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Monkey */}
        <div className="relative w-48 h-48 mx-auto -mb-12 z-10">
          <div className="w-full h-full rounded-full bg-card flex items-center justify-center shadow-lg">
            <div className="w-36 h-36">
              <MonkeySVG ref={monkeyRef} />
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-card rounded-3xl p-8 pt-16 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
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
                className="login-input text-black"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  className="login-input pr-12 text-black"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-sm text-red-600 text-center">{error}</p>
            )}

            <button className="login-button" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a className="text-sm text-muted-foreground hover:text-card-foreground">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventAuth;
