"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { cn } from "@/lib/utils/cn";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  { id: 1, name: "Marie L.", avatar: "/images/avatars/avatar-1.jpg", rating: 5, comment: "Service impeccable ! J'ai résilié mon ancien contrat en 2 clics et obtenu un devis auto 30% moins cher. L'équipe est réactive et à l'écoute." },
  { id: 2, name: "Sophie D.", avatar: "/images/avatars/avatar-2.jpg", rating: 5, comment: "Après un dégât des eaux, Expert Assurance a traité mon dossier en 48h. Indemnisation rapide et équipe très professionnelle. Je recommande !" },
  { id: 3, name: "Thomas B.", avatar: "/images/avatars/avatar-3.jpg", rating: 4, comment: "Bonne assurance habitation à prix correct. Le comparatif des garanties m'a bien aidé à choisir. Seul bémol : plus d'options de personnalisation." },
  { id: 4, name: "Camille R.", avatar: "/images/avatars/avatar-4.jpg", rating: 5, comment: "Enfin une assurance moto qui comprend les jeunes conducteurs ! Formule adaptée, tarifs transparents, et une application simple." },
  { id: 5, name: "Lucas M.", avatar: "/images/avatars/avatar-5.jpg", rating: 5, comment: "Complémentaire santé pour toute la famille. Zéro reste à charge chez les partenaires, et le remboursement est quasi instantané. Très satisfait." },
  { id: 6, name: "Émilie P.", avatar: "/images/avatars/avatar-6.jpg", rating: 4, comment: "Devis auto en 3 minutes, contrat signé le jour même. La simplicité à l'état pur. Le tarif est vraiment compétitif par rapport à la concurrence." },
  { id: 7, name: "Antoine G.", avatar: "/images/avatars/avatar-7.jpg", rating: 5, comment: "Après un accident, le service sinistre a été ultra-rapide. Mon véhicule a été réparé en 5 jours et l'indemnisation est intervenue sous 72h." },
  { id: 8, name: "Julie T.", avatar: "/images/avatars/avatar-8.jpg", rating: 5, comment: "J'ai changé d'assurance habitation pour Expert Assurance. L'assistance 24h/24 m'a dépannée un dimanche soir. Un vrai plus !" },
  { id: 9, name: "Nicolas F.", avatar: "/images/avatars/avatar-9.jpg", rating: 4, comment: "Assurance auto top. Le site est clair, les garanties bien expliquées. J'ai recommandé à mes collègues, ils ont tous été satisfaits." },
  { id: 10, name: "Isabelle C.", avatar: "/images/avatars/avatar-10.jpg", rating: 5, comment: "Enfin une assurance qui ne cache rien. Tout est transparent, les tarifs sont honnêtes, et le service client est vraiment attentionné." },
];

const AUTO_MS = 7000;
const ANIM_MS = 500;
const CARD_W = 360;
const GAP = 24;
const STEP = CARD_W + GAP;
const SHOW = 3;
const N = reviews.length;

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={cn("h-4 w-4", i < rating ? "text-amber-400" : "text-gray-200")} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="group h-[300px] w-[320px] sm:w-[360px] flex-shrink-0 bg-white rounded-2xl p-6 shadow-sm border border-brand-surface-alt/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-brand-secondary/30 flex flex-col items-center text-center">
      <div className="relative mb-4">
        <div className="relative h-16 w-16 rounded-full overflow-hidden ring-2 ring-brand-surface-alt group-hover:ring-brand-secondary/40 transition-all duration-300">
          <Image src={review.avatar} alt={review.name} fill className="object-cover" sizes="64px" />
        </div>
        <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-secondary text-white">
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <h3 className="font-semibold text-brand-text text-sm">{review.name}</h3>
      <div className="mt-2"><Stars rating={review.rating} /></div>
      <p className="mt-3 text-sm text-brand-text-muted leading-relaxed line-clamp-3 flex-1">
        &ldquo;{review.comment}&rdquo;
      </p>
    </div>
  );
}

export function ReviewsSection() {
  const [head, setHead] = useState(0);
  const [slideX, setSlideX] = useState(0);
  const [animating, setAnimating] = useState(false);
  const prefersReducedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);
  const resetRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    prefersReducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const clearTimers = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (resetRef.current) clearTimeout(resetRef.current);
  };

  const doSlide = useCallback(() => {
    setAnimating(true);
    setSlideX(-STEP);
    resetRef.current = setTimeout(() => {
      setHead((prev) => (prev + 1) % N);
      setSlideX(0);
      setAnimating(false);
    }, ANIM_MS);
  }, []);

  const restartTimer = useCallback(() => {
    if (prefersReducedRef.current) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(doSlide, AUTO_MS);
  }, [doSlide]);

  useEffect(() => {
    if (!prefersReducedRef.current) restartTimer();
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const slidePrev = () => {
    if (animating) return;
    setAnimating(true);
    setHead((prev) => (prev - 1 + N) % N);
    setSlideX(-STEP);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setSlideX(0));
    });
    resetRef.current = setTimeout(() => setAnimating(false), ANIM_MS);
    restartTimer();
  };

  const goTo = (target: number) => {
    if (animating) return;
    setAnimating(true);
    setHead(target);
    setSlideX(0);
    setTimeout(() => setAnimating(false), ANIM_MS);
    restartTimer();
  };

  const handleNext = () => {
    if (animating) return;
    doSlide();
    restartTimer();
  };

  const handlePrev = () => slidePrev();
  const handleDot = (i: number) => goTo(i);

  const visibleCards = useMemo(
    () => Array.from({ length: SHOW }).map((_, i) => reviews[(head + i) % N]),
    [head]
  );

  const enteringCard = useMemo(
    () => reviews[(head + SHOW) % N],
    [head]
  );

  return (
    <section className="py-16 lg:py-20 bg-brand-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-secondary/10 px-4 py-1.5 text-sm font-medium text-brand-secondary mb-4">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Avis vérifiés
          </div>
          <h2 className="text-3xl font-bold text-brand-text lg:text-4xl" style={{ textWrap: "balance" }}>
            Nos clients témoignent
          </h2>
          <p className="mt-3 text-brand-text-muted max-w-lg mx-auto">
            Plus de 50 000 clients nous font confiance. Découvrez leurs expériences.
          </p>
        </div>

        <div
          className="relative group/nav"
          role="region"
          aria-roledescription="carousel"
          aria-label="Témoignages clients"
        >
          <button onClick={handlePrev}
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-brand-surface-alt text-brand-text opacity-0 focus-within:opacity-100 group-hover/nav:opacity-100 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
            aria-label="Avis précédent">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button onClick={handleNext}
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-brand-surface-alt text-brand-text opacity-0 focus-within:opacity-100 group-hover/nav:opacity-100 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
            aria-label="Avis suivant">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(${slideX}px)`,
                transition: animating
                  ? `transform ${ANIM_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
                  : "none",
                willChange: "transform",
              }}
            >
              {visibleCards.map((review) => (
                <div key={`${head}-${review.id}`} className="flex-shrink-0" style={{ width: CARD_W }}>
                  <ReviewCard review={review} />
                </div>
              ))}
              <div
                className="flex-shrink-0"
                style={{
                  width: CARD_W,
                  opacity: animating ? 1 : 0,
                  transition: animating ? `opacity ${ANIM_MS}ms ease` : "none",
                }}
              >
                <ReviewCard review={enteringCard} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8" role="group" aria-label="Navigation par page">
          {Array.from({ length: N }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                head === i
                  ? "w-6 bg-brand-secondary"
                  : "w-2 bg-brand-text-muted/30 hover:bg-brand-text-muted/50"
              )}
              style={{ transitionProperty: "width, background-color" }}
              aria-label={`Voir l'avis ${i + 1}`}
              aria-current={head === i ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
