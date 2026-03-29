import { useState, useEffect } from "react";
import { Link, useParams, useNavigate, Navigate } from "react-router";
import { Check, Copy, ChevronRight, Menu, X } from "lucide-react";
import { COMPONENTS, CATEGORIES } from "../data/components";
import type { ComponentMeta } from "../data/components";

function Sidebar({ current }: { current: string }) {
  const navigate = useNavigate();

  return (
    <nav className="flex flex-col gap-6">
      {CATEGORIES.map((category) => {
        const items = COMPONENTS.filter((c) => c.category === category);
        if (items.length === 0) return null;

        return (
          <div key={category}>
            <p className="mb-2 px-3 text-[11px] font-bold uppercase tracking-[0.08em] text-zinc-400">
              {category}
            </p>
            <div className="flex flex-col gap-0.5">
              {items.map((item) => (
                <button
                  key={item.slug}
                  onClick={() => navigate(`/components/${item.slug}`)}
                  className={`cursor-pointer rounded-lg px-3 py-2 text-left text-[13px] transition-all duration-150 ${
                    current === item.slug
                      ? "bg-zinc-900 font-medium text-white"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
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

function CodeBlock({ code, compact }: { code: string; compact?: boolean }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className={`group relative overflow-hidden rounded-xl bg-zinc-950 ${compact ? "p-3" : "p-5"}`}>
      <button
        onClick={handleCopy}
        className="absolute right-3 top-3 cursor-pointer rounded-lg bg-zinc-800 px-2.5 py-1 text-[11px] font-medium text-zinc-400 opacity-0 transition-all duration-150 hover:bg-zinc-700 hover:text-zinc-200 group-hover:opacity-100"
        aria-label={copied ? "Copied" : "Copy code"}
      >
        {copied ? (
          <span className="flex items-center gap-1"><Check className="h-3 w-3" /> Copied</span>
        ) : (
          <span className="flex items-center gap-1"><Copy className="h-3 w-3" /> Copy</span>
        )}
      </button>
      <pre className={`overflow-x-auto font-mono leading-relaxed text-zinc-300 ${compact ? "text-xs" : "text-[13px]"}`}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function PropsTable({ component }: { component: ComponentMeta }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-200">
      <table className="w-full text-left text-[13px]">
        <thead>
          <tr className="border-b border-zinc-200 bg-zinc-50/80">
            <th className="whitespace-nowrap px-5 py-3 font-semibold text-zinc-900">Prop</th>
            <th className="whitespace-nowrap px-5 py-3 font-semibold text-zinc-900">Type</th>
            <th className="whitespace-nowrap px-5 py-3 font-semibold text-zinc-900">Default</th>
            <th className="px-5 py-3 font-semibold text-zinc-900">Description</th>
          </tr>
        </thead>
        <tbody>
          {component.props.map((prop, i) => (
            <tr
              key={prop.name}
              className={`transition-colors hover:bg-zinc-50/50 ${i < component.props.length - 1 ? "border-b border-zinc-100" : ""}`}
            >
              <td className="whitespace-nowrap px-5 py-3">
                <code className="rounded-md bg-zinc-100 px-1.5 py-0.5 font-mono text-xs font-medium text-zinc-800">
                  {prop.name}
                </code>
              </td>
              <td className="whitespace-nowrap px-5 py-3 font-mono text-xs text-zinc-500">
                {prop.type}
              </td>
              <td className="whitespace-nowrap px-5 py-3 font-mono text-xs text-zinc-400">
                {prop.default}
              </td>
              <td className="px-5 py-3 text-zinc-600">{prop.description}</td>
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
      <h2 className="text-[15px] font-semibold text-zinc-900">{children}</h2>
      <div className="h-px flex-1 bg-zinc-100" />
    </div>
  );
}

function ComponentDetail({ component }: { component: ComponentMeta }) {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  useEffect(() => {
    setTab("preview");
  }, [component.slug]);

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-2 text-[13px] text-zinc-400">
        <Link to="/components" className="transition-colors hover:text-zinc-600">Components</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-zinc-600">{component.category}</span>
        <ChevronRight className="h-3 w-3" />
        <span className="font-medium text-zinc-900">{component.name}</span>
      </div>

      <h1 className="mt-4 text-[2rem] font-medium tracking-tight text-zinc-900">
        {component.name}
      </h1>
      <p className="mt-2 text-[15px] leading-relaxed text-zinc-500">
        {component.description}
      </p>

      <div className="mt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 rounded-lg bg-zinc-100 p-1">
            <button
              onClick={() => setTab("preview")}
              className={`cursor-pointer rounded-md px-4 py-1.5 text-[13px] font-medium transition-all duration-150 ${
                tab === "preview"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => setTab("code")}
              className={`cursor-pointer rounded-md px-4 py-1.5 text-[13px] font-medium transition-all duration-150 ${
                tab === "code"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              Code
            </button>
          </div>
        </div>

        <div className="mt-3">
          {tab === "preview" ? (
            <div className="flex min-h-[280px] items-center justify-center rounded-xl border border-zinc-200 bg-white p-10">
              <div className="rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 px-8 py-6">
                <code className="font-mono text-sm text-zinc-500">{component.usage}</code>
              </div>
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

      <div className="mt-14">
        <SectionHeading>Props</SectionHeading>
        <div className="mt-4">
          <PropsTable component={component} />
        </div>
      </div>

      <div className="mt-14 pb-16">
        <SectionHeading>Usage</SectionHeading>
        <div className="mt-4">
          <CodeBlock code={component.code} />
        </div>
      </div>
    </div>
  );
}

function AllComponentsList() {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl">
      <h1 className="text-[2rem] font-medium tracking-tight text-zinc-900">
        Components
      </h1>
      <p className="mt-2 text-[15px] leading-relaxed text-zinc-500">
        Production-ready React components for wallets, tokens, chains, and transactions.
      </p>

      <div className="mt-12 flex flex-col gap-10">
        {CATEGORIES.map((category) => {
          const items = COMPONENTS.filter((c) => c.category === category);
          if (items.length === 0) return null;

          return (
            <div key={category}>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.08em] text-zinc-400">
                {category}
              </h2>
              <div className="mt-3 flex flex-col gap-2">
                {items.map((item) => (
                  <button
                    key={item.slug}
                    onClick={() => navigate(`/components/${item.slug}`)}
                    className="group flex cursor-pointer items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 text-left transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-zinc-300 hover:shadow-sm"
                  >
                    <div>
                      <h3 className="font-mono text-sm font-semibold text-zinc-900">
                        {"<"}{item.name}{" />"}
                      </h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-zinc-500">
                        {item.description}
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 shrink-0 text-zinc-300 transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-zinc-500" />
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
    <div className="min-h-screen" style={{ background: "white", backgroundImage: "none" }}>
      <header className="sticky top-0 z-40 border-b border-zinc-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="OnChainUI" width={24} height={24} className="h-6 w-6" />
              <span className="text-[15px] font-semibold text-zinc-900">OnChainUI</span>
            </Link>
            <span className="hidden h-5 w-px bg-zinc-200 md:block" />
            <div className="hidden items-center gap-5 md:flex">
              <Link to="/components" className="text-[13px] font-medium text-zinc-900">
                Components
              </Link>
              <a href="#" className="text-[13px] font-medium text-zinc-500 transition-colors hover:text-zinc-900">
                Docs
              </a>
              <a href="#" className="text-[13px] font-medium text-zinc-500 transition-colors hover:text-zinc-900">
                Templates
              </a>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="cursor-pointer rounded-lg p-1.5 text-zinc-600 transition-colors hover:bg-zinc-100 lg:hidden"
            aria-label="Toggle sidebar"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px]">
        <aside
          className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto border-r border-zinc-100 bg-white p-6 pt-20 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] lg:sticky lg:top-14 lg:z-auto lg:h-[calc(100vh-3.5rem)] lg:translate-x-0 ${
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
