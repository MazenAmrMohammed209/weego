"use client";

import { CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaymentButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function PaymentButton({ className, ...props }: PaymentButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      <CreditCard className="h-4 w-4" />
      Pay Now
    </button>
  );
}
