"use client";

import { RefObject, useRef } from "react";
import { useGsapIntro } from "@/hooks/useGsapIntro";

type HeroSectionProps = {
  onOpenApply: () => void;
};

export function HeroSection({ onOpenApply }: HeroSectionProps) {
  const heroRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useGsapIntro(
    heroRef as RefObject<HTMLElement>,
    titleRef as RefObject<HTMLElement>,
    subtitleRef as RefObject<HTMLElement>,
    ctaRef as RefObject<HTMLElement>,
  );

  return (
    <section ref={heroRef} data-chapter className="relative isolate flex min-h-screen items-end overflow-hidden px-6 pb-16 pt-28 opacity-0 md:px-12 md:pb-24" id="home">
      <video
        data-hero-media
        data-mouse-layer
        data-depth="10"
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1600&q=60"
      >
        <source src="https://cdn.coverr.co/videos/coverr-pouring-a-champagne-into-glasses-3863/1080p.mp4" type="video/mp4" />
      </video>

      <video
        data-mouse-layer
        data-depth="16"
        className="absolute inset-0 h-full w-full object-cover mix-blend-screen opacity-20"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      >
        <source src="https://cdn.coverr.co/videos/coverr-mood-lights-1579/1080p.mp4" type="video/mp4" />
      </video>

      <div data-hero-overlay className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(227,192,120,0.26),rgba(0,0,0,0.7)_42%,rgba(0,0,0,0.86)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.1),rgba(10,10,10,0.9))]" />
      <div data-mouse-layer data-depth="22" className="ambient-float ambient-a" />
      <div data-mouse-layer data-depth="28" className="ambient-float ambient-b" />
      <div data-mouse-layer data-depth="14" className="ambient-float ambient-c" />
      <div className="hero-particles" />

      <div data-chapter-content data-mouse-layer data-depth="9" className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="hero-kicker text-[11px] uppercase tracking-[0.22em] text-zinc-300">KLE Hotel Management</p>
        <h1 ref={titleRef} className="hero-title mt-5 max-w-4xl text-4xl leading-[1.02] tracking-[0.01em] text-white md:text-8xl">
          Your Future in Hospitality Starts Here
        </h1>
        <p ref={subtitleRef} className="hero-subtitle mt-7 max-w-xl text-base leading-relaxed text-zinc-200 md:text-xl">
          A premium institute experience built for global careers in hotels, culinary arts, and luxury guest services.
        </p>
        <div ref={ctaRef} className="hero-actions mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={onOpenApply}
            className="lux-button rounded-full bg-white px-8 py-3 text-sm font-medium tracking-wide text-black"
          >
            Apply Now
          </button>
          <a
            href="#placements"
            className="lux-outline rounded-full border border-white/45 px-8 py-3 text-sm font-medium tracking-wide text-white"
          >
            Explore Placements
          </a>
        </div>
      </div>
    </section>
  );
}
