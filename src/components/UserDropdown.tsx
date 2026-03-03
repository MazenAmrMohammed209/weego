"use client";

import * as React from "react";
import { User, LogOut, Settings } from "lucide-react";
import Link from "next/link";

export function UserDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        <User className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md border border-border bg-background shadow-md">
          <div className="flex flex-col p-1">
            <Link
              href="/auth"
              className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent/10 focus:bg-accent/10"
              onClick={() => setIsOpen(false)}
            >
              <User className="h-4 w-4" />
              <span>Profile</span>
            </Link>
            <Link
              href="/admin"
              className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent/10 focus:bg-accent/10"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="h-4 w-4" />
              <span>Admin Dashboard</span>
            </Link>
            <div className="my-1 h-px bg-border" />
            <button
              className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-red-500 outline-none hover:bg-red-500/10 focus:bg-red-500/10"
              onClick={() => setIsOpen(false)}
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
