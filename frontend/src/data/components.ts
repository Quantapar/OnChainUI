export interface ComponentMeta {
  slug: string;
  name: string;
  description: string;
  category: string;
  props: PropMeta[];
  code: string;
  usage: string;
}

export interface PropMeta {
  name: string;
  type: string;
  default: string;
  description: string;
}

export const CATEGORIES = [
  "Wallet",
  "Token",
  "Chain",
  "Transaction",
  "Display",
  "Navigation",
] as const;

export const COMPONENTS: ComponentMeta[] = [
  {
    slug: "connect-wallet",
    name: "ConnectWallet",
    description:
      "One-click wallet connection button with multi-provider support. Handles connection state, loading, and error states automatically.",
    category: "Wallet",
    props: [
      { name: "providers", type: "Provider[]", default: "['metamask', 'walletconnect']", description: "List of wallet providers to support" },
      { name: "theme", type: "'light' | 'dark'", default: "'light'", description: "Visual theme of the button" },
      { name: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Button size variant" },
      { name: "onConnect", type: "(address: string) => void", default: "—", description: "Callback fired after successful connection" },
      { name: "onDisconnect", type: "() => void", default: "—", description: "Callback fired after disconnection" },
    ],
    code: `import { ConnectWallet } from 'onchain-ui'

export function App() {
  return (
    <ConnectWallet
      providers={['metamask', 'walletconnect', 'coinbase']}
      theme="light"
      size="md"
      onConnect={(address) => console.log('Connected:', address)}
    />
  )
}`,
    usage: `<ConnectWallet />`,
  },
  {
    slug: "address-display",
    name: "AddressDisplay",
    description:
      "Displays a truncated wallet address with ENS resolution, avatar, and copy-to-clipboard functionality.",
    category: "Display",
    props: [
      { name: "address", type: "string", default: "—", description: "The wallet address to display" },
      { name: "ens", type: "boolean", default: "true", description: "Enable ENS name resolution" },
      { name: "avatar", type: "boolean", default: "true", description: "Show a generated avatar" },
      { name: "copyable", type: "boolean", default: "true", description: "Enable click-to-copy" },
      { name: "truncate", type: "number", default: "4", description: "Characters to show at start/end" },
    ],
    code: `import { AddressDisplay } from 'onchain-ui'

export function App() {
  return (
    <AddressDisplay
      address="0x1a2b3c4d5e6f7890abcdef1234567890abcd9f3e"
      ens
      avatar
      copyable
    />
  )
}`,
    usage: `<AddressDisplay address="0x1a2b...9f3e" />`,
  },
  {
    slug: "token-balance",
    name: "TokenBalance",
    description:
      "Displays real-time token balance with icon, symbol, and USD value. Supports multiple tokens and auto-refresh.",
    category: "Token",
    props: [
      { name: "token", type: "string", default: "'ETH'", description: "Token symbol to display" },
      { name: "address", type: "string", default: "—", description: "Wallet address to check balance for" },
      { name: "showUsd", type: "boolean", default: "true", description: "Show USD equivalent value" },
      { name: "refreshInterval", type: "number", default: "30000", description: "Auto-refresh interval in ms" },
    ],
    code: `import { TokenBalance } from 'onchain-ui'

export function App() {
  return (
    <TokenBalance
      token="ETH"
      address="0x1a2b...9f3e"
      showUsd
      refreshInterval={15000}
    />
  )
}`,
    usage: `<TokenBalance token="ETH" address="0x..." />`,
  },
  {
    slug: "chain-selector",
    name: "ChainSelector",
    description:
      "Dropdown component to switch between supported blockchain networks. Shows chain icon, name, and connection status.",
    category: "Chain",
    props: [
      { name: "chains", type: "Chain[]", default: "defaultChains", description: "List of supported chains" },
      { name: "value", type: "number", default: "1", description: "Currently selected chain ID" },
      { name: "onChange", type: "(chainId: number) => void", default: "—", description: "Callback when chain is switched" },
      { name: "compact", type: "boolean", default: "false", description: "Show icon-only compact mode" },
    ],
    code: `import { ChainSelector } from 'onchain-ui'

export function App() {
  return (
    <ChainSelector
      chains={[ethereum, polygon, base, arbitrum]}
      value={1}
      onChange={(chainId) => switchChain(chainId)}
    />
  )
}`,
    usage: `<ChainSelector />`,
  },
  {
    slug: "transaction-feed",
    name: "TransactionFeed",
    description:
      "Live transaction history feed with status indicators, amounts, and addresses. Supports filtering and pagination.",
    category: "Transaction",
    props: [
      { name: "address", type: "string", default: "—", description: "Wallet address to fetch transactions for" },
      { name: "limit", type: "number", default: "10", description: "Number of transactions to show" },
      { name: "filter", type: "'all' | 'sent' | 'received'", default: "'all'", description: "Filter transaction type" },
      { name: "onSelect", type: "(tx: Transaction) => void", default: "—", description: "Callback when a transaction is clicked" },
    ],
    code: `import { TransactionFeed } from 'onchain-ui'

export function App() {
  return (
    <TransactionFeed
      address="0x1a2b...9f3e"
      limit={20}
      filter="all"
      onSelect={(tx) => openExplorer(tx.hash)}
    />
  )
}`,
    usage: `<TransactionFeed address="0x..." />`,
  },
  {
    slug: "network-status",
    name: "NetworkStatus",
    description:
      "Displays current network health, gas price, and block height. Auto-updates in real-time.",
    category: "Chain",
    props: [
      { name: "chainId", type: "number", default: "1", description: "Chain to monitor" },
      { name: "showGas", type: "boolean", default: "true", description: "Display current gas price" },
      { name: "showBlock", type: "boolean", default: "true", description: "Display latest block number" },
      { name: "compact", type: "boolean", default: "false", description: "Compact single-line display" },
    ],
    code: `import { NetworkStatus } from 'onchain-ui'

export function App() {
  return (
    <NetworkStatus
      chainId={1}
      showGas
      showBlock
    />
  )
}`,
    usage: `<NetworkStatus chainId={1} />`,
  },
  {
    slug: "dapp-toolbar",
    name: "DAppToolbar",
    description:
      "A dock-style floating toolbar for common dApp actions. Spring-animated hover highlights, directional tooltips, and active indicator. Perfect for wallet dashboards and dApp navigation.",
    category: "Navigation",
    props: [
      { name: "items", type: "ToolbarItem[]", default: "—", description: "Array of toolbar items with id, label, icon, and optional onClick" },
      { name: "activeId", type: "string", default: "—", description: "ID of the currently active item (shows dot indicator)" },
      { name: "separator", type: "number", default: "—", description: "Index after which to insert a vertical separator" },
    ],
    code: `import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ToolbarItem {
  id: string
  label: string
  icon: React.ReactNode
  onClick?: (e: React.MouseEvent) => void
}

interface DAppToolbarProps {
  items: ToolbarItem[]
  activeId?: string
  separator?: number
}

export function DAppToolbar({ items, activeId, separator }: DAppToolbarProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [direction, setDirection] = useState(0)

  const handleHover = (id: string | null) => {
    if (hoveredId !== null && id !== null) {
      const prevIndex = items.findIndex((item) => item.id === hoveredId)
      const nextIndex = items.findIndex((item) => item.id === id)
      setDirection(nextIndex > prevIndex ? 1 : -1)
    }
    setHoveredId(id)
  }

  const hoveredItem = items.find((item) => item.id === hoveredId)
  const hoveredIndex = items.findIndex((item) => item.id === hoveredId)

  const ITEM_SIZE = 44
  const GAP = 8
  const PADDING = 16
  const SEPARATOR_WIDTH = 13

  const getItemX = (index: number) => {
    let x = PADDING + index * (ITEM_SIZE + GAP)
    if (separator !== undefined && index > separator) {
      x += SEPARATOR_WIDTH
    }
    return x
  }

  const bgX = hoveredItem ? getItemX(hoveredIndex) : 0
  const tooltipX = hoveredItem ? getItemX(hoveredIndex) + ITEM_SIZE / 2 : 0

  return (
    <div
      className="relative flex items-center gap-2 rounded-full border
        border-zinc-200 bg-white px-4 py-2 shadow-sm
        dark:border-zinc-700 dark:bg-zinc-900"
      onMouseLeave={() => setHoveredId(null)}
    >
      <AnimatePresence>
        {hoveredId && (
          <motion.div
            className="absolute top-1/2 left-0 -translate-y-1/2
              rounded-xl bg-zinc-100 dark:bg-zinc-800"
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
          {separator !== undefined && index === separator + 1 && (
            <div className="mx-0.5 h-5 w-px bg-zinc-200 dark:bg-zinc-700" />
          )}
          <button
            onClick={item.onClick}
            onMouseEnter={() => handleHover(item.id)}
            className={\`relative flex h-11 w-11 cursor-pointer items-center
              justify-center rounded-xl transition-colors duration-200
              active:scale-[0.95] \${
                activeId === item.id
                  ? "text-zinc-900 dark:text-white"
                  : "text-zinc-400 hover:text-zinc-700
                     dark:text-zinc-500 dark:hover:text-white"
              }\`}
          >
            <span className="relative z-10">{item.icon}</span>
            {activeId === item.id && (
              <motion.div
                layoutId="toolbar-active-dot"
                className="absolute -bottom-0.5 h-1 w-1
                  rounded-full bg-zinc-900 dark:bg-white"
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
            className="pointer-events-none absolute -top-10 left-0 z-50
              whitespace-nowrap rounded-lg border border-zinc-200
              bg-white px-2.5 py-1 shadow-sm
              dark:border-zinc-700 dark:bg-zinc-900"
            initial={{
              opacity: 0, y: 6, scale: 0.95,
              x: tooltipX, translateX: "-50%",
            }}
            animate={{
              opacity: 1, y: 0, scale: 1,
              x: tooltipX, translateX: "-50%",
            }}
            exit={{
              opacity: 0, y: 6, scale: 0.95,
              transition: { duration: 0.12 },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              <motion.span
                key={hoveredItem.id}
                className="block text-[11px] font-medium
                  text-zinc-900 dark:text-white"
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
  )
}`,
    usage: `import { Wallet, ArrowLeftRight, Send, Globe, FileSearch } from 'lucide-react'

const items = [
  { id: 'wallet', label: 'Wallet', icon: <Wallet size={18} /> },
  { id: 'swap', label: 'Swap', icon: <ArrowLeftRight size={18} /> },
  { id: 'send', label: 'Send', icon: <Send size={18} /> },
  { id: 'bridge', label: 'Bridge', icon: <Globe size={18} /> },
  { id: 'explorer', label: 'Explorer', icon: <FileSearch size={18} /> },
]

<DAppToolbar items={items} activeId="wallet" separator={2} />`,
  },
];
