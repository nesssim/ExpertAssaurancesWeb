"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { navigation, utilityLinks } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils/cn";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    closeButtonRef.current?.focus();

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center rounded-lg p-2 text-brand-text hover:bg-brand-surface-alt transition-colors"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div
        ref={panelRef}
        id="mobile-nav-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-72 bg-white shadow-lg transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-full flex-col p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-bold text-brand-primary">Expert Assurance</span>
            <button
              ref={closeButtonRef}
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 text-brand-text hover:bg-brand-surface-alt transition-colors"
              aria-label="Fermer le menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-brand-text hover:bg-brand-surface-alt hover:text-brand-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-brand-surface-alt my-4" />
            {utilityLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                  item.isAccent
                    ? "text-brand-accent hover:bg-brand-accent/10"
                    : "text-brand-text-muted hover:bg-brand-surface-alt hover:text-brand-text"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/devis-auto"
            onClick={() => setIsOpen(false)}
            className="mt-6 block rounded-lg bg-brand-primary px-5 py-3 text-center text-sm font-semibold text-white hover:bg-brand-primary-light transition-colors"
          >
            Devis gratuit
          </Link>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
