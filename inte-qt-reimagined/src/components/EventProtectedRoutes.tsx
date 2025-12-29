// src/components/EventProtectedRoute.tsx
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  adminOnly?: boolean;
};

const EventProtectedRoute: React.FC<Props> = ({ children, adminOnly = false }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkAuth = () => {
      const storedUser = localStorage.getItem("user");
      const token = localStorage.getItem("token");
      
      if (token && storedUser) {
        try {
          const userData = JSON.parse(storedUser);
          setUser(userData);
        } catch (e) {
          console.error("Error parsing user data:", e);
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
      }
      
      setLoading(false);
    };
    
    checkAuth();
  }, []);

  // ⏳ Wait until auth state is checked
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-muted-foreground">
        Checking event authentication…
      </div>
    );
  }

  // 🔒 Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 🛑 Admin guard
  if (adminOnly && !user.isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default EventProtectedRoute;