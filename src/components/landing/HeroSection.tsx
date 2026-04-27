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
    <section
      ref={heroRef}
      data-chapter
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden px-6 pb-16 pt-24 opacity-0 md:px-14 md:pb-28"
      id="home"
    >
      {/* Background video / fallback image */}
      <video
        data-hero-media
        data-mouse-layer
        data-depth="10"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "left center" }}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/kle/chef-students.jpg"
      >
        <source src="https://cdn.coverr.co/videos/coverr-luxury-hotel-lobby-9589/1080p.mp4" type="video/mp4" />
        <source src="https://cdn.coverr.co/videos/coverr-pouring-a-champagne-into-glasses-3863/1080p.mp4" type="video/mp4" />
      </video>

      {/* Rich gradient overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,5,4,0.96)_0%,rgba(5,5,4,0.55)_45%,rgba(5,5,4,0.25)_100%)]" />
      <div
        data-hero-overlay
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 75% 20%, rgba(209,178,122,0.18) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(5,5,4,0.5) 0%, transparent 50%)",
        }}
      />

      {/* Ambient floats */}
      <div data-mouse-layer data-depth="22" className="ambient-float ambient-a" />
      <div data-mouse-layer data-depth="28" className="ambient-float ambient-b" />
      <div data-mouse-layer data-depth="14" className="ambient-float ambient-c" />
      <div className="hero-particles" />

      {/* Content */}
      <div
        data-chapter-content
        data-mouse-layer
        data-depth="9"
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <p className="hero-kicker text-[10px] uppercase tracking-[0.3em] text-[#d1b27a]">
          KLE Graduate School of Hotel Management — Belagavi
        </p>

        <h1
          ref={titleRef}
          className="hero-title mt-5 max-w-4xl text-5xl leading-[1.02] tracking-[-0.01em] text-white md:text-7xl lg:text-8xl"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Your Place in the Wide World of Hospitality
        </h1>

        <p
          ref={subtitleRef}
          className="hero-subtitle mt-6 max-w-lg text-base leading-relaxed text-zinc-300 md:text-lg"
        >
          A premium 4-year BHMCT degree — North Karnataka&apos;s first, ranked among India&apos;s top 4 hotel management institutions. IFCA accredited.
        </p>

        <div ref={ctaRef} className="hero-actions mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={onOpenApply}
            className="lux-button rounded-full bg-white px-8 py-3.5 text-sm font-medium tracking-wide text-black"
          >
            Apply Now
          </button>
          <a
            href="#placements"
            className="lux-outline rounded-full border border-white/40 px-8 py-3.5 text-sm font-medium tracking-wide text-white"
          >
            Explore Placements
          </a>
        </div>

        {/* Three trust tags */}
        <div className="mt-10 hidden items-center gap-8 md:flex">
          {["100% Placement Assistance", "International Internships", "IFCA Accredited"].map((tag) => (
            <div key={tag} className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-[#d1b27a]" />
              <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">{tag}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-400">Scroll</p>
        <div className="h-8 w-px bg-gradient-to-b from-[#d1b27a] to-transparent" />
      </div>
    </section>
  );
}
