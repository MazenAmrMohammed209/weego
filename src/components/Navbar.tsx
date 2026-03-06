"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import iconImg from "@/app/assets/icon.svg";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { PaymentButton } from "./PaymentButton";
import { UserDropdown } from "./UserDropdown";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { isAuthenticated } = useAuth();
  const { t } = useLanguage();

  const navLinks = [
    { name: t("navbar.home"), href: "/" },
    { name: t("navbar.services"), href: "/services" },
    { name: t("navbar.rewards"), href: "/rewards" },
    { name: t("navbar.about"), href: "/about" },
    { name: t("navbar.business"), href: "/business" },
  ];

  return (
    <div 
      className="fixed top-0 z-[1000] w-full pt-4 pb-6 px-4 md:px-8 pointer-events-none flex justify-center transition-all duration-300"
      style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0))' }}
    >
      <header className="pointer-events-auto w-full max-w-[1200px] rounded-full bg-background/90 backdrop-blur-[10px] supports-[backdrop-filter]:bg-background/60 shadow-[0_8px_30px_rgba(0,0,0,0.25)] border border-white/5">
        <div className="flex w-full h-16 items-center justify-between px-6 md:px-8">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3 font-bold text-2xl tracking-tighter text-primary dark:text-primary-foreground">
          <Image src={iconImg} alt="WEEGO" width={40} height={40} className="h-40 w-auto object-contain" />
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
          {isAuthenticated ? (
            <UserDropdown />
          ) : (
            <div className="flex items-center space-x-3 ms-2">
              <Link
                href="/auth?variant=login"
                className="px-5 py-2 text-sm font-semibold text-foreground border border-border rounded-full hover:bg-accent/5 transition-all active:scale-95"
              >
                {t("navbar.login")}
              </Link>
              <Link
                href="/auth?variant=register"
                className="px-5 py-2 text-sm font-semibold bg-accent text-accent-foreground rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
              >
                {t("navbar.register")}
              </Link>
            </div>
          )}
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
                {isAuthenticated && <UserDropdown />}
              </div>
              <PaymentButton className="w-full" />
              {!isAuthenticated && (
                <div className="flex flex-col space-y-3 pt-2">
                  <Link
                    href="/auth?variant=login"
                    className="w-full text-center px-4 py-2.5 text-sm font-semibold text-foreground border border-border rounded-full hover:bg-accent/5 transition-all active:scale-95"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("navbar.login")}
                  </Link>
                  <Link
                    href="/auth?variant=register"
                    className="w-full text-center px-4 py-2.5 text-sm font-semibold bg-accent text-accent-foreground rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("navbar.register")}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      </header>
    </div>
  );
}
