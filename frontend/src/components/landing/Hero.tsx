import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Copy } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.23, 1, 0.32, 1] as const;

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  delay = 0,
  duration = 1200,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      started.current = true;
      const start = performance.now();

      function tick(now: number) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * value));

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      }

      requestAnimationFrame(tick);
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [value, delay, duration]);

  return (
    <>
      {prefix}
      {display}
      {suffix}
    </>
  );
}

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
          className="cursor-pointer rounded-full border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-[color,background-color] duration-150 ease-out hover:bg-zinc-50 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
        >
          Browse Components
        </a>
      </motion.div>

      <motion.div className="mx-auto mt-12 inline-flex" {...fadeUp(0.5)}>
        <button
          type="button"
          onClick={handleCopyInstallCommand}
          className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-zinc-200 bg-zinc-50 py-2 pl-5 pr-2 transition-[background-color,border-color] duration-150 ease-out hover:border-zinc-300 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
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
        className="mx-auto mt-16 flex max-w-lg items-center justify-center gap-6"
        {...fadeUp(0.6)}
      >
        <div className="w-28 text-center">
          <p className="tabular-nums text-3xl font-bold text-zinc-900">
            <AnimatedNumber value={30} suffix="+" delay={700} />
          </p>
          <p className="mt-1 text-sm text-zinc-500">Components</p>
        </div>
        <div className="h-10 w-px bg-zinc-200" />
        <div className="w-28 text-center">
          <p className="tabular-nums text-3xl font-bold text-zinc-900">
            <AnimatedNumber value={8} suffix="+" delay={850} />
          </p>
          <p className="mt-1 text-sm text-zinc-500">Categories</p>
        </div>
        <div className="h-10 w-px bg-zinc-200" />
        <div className="w-28 text-center">
          <p className="tabular-nums text-3xl font-bold text-zinc-900">
            <AnimatedNumber value={100} suffix="%" delay={1000} />
          </p>
          <p className="mt-1 text-sm text-zinc-500">TypeScript</p>
        </div>
      </motion.div>
    </section>
  );
}
