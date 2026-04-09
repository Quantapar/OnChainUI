import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Docs", href: "#docs" },
  { label: "Templates", href: "#templates" },
  { label: "Components", href: "#components" },
];

export function FloatingNav({ navbarRef }: { navbarRef: React.RefObject<HTMLElement | null> }) {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(navbar);
    return () => observer.disconnect();
  }, [navbarRef]);

  return (
    <nav
      ref={containerRef}
      aria-label="Quick navigation"
      className="fixed left-[max(1.5rem,calc((100vw-1200px)/2-8rem))] top-4 z-50 hidden lg:block"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-8px)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 200ms cubic-bezier(0.23, 1, 0.32, 1), transform 200ms cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    >
      <a href="/" className="mb-8 block cursor-pointer">
        <img src="/logo.svg" alt="OnChainUI" width={28} height={28} className="h-7 w-7" />
      </a>
      <div className="flex flex-col gap-1">
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className="cursor-pointer py-1.5 text-[13px] font-semibold text-zinc-500 transition-colors hover:text-zinc-900"
            style={{
              transitionDuration: "150ms",
              transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
              transitionDelay: visible ? `${i * 40}ms` : "0ms",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-6px)",
              transitionProperty: "opacity, transform, color",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
