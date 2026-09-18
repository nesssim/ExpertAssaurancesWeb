import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "success";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        {
          "bg-brand-surface-alt text-brand-text": variant === "default",
          "bg-brand-accent text-white": variant === "accent",
          "bg-brand-secondary/10 text-brand-secondary": variant === "success",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
