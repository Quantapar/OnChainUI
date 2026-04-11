import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Copy } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  NetworkEthereum,
  NetworkArbitrumOne,
  TokenBTC,
  NetworkPolygon,
  NetworkBase,
  NetworkSolana,
} from "@web3icons/react";

const CHAINS = [
  { name: "Bitcoin", icon: TokenBTC },
  { name: "Solana", icon: NetworkSolana },
  { name: "Ethereum", icon: NetworkEthereum },
  { name: "Base", icon: NetworkBase },
  { name: "Polygon", icon: NetworkPolygon },
  { name: "Arbitrum", icon: NetworkArbitrumOne },
];

const EASE = [0.23, 1, 0.32, 1] as const;

const PACKAGE_MANAGERS = [
  { id: "npm", command: "npm install onchain-ui" },
  { id: "pnpm", command: "pnpm add onchain-ui" },
  { id: "bun", command: "bun add onchain-ui" },
  { id: "yarn", command: "yarn add onchain-ui" },
] as const;

type PackageManagerId = (typeof PACKAGE_MANAGERS)[number]["id"];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [isCopied, setIsCopied] = useState(false);
  const [activePm, setActivePm] = useState<PackageManagerId>("npm");
  const marqueeRef = useRef<HTMLDivElement>(null);

  const activeCommand =
    PACKAGE_MANAGERS.find((pm) => pm.id === activePm)?.command ??
    PACKAGE_MANAGERS[0].command;

  useEffect(() => {
    if (!isCopied) return;

    const timeoutId = window.setTimeout(() => {
      setIsCopied(false);
    }, 1800);

    return () => window.clearTimeout(timeoutId);
  }, [isCopied]);

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, transform: "translateY(20px)" },
          animate: { opacity: 1, transform: "translateY(0px)" },
          transition: { duration: 0.6, delay, ease: EASE },
        };

  const handleCopyInstallCommand = async () => {
    try {
      await navigator.clipboard.writeText(activeCommand);
      setIsCopied(true);
    } catch (error) {
      console.error("Failed to copy install command", error);
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center md:py-36">
      <motion.div {...fadeUp(0.05)}>
        <span className="inline-block rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
          Web3 Component Library
        </span>
      </motion.div>

      <motion.h1
        className="mx-auto mt-6 max-w-3xl font-display tracking-tight"
        {...fadeUp(0.15)}
      >
        <span className="block whitespace-nowrap text-5xl font-medium text-zinc-900 md:text-7xl dark:text-zinc-50">
          Beautiful components
        </span>
        <span className="mt-1 block whitespace-nowrap text-3xl font-normal text-zinc-500 md:mt-2 md:text-6xl dark:text-zinc-400">
          <span className="italic text-brand">for</span>{" "}
          <span className="text-zinc-900 dark:text-zinc-50">onchain apps</span>
        </span>
      </motion.h1>

      <motion.p
        className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-600 md:text-lg dark:text-zinc-400"
        {...fadeUp(0.3)}
      >
        Production-ready React components for wallets, tokens, chains, and
        transactions. Copy, paste, and ship.
      </motion.p>

      <motion.div
        className="mt-10 flex items-center justify-center gap-4"
        {...fadeUp(0.4)}
      >
        <a
          href="/docs"
          className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-[transform] duration-150 ease-out active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 dark:bg-zinc-100 dark:text-zinc-900 dark:focus-visible:ring-zinc-100"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#components"
          className="cursor-pointer rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 transition-[color,background-color] duration-150 ease-out hover:bg-zinc-50 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-100"
        >
          Browse Components
        </a>
      </motion.div>

      <motion.div
        className="mx-auto mt-12 inline-flex flex-col items-center gap-2"
        {...fadeUp(0.5)}
      >
        <div
          role="tablist"
          aria-label="Package manager"
          className="flex items-center gap-1 rounded-full border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-900"
        >
          {PACKAGE_MANAGERS.map((pm) => {
            const isActive = pm.id === activePm;
            return (
              <button
                key={pm.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActivePm(pm.id)}
                className={`relative cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-colors duration-150 ${
                  isActive
                    ? "text-white dark:text-zinc-900"
                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="pm-tab-indicator"
                    className="absolute inset-0 rounded-full bg-zinc-900 dark:bg-zinc-100"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{pm.id}</span>
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={handleCopyInstallCommand}
          className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-zinc-200 bg-white py-2 pl-5 pr-2 transition-[background-color,border-color] duration-150 ease-out hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-100"
          aria-label={
            isCopied ? "Install command copied" : "Copy install command"
          }
        >
          <code className="inline-block w-48 text-center font-mono text-sm text-zinc-600 dark:text-zinc-400">
            {activeCommand.split(" ").map((part, i, arr) => {
              const isLast = i === arr.length - 1;
              return (
                <span
                  key={`${part}-${i}`}
                  className={isLast ? "text-zinc-900 dark:text-zinc-100" : ""}
                >
                  {part}
                  {i < arr.length - 1 ? " " : ""}
                </span>
              );
            })}
          </code>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 transition-[border-color,color] duration-150 ease-out group-hover:border-zinc-300 group-hover:text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:group-hover:border-zinc-700 dark:group-hover:text-zinc-200">
            <AnimatePresence mode="wait" initial={false}>
              {isCopied ? (
                <motion.span
                  key="check"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Check className="h-3.5 w-3.5 text-brand" />
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Copy className="h-3.5 w-3.5" />
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </button>
      </motion.div>

      <motion.div
        className="relative mx-auto mt-24 max-w-6xl overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
        }}
        role="region"
        aria-label="Supported blockchain networks"
        {...fadeUp(0.6)}
      >
        <div ref={marqueeRef} className="marquee-track flex w-max">
          {[...Array(4)].map((_, setIndex) =>
            CHAINS.map((chain) => (
              <div
                key={`${setIndex}-${chain.name}`}
                className="flex shrink-0 items-center gap-4 px-8"
              >
                <chain.icon variant="branded" size={56} />
                <span className="text-2xl font-medium text-zinc-500 dark:text-zinc-400">
                  {chain.name}
                </span>
              </div>
            )),
          )}
        </div>
      </motion.div>
    </section>
  );
}
