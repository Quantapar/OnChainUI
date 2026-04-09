import { Blocks, Paintbrush, Wallet, Zap } from "lucide-react";
import { ScrollReveal } from "../ScrollReveal";

const FEATURES = [
  {
    icon: Wallet,
    title: "Plays nice with wallets",
    description:
      "Drop-in pieces for connecting, showing addresses, and reading balances. No wrestling with wallet SDKs.",
  },
  {
    icon: Blocks,
    title: "Any chain you ship on",
    description:
      "Works the same on Ethereum, Base, Solana, or whatever EVM chain you ended up choosing.",
  },
  {
    icon: Paintbrush,
    title: "Yours to restyle",
    description:
      "Just Tailwind under the hood. Tweak a class, swap a color, or leave it alone. It already looks good.",
  },
  {
    icon: Zap,
    title: "Barely there",
    description:
      "Zero bloated dependencies. Import only the components you use and ship a smaller bundle.",
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

<div className="mt-16 grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1} distance={30} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-zinc-300 hover:shadow-lg">
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
