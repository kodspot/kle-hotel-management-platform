"use client";

import { useEffect, useRef, useState } from "react";

type AudioType = "hover" | "transition";

export function useLuxurySound() {
  const [soundEnabled, setSoundEnabled] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.localStorage.getItem("kle-sound-enabled") === "true";
  });
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    window.localStorage.setItem("kle-sound-enabled", soundEnabled ? "true" : "false");
  }, [soundEnabled]);

  const playTone = (type: AudioType) => {
    if (!soundEnabled) {
      return;
    }

    const AudioCtx = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

    if (!AudioCtx) {
      return;
    }

    const context = audioContextRef.current ?? new AudioCtx();
    audioContextRef.current = context;

    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = type === "hover" ? 440 : 660;

    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.02, context.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.17);

    oscillator.connect(gain);
    gain.connect(context.destination);

    oscillator.start();
    oscillator.stop(context.currentTime + 0.18);
  };

  return {
    soundEnabled,
    setSoundEnabled,
    playHoverTone: () => playTone("hover"),
    playTransitionTone: () => playTone("transition"),
  };
}
