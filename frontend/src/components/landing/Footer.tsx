const RESOURCE_LINKS = [
  { label: "Components", href: "#components" },
  { label: "Documentation", href: "#docs" },
  { label: "Templates", href: "#templates" },
];

const COMMUNITY_LINKS = [
  { label: "GitHub", href: "https://github.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Discord", href: "https://discord.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="OnChainUI" width={24} height={24} className="h-6 w-6 dark:invert" />
              <span className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                OnChainUI
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Beautiful React components for onchain apps. Open source and free to use.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-zinc-500 dark:text-zinc-400">
              Resources
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="cursor-pointer text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-zinc-500 dark:text-zinc-400">
              Community
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {COMMUNITY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-zinc-100 pt-6 sm:flex-row sm:items-center dark:border-zinc-900">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} OnChainUI. Open source. Build onchain with confidence.
          </p>
          <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
            MIT License
          </p>
        </div>
      </div>
    </footer>
  );
}
