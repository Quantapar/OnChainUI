import { Moon, Sun } from "lucide-react";
import { useTheme } from "../lib/useTheme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-colors duration-150 ease-out hover:border-zinc-300 hover:text-zinc-900 active:scale-[0.95] dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
