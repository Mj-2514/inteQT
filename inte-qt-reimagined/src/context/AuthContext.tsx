// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";

type User = {
  name: string;
  email: string;
  isAdmin?: boolean;
  role?: string;
  permissions?: string[];
};

type EventUser = User & {
  eventPermissions?: string[];
  eventRole?: 'admin' | 'manager' | 'staff';
};

// Country User Type
type CountryUser = {
  id: string;
  name: string;
  email: string;
  role?: 'admin' | 'user';
  isAdmin?: boolean;
  isActive?: boolean;
};

type AuthContextType = {
  // Regular/Event/Blog Auth
  user: User | null;
  eventUser: EventUser | null;
  token: string | null;
  loading: boolean;
  login: (user: User, token: string) => void;
  loginAsEventUser: (eventUser: EventUser, token: string) => void;
  logout: () => void;
  switchToEventUser: (eventUser: EventUser) => void;
  switchToRegularUser: () => void;
  
  // Country Auth
  countryUser: CountryUser | null;
  countryToken: string | null;
  countryLoading: boolean;
  // Fixed: Changed from Promise<void> to Promise<CountryUser>
  loginCountry: (email: string, password: string, onSuccess?: (user: CountryUser) => void) => Promise<CountryUser>;
  logoutCountry: (onLogout?: () => void) => void;
  updateCountryUser: (userData: CountryUser) => void;
  changeCountryPassword: (oldPassword: string, newPassword: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [eventUser, setEventUser] = useState<EventUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeUserType, setActiveUserType] = useState<'regular' | 'event'>('regular');
  
  // Country Auth States
  const [countryUser, setCountryUser] = useState<CountryUser | null>(null);
  const [countryToken, setCountryToken] = useState<string | null>(null);
  const [countryLoading, setCountryLoading] = useState(true);
  
  const API_BASE = import.meta.env.DEV 
    ? "http://localhost:5000" 
    : "https://inteqt.onrender.com";

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Restore Regular/Event/Blog Auth
        const storedUser = localStorage.getItem("user");
        const storedEventUser = localStorage.getItem("eventUser");
        const storedToken = localStorage.getItem("token");
        const storedActiveType = localStorage.getItem("activeUserType") as 'regular' | 'event';

        if (storedToken) {
          setToken(storedToken);
          
          if (storedActiveType) {
            setActiveUserType(storedActiveType);
          }

          if (storedActiveType === 'event' && storedEventUser) {
            setEventUser(JSON.parse(storedEventUser));
          } else if (storedUser) {
            setUser(JSON.parse(storedUser));
          } else if (storedEventUser) {
            setEventUser(JSON.parse(storedEventUser));
            setActiveUserType('event');
          }
        }
        
        // Restore Country Auth
        const storedCountryUser = localStorage.getItem("countryUser");
        const storedCountryToken = localStorage.getItem("countryToken");

        if (storedCountryToken && storedCountryUser) {
          const countryUserData = JSON.parse(storedCountryUser);
          console.log('Initializing country auth from localStorage:', countryUserData);
          setCountryUser(countryUserData);
          setCountryToken(storedCountryToken);
        }
        
      } catch (err) {
        console.error("Auth restore failed", err);
        // Clear all auth data on error
        localStorage.removeItem("user");
        localStorage.removeItem("eventUser");
        localStorage.removeItem("token");
        localStorage.removeItem("activeUserType");
        localStorage.removeItem("countryUser");
        localStorage.removeItem("countryToken");
      } finally {
        setLoading(false);
        setCountryLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // ========================
  // REGULAR/EVENT/BLOG AUTH
  // ========================
  
  const login = (userData: User, jwt: string) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", jwt);
    localStorage.setItem("activeUserType", "regular");
    
    setUser(userData);
    setEventUser(null);
    setToken(jwt);
    setActiveUserType('regular');
  };

  const loginAsEventUser = (eventUserData: EventUser, jwt: string) => {
    localStorage.setItem("eventUser", JSON.stringify(eventUserData));
    localStorage.setItem("token", jwt);
    localStorage.setItem("activeUserType", "event");
    
    setEventUser(eventUserData);
    setUser(null);
    setToken(jwt);
    setActiveUserType('event');
  };

  const switchToEventUser = (eventUserData: EventUser) => {
    localStorage.setItem("eventUser", JSON.stringify(eventUserData));
    localStorage.setItem("activeUserType", "event");
    
    setEventUser(eventUserData);
    setActiveUserType('event');
  };

  const switchToRegularUser = () => {
    localStorage.setItem("activeUserType", "regular");
    setActiveUserType('regular');
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("eventUser");
    localStorage.removeItem("token");
    localStorage.removeItem("activeUserType");
    
    setUser(null);
    setEventUser(null);
    setToken(null);
    setActiveUserType('regular');
  };

  // ========================
  // COUNTRY AUTH
  // ========================

  const loginCountry = async (email: string, password: string, onSuccess?: (user: CountryUser) => void): Promise<CountryUser> => {
  setCountryLoading(true);
  try {
    console.log('🔐 LOGIN START for:', email);
    
    const response = await fetch(`${API_BASE}/api/country/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    console.log('📊 HTTP Status:', response.status, response.statusText);
    console.log('✅ response.ok:', response.ok);
    console.log('🔗 response.url:', response.url);
    
    const responseText = await response.text();
    console.log('📄 Response text:', responseText);
    
    let data;
    try {
      data = JSON.parse(responseText);
      console.log('🔄 Parsed JSON:', data);
    } catch (e) {
      console.error('❌ JSON parse error:', e);
      throw new Error(`Server error: ${responseText.substring(0, 100)}`);
    }

    // CRITICAL: Check status code directly
    if (response.status >= 400) {
      console.log('🚨 HTTP Error status:', response.status);
      throw new Error(data?.message || `Login failed (${response.status})`);
    }

    // Now check for token
    if (!data.token) {
      console.error('❌ NO TOKEN IN RESPONSE:', data);
      throw new Error('Server did not provide authentication token');
    }

    console.log('✅ Token received, creating user object...');
    
    const transformedUserData: CountryUser = {
      id: data.user.id || data.user._id,
      name: data.user.name,
      email: data.user.email,
      role: data.user.role || (data.user.isAdmin ? 'admin' : 'user'),
      isAdmin: Boolean(data.user.isAdmin),
      isActive: data.user.isActive !== false,
    };
    
    console.log('👤 Final user object:', transformedUserData);

    localStorage.setItem("countryUser", JSON.stringify(transformedUserData));
    localStorage.setItem("countryToken", data.token);
    
    setCountryUser(transformedUserData);
    setCountryToken(data.token);
    
    if (onSuccess) onSuccess(transformedUserData);
    
    return transformedUserData;
  } catch (error: any) {
    console.error('💥 FINAL ERROR:', error.message);
    localStorage.removeItem("countryUser");
    localStorage.removeItem("countryToken");
    setCountryUser(null);
    setCountryToken(null);
    throw error;
  } finally {
    setCountryLoading(false);
  }
};

  const logoutCountry = (onLogout?: () => void) => {
    console.log('Logging out country user');
    localStorage.removeItem("countryUser");
    localStorage.removeItem("countryToken");
    
    setCountryUser(null);
    setCountryToken(null);
    
    if (onLogout) {
      onLogout();
    }
  };

  const updateCountryUser = (userData: CountryUser) => {
    console.log('Updating country user:', userData);
    setCountryUser(userData);
    localStorage.setItem("countryUser", JSON.stringify(userData));
  };

  const changeCountryPassword = async (oldPassword: string, newPassword: string) => {
    try {
      const response = await fetch(`${API_BASE}/api/auth/change-password`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${countryToken}`
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Password change failed');
      }

      return data;
    } catch (error: any) {
      console.error("Password change error:", error);
      throw error;
    }
  };

  // Determine which user is currently active for events/blogs
  const currentEventUser = activeUserType === 'event' ? eventUser : user;
  const isEventUserActive = activeUserType === 'event';

  return (
    <AuthContext.Provider value={{ 
      // Regular/Event/Blog Auth
      user, 
      eventUser: currentEventUser,
      token, 
      loading, 
      login, 
      loginAsEventUser,
      logout, 
      switchToEventUser,
      switchToRegularUser,
      
      // Country Auth
      countryUser,
      countryToken,
      countryLoading,
      loginCountry,
      logoutCountry,
      updateCountryUser,
      changeCountryPassword
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Main hook for Event/Blog auth
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

// Country-specific hook for convenience
export const useCountryAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useCountryAuth must be used within AuthProvider");
  
  // Debug: Check what's in context
  console.log('=== useCountryAuth DEBUG ===');
  console.log('Context countryUser:', ctx.countryUser);
  console.log('Context countryUser?.role:', ctx.countryUser?.role);
  console.log('Context countryUser?.isAdmin:', ctx.countryUser?.isAdmin);
  
  // Also check localStorage as fallback
  const storedUserStr = localStorage.getItem("countryUser");
  const storedUser = storedUserStr ? JSON.parse(storedUserStr) : null;
  console.log('LocalStorage countryUser:', storedUser);
  console.log('LocalStorage countryUser role:', storedUser?.role);
  console.log('LocalStorage countryUser isAdmin:', storedUser?.isAdmin);
  
  // Use storedUser as fallback if context doesn't have it yet
  const effectiveUser = ctx.countryUser || storedUser;
  console.log('Effective user:', effectiveUser);
  
  const isAdmin = effectiveUser?.role === 'admin' || effectiveUser?.isAdmin === true;
  console.log('Final isAdmin calculation:', isAdmin);
  console.log('=== END DEBUG ===');
  
  return {
    user: effectiveUser,
    token: ctx.countryToken || localStorage.getItem("countryToken"),
    loading: ctx.countryLoading,
    login: ctx.loginCountry,
    logout: ctx.logoutCountry,
    updateUser: ctx.updateCountryUser,
    changePassword: ctx.changeCountryPassword,
    isAdmin: isAdmin,
  };
};