# OnchainUI

Beautiful React components for onchain apps.  
Production-ready pieces for wallets, tokens, chains, and transactions.  
Copy, paste, and ship.

## Get started

```bash
git clone https://github.com/Quantapar/OnChainUI.git
cd OnChainUI/frontend
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Components

- **Wallet** — connect buttons, address displays, balance cards
- **Chains** — selectors, network status, gas indicators
- **Tokens** — balances, transfers, price displays
- **Transactions** — feeds, status, confirmations

Works across Ethereum, Base, Solana, Polygon, Arbitrum, and any EVM chain.

## Why OnchainUI

- **Plays nice with wallets** — drop-in pieces that don't make you wrestle with wallet SDKs
- **Any chain you ship on** — same components, every chain
- **Yours to restyle** — just Tailwind under the hood, tweak a class or leave it alone
- **Barely there** — zero bloated dependencies, tree-shakeable, ship only what you use

## Project structure

```
OnChainUI/
└── frontend/
    ├── public/            Static assets
    └── src/
        ├── components/    Library + landing components
        │   ├── landing/   Marketing page sections
        │   └── ui/        Primitives
        ├── data/          Component metadata
        ├── lib/           Utilities
        └── pages/         Routed pages
```

## Stack

React 19 · TypeScript · Vite 8 · Tailwind CSS v4 · Framer Motion · React Router 7

## Scripts

Run from `frontend/`:

```bash
npm run dev        # Start the dev server
npm run build      # Build for production
npm run preview    # Preview the production build
npm run lint       # Lint the codebase
```

## License

[MIT](LICENSE) © OnChainUI contributors
