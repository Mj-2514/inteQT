import React, { createContext, useContext, useState, useEffect } from "react";

type User = {
  name: string;
  email: string;
  isAdmin?: boolean;
};

type AuthContextType = {
  eventUser: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [eventUser, setEventUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("eventUser") || "null")
  );
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token") || null
  );

  const login = (user: User, token: string) => {
    setEventUser(user);
    setToken(token);
    localStorage.setItem("eventUser", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setEventUser(null);
    setToken(null);
    localStorage.removeItem("eventUser");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ eventUser, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
