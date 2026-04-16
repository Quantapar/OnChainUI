import { ScrollReveal } from "../ScrollReveal";

const FEATURES = [
  {
    number: "01",
    title: "Wallet-native",
    description:
      "Connect buttons, address displays, balance cards — pieces that just work with any wallet provider. No SDK wrestling.",
  },
  {
    number: "02",
    title: "Chain-agnostic",
    description:
      "Same components, every chain. Ethereum, Base, Solana, Polygon, Arbitrum — ship once, works everywhere.",
  },
  {
    number: "03",
    title: "Your styles, not ours",
    description:
      "Tailwind under the hood. Tweak a class, swap a color, or leave it alone. No fighting a design system you didn't choose.",
  },
  {
    number: "04",
    title: "Nothing extra",
    description:
      "Zero bloated dependencies. Tree-shakeable, so you only ship the components you actually use.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative border-t border-zinc-100 dark:border-zinc-900">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <ScrollReveal className="mx-auto w-full text-center">
          <h2 className="mx-auto text-4xl font-normal tracking-tight text-zinc-900 md:text-5xl dark:text-zinc-50">
            Built <span className="italic text-brand">for</span> web3 developers
          </h2>
          <p className="mx-auto mt-3 text-zinc-600 dark:text-zinc-400">
            Everything you need to build polished onchain interfaces.
          </p>
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-4xl gap-px overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-200/80 sm:grid-cols-2 dark:border-[#1e1e22] dark:bg-[#1e1e22]">
          {FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.number} delay={i * 0.08} distance={20}>
              <div className="flex h-full flex-col bg-white p-6 sm:p-8 dark:bg-[#111113]">
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                  {feature.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
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
