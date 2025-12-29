// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

type Props = {
  children: React.ReactNode;
  adminOnly?: boolean;
};

const ProtectedRoute: React.FC<Props> = ({ children, adminOnly = false }) => {
  const { user, loading } = useAuth();

  // ⏳ Wait until auth state is restored
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-muted-foreground">
        Restoring session…
      </div>
    );
  }

  // 🔒 Not logged in
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // 🛑 Admin guard
  if (adminOnly && !user.isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
