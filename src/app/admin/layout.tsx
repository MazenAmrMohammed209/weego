"use client";

import * as React from "react";
import Link from "next/link";
import { LayoutDashboard, Users, Map, Gift, CreditCard, LogOut, Loader2 } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthorized, setIsAuthorized] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    // Simple role check
    const role = localStorage.getItem("weego_role");
    if (role === "admin") {
      setIsAuthorized(true);
    } else {
      window.location.href = "/auth";
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("weego_role");
    window.location.href = "/";
  };

  if (isAuthorized === null) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-bg-light dark:bg-bg-dark">
        <Loader2 className="h-8 w-8 animate-spin text-accent" />
      </div>
    );
  }

  const sidebarLinks = [
    { name: "Overview", icon: LayoutDashboard, href: "/admin" },
    { name: "Bookings", icon: Map, href: "/admin" },
    { name: "Users", icon: Users, href: "/admin" },
    { name: "Rewards", icon: Gift, href: "/admin" },
    { name: "Payments", icon: CreditCard, href: "/admin" },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-bg-light dark:bg-bg-dark">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-border bg-background sm:flex">
        <div className="flex h-16 items-center justify-center border-b border-border">
          <Link href="/" className="font-bold text-xl tracking-tighter text-primary dark:text-primary-foreground">
            W<span className="text-accent italic">E</span>EGO <span className="text-sm font-normal text-foreground/50">Admin</span>
          </Link>
        </div>
        <nav className="flex-1 space-y-2 p-4">
          {sidebarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground/80 hover:bg-accent/10 hover:text-accent transition-colors"
            >
              <link.icon className="h-5 w-5" />
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="border-t border-border p-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-red-500 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="flex h-16 items-center justify-between border-b border-border bg-background px-6">
          <div className="flex items-center sm:hidden">
             <Link href="/" className="font-bold text-xl tracking-tighter text-primary dark:text-primary-foreground">
               W<span className="text-accent italic">E</span>EGO <span className="text-xs font-normal">Admin</span>
             </Link>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-semibold text-foreground">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-sm font-medium text-foreground/70">System Online</span>
            </div>
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
