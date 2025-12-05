// Auth.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type AuthMode = 'login' | 'register';

const API_BASE = import.meta.env.DEV
  ? "http://localhost:5000"
  : "https://inteqt.onrender.com";


export default function AuthPage() {
  const [mode, setMode] = useState<AuthMode>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [monkeyExpression, setMonkeyExpression] = useState<'normal' | 'surprised'>('normal');
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    // Randomly change monkey expression
    const interval = setInterval(() => {
      setMonkeyExpression(Math.random() > 0.7 ? 'surprised' : 'normal');
      setTimeout(() => setMonkeyExpression('normal'), 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // basic client-side checks
    if (!formData.email || !formData.password) {
      setError('Please enter email and password.');
      return;
    }
    if (mode === 'register') {
      if (!formData.name) {
        setError('Please enter your name.');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
    }

    setIsLoading(true);
    setMonkeyExpression('surprised');

    try {
      const path = mode === 'login' ? '/api/auth/login' : '/api/auth/register';
      const body =
        mode === 'login'
          ? {
              email: formData.email,
              password: formData.password,
            }
          : {
              name: formData.name,
              email: formData.email,
              password: formData.password,
            };

      const res = await fetch(`${API_BASE}${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const text = await res.text();
      let data: any;
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        data = text;
      }

      if (!res.ok) {
        const msg =
          data?.message ||
          (Array.isArray(data?.errors) ? data.errors.map((x: any) => x.msg).join(', ') : '') ||
          `Request failed with status ${res.status}`;
        throw new Error(msg);
      }

      // expect { token, user?, ... }
      const token = data.token;
      if (!token) {
        throw new Error('No token returned from server.');
      }

      localStorage.setItem('token', token);
      if (data.user) {
        localStorage.setItem('user', JSON.stringify(data.user));
      }

      // after successful login/register -> go to create blog page
      navigate('/create', { replace: true });
    } catch (err: any) {
      setError(err?.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
      setMonkeyExpression('normal');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-center">
        {/* Left side - Animated Monkey like the website */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center">
          <div className="relative w-80 h-80">
            {/* Monkey Container */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Monkey Head */}
              <div className="relative w-64 h-64 mx-auto">
                {/* Head Shape - Similar to website */}
                <div className="absolute w-full h-full bg-gradient-to-br from-[#ffd166] via-[#ffb347] to-[#ff9671] rounded-[40%] shadow-2xl">
                  {/* Inner glow */}
                  <div className="absolute inset-4 bg-gradient-to-br from-[#ffb347] to-[#ff9671] rounded-[35%]" />
                  
                  {/* Ears */}
                  <div className="absolute -left-2 top-8 w-16 h-16 bg-gradient-to-br from-[#ff9671] to-[#ff7b47] rounded-full shadow-lg" />
                  <div className="absolute -right-2 top-8 w-16 h-16 bg-gradient-to-br from-[#ff9671] to-[#ff7b47] rounded-full shadow-lg" />
                  
                  {/* Inner ears */}
                  <div className="absolute left-1 top-12 w-10 h-10 bg-gradient-to-br from-[#ffd166] to-[#ffb347] rounded-full" />
                  <div className="absolute right-1 top-12 w-10 h-10 bg-gradient-to-br from-[#ffd166] to-[#ffb347] rounded-full" />
                </div>
                
                {/* Face */}
                <div className="relative z-10 w-full h-full">
                  {/* Eyes Container */}
                  <div className="absolute top-16 left-0 right-0 flex justify-around px-8">
                    {/* Left Eye */}
                    <motion.div
                      animate={{
                        scaleY: monkeyExpression === 'surprised' ? [1, 1.2, 1] : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <div className="w-12 h-16 bg-white rounded-full overflow-hidden shadow-lg">
                        <motion.div
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute w-8 h-8 bg-gradient-to-br from-gray-900 to-black rounded-full top-2 left-2"
                        >
                          {/* Eye sparkle */}
                          <div className="absolute w-2 h-2 bg-white rounded-full top-1 left-1" />
                        </motion.div>
                        {/* Eyelid */}
                        <motion.div
                          animate={{
                            height: monkeyExpression === 'surprised' ? '20%' : '30%',
                          }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#ff9671] to-transparent rounded-t-full"
                          style={{ height: '30%' }}
                        />
                      </div>
                    </motion.div>
                    
                    {/* Right Eye */}
                    <motion.div
                      animate={{
                        scaleY: monkeyExpression === 'surprised' ? [1, 1.2, 1] : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <div className="w-12 h-16 bg-white rounded-full overflow-hidden shadow-lg">
                        <motion.div
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                          }}
                          className="absolute w-8 h-8 bg-gradient-to-br from-gray-900 to-black rounded-full top-2 left-2"
                        >
                          {/* Eye sparkle */}
                          <div className="absolute w-2 h-2 bg-white rounded-full top-1 right-1" />
                        </motion.div>
                        {/* Eyelid */}
                        <motion.div
                          animate={{
                            height: monkeyExpression === 'surprised' ? '20%' : '30%',
                          }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#ff9671] to-transparent rounded-t-full"
                          style={{ height: '30%' }}
                        />
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Nose */}
                  <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-br from-[#ff7b47] to-[#ff5e62] rounded-full" />
                  
                  {/* Mouth */}
                  <motion.div
                    animate={{
                      scaleY: monkeyExpression === 'surprised' ? [0.6, 0.8, 0.6] : [0.6, 0.7, 0.6],
                      borderRadius: monkeyExpression === 'surprised' ? '50%' : '40% 40% 60% 60%',
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-40 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-br from-[#ff5e62] to-[#ff2e63]"
                    style={{ borderRadius: '40% 40% 60% 60%' }}
                  >
                    {/* Tongue - only shows sometimes */}
                    <motion.div
                      animate={{
                        opacity: monkeyExpression === 'surprised' ? [0, 1, 0] : 0,
                        y: monkeyExpression === 'surprised' ? [0, 2, 0] : 0,
                      }}
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-gradient-to-br from-pink-300 to-pink-400 rounded-t-full"
                    />
                  </motion.div>
                  
                  {/* Blush */}
                  <div className="absolute top-28 left-8 w-8 h-4 bg-gradient-to-r from-pink-300/40 to-transparent rounded-full blur-sm" />
                  <div className="absolute top-28 right-8 w-8 h-4 bg-gradient-to-l from-pink-300/40 to-transparent rounded-full blur-sm" />
                </div>
              </div>
              
              {/* Body - just a simple round shape */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-16 bg-gradient-to-br from-[#ffb347] to-[#ff7b47] rounded-full" />
              
              {/* Arms - positioned like in the website */}
              <motion.div
                animate={{
                  rotate: [-10, 10, -10],
                  x: [-5, 5, -5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-40 -left-6 w-20 h-8 bg-gradient-to-br from-[#ffb347] to-[#ff7b47] rounded-full -rotate-45"
              />
              <motion.div
                animate={{
                  rotate: [10, -10, 10],
                  x: [5, -5, 5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="absolute top-40 -right-6 w-20 h-8 bg-gradient-to-br from-[#ffb347] to-[#ff7b47] rounded-full rotate-45"
              />
            </motion.div>
            
            {/* Banana */}
            <motion.div
              animate={{
                rotate: [0, 360],
                x: [0, 20, 0, -20, 0],
                y: [0, -10, 0, 10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-4 right-4"
            >
              <div className="w-16 h-8 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full rotate-45">
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full" />
              </div>
            </motion.div>
            
            {/* Speech Bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl p-4 shadow-2xl"
            >
              <div className="text-sm font-semibold text-gray-800">
                {mode === 'login' ? 'Welcome back! 👋' : 'Join the fun! 🎉'}
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
            </motion.div>
          </div>
          
          {/* Title under monkey */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-3xl font-bold text-white mt-8 text-center"
          >
          </motion.h1>
          <p className="text-white/80 text-center mt-2 max-w-md">
            {mode === 'login' 
              ? 'Sign in to make your own blog!' 
              : 'Create an account to create your first blog'}
          </p>
        </div>

        {/* Right side - Auth Form */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md">
            {/* Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
            >
              {/* Toggle Buttons */}
              <div className="flex mb-8 bg-white/10 rounded-xl p-1">
                <button
                  type="button"
                  onClick={() => {
                    setMode('login');
                    setError(null);
                  }}
                  className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    mode === 'login'
                      ? 'bg-white text-purple-600 shadow-lg'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMode('register');
                    setError(null);
                  }}
                  className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    mode === 'register'
                      ? 'bg-white text-purple-600 shadow-lg'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Register
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field - only for register */}
                {mode === 'register' && (
                  <div>
                    <label className="block text-sm text-white mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                )}

                {/* Email field */}
                <div>
                  <label className="block text-sm text:white mb-2 text-white">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg:white/10 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Password field */}
                <div>
                  <label className="block text-sm text-white mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="w-full pl-10 pr-10 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
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

                {/* Confirm Password - only for register */}
                {mode === 'register' && (
                  <div>
                    <label className="block text-sm text-white mb-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                )}

                {/* Terms - only for register */}
                {mode === 'register' && (
                  <div className="flex items-start">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="h-4 w-4 mt-1 bg-white/10 border-white/20 rounded text-purple-500 focus:ring-purple-500/50"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-white/80">
                      I agree to the{' '}
                      <a href="#" className="text-white hover:underline">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-white hover:underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                )}

                {/* Remember Me - only for login */}
                {mode === 'login' && (
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 bg-white/10 border-white/20 rounded text-purple-500 focus:ring-purple-500/50"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-white/80">
                      Remember me
                    </label>
                  </div>
                )}

                {/* Error message */}
                {error && (
                  <div className="text-sm text-rose-300">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-gradient-to-r from-white to-white/90 text-purple-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 mt-2"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin mr-2" />
                      {mode === 'login' ? 'Signing in...' : 'Creating account...'}
                    </div>
                  ) : (
                    mode === 'login' ? 'Sign In' : 'Create Account'
                  )}
                </motion.button>

                {/* Toggle link */}
                <div className="text-center text-sm text-white/80 pt-4">
                  {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
                  <button
                    type="button"
                    onClick={() => {
                      setMode(mode === 'login' ? 'register' : 'login');
                      setError(null);
                    }}
                    className="text-white hover:underline font-medium"
                  >
                    {mode === 'login' ? 'Sign up' : 'Sign in'}
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
