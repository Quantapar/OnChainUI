import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router";
import { ScrollReveal } from "../ScrollReveal";
import { COMPONENTS } from "../../data/components";
import {
  ArrowUpRight,
  ArrowDownLeft,
  ArrowLeftRight,
  ChevronDown,
  FileSearch,
  Globe,
  Send,
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
  { slug: "wallet-card", colSpan: "lg:col-span-2", rowSpan: "lg:row-span-2" },
  { slug: "token-balance", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
  { slug: "chain-selector", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
  { slug: "connect-wallet", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
  { slug: "transaction-feed", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
  { slug: "dapp-toolbar", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
];

function ConnectWalletPreview() {
  const [connected, setConnected] = useState(false);

  if (connected) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-4 py-2.5 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-400 via-fuchsia-300 to-indigo-500" />
          <div className="text-left">
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">vitalik.eth</p>
            <p className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">0x1a2b…9f3e</p>
          </div>
          <span className="ml-1 h-2 w-2 rounded-full bg-green-400" />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setConnected(false);
          }}
          className="cursor-pointer rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-200"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="MetaMask" className="h-6 w-6" />
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
          <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none">
            <rect width="32" height="32" rx="8" fill="#3B99FC" />
            <path d="M10.5 12.5c3-3 8-3 11 0l.4.3a.4.4 0 010 .5l-1.2 1.2a.2.2 0 01-.3 0l-.5-.5a5.5 5.5 0 00-7.7 0l-.5.5a.2.2 0 01-.3 0l-1.2-1.2a.4.4 0 010-.5l.3-.3zm13.6 2.5l1 1a.4.4 0 010 .5l-4.7 4.7a.4.4 0 01-.5 0l-3.3-3.3a.1.1 0 00-.2 0l-3.3 3.3a.4.4 0 01-.5 0l-4.7-4.7a.4.4 0 010-.5l1-1a.4.4 0 01.6 0l3.3 3.3a.1.1 0 00.1 0l3.3-3.3a.4.4 0 01.6 0l3.3 3.3a.1.1 0 00.1 0l3.3-3.3a.4.4 0 01.6 0z" fill="white"/>
          </svg>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
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
        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-transform duration-150 active:scale-[0.97] dark:bg-zinc-100 dark:text-zinc-900"
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
          <p className="text-sm font-semibold tabular-nums text-zinc-900 dark:text-zinc-100">1.2345 ETH</p>
          <p className="text-xs tabular-nums text-zinc-500 dark:text-zinc-400">$4,321.00</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <TokenUSDC variant="branded" size={32} />
        <div>
          <p className="text-sm font-semibold tabular-nums text-zinc-900 dark:text-zinc-100">2,500.00 USDC</p>
          <p className="text-xs tabular-nums text-zinc-500 dark:text-zinc-400">$2,500.00</p>
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
        className="flex w-full cursor-pointer items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 transition-colors hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-600"
      >
        <current.icon variant="branded" size={20} />
        <span className="flex-1 text-left text-sm font-medium text-zinc-700 dark:text-zinc-200">{current.name}</span>
        <ChevronDown className={`h-4 w-4 text-zinc-500 transition-transform duration-200 dark:text-zinc-400 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 z-10 mt-1.5 w-full rounded-xl border border-zinc-200 bg-white py-1 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
          {chains.map((chain, i) => (
            <button
              key={chain.name}
              onClick={(e) => {
                e.preventDefault();
                setSelected(i);
                setOpen(false);
              }}
              className={`flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800 ${i === selected ? "text-zinc-900 font-medium dark:text-zinc-100" : "text-zinc-600 dark:text-zinc-400"}`}
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

function TransactionFeedPreview() {
  const transactions = [
    { type: "sent", label: "Sent ETH", to: "0x8f3a…c2d1", amount: "-0.5 ETH", color: "text-zinc-900 dark:text-zinc-100" },
    { type: "received", label: "Received USDC", to: "0x4b7e…a9f3", amount: "+250 USDC", color: "text-green-600 dark:text-green-400" },
  ];

  return (
    <div className="flex w-full flex-col gap-1">
      {transactions.map((tx) => (
        <div
          key={tx.label + tx.to}
          className="flex items-center justify-between rounded-lg px-2 py-2 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/60"
        >
          <div className="flex items-center gap-2.5">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full ${tx.type === "sent" ? "bg-zinc-100 dark:bg-zinc-800" : "bg-green-50 dark:bg-green-950/40"}`}>
              {tx.type === "sent" ? (
                <ArrowUpRight className="h-4 w-4 text-zinc-600 dark:text-zinc-300" />
              ) : (
                <ArrowDownLeft className="h-4 w-4 text-green-600 dark:text-green-400" />
              )}
            </div>
            <div>
              <p className="text-xs font-medium text-zinc-900 dark:text-zinc-100">{tx.label}</p>
              <p className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">{tx.to}</p>
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
          <span className="text-xs font-medium text-green-600 dark:text-green-400">Healthy</span>
        </div>
      </div>
      <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-700" />
      <span className="text-xs tabular-nums text-zinc-500 dark:text-zinc-400">12 gwei</span>
      <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-700" />
      <span className="font-mono text-xs tabular-nums text-zinc-500 dark:text-zinc-400">#19,234,567</span>
    </div>
  );
}

function DAppToolbarPreview() {
  const [activeId, setActiveId] = useState("wallet");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [direction, setDirection] = useState(0);

  const items = [
    { id: "wallet", label: "Wallet", icon: <Wallet size={14} /> },
    { id: "swap", label: "Swap", icon: <ArrowLeftRight size={14} /> },
    { id: "send", label: "Send", icon: <Send size={14} /> },
    { id: "bridge", label: "Bridge", icon: <Globe size={14} /> },
    { id: "explorer", label: "Explorer", icon: <FileSearch size={14} /> },
  ];

  const separator = 2;

  const handleHover = (id: string | null) => {
    if (hoveredId !== null && id !== null) {
      const prevIndex = items.findIndex((item) => item.id === hoveredId);
      const nextIndex = items.findIndex((item) => item.id === id);
      setDirection(nextIndex > prevIndex ? 1 : -1);
    }
    setHoveredId(id);
  };

  const hoveredItem = items.find((item) => item.id === hoveredId);
  const hoveredIndex = items.findIndex((item) => item.id === hoveredId);

  const ITEM_SIZE = 32;
  const GAP = 4;
  const PADDING = 10;
  const SEPARATOR_WIDTH = 9;

  const getItemX = (index: number) => {
    let x = PADDING + index * (ITEM_SIZE + GAP);
    if (index > separator) x += SEPARATOR_WIDTH;
    return x;
  };

  const bgX = hoveredItem ? getItemX(hoveredIndex) : 0;
  const tooltipX = hoveredItem ? getItemX(hoveredIndex) + ITEM_SIZE / 2 : 0;

  return (
    <div
      className="relative flex items-center gap-1 rounded-full border border-zinc-200 bg-white px-2.5 py-1.5 shadow-sm dark:border-zinc-800 dark:bg-[#09090B]"
      onMouseLeave={() => setHoveredId(null)}
    >
      <AnimatePresence>
        {hoveredId && (
          <motion.div
            className="absolute top-1/2 left-0 -translate-y-1/2 rounded-lg bg-zinc-100 dark:bg-zinc-800"
            style={{ width: ITEM_SIZE, height: ITEM_SIZE }}
            initial={{ opacity: 0, x: bgX, scale: 0.95 }}
            animate={{ opacity: 1, x: bgX, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </AnimatePresence>

      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          {index === separator + 1 && (
            <div className="mx-0.5 h-4 w-px bg-zinc-200 dark:bg-zinc-700" />
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              setActiveId(item.id);
            }}
            onMouseEnter={() => handleHover(item.id)}
            className={`relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg transition-colors duration-200 active:scale-[0.95] ${
              activeId === item.id
                ? "text-zinc-900 dark:text-white"
                : "text-zinc-400 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-white"
            }`}
          >
            <span className="relative z-10">{item.icon}</span>
            {activeId === item.id && (
              <motion.div
                layoutId="toolbar-active-dot"
                className="absolute -bottom-0.5 h-1 w-1 rounded-full bg-zinc-900 dark:bg-white"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        </React.Fragment>
      ))}

      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            key="toolbar-tooltip"
            className="pointer-events-none absolute -top-10 left-0 z-50 whitespace-nowrap rounded-lg border border-zinc-200 bg-white px-2.5 py-1 shadow-sm dark:border-zinc-800 dark:bg-[#09090B]"
            initial={{ opacity: 0, y: 6, scale: 0.95, x: tooltipX, translateX: "-50%" }}
            animate={{ opacity: 1, y: 0, scale: 1, x: tooltipX, translateX: "-50%" }}
            exit={{ opacity: 0, y: 6, scale: 0.95, transition: { duration: 0.12 } }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              <motion.span
                key={hoveredItem.id}
                className="block text-[11px] font-medium text-zinc-900 dark:text-white"
                custom={direction}
                initial={{ opacity: 0, y: direction * 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: direction * -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {hoveredItem.label}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function WalletCardPreview() {
  const [color, setColor] = useState("#3B82F6");
  const colors = [
    "#F43F5E", "#EC4899", "#D946EF", "#A855F7", "#3B82F6",
    "#06B6D4", "#10B981", "#EAB308", "#F97316",
  ];

  return (
    <div className="flex w-full max-w-[260px] flex-col items-center gap-5">
      <motion.div
        className="flex aspect-[1.6] w-full flex-col justify-between rounded-2xl p-4 text-white shadow-xl"
        animate={{ backgroundColor: color }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <p className="font-mono text-[10px] opacity-80">0x1a2b…9f3e</p>
        <div>
          <p className="text-base font-semibold">vitalik.eth</p>
          <p className="text-xs opacity-80">Ethereum Builder</p>
        </div>
      </motion.div>
      <div className="flex gap-2.5">
        {colors.map((c) => (
          <button
            key={c}
            onClick={(e) => {
              e.preventDefault();
              setColor(c);
            }}
            className="relative flex h-5 w-5 cursor-pointer items-center justify-center"
          >
            <AnimatePresence>
              {color === c && (
                <motion.span
                  layoutId="bento-wallet-card-ring"
                  className="absolute -inset-1 rounded-full border-2"
                  style={{ borderColor: c }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
            </AnimatePresence>
            <span className="h-full w-full rounded-full" style={{ backgroundColor: c }} />
          </button>
        ))}
      </div>
    </div>
  );
}

const PREVIEW_MAP: Record<string, React.ReactNode> = {
  "connect-wallet": <ConnectWalletPreview />,
  "token-balance": <TokenBalancePreview />,
  "chain-selector": <ChainSelectorPreview />,
  "transaction-feed": <TransactionFeedPreview />,
  "network-status": <NetworkStatusPreview />,
  "dapp-toolbar": <DAppToolbarPreview />,
  "wallet-card": <WalletCardPreview />,
};

export function ComponentPreview() {
  return (
    <section id="components" className="border-t border-zinc-100 dark:border-zinc-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <ScrollReveal className="mx-auto w-full text-center">
          <h2 className="mx-auto text-4xl font-normal tracking-tight text-zinc-900 md:text-5xl dark:text-zinc-50">
            Component Preview
          </h2>
          <p className="mx-auto mt-3 text-zinc-600 dark:text-zinc-400">
            A taste of what&#8217;s inside. Copy the code and start building.
          </p>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:auto-rows-[200px]">
          {BENTO_LAYOUT.map((item, i) => {
            const component = COMPONENTS.find((c) => c.slug === item.slug);
            if (!component) return null;

            return (
              <ScrollReveal key={item.slug} delay={i * 0.08} distance={24} className={`h-full ${item.colSpan} ${item.rowSpan}`}>
                <Link
                  to={`/components/${item.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[rgba(0,0,0,0.06)_0px_54px_55px,rgba(0,0,0,0.05)_0px_-12px_30px,rgba(0,0,0,0.04)_0px_4px_6px,rgba(0,0,0,0.02)_0px_12px_13px,rgba(0,0,0,0.02)_0px_-3px_5px] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-zinc-300 dark:border-[#1e1e22] dark:bg-[#111113] dark:shadow-[rgba(0,0,0,0.42)_0px_54px_55px,rgba(0,0,0,0.36)_0px_-12px_30px,rgba(0,0,0,0.20)_0px_4px_6px,rgba(0,0,0,0.10)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px] dark:hover:border-[#2a2a2e]"
                >
                  <div className="flex min-h-0 flex-1 items-center justify-center p-6">
                    {PREVIEW_MAP[item.slug]}
                  </div>
                  <div className="shrink-0 border-t border-zinc-200/80 bg-zinc-50 px-4 py-4 dark:border-[#1e1e22] dark:bg-[#0c0c0e]">
                    <h3 className="text-center font-display text-lg text-zinc-900 [word-spacing:0.1em] dark:text-zinc-50">
                      {component.name.replace(/([a-z])([A-Z])/g, "$1 $2")}
                    </h3>
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
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-all duration-150 ease-out hover:bg-zinc-800 active:scale-[0.97] dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
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
