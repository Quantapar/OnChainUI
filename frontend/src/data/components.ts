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
];
