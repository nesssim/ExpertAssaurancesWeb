"use client";

import { useCallback, useSyncExternalStore } from "react";

function getCookieConsentSnapshot() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("cookie-consent");
}

function subscribeToCookieConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export function CookieConsent() {
  const consent = useSyncExternalStore(subscribeToCookieConsent, getCookieConsentSnapshot, () => null);

  const handleAccept = useCallback(() => {
    localStorage.setItem("cookie-consent", "accepted");
  }, []);

  const handleReject = useCallback(() => {
    localStorage.setItem("cookie-consent", "rejected");
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
