import { Link } from "react-router";
import { ScrollReveal } from "../ScrollReveal";
import { COMPONENTS } from "../../data/components";

const BENTO_LAYOUT = [
  { slug: "connect-wallet", colSpan: "lg:col-span-2", rowSpan: "lg:row-span-2" },
  { slug: "token-balance", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
  { slug: "chain-selector", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
  { slug: "address-display", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
  { slug: "transaction-feed", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-2" },
  { slug: "network-status", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
];

function ConnectWalletPreview() {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-linear-to-br from-violet-400 to-indigo-500" />
        <div>
          <p className="text-sm font-medium text-zinc-900">Connected</p>
          <p className="font-mono text-xs text-zinc-500">0x1a2b…9f3e</p>
        </div>
      </div>
      <button className="cursor-pointer rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white">
        Connect Wallet
      </button>
    </div>
  );
}

function TokenBalancePreview() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
        ETH
      </div>
      <div>
        <p className="text-sm font-medium text-zinc-900">1.2345 ETH</p>
        <p className="text-xs text-zinc-500">$4,321.00</p>
      </div>
    </div>
  );
}

function ChainSelectorPreview() {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2">
      <div className="h-5 w-5 rounded-full bg-blue-500" />
      <span className="text-sm font-medium text-zinc-700">Ethereum</span>
      <svg className="ml-1 h-4 w-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}

function AddressDisplayPreview() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-8 w-8 rounded-full bg-linear-to-br from-zinc-300 to-zinc-500" />
      <div>
        <p className="font-mono text-sm font-medium text-zinc-900">0x1a2b…9f3e</p>
        <p className="text-xs text-zinc-500">vitalik.eth</p>
      </div>
    </div>
  );
}

function TransactionFeedPreview() {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-50">
            <svg className="h-3.5 w-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-medium text-zinc-900">Sent ETH</p>
            <p className="text-[11px] text-zinc-500">0x8f3a…c2d1</p>
          </div>
        </div>
        <p className="text-xs font-medium tabular-nums text-zinc-900">-0.5 ETH</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50">
            <svg className="h-3.5 w-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-medium text-zinc-900">Received USDC</p>
            <p className="text-[11px] text-zinc-500">0x4b7e…a9f3</p>
          </div>
        </div>
        <p className="text-xs font-medium tabular-nums text-green-600">+250 USDC</p>
      </div>
    </div>
  );
}

function NetworkStatusPreview() {
  return (
    <div className="flex items-center gap-4">
      <span className="flex items-center gap-1.5 text-xs text-green-600">
        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
        Healthy
      </span>
      <span className="text-xs tabular-nums text-zinc-500">12 gwei</span>
      <span className="text-xs tabular-nums text-zinc-500">#19,234,567</span>
    </div>
  );
}

const PREVIEW_MAP: Record<string, React.ReactNode> = {
  "connect-wallet": <ConnectWalletPreview />,
  "token-balance": <TokenBalancePreview />,
  "chain-selector": <ChainSelectorPreview />,
  "address-display": <AddressDisplayPreview />,
  "transaction-feed": <TransactionFeedPreview />,
  "network-status": <NetworkStatusPreview />,
};

export function ComponentPreview() {
  return (
    <section id="components" className="border-t border-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <ScrollReveal className="mx-auto w-full text-center">
          <h2 className="mx-auto text-3xl font-normal tracking-tight text-zinc-900 md:text-4xl">
            Component Preview
          </h2>
          <p className="mx-auto mt-3 text-zinc-500">
            A taste of what&#8217;s inside. Copy the code and start building.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[180px]">
          {BENTO_LAYOUT.map((item, i) => {
            const component = COMPONENTS.find((c) => c.slug === item.slug);
            if (!component) return null;

            return (
              <ScrollReveal key={item.slug} delay={i * 0.08} distance={24}>
                <Link
                  to={`/components/${item.slug}`}
                  className={`group flex h-full flex-col rounded-xl border border-zinc-200 bg-white transition-[transform,box-shadow,border-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 ${item.colSpan} ${item.rowSpan}`}
                >
                  <div className="flex flex-1 items-center justify-center rounded-t-xl bg-zinc-50/50 p-6">
                    {PREVIEW_MAP[item.slug]}
                  </div>
                  <div className="border-t border-zinc-100 px-4 py-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-mono text-sm font-semibold text-zinc-900">
                        {"<"}{component.name}{" />"}
                      </h3>
                      <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-500">
                        {component.category}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-zinc-500 line-clamp-1">
                      {component.description}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-8 text-center">
            <Link
              to="/components"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 transition-[color,background-color,border-color] duration-150 ease-out hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900"
            >
              View all components
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
