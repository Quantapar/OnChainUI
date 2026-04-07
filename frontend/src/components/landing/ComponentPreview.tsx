import { useState } from "react";
import { Link } from "react-router";
import { ScrollReveal } from "../ScrollReveal";
import { COMPONENTS } from "../../data/components";
import {
  ArrowUpRight,
  ArrowDownLeft,
  ChevronDown,
  Copy,
  Check,
  Wallet,
} from "lucide-react";
import {
  NetworkEthereum,
  NetworkBase,
  NetworkPolygon,
  NetworkArbitrumOne,
  TokenETH,
  TokenUSDC,
} from "@web3icons/react";

const BENTO_LAYOUT = [
  { slug: "connect-wallet", colSpan: "lg:col-span-2", rowSpan: "lg:row-span-2" },
  { slug: "token-balance", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
  { slug: "chain-selector", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
  { slug: "address-display", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
  { slug: "transaction-feed", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
  { slug: "network-status", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
];

function ConnectWalletPreview() {
  const [connected, setConnected] = useState(false);

  if (connected) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-4 py-2.5 shadow-sm">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-400 via-fuchsia-300 to-indigo-500" />
          <div className="text-left">
            <p className="text-sm font-medium text-zinc-900">vitalik.eth</p>
            <p className="font-mono text-[11px] text-zinc-400">0x1a2b…9f3e</p>
          </div>
          <span className="ml-1 h-2 w-2 rounded-full bg-green-400" />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setConnected(false);
          }}
          className="cursor-pointer text-xs text-zinc-400 transition-colors hover:text-zinc-600"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="MetaMask" className="h-6 w-6" />
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm">
          <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none">
            <rect width="32" height="32" rx="8" fill="#3B99FC" />
            <path d="M10.5 12.5c3-3 8-3 11 0l.4.3a.4.4 0 010 .5l-1.2 1.2a.2.2 0 01-.3 0l-.5-.5a5.5 5.5 0 00-7.7 0l-.5.5a.2.2 0 01-.3 0l-1.2-1.2a.4.4 0 010-.5l.3-.3zm13.6 2.5l1 1a.4.4 0 010 .5l-4.7 4.7a.4.4 0 01-.5 0l-3.3-3.3a.1.1 0 00-.2 0l-3.3 3.3a.4.4 0 01-.5 0l-4.7-4.7a.4.4 0 010-.5l1-1a.4.4 0 01.6 0l3.3 3.3a.1.1 0 00.1 0l3.3-3.3a.4.4 0 01.6 0l3.3 3.3a.1.1 0 00.1 0l3.3-3.3a.4.4 0 01.6 0z" fill="white"/>
          </svg>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm">
          <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none">
            <rect width="32" height="32" rx="8" fill="#0052FF" />
            <path d="M16 6a10 10 0 100 20 10 10 0 000-20zm0 3.5a6.5 6.5 0 110 13 6.5 6.5 0 010-13z" fill="white"/>
          </svg>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setConnected(true);
        }}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-transform duration-150 active:scale-[0.97]"
      >
        <Wallet className="h-4 w-4" />
        Connect Wallet
      </button>
    </div>
  );
}

function TokenBalancePreview() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <TokenETH variant="branded" size={32} />
        <div>
          <p className="text-sm font-semibold tabular-nums text-zinc-900">1.2345 ETH</p>
          <p className="text-xs tabular-nums text-zinc-400">$4,321.00</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <TokenUSDC variant="branded" size={32} />
        <div>
          <p className="text-sm font-semibold tabular-nums text-zinc-900">2,500.00 USDC</p>
          <p className="text-xs tabular-nums text-zinc-400">$2,500.00</p>
        </div>
      </div>
    </div>
  );
}

function ChainSelectorPreview() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const chains = [
    { name: "Ethereum", icon: NetworkEthereum },
    { name: "Base", icon: NetworkBase },
    { name: "Polygon", icon: NetworkPolygon },
    { name: "Arbitrum", icon: NetworkArbitrumOne },
  ];

  const current = chains[selected];

  return (
    <div className="relative w-44">
      <button
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
        className="flex w-full cursor-pointer items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 transition-colors hover:border-zinc-300"
      >
        <current.icon variant="branded" size={20} />
        <span className="flex-1 text-left text-sm font-medium text-zinc-700">{current.name}</span>
        <ChevronDown className={`h-4 w-4 text-zinc-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 z-10 mt-1.5 w-full rounded-xl border border-zinc-200 bg-white py-1 shadow-lg">
          {chains.map((chain, i) => (
            <button
              key={chain.name}
              onClick={(e) => {
                e.preventDefault();
                setSelected(i);
                setOpen(false);
              }}
              className={`flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-zinc-50 ${i === selected ? "text-zinc-900 font-medium" : "text-zinc-600"}`}
            >
              <chain.icon variant="branded" size={18} />
              {chain.name}
              {i === selected && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-green-400" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function AddressDisplayPreview() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3">
      <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-amber-300 via-rose-400 to-indigo-500" />
      <div className="min-w-0">
        <p className="text-sm font-medium text-zinc-900">vitalik.eth</p>
        <p className="truncate font-mono text-xs text-zinc-400">0x1a2b…9f3e</p>
      </div>
      <button
        onClick={handleCopy}
        className="ml-auto flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
}

function TransactionFeedPreview() {
  const transactions = [
    { type: "sent", label: "Sent ETH", to: "0x8f3a…c2d1", amount: "-0.5 ETH", color: "text-zinc-900" },
    { type: "received", label: "Received USDC", to: "0x4b7e…a9f3", amount: "+250 USDC", color: "text-green-600" },
  ];

  return (
    <div className="flex w-full flex-col gap-1">
      {transactions.map((tx) => (
        <div
          key={tx.label + tx.to}
          className="flex items-center justify-between rounded-lg px-2 py-2 transition-colors hover:bg-zinc-50"
        >
          <div className="flex items-center gap-2.5">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full ${tx.type === "sent" ? "bg-zinc-100" : "bg-green-50"}`}>
              {tx.type === "sent" ? (
                <ArrowUpRight className="h-4 w-4 text-zinc-600" />
              ) : (
                <ArrowDownLeft className="h-4 w-4 text-green-600" />
              )}
            </div>
            <div>
              <p className="text-xs font-medium text-zinc-900">{tx.label}</p>
              <p className="font-mono text-[11px] text-zinc-400">{tx.to}</p>
            </div>
          </div>
          <p className={`text-xs font-semibold tabular-nums ${tx.color}`}>{tx.amount}</p>
        </div>
      ))}
    </div>
  );
}

function NetworkStatusPreview() {
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-2">
        <NetworkEthereum variant="branded" size={20} />
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          <span className="text-xs font-medium text-green-600">Healthy</span>
        </div>
      </div>
      <div className="h-4 w-px bg-zinc-200" />
      <span className="text-xs tabular-nums text-zinc-500">12 gwei</span>
      <div className="h-4 w-px bg-zinc-200" />
      <span className="font-mono text-xs tabular-nums text-zinc-500">#19,234,567</span>
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
      <div className="mx-auto max-w-6xl px-6 py-12">
        <ScrollReveal className="mx-auto w-full text-center">
          <h2 className="mx-auto text-3xl font-normal tracking-tight text-zinc-900 md:text-4xl">
            Component Preview
          </h2>
          <p className="mx-auto mt-3 text-zinc-500">
            A taste of what&#8217;s inside. Copy the code and start building.
          </p>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[200px]">
          {BENTO_LAYOUT.map((item, i) => {
            const component = COMPONENTS.find((c) => c.slug === item.slug);
            if (!component) return null;

            return (
              <ScrollReveal key={item.slug} delay={i * 0.08} distance={24} className={`h-full ${item.colSpan} ${item.rowSpan}`}>
                <Link
                  to={`/components/${item.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg hover:border-zinc-300"
                >
                  <div className="flex min-h-0 flex-1 items-center justify-center rounded-t-xl bg-zinc-50/50 p-6">
                    {PREVIEW_MAP[item.slug]}
                  </div>
                  <div className="shrink-0 border-t border-zinc-100 px-4 py-3">
                    <h3 className="font-mono text-sm font-semibold text-zinc-900">
                      {component.name}
                    </h3>
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
