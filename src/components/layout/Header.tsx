import { navigation, utilityLinks } from "@/lib/constants/navigation";
import Link from "next/link";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-brand-surface-alt shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-brand-primary">Expert Assurance</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Navigation principale">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-brand-text hover:bg-brand-surface-alt hover:text-brand-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            {utilityLinks.map((item) =>
              item.isAccent ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="ml-2 rounded-lg bg-brand-accent px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-brand-text hover:bg-brand-surface-alt hover:text-brand-primary transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <Link
            href="/devis-auto"
            className="hidden md:inline-flex rounded-lg bg-brand-primary px-5 py-2 text-sm font-semibold text-white hover:bg-brand-primary-light transition-colors"
          >
            Devis gratuit
          </Link>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
