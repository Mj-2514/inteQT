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

type AuthContextType = {
  user: User | null;
  eventUser: EventUser | null;
  token: string | null;
  loading: boolean;
  login: (user: User, token: string) => void;
  loginAsEventUser: (eventUser: EventUser, token: string) => void;
  logout: () => void;
  switchToEventUser: (eventUser: EventUser) => void;
  switchToRegularUser: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [eventUser, setEventUser] = useState<EventUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeUserType, setActiveUserType] = useState<'regular' | 'event'>('regular');

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      const storedEventUser = localStorage.getItem("eventUser");
      const storedToken = localStorage.getItem("token");
      const storedActiveType = localStorage.getItem("activeUserType") as 'regular' | 'event';

      if (storedToken) {
        setToken(storedToken);
        
        // Restore active user type
        if (storedActiveType) {
          setActiveUserType(storedActiveType);
        }

        // Restore users based on active type
        if (storedActiveType === 'event' && storedEventUser) {
          setEventUser(JSON.parse(storedEventUser));
        } else if (storedUser) {
          setUser(JSON.parse(storedUser));
        } else if (storedEventUser) {
          // Fallback: if we have eventUser but no regular user
          setEventUser(JSON.parse(storedEventUser));
          setActiveUserType('event');
        }
      }
    } catch (err) {
      console.error("Auth restore failed", err);
      localStorage.removeItem("user");
      localStorage.removeItem("eventUser");
      localStorage.removeItem("token");
      localStorage.removeItem("activeUserType");
    } finally {
      setLoading(false);
    }
  }, []);

  // Regular user login
  const login = (userData: User, jwt: string) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", jwt);
    localStorage.setItem("activeUserType", "regular");
    
    setUser(userData);
    setEventUser(null);
    setToken(jwt);
    setActiveUserType('regular');
  };

  // Event-specific user login
  const loginAsEventUser = (eventUserData: EventUser, jwt: string) => {
    localStorage.setItem("eventUser", JSON.stringify(eventUserData));
    localStorage.setItem("token", jwt);
    localStorage.setItem("activeUserType", "event");
    
    setEventUser(eventUserData);
    setUser(null);
    setToken(jwt);
    setActiveUserType('event');
  };

  // Switch between user types (if you have both)
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

  // Determine which user is currently active
  const currentUser = activeUserType === 'event' ? eventUser : user;
  const isEventUserActive = activeUserType === 'event';

  return (
    <AuthContext.Provider value={{ 
      user, 
      eventUser: currentUser, // Return the active user as eventUser
      token, 
      loading, 
      login, 
      loginAsEventUser,
      logout, 
      switchToEventUser,
      switchToRegularUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};