import { useRef } from "react";
import { ArrowRight } from "lucide-react";
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

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const marqueeRef = useRef<HTMLDivElement>(null);

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, transform: "translateY(20px)" },
          animate: { opacity: 1, transform: "translateY(0px)" },
          transition: { duration: 0.6, delay, ease: EASE },
        };

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-24 md:py-36">
      <motion.div {...fadeUp(0.05)}>
        <span className="inline-block rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
          Web3 Component Library
        </span>
      </motion.div>

      <motion.h1
        className="mx-auto mt-6 max-w-3xl font-display tracking-tight"
        {...fadeUp(0.15)}
      >
        <span className="block text-4xl font-medium text-zinc-900 sm:whitespace-nowrap sm:text-5xl md:text-7xl dark:text-zinc-50">
          Beautiful components
        </span>
        <span className="mt-1 block text-2xl font-normal text-zinc-500 sm:whitespace-nowrap sm:text-3xl md:mt-2 md:text-6xl dark:text-zinc-400">
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
        className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
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
        className="relative mx-auto mt-40 max-w-6xl overflow-hidden"
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
