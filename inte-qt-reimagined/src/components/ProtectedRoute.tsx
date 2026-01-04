// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useCountryAuth } from "@/context/AuthContext";

type Props = {
  children: React.ReactNode;
  adminOnly?: boolean;
  eventOnly?: boolean; // For event system auth
};

const ProtectedRoute: React.FC<Props> = ({ 
  children, 
  adminOnly = false,
  eventOnly = false 
}) => {
  const location = useLocation();
  const path = location.pathname;
  
  // Determine which auth system to use based on route
  const isCountryRoute = path.startsWith('/country');
  const isEventRoute = path.includes('/event') || path.includes('/events');
  const isBlogRoute = path.includes('/admin') || path.includes('/create-blog') || path.includes('/user-dashboard');
  
  console.log('ProtectedRoute check:', {
    path,
    isCountryRoute,
    isEventRoute,
    isBlogRoute,
    adminOnly,
    eventOnly
  });

  // For Country Routes
  if (isCountryRoute) {
    const { user: countryUser, loading: countryLoading, isAdmin: countryIsAdmin } = useCountryAuth();
    
    if (countryLoading) {
      return (
        <div className="h-screen flex items-center justify-center text-muted-foreground">
          Loading country authentication...
        </div>
      );
    }
    
    console.log('Country auth check:', { 
      user: countryUser, 
      isAdmin: countryIsAdmin,
      adminOnly 
    });
    
    if (!countryUser) {
      console.log('No country user, redirecting to country login');
      return <Navigate to="/country/login" replace />;
    }
    
    if (adminOnly && !countryIsAdmin) {
      console.log('Country admin required but not admin, redirecting');
      return <Navigate to="/country/dashboard" replace />;
    }
    
    return <>{children}</>;
  }
  
  // For Event Routes
  if (isEventRoute || eventOnly) {
    const { eventUser, loading: eventLoading, user: regularUser } = useAuth();
    
    // Determine which user is active for events
    const activeEventUser = eventUser || regularUser;
    
    if (eventLoading) {
      return (
        <div className="h-screen flex items-center justify-center text-muted-foreground">
          Loading event authentication...
        </div>
      );
    }
    
    console.log('Event auth check:', { 
      eventUser, 
      regularUser,
      activeEventUser,
      adminOnly 
    });
    
    if (!activeEventUser) {
      console.log('No event user, redirecting to event login');
      return <Navigate to="/events/login" replace />;
    }
    
    // For event admin checks, you might need to check eventRole
    if (adminOnly) {
      const isEventAdmin = activeEventUser.role === 'admin' || activeEventUser.isAdmin;
      if (!isEventAdmin) {
        console.log('Event admin required but not admin');
        return <Navigate to="/events" replace />;
      }
    }
    
    return <>{children}</>;
  }
  
  // For Blog/Regular Routes (default)
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-muted-foreground">
        Restoring session…
      </div>
    );
  }
  
  console.log('Regular auth check:', { user, adminOnly });
  
  if (!user) {
    return <Navigate to="/" replace />;
  }
  
  if (adminOnly && !user.isAdmin) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;