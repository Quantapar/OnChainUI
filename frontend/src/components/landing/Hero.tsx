import { useEffect, useState } from "react";
import { ArrowRight, Check, Copy } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
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

const INSTALL_COMMAND = "npm install onchain-ui";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [isCopied, setIsCopied] = useState(false);

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
      await navigator.clipboard.writeText(INSTALL_COMMAND);
      setIsCopied(true);
    } catch (error) {
      console.error("Failed to copy install command", error);
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center md:py-36">
      <motion.div {...fadeUp(0.05)}>
        <span className="inline-block rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-medium text-zinc-600">
          Web3 Component Library
        </span>
      </motion.div>

      <motion.h1
        className="mx-auto mt-6 max-w-3xl font-display tracking-tight"
        {...fadeUp(0.15)}
      >
        <span className="block text-5xl font-medium text-zinc-900 md:text-7xl">
          Beautiful components
        </span>
        <span className="mt-1 block text-3xl font-normal text-zinc-400 md:mt-2 md:text-6xl">
          <span className="text-zinc-900">for</span> onchain apps
        </span>
      </motion.h1>

      <motion.p
        className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-500 md:text-lg"
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
          href="#get-started"
          className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-[transform] duration-150 ease-out active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#components"
          className="cursor-pointer rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 transition-[color,background-color] duration-150 ease-out hover:bg-zinc-50 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
        >
          Browse Components
        </a>
      </motion.div>

      <motion.div className="mx-auto mt-12 inline-flex" {...fadeUp(0.5)}>
        <button
          type="button"
          onClick={handleCopyInstallCommand}
          className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-zinc-200 bg-white py-2 pl-5 pr-2 transition-[background-color,border-color] duration-150 ease-out hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
          aria-label={
            isCopied ? "Install command copied" : "Copy install command"
          }
        >
          <code className="text-sm text-zinc-600">
            npm install <span className="text-zinc-900">onchain-ui</span>
          </code>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 transition-[border-color,color] duration-150 ease-out group-hover:border-zinc-300 group-hover:text-zinc-700">
            {isCopied ? (
              <Check className="h-3.5 w-3.5" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </span>
        </button>
      </motion.div>

      <motion.div
        className="relative mx-auto mt-16 max-w-6xl overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
        }}
        {...fadeUp(0.6)}
      >
        <div className="marquee-track flex w-max">
          {[...Array(4)].map((_, setIndex) =>
            CHAINS.map((chain) => (
              <div key={`${setIndex}-${chain.name}`} className="flex shrink-0 items-center gap-3 px-6">
                <chain.icon variant="branded" size={48} />
                <span className="text-xl font-medium text-zinc-400">{chain.name}</span>
              </div>
            ))
          )}
        </div>
      </motion.div>
    </section>
  );
}
