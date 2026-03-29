import { ScrollReveal } from "../ScrollReveal";

const STEPS = [
  {
    step: "01",
    title: "Install",
    code: "npm install onchain-ui",
  },
  {
    step: "02",
    title: "Import",
    code: "import { ConnectWallet } from 'onchain-ui'",
  },
  {
    step: "03",
    title: "Ship",
    code: "<ConnectWallet />",
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl font-normal tracking-tight text-zinc-900 md:text-4xl">
            Three lines to production
          </h2>
          <p className="mx-auto mt-3 text-zinc-500">
            No config. No boilerplate. Just components.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {STEPS.map((item, i) => (
            <ScrollReveal key={item.step} delay={i * 0.15} distance={30}>
              <div className="group relative rounded-xl border border-zinc-200 bg-white p-6 transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:shadow-md">
                <span className="text-xs font-bold tracking-widest text-zinc-400">
                  {item.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                  {item.title}
                </h3>
                <div className="mt-4 overflow-hidden rounded-lg bg-zinc-950 px-4 py-3">
                  <code className="text-sm text-zinc-300">{item.code}</code>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
