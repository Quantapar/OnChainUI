import {
  NetworkEthereum,
  NetworkArbitrumOne,
  TokenBTC,
  NetworkPolygon,
  NetworkBase,
  NetworkSolana,
} from "@web3icons/react";
import { ScrollReveal } from "../ScrollReveal";

const CHAINS = [
  { name: "Bitcoin", icon: TokenBTC },
  { name: "Solana", icon: NetworkSolana },
  { name: "Ethereum", icon: NetworkEthereum },
  { name: "Base", icon: NetworkBase },
  { name: "Polygon", icon: NetworkPolygon },
  { name: "Arbitrum", icon: NetworkArbitrumOne },
];

export function ChainStrip() {
  return (
    <section className="border-t border-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <ScrollReveal>
          <p className="text-center text-base font-medium uppercase tracking-wide text-zinc-400">
            Works with any chain
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {CHAINS.map((chain) => (
              <div key={chain.name} className="flex items-center gap-3">
                <chain.icon variant="branded" size={48} />
                <span className="text-xl font-medium text-zinc-400">
                  {chain.name}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
