import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(next: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", next === "dark");
  localStorage.setItem("theme", next);
}

let audioCtx: AudioContext | null = null;

function playClickSound(toDark: boolean) {
  try {
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    if (!audioCtx) audioCtx = new Ctx();
    if (audioCtx.state === "suspended") audioCtx.resume();

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    const startFreq = toDark ? 900 : 600;
    const endFreq = toDark ? 380 : 1100;

    osc.type = "triangle";
    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.06);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.18, now + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.1);
  } catch {
    // audio is non-essential, fail silently
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";

    playClickSound(next === "dark");

    const commit = () => {
      flushSync(() => {
        applyTheme(next);
        setTheme(next);
      });
    };

    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { ready: Promise<void> };
    };

    if (!doc.startViewTransition) {
      commit();
      return;
    }

    doc.startViewTransition(commit);
  };

  return { theme, toggle };
}
