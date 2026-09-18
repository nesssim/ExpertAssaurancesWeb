"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "cookie-consent";
const CHANGE_EVENT = "cookie-consent-change";

function getSnapshot(): string | null {
  if (typeof window === "undefined") return "accepted";
  return localStorage.getItem(STORAGE_KEY);
}

function subscribe(callback: () => void) {
  const handler = () => callback();
  window.addEventListener("storage", handler);
  window.addEventListener(CHANGE_EVENT, handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener(CHANGE_EVENT, handler);
  };
}

export function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, () => "accepted");

  const handleAccept = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  const handleReject = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  if (consent !== null) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-brand-surface-alt shadow-lg p-4 sm:p-6">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm text-brand-text">
            Nous utilisons des cookies pour améliorer votre expérience de navigation.
            Consultez notre{" "}
            <a href="/politique-confidentialite" className="underline hover:text-brand-primary">
              politique de confidentialité
            </a>{" "}
            pour en savoir plus.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleReject}
            className="rounded-lg border border-brand-surface-alt px-4 py-2 text-sm font-medium text-brand-text-muted hover:bg-brand-surface-alt transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={handleAccept}
            className="rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white hover:bg-brand-primary-light transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
