import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "mb-8 lg:mb-12", className)}>
      <h2 className="text-3xl font-bold text-brand-text lg:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-lg text-brand-text-muted max-w-2xl mx-auto">{subtitle}</p>
      )}
      {children}
    </div>
  );
}
