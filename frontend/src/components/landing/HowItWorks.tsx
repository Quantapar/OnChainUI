import { ScrollReveal } from "../ScrollReveal";

const STEPS = [
  {
    step: "1",
    title: "Install",
    code: "npm install onchain-ui",
  },
  {
    step: "2",
    title: "Import",
    code: "import { ConnectWallet } from 'onchain-ui'",
  },
  {
    step: "3",
    title: "Ship",
    code: "<ConnectWallet />",
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-zinc-100">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl font-normal tracking-tight text-zinc-900 md:text-4xl">
            Three lines to production
          </h2>
          <p className="mx-auto mt-3 text-zinc-500">
            No config. No boilerplate. Just components.
          </p>
        </ScrollReveal>

        <div className="mt-12 flex flex-col gap-4">
          {STEPS.map((item, i) => (
            <ScrollReveal key={item.step} delay={i * 0.12} distance={20}>
              <div className="flex items-center gap-5 rounded-2xl border border-zinc-200 bg-white px-6 py-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm font-medium text-white">
                  {item.step}
                </span>
                <span className="shrink-0 text-sm font-semibold text-zinc-900">
                  {item.title}
                </span>
                <code className="ml-auto whitespace-nowrap font-mono text-sm text-zinc-500">
                  {item.code}
                </code>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
