import { ScrollReveal } from "../ScrollReveal";

const COMPONENTS = [
  {
    name: "ConnectWallet",
    description: "One-click wallet connection with multi-provider support.",
    preview: (
      <button className="cursor-pointer rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-transform duration-150 ease-out active:scale-[0.97]">
        Connect Wallet
      </button>
    ),
  },
  {
    name: "AddressDisplay",
    description: "Truncated address with copy-to-clipboard and ENS resolution.",
    preview: (
      <div className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2">
        <div className="h-6 w-6 rounded-full bg-linear-to-br from-zinc-300 to-zinc-500" />
        <span className="font-mono text-sm text-zinc-700">0x1a2b…9f3e</span>
      </div>
    ),
  },
  {
    name: "TokenBalance",
    description: "Real-time token balance with icon, symbol, and USD value.",
    preview: (
      <div className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
          ETH
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-900">1.2345 ETH</p>
          <p className="text-xs text-zinc-400">$4,321.00</p>
        </div>
      </div>
    ),
  },
  {
    name: "ChainSelector",
    description: "Dropdown to switch between supported chains.",
    preview: (
      <div className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2">
        <div className="h-5 w-5 rounded-full bg-blue-500" />
        <span className="text-sm font-medium text-zinc-700">Ethereum</span>
        <svg className="ml-1 h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    ),
  },
];

export function ComponentPreview() {
  return (
    <section id="components" className="border-t border-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-24">
<ScrollReveal className="mx-auto w-full text-center">
          <h2 className="mx-auto text-2xl font-normal tracking-tight text-zinc-900 md:text-3xl">
            Component Preview
          </h2>
          <p className="mx-auto mt-3 text-zinc-500">
            A taste of what&#8217;s inside. Copy the code and start building.
          </p>
        </ScrollReveal>

<div className="mt-16 grid gap-6 sm:grid-cols-2">
          {COMPONENTS.map((component, i) => (
            <ScrollReveal
              key={component.name}
              delay={i * 0.12}
              direction={i % 2 === 0 ? "left" : "right"}
              distance={30}
            >
              <div className="rounded-xl border border-zinc-200 bg-white transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:shadow-md">
<div className="flex min-h-35 items-center justify-center border-b border-zinc-100 bg-zinc-50/50 p-8">
                  {component.preview}
                </div>

<div className="p-5">
                  <h3 className="font-mono text-sm font-semibold text-zinc-900">
                    {"<"}{component.name}{" />"}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    {component.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
