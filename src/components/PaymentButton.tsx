"use client";

import { Map } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface PaymentButtonProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  className?: string;
}

export function PaymentButton({ className, ...props }: PaymentButtonProps) {
  const { t } = useLanguage();

  return (
    <Link
      href="/booking"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      <Map className="h-4 w-4 rtl:scale-x-[-1]" />
      {t("navbar.planTrip")}
    </Link>
  );
}
