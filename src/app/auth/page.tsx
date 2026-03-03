"use client";

import { useState } from "react";
import { Mail, Lock, User, KeyRound, Loader2 } from "lucide-react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!isLogin) {
      const confirmPassword = formData.get("confirmPassword") as string;
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        setIsLoading(false);
        return;
      }
    }

    // Mock API call
    setTimeout(() => {
      setIsLoading(false);
      // Mock admin login condition
      if (email === "admin@weego.com" && password === "admin123") {
        if (typeof window !== "undefined") {
          localStorage.setItem("weego_role", "admin");
          window.location.href = "/admin";
        }
      } else if (email && password) {
        if (typeof window !== "undefined") {
          localStorage.setItem("weego_role", "user");
          window.location.href = "/";
        }
      } else {
        setError("Invalid credentials. Please try again.");
      }
    }, 1500);
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-bg-light dark:bg-bg-dark">
      <div className="w-full max-w-md space-y-8 rounded-3xl bg-background p-10 border border-border shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-primary dark:text-primary-foreground">
            {isLogin ? "Welcome back" : "Create your account"}
          </h2>
          <p className="mt-2 text-sm text-foreground/70">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-accent hover:text-accent/80 focus:outline-none focus:underline"
            >
              {isLogin ? "Sign up" : "Log in"}
            </button>
          </p>
        </div>

        <form className="mt-8 space-y-6 flex flex-col items-center" onSubmit={handleSubmit}>
          {error && (
            <div className="w-full rounded-md bg-red-50 p-4 dark:bg-red-900/30">
              <div className="text-sm text-red-700 dark:text-red-400 font-medium text-center">{error}</div>
            </div>
          )}

          <div className="w-full space-y-4 rounded-md shadow-sm">
            {!isLogin && (
              <div className="relative">
                <label className="sr-only" htmlFor="name">Full Name</label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="h-5 w-5 text-muted-foreground opacity-50" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-3 pl-10 text-foreground ring-1 ring-inset ring-border placeholder:text-foreground/50 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 bg-transparent"
                  placeholder="Full Name"
                />
              </div>
            )}
            <div className="relative">
              <label className="sr-only" htmlFor="email">Email address</label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="h-5 w-5 text-muted-foreground opacity-50" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-3 pl-10 text-foreground ring-1 ring-inset ring-border placeholder:text-foreground/50 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 bg-transparent"
                placeholder="Email address"
              />
            </div>
            <div className="relative">
              <label className="sr-only" htmlFor="password">Password</label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="h-5 w-5 text-muted-foreground opacity-50" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={isLogin ? "current-password" : "new-password"}
                required
                className="block w-full rounded-md border-0 py-3 pl-10 text-foreground ring-1 ring-inset ring-border placeholder:text-foreground/50 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 bg-transparent"
                placeholder="Password"
              />
            </div>
            {!isLogin && (
              <div className="relative">
                <label className="sr-only" htmlFor="confirmPassword">Confirm Password</label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <KeyRound className="h-5 w-5 text-muted-foreground opacity-50" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full rounded-md border-0 py-3 pl-10 text-foreground ring-1 ring-inset ring-border placeholder:text-foreground/50 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 bg-transparent"
                  placeholder="Confirm Password"
                />
              </div>
            )}
          </div>

          <div className="w-full">
            <button
              type="submit"
              disabled={isLoading}
              className="group relative flex w-full justify-center rounded-md bg-accent px-3 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-70 transition-all"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                isLogin ? "Sign In" : "Register"
              )}
            </button>
          </div>
          
          {isLogin && (
             <div className="text-center w-full mt-2">
                 <p className="text-xs text-foreground/50 mt-4">Hint: Use admin@weego.com / admin123 for Admin Dashboard access.</p>
             </div>
          )}
        </form>
      </div>
    </div>
  );
}
