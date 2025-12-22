import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

type AuthMode = "login" | "register";

const API_BASE = import.meta.env.DEV
  ? "http://localhost:5000"
  : "https://inteqt.onrender.com";

export default function EventAuth(): JSX.Element {
  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [monkeyExpression, setMonkeyExpression] =
    useState<"normal" | "surprised">("normal");
  const [error, setError] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  /* =============================
     Monkey animation
  ============================== */
  useEffect(() => {
    const interval = setInterval(() => {
      setMonkeyExpression(Math.random() > 0.75 ? "surprised" : "normal");
      setTimeout(() => setMonkeyExpression("normal"), 600);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  /* =============================
     Validation
  ============================== */
  const validate = (): string | null => {
    if (!formData.email.trim() || !formData.password.trim()) {
      return "Please enter email and password.";
    }

    if (!formData.email.toLowerCase().endsWith("@inte-qt.com")) {
      return "Only admin email users can manage events.";
    }

    if (mode === "register") {
      if (!formData.name.trim()) return "Please enter your name.";
      if (formData.password.length < 8)
        return "Password must be at least 8 characters.";
      if (formData.password !== formData.confirmPassword)
        return "Passwords do not match.";
      if (!termsAccepted)
        return "You must accept the Privacy Policy.";
    }

    return null;
  };

  /* =============================
     Submit
  ============================== */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    setMonkeyExpression("surprised");

    try {
      const path =
        mode === "login"
          ? "/api/events/auth/login"
          : "/api/events/auth/register";

      const payload =
        mode === "login"
          ? {
              email: formData.email.trim(),
              password: formData.password,
            }
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
        data = { message: text };
      }

      if (!res.ok) {
        throw new Error(data?.message || "Authentication failed");
      }

      localStorage.setItem("eventToken", data.token);
      localStorage.setItem("eventUser", JSON.stringify(data.user));

      navigate("/events/create", { replace: true });
    } catch (err: any) {
      setError(err?.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
      setMonkeyExpression("normal");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center p-4">
      <Helmet>
        <title>
          {mode === "login"
            ? "Event Login - inte-QT"
            : "Event Register - inte-QT"}
        </title>
      </Helmet>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-center">
        {/* ================= LEFT — MONKEY ================= */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center px-4">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              className="relative w-full h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ffd166] via-[#ffb347] to-[#ff9671] rounded-[40%]" />
              <div className="absolute inset-4 bg-gradient-to-br from-[#ffb347] to-[#ff9671] rounded-[35%]" />

              <div className="absolute -left-2 top-8 w-14 h-14 bg-[#ff7b47] rounded-full" />
              <div className="absolute -right-2 top-8 w-14 h-14 bg-[#ff7b47] rounded-full" />

              <div className="absolute top-14 left-0 right-0 flex justify-around px-8">
                {[0, 1].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scaleY:
                        monkeyExpression === "surprised"
                          ? [1, 1.2, 1]
                          : 1,
                    }}
                    className="w-12 h-16 bg-white rounded-full relative"
                  >
                    <div className="absolute w-8 h-8 bg-black rounded-full top-2 left-2" />
                  </motion.div>
                ))}
              </div>

              <div className="absolute top-36 left-1/2 -translate-x-1/2 w-10 h-4 bg-[#ff5e62] rounded-full" />
              <motion.div
                animate={{
                  scaleY:
                    monkeyExpression === "surprised"
                      ? [0.6, 0.9, 0.6]
                      : [0.6, 0.7, 0.6],
                }}
                className="absolute top-44 left-1/2 -translate-x-1/2 w-16 h-7 bg-[#ff2e63] rounded-full"
              />
            </motion.div>
          </div>

          <p className="text-white/80 text-center mt-6 max-w-md">
            Login or register to manage company events.
          </p>
        </div>

        {/* ================= RIGHT — FORM ================= */}
        <div className="lg:w-1/2 flex justify-center w-full">
          <div className="w-full max-w-md">
            <motion.div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Toggle */}
              <div className="flex mb-6 bg-white/10 rounded-xl p-1">
                {["login", "register"].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => {
                      setMode(m as AuthMode);
                      setError(null);
                    }}
                    className={`flex-1 py-3 rounded-lg text-sm font-medium ${
                      mode === m
                        ? "bg-white text-purple-600"
                        : "text-white"
                    }`}
                  >
                    {m === "login" ? "Login" : "Register"}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === "register" && (
                  <input
                    placeholder="Full name"
                    className="w-full px-4 py-3 rounded-xl text-black"
                    value={formData.name}
                    onChange={(e) =>
                      handleInputChange("name", e.target.value)
                    }
                  />
                )}

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black/50" />
                  <input
                    type="email"
                    placeholder="you@gmail.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl text-black"
                    value={formData.email}
                    onChange={(e) =>
                      handleInputChange("email", e.target.value)
                    }
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black/50" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full pl-10 pr-10 py-3 rounded-xl text-black"
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>

                {mode === "register" && (
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="w-full px-4 py-3 rounded-xl text-black"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                  />
                )}

                {/* ✅ TERMS & PRIVACY */}
                {mode === "register" && (
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={(e) =>
                        setTermsAccepted(e.target.checked)
                      }
                      className="mt-1 h-4 w-4"
                    />
                    <p className="text-sm text-white/80">
                      I agree to the{" "}
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        className="underline"
                      >
                        Privacy Policy
                      </a>{" "}
                    </p>
                  </div>
                )}

                {error && (
                  <p className="text-sm text-rose-300">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-white text-purple-600 rounded-xl font-semibold"
                >
                  {isLoading
                    ? "Please wait..."
                    : mode === "login"
                    ? "Sign In"
                    : "Create Account"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
