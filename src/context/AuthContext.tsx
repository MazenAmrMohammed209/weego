"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type UserRole = "user" | "admin";

interface User {
  email: string;
  name: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, name: string, role?: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check local storage for persistent session
    const storedUser = localStorage.getItem("weego_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem("weego_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, name: string, role: UserRole = "user") => {
    const newUser = { email, name, role };
    setUser(newUser);
    localStorage.setItem("weego_user", JSON.stringify(newUser));
    localStorage.setItem("weego_role", role);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("weego_user");
    localStorage.removeItem("weego_role");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
