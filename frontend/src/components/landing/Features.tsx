import { Blocks, Paintbrush, Wallet, Zap } from "lucide-react";
import { ScrollReveal } from "../ScrollReveal";

const FEATURES = [
  {
    icon: Wallet,
    title: "Wallet-Ready",
    description:
      "Connect buttons, address displays, and balance cards that work with any wallet provider.",
  },
  {
    icon: Blocks,
    title: "Chain Agnostic",
    description:
      "Components that work across Ethereum, Solana, Base, and any EVM-compatible chain.",
  },
  {
    icon: Paintbrush,
    title: "Fully Customizable",
    description:
      "Built with Tailwind CSS. Override styles, extend themes, or use as-is with great defaults.",
  },
  {
    icon: Zap,
    title: "Lightweight",
    description:
      "No heavy dependencies. Tree-shakeable exports so you only ship what you use.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative border-t border-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-24">
<ScrollReveal className="mx-auto w-full text-center">
          <h2 className="mx-auto text-3xl font-normal tracking-tight text-zinc-900 md:text-4xl">
            Built for web3 developers
          </h2>
          <p className="mx-auto mt-3 text-zinc-500">
            Everything you need to build polished onchain interfaces.
          </p>
        </ScrollReveal>

<div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1} distance={30}>
              <div className="rounded-xl border border-zinc-200 bg-white p-6 transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100">
                  <feature.icon className="h-5 w-5 text-zinc-700" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-semibold text-zinc-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
