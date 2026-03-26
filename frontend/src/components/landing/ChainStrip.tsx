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

function ChainItem({ name, icon: Icon }: { name: string; icon: typeof TokenBTC }) {
  return (
    <div className="flex shrink-0 items-center gap-3 px-6">
      <Icon variant="branded" size={48} />
      <span className="text-xl font-medium text-zinc-400">{name}</span>
    </div>
  );
}

export function ChainStrip() {
  return (
    <section className="border-t border-zinc-100">
      <div className="py-16">
        <ScrollReveal>
          <p className="text-center text-base font-medium uppercase tracking-wide text-zinc-400">
            Works with any chain
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            className="relative mx-auto mt-8 max-w-6xl overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
            }}
          >
            <div className="marquee-track flex w-max">
              {[...Array(4)].map((_, setIndex) =>
                CHAINS.map((chain) => (
                  <ChainItem
                    key={`${setIndex}-${chain.name}`}
                    name={chain.name}
                    icon={chain.icon}
                  />
                ))
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
