import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return "light";
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
    const duration = 0.026;

    const buffer = audioCtx.createBuffer(
      1,
      Math.floor(audioCtx.sampleRate * duration),
      audioCtx.sampleRate,
    );
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      const decay = 1 - i / data.length;
      data[i] = (Math.random() * 2 - 1) * decay * decay;
    }

    const source = audioCtx.createBufferSource();
    source.buffer = buffer;

    const highpass = audioCtx.createBiquadFilter();
    highpass.type = "highpass";
    highpass.frequency.value = toDark ? 1500 : 2300;
    highpass.Q.value = 1;

    const peak = audioCtx.createBiquadFilter();
    peak.type = "peaking";
    peak.frequency.value = toDark ? 3000 : 4000;
    peak.Q.value = 1.6;
    peak.gain.value = 12;

    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.75, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    source.connect(highpass);
    highpass.connect(peak);
    peak.connect(gain);
    gain.connect(audioCtx.destination);
    source.start(now);
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
