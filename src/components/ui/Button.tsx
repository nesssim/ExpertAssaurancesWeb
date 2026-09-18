import { cn } from "@/lib/utils/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
        {
          "bg-brand-primary text-white hover:bg-brand-primary-light focus:ring-brand-primary":
            variant === "primary",
          "bg-brand-secondary text-white hover:opacity-90 focus:ring-brand-secondary":
            variant === "secondary",
          "bg-brand-accent text-white hover:opacity-90 focus:ring-brand-accent":
            variant === "accent",
          "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary":
            variant === "outline",
          "text-brand-text hover:bg-brand-surface-alt focus:ring-brand-text-muted":
            variant === "ghost",
        },
        {
          "px-3 py-1.5 text-sm": size === "sm",
          "px-5 py-2.5 text-sm": size === "md",
          "px-7 py-3 text-base": size === "lg",
        },
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
