import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Expert Assurance — Assurance auto, moto, habitation et santé",
    template: "%s | Expert Assurance",
  },
  description:
    "Expert Assurance, votre assureur en ligne. Assurance auto, habitation, moto et complémentaire santé. Devis gratuit en 2 minutes.",
  metadataBase: new URL("https://www.expert-assurance.fr"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Expert Assurance",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-brand-primary focus:text-white focus:p-4"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
