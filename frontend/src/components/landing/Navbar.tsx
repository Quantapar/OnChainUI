import { ExternalLink, Menu, X } from "lucide-react";
import { forwardRef, useState } from "react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Components", href: "#components" },
  { label: "Docs", href: "#docs" },
  { label: "Templates", href: "#templates" },
];

export const Navbar = forwardRef<HTMLElement>(function Navbar(_props, ref) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav ref={ref}>
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex cursor-pointer items-center gap-1.5">
          <img src="/logo.svg" alt="OnChainUI" width={28} height={28} className="h-7 w-7" />
          <span className="text-[15px] font-semibold text-zinc-900">
            OnChainUI
          </span>
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="cursor-pointer text-[13px] font-medium uppercase tracking-wide text-zinc-500 transition-[color] duration-150 ease-out hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-[14px] text-zinc-700 transition-[color,background-color,border-color] duration-150 ease-out hover:bg-zinc-50 hover:border-zinc-300 hover:text-zinc-900 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
            <ExternalLink className="h-3 w-3 text-zinc-400" aria-hidden="true" />
            <span className="sr-only">(opens in new tab)</span>
          </a>
          <a
            href="#get-started"
            className="cursor-pointer rounded-full bg-zinc-900 px-5 py-2 text-[14px] font-medium text-white transition-transform duration-150 ease-out hover:bg-zinc-800 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
          >
            Get Started
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="cursor-pointer text-zinc-600 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 rounded-sm"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="px-8 pb-6 md:hidden"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="cursor-pointer rounded-lg px-3 py-2.5 text-[15px] text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-zinc-200 px-4 py-2.5 text-[14px] text-zinc-700"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
                <ExternalLink className="h-3 w-3 text-zinc-400" aria-hidden="true" />
                <span className="sr-only">(opens in new tab)</span>
              </a>
              <a
                href="#get-started"
                className="cursor-pointer rounded-full bg-zinc-900 px-5 py-2.5 text-center text-[14px] font-medium text-white transition-transform duration-150 ease-out active:scale-[0.97]"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
});
