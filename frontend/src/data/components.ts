export interface ComponentMeta {
  slug: string;
  name: string;
  description: string;
  category: string;
  props: PropMeta[];
  code: string;
  source: string;
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
    source: `import { ConnectWallet } from 'onchain-ui'

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
    source: `import { TokenBalance } from 'onchain-ui'

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
    source: `import { ChainSelector } from 'onchain-ui'

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
    source: `import { TransactionFeed } from 'onchain-ui'

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
    source: `import { NetworkStatus } from 'onchain-ui'

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
    code: `import { useState } from "react"
import { DAppToolbar } from "@/components/dapp-toolbar"
import { Wallet, ArrowLeftRight, Send, Globe, FileSearch } from "lucide-react"

export default function DAppToolbarDemo() {
  const [active, setActive] = useState("wallet")

  const items = [
    { id: "wallet", label: "Wallet", icon: <Wallet size={18} />, onClick: () => setActive("wallet") },
    { id: "swap", label: "Swap", icon: <ArrowLeftRight size={18} />, onClick: () => setActive("swap") },
    { id: "send", label: "Send", icon: <Send size={18} />, onClick: () => setActive("send") },
    { id: "bridge", label: "Bridge", icon: <Globe size={18} />, onClick: () => setActive("bridge") },
    { id: "explorer", label: "Explorer", icon: <FileSearch size={18} />, onClick: () => setActive("explorer") },
  ]

  return <DAppToolbar items={items} activeId={active} separator={2} />
}`,
    source: `import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const DAppToolbar = ({ items = [], activeId, separator, onSelect }) => {
  const [hoveredId, setHoveredId] = useState(null)
  const [direction, setDirection] = useState(0)

  const handleHover = (id) => {
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

  const getItemX = (index) => {
    let x = PADDING + index * (ITEM_SIZE + GAP)
    if (separator !== undefined && index > separator) x += SEPARATOR_WIDTH
    return x
  }

  const bgX = hoveredItem ? getItemX(hoveredIndex) : 0
  const tooltipX = hoveredItem ? getItemX(hoveredIndex) + ITEM_SIZE / 2 : 0

  return (
    <div
      className="relative flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm dark:border-zinc-800 dark:bg-[#09090B]"
      onMouseLeave={() => setHoveredId(null)}
    >
      <AnimatePresence>
        {hoveredId && (
          <motion.div
            className="absolute top-1/2 left-0 -translate-y-1/2 rounded-xl bg-zinc-100 dark:bg-zinc-800"
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
            <div className="mx-0.5 h-5 w-px bg-zinc-200 dark:bg-zinc-800" />
          )}
          <button
            onClick={() => onSelect?.(item.id)}
            onMouseEnter={() => handleHover(item.id)}
            className={\`relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl transition-colors duration-200 active:scale-[0.95] \${
              activeId === item.id
                ? "text-zinc-900 dark:text-white"
                : "text-zinc-400 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-white"
            }\`}
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
            key="tooltip"
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
  )
}`,
    usage: `<DAppToolbar items={items} activeId="wallet" separator={2} />`,
  },
  {
    slug: "wallet-card",
    name: "WalletCard",
    description:
      "An editable wallet identity card. Customize nickname, role, and color. Copy the wallet address with one click. Perfect for profile pages and dApp dashboards.",
    category: "Wallet",
    props: [
      { name: "address", type: "string", default: "—", description: "Wallet address shown on the card and used for copy" },
      { name: "defaultNickname", type: "string", default: "'vitalik.eth'", description: "Initial display name (typically an ENS)" },
      { name: "defaultRole", type: "string", default: "'Builder'", description: "Initial role or title" },
      { name: "defaultColor", type: "string", default: "'#3B82F6'", description: "Initial card background color" },
      { name: "colors", type: "string[]", default: "DEFAULT_COLORS", description: "Color palette for the picker" },
      { name: "socialLinks", type: "SocialLink[]", default: "[]", description: "Array of icon + url pairs (X, Farcaster, GitHub)" },
      { name: "onSave", type: "(data) => void", default: "—", description: "Callback fired with the edited identity on save" },
    ],
    code: `import { useState } from "react"
import { WalletCard } from "@/components/wallet-card"

export default function WalletCardDemo() {
  return (
    <WalletCard
      address="0x1a2b3c4d5e6f7890abcdef1234567890abcd9f3e"
      defaultNickname="vitalik.eth"
      defaultRole="Ethereum Builder"
      defaultColor="#3B82F6"
      onSave={(data) => console.log("Saved:", data)}
    />
  )
}`,
    source: `import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const DEFAULT_COLORS = [
  "#F43F5E", "#EC4899", "#D946EF", "#A855F7", "#3B82F6",
  "#06B6D4", "#10B981", "#EAB308", "#F97316",
]

const truncate = (addr) =>
  addr ? \`\${addr.slice(0, 6)}…\${addr.slice(-4)}\` : ""

export const WalletCard = ({
  address = "0x1a2b3c4d5e6f7890abcdef1234567890abcd9f3e",
  defaultNickname = "vitalik.eth",
  defaultRole = "Builder",
  defaultColor = "#3B82F6",
  colors = DEFAULT_COLORS,
  socialLinks = [],
  onSave,
}) => {
  const [selectedColor, setSelectedColor] = useState(defaultColor)
  const [nickname, setNickname] = useState(defaultNickname)
  const [role, setRole] = useState(defaultRole)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-sm mx-auto">
      <motion.div
        className="w-full aspect-[1.6] rounded-3xl p-6 flex flex-col justify-between text-white shadow-xl overflow-hidden"
        animate={{ backgroundColor: selectedColor }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex justify-between items-start">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-xs font-mono hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={copied ? "copied" : "address"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
              >
                {copied ? "Copied!" : truncate(address)}
              </motion.span>
            </AnimatePresence>
          </button>
          {socialLinks.length > 0 && (
            <div className="flex gap-2">
              {socialLinks.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                  {link.icon}
                </a>
              ))}
            </div>
          )}
        </div>
        <div>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="bg-transparent text-2xl font-semibold outline-none placeholder:text-white/50 w-full"
            placeholder="vitalik.eth"
          />
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="bg-transparent text-white/80 font-medium outline-none placeholder:text-white/50 w-full mt-1"
            placeholder="Role"
          />
        </div>
      </motion.div>

      <div className="flex gap-3 flex-wrap justify-center">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className="relative w-8 h-8 rounded-full group flex items-center justify-center"
          >
            <AnimatePresence>
              {selectedColor === color && (
                <motion.div
                  layoutId="wallet-card-color-ring"
                  className="absolute -inset-1 rounded-full border-2"
                  style={{ borderColor: color }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </AnimatePresence>
            <div
              className="w-full h-full rounded-full transition-transform group-hover:scale-110"
              style={{ backgroundColor: color }}
            />
          </button>
        ))}
      </div>

      <motion.button
        className="w-full py-3.5 rounded-2xl text-white font-medium text-lg cursor-pointer"
        animate={{ backgroundColor: selectedColor }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onSave?.({ nickname, role, address, color: selectedColor })}
      >
        Save Identity
      </motion.button>
    </div>
  )
}`,
    usage: `<WalletCard address="0x..." defaultNickname="vitalik.eth" />`,
  },
];
