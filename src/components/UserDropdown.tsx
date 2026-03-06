"use client";

import * as React from "react";
import { User, LogOut, Settings, LayoutDashboard, CalendarFold } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export function UserDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const { user, logout } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    setIsOpen(false);
    logout();
    router.push("/");
  };

  if (!user) return null;

  const firstLetter = user.name ? user.name.charAt(0).toUpperCase() : "U";

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold shadow-md hover:scale-105 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        {firstLetter}
      </button>

        {isOpen && (
          <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-border bg-background/80 backdrop-blur-xl shadow-2xl overflow-hidden z-50 p-2 animate-in fade-in zoom-in duration-200">
            <div className="px-3 py-3 border-b border-border/50 mb-2">
              <p className="text-sm font-medium text-foreground truncate">{user.name}</p>
              <p className="text-xs text-foreground/50 truncate">{user.email}</p>
            </div>
            
            <div className="flex flex-col space-y-1">
              {user.role === "admin" && (
                <Link
                  href="/admin"
                  className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Admin Dashboard</span>
                </Link>
              )}
              
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 outline-none"
                onClick={() => setIsOpen(false)}
              >
                <User className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
              
              <Link
                href="/bookings"
                className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 outline-none"
                onClick={() => setIsOpen(false)}
              >
                <CalendarFold className="h-4 w-4" />
                <span>My Bookings</span>
              </Link>

              <Link
                href="/settings"
                className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 outline-none"
                onClick={() => setIsOpen(false)}
              >
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
              
              <div className="my-1 h-px bg-border/50" />
              
              <button
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-500/10 focus:bg-red-500/10 outline-none"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                <span>Log out</span>
              </button>
            </div>
          </div>
        )}
    </div>
  );
}
