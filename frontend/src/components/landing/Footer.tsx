export function Footer() {
  return (
    <footer className="border-t border-zinc-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <img src="/logo.svg" alt="OnChainUI" width={20} height={20} className="h-5 w-5" />
          <span>OnChainUI</span>
        </div>

        <p className="text-sm text-zinc-400">
          Open source. Build onchain with confidence.
        </p>
      </div>
    </footer>
  );
}
