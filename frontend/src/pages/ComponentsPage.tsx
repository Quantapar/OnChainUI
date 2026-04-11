import React, { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createHighlighter, type Highlighter } from "shiki";
import { Link, useParams, useNavigate, Navigate } from "react-router";
import {
  Check, Copy, ChevronRight, Menu, X,
  Wallet, ArrowLeftRight, Send, Globe, FileSearch,
} from "lucide-react";
import { COMPONENTS, CATEGORIES } from "../data/components";
import type { ComponentMeta } from "../data/components";
import { ThemeToggle } from "../components/ThemeToggle";

function Sidebar({ current }: { current: string }) {
  const navigate = useNavigate();

  return (
    <nav className="flex flex-col gap-6">
      {CATEGORIES.map((category) => {
        const items = COMPONENTS.filter((c) => c.category === category);
        if (items.length === 0) return null;

        return (
          <div key={category}>
            <p className="mb-2 px-3 text-[11px] font-bold uppercase tracking-[0.08em] text-zinc-500 dark:text-zinc-500">
              {category}
            </p>
            <div className="flex flex-col gap-0.5">
              {items.map((item) => (
                <button
                  key={item.slug}
                  onClick={() => navigate(`/components/${item.slug}`)}
                  className={`cursor-pointer rounded-lg px-3 py-2 text-left text-[13px] transition-all duration-150 ${
                    current === item.slug
                      ? "bg-zinc-900 font-medium text-white dark:bg-zinc-100 dark:text-zinc-900"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </nav>
  );
}

let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ["github-light", "github-dark"],
      langs: ["tsx", "bash"],
    });
  }
  return highlighterPromise;
}

function useHighlightedCode(code: string, lang: "tsx" | "bash") {
  const [lightHtml, setLightHtml] = useState<string | null>(null);
  const [darkHtml, setDarkHtml] = useState<string | null>(null);

  useEffect(() => {
    getHighlighter().then((highlighter) => {
      setLightHtml(highlighter.codeToHtml(code, { lang, theme: "github-light" }));
      setDarkHtml(highlighter.codeToHtml(code, { lang, theme: "github-dark" }));
    });
  }, [code, lang]);

  return { lightHtml, darkHtml };
}

function CodeBlock({ code, compact }: { code: string; compact?: boolean }) {
  const [copied, setCopied] = useState(false);
  const lang = compact ? "bash" : "tsx";
  const { lightHtml, darkHtml } = useHighlightedCode(code, lang);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className={`group flex gap-2 rounded-xl border border-zinc-200 bg-zinc-50 dark:border-[#1e1e22] dark:bg-[#111113] ${compact ? "items-center px-4 py-3" : "items-start p-5"}`}>
      {lightHtml && darkHtml ? (
        <>
          <div
            className={`block min-w-0 flex-1 overflow-x-auto font-mono leading-relaxed dark:hidden [&_pre]:!bg-transparent [&_code]:!bg-transparent ${compact ? "text-xs" : "max-h-[320px] overflow-y-auto text-[13px]"}`}
            dangerouslySetInnerHTML={{ __html: lightHtml }}
          />
          <div
            className={`hidden min-w-0 flex-1 overflow-x-auto font-mono leading-relaxed dark:block [&_pre]:!bg-transparent [&_code]:!bg-transparent ${compact ? "text-xs" : "max-h-[320px] overflow-y-auto text-[13px]"}`}
            dangerouslySetInnerHTML={{ __html: darkHtml }}
          />
        </>
      ) : (
        <pre className={`min-w-0 flex-1 overflow-x-auto font-mono leading-relaxed text-zinc-700 dark:text-zinc-300 ${compact ? "text-xs" : "max-h-[320px] overflow-y-auto text-[13px]"}`}>
          <code>{code}</code>
        </pre>
      )}
      <button
        onClick={handleCopy}
        className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-zinc-300 text-zinc-400 transition-[border-color,color] duration-150 ease-out hover:border-zinc-400 hover:text-zinc-600 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:text-zinc-200"
        aria-label={copied ? "Copied" : "Copy code"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="copied"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Check className="h-3.5 w-3.5 text-brand" />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Copy className="h-3.5 w-3.5" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}

function PropsTable({ component }: { component: ComponentMeta }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-[#1e1e22]">
      <table className="w-full text-left text-[13px]">
        <thead>
          <tr className="border-b border-zinc-200 bg-zinc-50/80 dark:border-[#1e1e22] dark:bg-[#111113]">
            <th className="whitespace-nowrap px-5 py-3 font-semibold text-zinc-900 dark:text-zinc-100">Prop</th>
            <th className="whitespace-nowrap px-5 py-3 font-semibold text-zinc-900 dark:text-zinc-100">Type</th>
            <th className="whitespace-nowrap px-5 py-3 font-semibold text-zinc-900 dark:text-zinc-100">Default</th>
            <th className="px-5 py-3 font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
          </tr>
        </thead>
        <tbody>
          {component.props.map((prop, i) => (
            <tr
              key={prop.name}
              className={`transition-colors hover:bg-zinc-50/50 dark:hover:bg-zinc-900/40 ${i < component.props.length - 1 ? "border-b border-zinc-100 dark:border-[#1e1e22]" : ""}`}
            >
              <td className="whitespace-nowrap px-5 py-3">
                <code className="rounded-md bg-zinc-100 px-1.5 py-0.5 font-mono text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                  {prop.name}
                </code>
              </td>
              <td className="whitespace-nowrap px-5 py-3 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {prop.type}
              </td>
              <td className="whitespace-nowrap px-5 py-3 font-mono text-xs text-zinc-500 dark:text-zinc-500">
                {prop.default}
              </td>
              <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <h2 className="text-[15px] font-semibold text-zinc-900 dark:text-zinc-100">{children}</h2>
      <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800" />
    </div>
  );
}

function DAppToolbarLivePreview() {
  const [activeId, setActiveId] = useState("wallet");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [direction, setDirection] = useState(0);

  const items = [
    { id: "wallet", label: "Wallet", icon: <Wallet size={18} /> },
    { id: "swap", label: "Swap", icon: <ArrowLeftRight size={18} /> },
    { id: "send", label: "Send", icon: <Send size={18} /> },
    { id: "bridge", label: "Bridge", icon: <Globe size={18} /> },
    { id: "explorer", label: "Explorer", icon: <FileSearch size={18} /> },
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

  const ITEM_SIZE = 44;
  const GAP = 8;
  const PADDING = 16;
  const SEPARATOR_WIDTH = 13;

  const getItemX = (index: number) => {
    let x = PADDING + index * (ITEM_SIZE + GAP);
    if (index > separator) x += SEPARATOR_WIDTH;
    return x;
  };

  const bgX = hoveredItem ? getItemX(hoveredIndex) : 0;
  const tooltipX = hoveredItem ? getItemX(hoveredIndex) + ITEM_SIZE / 2 : 0;

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
          {index === separator + 1 && (
            <div className="mx-0.5 h-5 w-px bg-zinc-200 dark:bg-zinc-700" />
          )}
          <button
            onClick={() => setActiveId(item.id)}
            onMouseEnter={() => handleHover(item.id)}
            className={`relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl transition-colors duration-200 active:scale-[0.95] ${
              activeId === item.id
                ? "text-zinc-900 dark:text-white"
                : "text-zinc-400 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-white"
            }`}
          >
            <span className="relative z-10">{item.icon}</span>
            {activeId === item.id && (
              <motion.div
                layoutId="detail-toolbar-dot"
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
            key="detail-tooltip"
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

const LIVE_PREVIEWS: Record<string, React.ReactNode> = {
  "dapp-toolbar": <DAppToolbarLivePreview />,
};

function ComponentDetail({ component }: { component: ComponentMeta }) {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  useEffect(() => {
    setTab("preview");
  }, [component.slug]);

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-2 text-[13px] text-zinc-500 dark:text-zinc-500">
        <Link to="/components" className="cursor-pointer transition-colors hover:text-zinc-700 dark:hover:text-zinc-300">Components</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-zinc-600 dark:text-zinc-400">{component.category}</span>
        <ChevronRight className="h-3 w-3" />
        <span className="font-medium text-zinc-900 dark:text-zinc-100">{component.name}</span>
      </div>

      <h1 className="mt-4 text-[2rem] font-medium tracking-tight text-zinc-900 dark:text-zinc-50">
        {component.name}
      </h1>
      <p className="mt-2 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
        {component.description}
      </p>

      <div className="mt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 rounded-lg bg-zinc-100 p-1 dark:bg-zinc-900">
            {(["preview", "code"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative cursor-pointer rounded-md px-4 py-1.5 text-[13px] font-medium transition-colors duration-150 ${
                  tab === t
                    ? "text-zinc-900 dark:text-zinc-100"
                    : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                }`}
              >
                {tab === t && (
                  <motion.span
                    layoutId="detail-tab-indicator"
                    className="absolute inset-0 rounded-md bg-white shadow-sm dark:bg-zinc-800"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t === "preview" ? "Preview" : "Code"}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-3">
          {tab === "preview" ? (
            <div className="flex min-h-[280px] items-center justify-center rounded-xl border border-zinc-200 bg-white p-10 dark:border-[#1e1e22] dark:bg-[#111113]">
              {LIVE_PREVIEWS[component.slug] ?? (
                <div className="rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 px-8 py-6 dark:border-zinc-700 dark:bg-zinc-800/40">
                  <code className="font-mono text-sm text-zinc-600 dark:text-zinc-400">{component.usage}</code>
                </div>
              )}
            </div>
          ) : (
            <CodeBlock code={component.code} />
          )}
        </div>
      </div>

      <div className="mt-14">
        <SectionHeading>Installation</SectionHeading>
        <div className="mt-4">
          <CodeBlock code="npm install onchain-ui" compact />
        </div>
      </div>

      <div className="mt-14 pb-16">
        <SectionHeading>Props</SectionHeading>
        <div className="mt-4">
          <PropsTable component={component} />
        </div>
      </div>
    </div>
  );
}

function AllComponentsList() {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl">
      <h1 className="text-[2rem] font-medium tracking-tight text-zinc-900 dark:text-zinc-50">
        Components
      </h1>
      <p className="mt-2 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
        Production-ready React components for wallets, tokens, chains, and transactions.
      </p>

      <div className="mt-12 flex flex-col gap-10">
        {CATEGORIES.map((category) => {
          const items = COMPONENTS.filter((c) => c.category === category);
          if (items.length === 0) return null;

          return (
            <div key={category}>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.08em] text-zinc-500 dark:text-zinc-500">
                {category}
              </h2>
              <div className="mt-3 flex flex-col gap-2">
                {items.map((item) => (
                  <button
                    key={item.slug}
                    onClick={() => navigate(`/components/${item.slug}`)}
                    className="group flex cursor-pointer items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 text-left transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                  >
                    <div>
                      <h3 className="font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {"<"}{item.name}{" />"}
                      </h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 shrink-0 text-zinc-300 transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-zinc-500 dark:text-zinc-700 dark:group-hover:text-zinc-400" />
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ComponentsPage() {
  const { slug } = useParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const component = slug ? COMPONENTS.find((c) => c.slug === slug) : null;

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [slug]);

  if (slug && !component) {
    return <Navigate to="/components" replace />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <header className="sticky top-0 z-40 border-b border-zinc-100 bg-white/95 backdrop-blur-md dark:border-zinc-900 dark:bg-zinc-950/95">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center">
          <div className="flex w-64 shrink-0 items-center border-r border-zinc-100 px-6 dark:border-zinc-900">
            <Link to="/" className="flex cursor-pointer items-center gap-2">
              <img src="/logo.svg" alt="OnChainUI" width={24} height={24} className="h-6 w-6 dark:invert" />
              <span className="text-[15px] font-semibold text-zinc-900 dark:text-zinc-100">OnChainUI</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between px-6">
            <div className="hidden items-center gap-5 md:flex">
              <Link to="/components" className="cursor-pointer text-[13px] font-medium text-zinc-900 dark:text-zinc-100">
                Components
              </Link>
              <Link to="/docs" className="cursor-pointer text-[13px] font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                Docs
              </Link>
              <Link to="/templates" className="cursor-pointer text-[13px] font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                Templates
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="cursor-pointer rounded-lg p-1.5 text-zinc-600 transition-colors hover:bg-zinc-100 lg:hidden dark:text-zinc-400 dark:hover:bg-zinc-900"
                aria-label="Toggle sidebar"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px]">
        <aside
          className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto border-r border-zinc-100 bg-white p-6 pt-20 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] lg:sticky lg:top-14 lg:z-auto lg:h-[calc(100vh-3.5rem)] lg:translate-x-0 dark:border-zinc-900 dark:bg-zinc-950 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar current={slug || ""} />
        </aside>

        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-20 bg-black/30 backdrop-blur-[2px] lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        <main className="min-w-0 flex-1 px-6 py-10 lg:px-16">
          {component ? (
            <ComponentDetail component={component} />
          ) : (
            <AllComponentsList />
          )}
        </main>
      </div>
    </div>
  );
}
