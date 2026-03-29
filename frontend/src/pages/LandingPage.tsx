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
    <div className="min-h-screen w-full bg-white text-gray-800 relative">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0"
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
              repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(75, 85, 99, 0.06) 2px, rgba(75, 85, 99, 0.06) 3px, transparent 3px, transparent 8px),
              repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(107, 114, 128, 0.05) 2px, rgba(107, 114, 128, 0.05) 3px, transparent 3px, transparent 8px),
              repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(55, 65, 81, 0.04) 2px, rgba(55, 65, 81, 0.04) 3px, transparent 3px, transparent 8px),
              repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(31, 41, 55, 0.03) 2px, rgba(31, 41, 55, 0.03) 3px, transparent 3px, transparent 8px)
            `,
          }}
        />
      </div>

      <FloatingNav navbarRef={navbarRef} />

      <div className="relative z-10">
        <Navbar ref={navbarRef} />
        <Hero />
        <ComponentPreview />
        <HowItWorks />
        <Features />
        <Footer />
      </div>
    </div>
  );
}
