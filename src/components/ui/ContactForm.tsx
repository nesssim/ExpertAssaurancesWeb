"use client";

import { useState, useCallback, type FormEvent } from "react";
import { cn } from "@/lib/utils/cn";

interface ContactFormProps {
  variant?: "default" | "compact";
  className?: string;
  /** Product context sent as hidden field (e.g. "auto", "habitation") */
  product?: string;
}

type SubmitStatus = "idle" | "submitting" | "sent" | "error";

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

export function ContactForm({ variant = "default", className, product }: ContactFormProps) {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check — if filled, silently "succeed" without sending
    if (formData.get("website")) {
      setStatus("sent");
      return;
    }

    // Client-side validation
    const name = (formData.get("name") as string || "").trim();
    const email = (formData.get("email") as string || "").trim();
    const message = (formData.get("message") as string || "").trim();

    if (!name || name.length < 2 || name.length > 100) {
      setStatus("error");
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      setStatus("error");
      return;
    }
    if (!message || message.length > 2000) {
      setStatus("error");
      return;
    }

    if (!FORM_ENDPOINT) {
      console.warn("NEXT_PUBLIC_FORM_ENDPOINT not configured — form submission skipped");
      setStatus("sent");
      form.reset();
      return;
    }

    try {
      const payload = Object.fromEntries(formData.entries());
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }, []);

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <svg className="mx-auto h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <p className="mt-3 font-medium text-green-800">Message envoyé avec succès !</p>
        <p className="mt-1 text-sm text-green-600">Nous vous recontacterons sous 24h.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-green-700 underline hover:text-green-900"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "space-y-4",
        variant === "compact" && "space-y-3",
        className
      )}
      noValidate
    >
      {/* Honeypot — hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Ne pas remplir</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {product && <input type="hidden" name="product" value={product} />}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-1">
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength={2}
            maxLength={100}
            className="w-full rounded-lg border border-brand-surface-alt px-4 py-2.5 text-brand-text placeholder:text-brand-text-muted focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary/20"
            placeholder="Jean Dupont"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={254}
            className="w-full rounded-lg border border-brand-surface-alt px-4 py-2.5 text-brand-text placeholder:text-brand-text-muted focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary/20"
            placeholder="jean@exemple.fr"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-brand-text mb-1">
          Téléphone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="0[1-9]([\s.-]?\d{2}){4}"
          maxLength={14}
          className="w-full rounded-lg border border-brand-surface-alt px-4 py-2.5 text-brand-text placeholder:text-brand-text-muted focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary/20"
          placeholder="06 12 34 56 78"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          maxLength={2000}
          className="w-full rounded-lg border border-brand-surface-alt px-4 py-2.5 text-brand-text placeholder:text-brand-text-muted focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 resize-none"
          placeholder="Décrivez votre besoin..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Veuillez vérifier les champs du formulaire.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto rounded-lg bg-brand-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-primary-light transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Envoi en cours..." : "Envoyer le message"}
      </button>
    </form>
  );
}
