import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";

export function ComingSoonPage({ title }: { title: string }) {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex cursor-pointer items-center gap-1.5">
          <img src="/logo.svg" alt="OnChainUI" width={28} height={28} className="h-7 w-7 dark:invert" />
          <span className="text-[15px] font-semibold text-zinc-900 dark:text-zinc-100">
            OnChainUI
          </span>
        </Link>
        <ThemeToggle />
      </nav>

      <div className="flex flex-1 flex-col items-center justify-center px-6 pb-24">
        <div className="relative flex flex-col items-center">
          <span className="mb-6 inline-block rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-zinc-500 dark:border-[#1e1e22] dark:bg-[#111113] dark:text-zinc-400">
            Coming soon
          </span>

          <h1 className="font-display text-center text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-100">
            {title}
          </h1>

          <p className="mt-4 max-w-md text-center text-lg text-zinc-500 dark:text-zinc-400">
            We're building something great. Stay tuned.
          </p>

          <Link
            to="/"
            className="mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-transform duration-150 ease-out hover:bg-zinc-800 active:scale-[0.97] dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
