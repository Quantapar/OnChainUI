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
    if (!isCopied) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsCopied(false);
    }, 1800);

    return () => window.clearTimeout(timeoutId);
  }, [isCopied]);

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, transform: "translateY(12px)" },
          animate: { opacity: 1, transform: "translateY(0px)" },
          transition: { duration: 0.5, delay, ease: EASE },
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
<motion.div {...fadeUp(0)}>
        <span className="inline-block rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-medium text-zinc-600">
          Web3 Component Library
        </span>
      </motion.div>

<motion.h1
        className="mx-auto mt-6 max-w-3xl font-display tracking-tight"
        {...fadeUp(0.1)}
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
        {...fadeUp(0.2)}
      >
        Production-ready React components for wallets, tokens, chains, and
        transactions. Copy, paste, and ship.
      </motion.p>

<motion.div
        className="mt-10 flex items-center justify-center gap-4"
        {...fadeUp(0.3)}
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

<motion.div className="mx-auto mt-12 max-w-md" {...fadeUp(0.4)}>
        <div className="relative flex items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2.5">
          <code className="text-center text-sm text-zinc-600">
            npm install <span className="text-zinc-900">onchain-ui</span>
          </code>
          <button
            type="button"
            onClick={handleCopyInstallCommand}
            className="absolute right-2 inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-[color,background-color,border-color,transform] duration-150 ease-out hover:border-zinc-300 hover:bg-zinc-100 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
            aria-label={
              isCopied ? "Install command copied" : "Copy install command"
            }
          >
            {isCopied ? (
              <Check className="h-3.5 w-3.5" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      </motion.div>

<motion.div
        className="mx-auto mt-16 flex max-w-lg items-center justify-center gap-12"
        {...fadeUp(0.5)}
      >
        <div>
          <p className="tabular-nums text-3xl font-bold text-zinc-900">
            <AnimatedNumber value={30} suffix="+" delay={500} />
          </p>
          <p className="mt-1 text-sm text-zinc-500">Components</p>
        </div>
        <div className="h-10 w-px bg-zinc-200" />
        <div>
          <p className="tabular-nums text-3xl font-bold text-zinc-900">
            <AnimatedNumber value={8} suffix="+" delay={650} />
          </p>
          <p className="mt-1 text-sm text-zinc-500">Categories</p>
        </div>
        <div className="h-10 w-px bg-zinc-200" />
        <div>
          <p className="tabular-nums text-3xl font-bold text-zinc-900">
            &lt;<AnimatedNumber value={5} suffix="kb" delay={800} />
          </p>
          <p className="mt-1 text-sm text-zinc-500">Avg Bundle Size</p>
        </div>
      </motion.div>
    </section>
  );
}
