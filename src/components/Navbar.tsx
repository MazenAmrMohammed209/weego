"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { PaymentButton } from "./PaymentButton";
import { UserDropdown } from "./UserDropdown";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "My Rewards", href: "/rewards" },
    { name: "About Business", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-base flex h-16 items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-primary dark:text-primary-foreground">
          W<span className="italic text-accent">E</span>EGO
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-foreground/80 transition-colors hover:text-primary dark:hover:text-primary-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <PaymentButton className="hidden lg:flex" />
          <UserDropdown />
        </div>

        {/* Mobile: Hamburger */}
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-base space-y-4 px-4 py-6">
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-foreground/80 transition-colors hover:text-accent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="h-px w-full bg-border my-4" />
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <LanguageSwitcher />
                <UserDropdown />
              </div>
              <PaymentButton className="w-full" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
