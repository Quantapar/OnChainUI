import { ScrollReveal } from "../ScrollReveal";

const LINES = [
  { prompt: "$", text: "npm install onchain-ui", tone: "command" },
  { prompt: ">", text: "import { ConnectWallet } from 'onchain-ui'", tone: "import" },
  { prompt: ">", text: "<ConnectWallet />", tone: "jsx" },
];

export function HowItWorks() {
  return (
    <section className="border-t border-zinc-100 dark:border-zinc-900">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24">
        <ScrollReveal className="text-center">
          <h2 className="text-4xl font-normal tracking-tight text-zinc-900 md:text-5xl dark:text-zinc-50">
            Three lines <span className="italic text-brand">to production</span>
          </h2>
          <p className="mx-auto mt-3 text-zinc-600 dark:text-zinc-400">
            No config. No boilerplate. Just components.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 shadow-[0_54px_55px_rgba(0,0,0,0.12),0_-12px_30px_rgba(0,0,0,0.08),0_4px_6px_rgba(0,0,0,0.06),0_12px_13px_rgba(0,0,0,0.04),0_-3px_5px_rgba(0,0,0,0.03)] dark:border-zinc-800 dark:shadow-[0_54px_55px_rgba(0,0,0,0.42),0_-12px_30px_rgba(0,0,0,0.36),0_4px_6px_rgba(0,0,0,0.20),0_12px_13px_rgba(0,0,0,0.10),0_-3px_5px_rgba(0,0,0,0.09)]">
            <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-zinc-700" />
              <span className="h-3 w-3 rounded-full bg-zinc-700" />
              <span className="h-3 w-3 rounded-full bg-zinc-700" />
              <span className="ml-2 font-mono text-[11px] text-zinc-500">
                ~/onchain-app
              </span>
            </div>
            <div className="overflow-x-auto px-4 py-5 font-mono text-xs leading-relaxed sm:px-6 sm:py-6 sm:text-sm">
              {LINES.map((line, i) => (
                <ScrollReveal key={line.text} delay={0.25 + i * 0.15} distance={8}>
                  <div className="flex items-start gap-3 whitespace-nowrap">
                    <span className="select-none text-brand">{line.prompt}</span>
                    <span
                      className={
                        line.tone === "command"
                          ? "text-zinc-100"
                          : line.tone === "import"
                            ? "text-zinc-300"
                            : "text-zinc-100"
                      }
                    >
                      {line.text}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
