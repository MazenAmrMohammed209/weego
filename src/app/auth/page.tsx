"use client";

import { useState, useEffect, Suspense } from "react";
import { Mail, Lock, User, KeyRound, Loader2, ArrowRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function AuthForm() {
  const searchParams = useSearchParams();
  const initialVariant = searchParams.get("variant") === "register" ? false : true;
  
  const [isLogin, setIsLogin] = useState(initialVariant);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const { t } = useLanguage();
  const router = useRouter();

  // Reset error when switching modes
  useEffect(() => {
    setError("");
  }, [isLogin]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return; // Prevent multiple submissions
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string || "Traveler";

    // Basic Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
       setError(t("auth.validation.invalidEmail"));
       setIsLoading(false);
       return;
    }

    if (password.length < 6) {
      setError(t("auth.validation.passwordShort"));
      setIsLoading(false);
      return;
    }

    if (!isLogin) {
      const confirmPassword = formData.get("confirmPassword") as string;
      if (password !== confirmPassword) {
        setError(t("auth.validation.passwordMatch"));
        setIsLoading(false);
        return;
      }
      
      // Mock prevent duplicate emails
      if (email === "admin@weego.com" || email === "taken@weego.com") {
        setError(t("auth.validation.emailRegistered"));
        setIsLoading(false);
        return;
      }
    }

    // Mock API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Mock admin login condition
      if (email === "admin@weego.com" && password === "admin123") {
        login("admin@weego.com", "Admin Weego", "admin");
        router.push("/admin");
      } else if (isLogin) {
        // Mock standard login
        if (password === "password123") {
           // For demo, accept anything as long as password is >=8 but let's just accept all if not admin for flexibility, 
           // actually let's mock a success login for any email with any password >=8 except specific fails.
           if (email === "fail@weego.com") {
              setError(t("auth.validation.incorrectCredentials"));
           } else {
              login(email, name, "user");
              router.push("/");
           }
        } else {
           // Let's just allow all valid inputs for the sake of the demo, except admin which needs admin123
           login(email, name, "user");
           router.push("/");
        }
      } else {
        // Register Success -> Auto Login
        login(email, name, "user");
        router.push("/");
      }
    }, 1500);
  };

  return (
    <div className="w-full max-w-md space-y-8 rounded-[2rem] bg-background/60 backdrop-blur-xl p-10 border border-border shadow-2xl relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

      <div className="text-center relative z-10">
        <div className="animate-in fade-in slide-in-from-top-4 duration-500">
          <Link href="/" className="inline-flex mb-6 text-primary dark:text-primary-foreground font-bold text-2xl tracking-tighter">
            W<span className="italic text-accent">E</span>EGO
          </Link>
          <h2 className="text-3xl font-extrabold tracking-tight text-primary dark:text-primary-foreground">
            {isLogin ? t("auth.login.title") : t("auth.register.title")}
          </h2>
          <p className="mt-2 text-sm text-foreground/70 mb-2">
            {isLogin ? t("auth.login.subtitle") : t("auth.register.subtitle")}
          </p>
          <p className="mt-2 text-sm text-foreground/70">
            {isLogin ? t("auth.login.noAccount") + " " : t("auth.register.haveAccount") + " "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-accent hover:text-accent/80 focus:outline-none focus:underline transition-colors rtl:ms-1"
            >
              {isLogin ? t("auth.login.createAccount") : t("auth.register.login")}
            </button>
          </p>
        </div>
      </div>

      <form className="mt-8 space-y-6 relative z-10" onSubmit={handleSubmit}>
          {error && (
            <div className="w-full rounded-xl bg-red-500/10 p-4 border border-red-500/20 animate-in fade-in zoom-in duration-300">
              <div className="text-sm text-red-600 dark:text-red-400 font-medium text-center">{error}</div>
            </div>
          )}

        <div className="w-full space-y-4">
            {!isLogin && (
              <div className="relative animate-in slide-in-from-top-2 fade-in duration-300">
                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                  <User className="h-5 w-5 text-muted-foreground opacity-50" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required={!isLogin}
                  className="block w-full rounded-2xl border-0 py-3.5 ps-12 pe-4 text-foreground ring-1 ring-inset ring-border placeholder:text-foreground/50 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 bg-background/50 backdrop-blur-sm transition-all shadow-sm"
                  placeholder={t("auth.placeholders.name")}
                />
              </div>
            )}
          
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
              <Mail className="h-5 w-5 text-muted-foreground opacity-50" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-2xl border-0 py-3.5 ps-12 pe-4 text-foreground ring-1 ring-inset ring-border placeholder:text-foreground/50 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 bg-background/50 backdrop-blur-sm transition-all shadow-sm"
              placeholder={t("auth.placeholders.email")}
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
              <Lock className="h-5 w-5 text-muted-foreground opacity-50" />
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete={isLogin ? "current-password" : "new-password"}
              required
              className="block w-full rounded-2xl border-0 py-3.5 ps-12 pe-4 text-foreground ring-1 ring-inset ring-border placeholder:text-foreground/50 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 bg-background/50 backdrop-blur-sm transition-all shadow-sm"
              placeholder={t("auth.placeholders.password")}
            />
          </div>
          
            {!isLogin && (
              <div className="relative animate-in slide-in-from-top-2 fade-in duration-300">
                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                  <KeyRound className="h-5 w-5 text-muted-foreground opacity-50" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required={!isLogin}
                  className="block w-full rounded-2xl border-0 py-3.5 ps-12 pe-4 text-foreground ring-1 ring-inset ring-border placeholder:text-foreground/50 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 bg-background/50 backdrop-blur-sm transition-all shadow-sm"
                  placeholder={t("auth.placeholders.confirmPassword")}
                />
              </div>
            )}
        </div>

        <div className="w-full">
          <button
            type="submit"
            disabled={isLoading}
            className="group relative flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-4 py-4 text-base font-semibold text-accent-foreground shadow-lg hover:bg-accent/90 hover:scale-[1.02] active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-70 transition-all"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                <span>{isLogin ? t("auth.login.button") : t("auth.register.button")}</span>
                <ArrowRight className="h-4 w-4 opacity-70 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
              </>
            )}
          </button>
        </div>
        
        {isLogin && (
           <div className="text-center w-full mt-2">
               <p className="text-xs text-foreground/40 mt-4">{t("auth.hint")}</p>
           </div>
        )}
      </form>
    </div>
  );
}

export default function AuthPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bg-light to-background dark:from-bg-dark dark:to-background">
      <Suspense fallback={<div className="flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-accent" /></div>}>
        <AuthForm />
      </Suspense>
    </div>
  );
}
