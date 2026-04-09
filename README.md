<div align="center">
  <img src="frontend/public/logo.svg" alt="OnChainUI" width="72" height="72" />

  <h1>OnChainUI</h1>

  <p><strong>Beautiful React components for onchain apps.</strong></p>

  <p>
    Production-ready pieces for wallets, tokens, chains, and transactions.<br />
    Copy, paste, and ship.
  </p>

  <p>
    <img alt="React" src="https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white" />
    <img alt="Vite" src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" />
    <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind-4-38BDF8?logo=tailwindcss&logoColor=white" />
  </p>
</div>

---

## What's inside

A web3-specific component library with drop-in pieces for the things every onchain app needs:

- **Wallet** — connect buttons, address displays, balance cards
- **Chains** — selectors, network status, gas indicators
- **Tokens** — balances, transfers, price displays
- **Transactions** — feeds, status, confirmations

Works across Ethereum, Base, Solana, Polygon, Arbitrum, and any EVM-compatible chain.

## Why

- **Plays nice with wallets.** Drop-in pieces that don't make you wrestle with wallet SDKs.
- **Any chain you ship on.** Same components, every chain.
- **Yours to restyle.** Just Tailwind under the hood — tweak a class or leave it alone.
- **Barely there.** Zero bloated dependencies. Tree-shakeable, so you only ship what you use.

## Getting started

```bash
git clone https://github.com/Quantapar/OnChainUI.git
cd OnChainUI/frontend
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Project structure

```
OnChainUI/
└── frontend/              # React app
    ├── public/            # Static assets
    └── src/
        ├── components/    # Library + landing components
        │   ├── landing/   # Marketing page sections
        │   └── ui/        # Primitives
        ├── data/          # Component metadata
        ├── lib/           # Utilities
        └── pages/         # Routed pages
```

## Stack

- **React 19** + **TypeScript**
- **Vite 8** for the dev server and bundling
- **Tailwind CSS v4** for styling
- **Framer Motion** for animation
- **React Router 7** for routing

## Scripts

Run from `frontend/`:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Lint the codebase |

## License

[MIT](LICENSE) © OnChainUI contributors
