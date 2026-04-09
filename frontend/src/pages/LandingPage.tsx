import { useRef } from "react";
import { Navbar } from "../components/landing/Navbar";
import { Hero } from "../components/landing/Hero";
import { ComponentPreview } from "../components/landing/ComponentPreview";
import { HowItWorks } from "../components/landing/HowItWorks";
import { Features } from "../components/landing/Features";
import { Footer } from "../components/landing/Footer";
import { FloatingNav } from "../components/landing/FloatingNav";

export function LandingPage() {
  const navbarRef = useRef<HTMLElement>(null);

  return (
    <div className="min-h-screen w-full bg-white text-zinc-900 relative dark:bg-zinc-950 dark:text-zinc-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-zinc-900 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 dark:focus:bg-zinc-100 dark:focus:text-zinc-900 dark:focus:ring-zinc-100"
      >
        Skip to content
      </a>

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 dark:opacity-40"
        style={{
          height: "clamp(800px, 110vh, 1200px)",
          maskImage: "linear-gradient(to bottom, black 60%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(120, 120, 120, 0.06) 2px, rgba(120, 120, 120, 0.06) 3px, transparent 3px, transparent 8px),
              repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(120, 120, 120, 0.05) 2px, rgba(120, 120, 120, 0.05) 3px, transparent 3px, transparent 8px),
              repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(120, 120, 120, 0.04) 2px, rgba(120, 120, 120, 0.04) 3px, transparent 3px, transparent 8px),
              repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(120, 120, 120, 0.03) 2px, rgba(120, 120, 120, 0.03) 3px, transparent 3px, transparent 8px)
            `,
          }}
        />
      </div>

      <FloatingNav navbarRef={navbarRef} />

      <div className="relative z-10">
        <Navbar ref={navbarRef} />
        <main id="main-content">
          <Hero />
          <ComponentPreview />
          <HowItWorks />
          <Features />
        </main>
        <Footer />
      </div>
    </div>
  );
}
