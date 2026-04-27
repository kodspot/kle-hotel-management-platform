"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { AboutSection } from "./AboutSection";
import { AdmissionModal } from "./AdmissionModal";
import { CoursesSection } from "./CoursesSection";
import { CtaSection } from "./CtaSection";
import { FacilitiesSection } from "./FacilitiesSection";
import { HeroSection } from "./HeroSection";
import { LoadingScreen } from "./LoadingScreen";
import { PlacementsSection } from "./PlacementsSection";
import { PsychologySection } from "./PsychologySection";
import { SignatureEntryMoment } from "./SignatureEntryMoment";
import { SiteFooter } from "./SiteFooter";
import { navLinks } from "@/data/content";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { useLenisSmoothScroll } from "@/hooks/useLenisSmoothScroll";
import { useLuxurySound } from "@/hooks/useLuxurySound";

const StudentJourneyWowSection = dynamic(
  () => import("./StudentJourneyWowSection").then((module) => module.StudentJourneyWowSection),
);

export function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [showEntryMoment, setShowEntryMoment] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.sessionStorage.getItem("kle-entry-seen") !== "true";
  });
  const { soundEnabled, setSoundEnabled, playHoverTone, playTransitionTone } = useLuxurySound();

  useLenisSmoothScroll();
  useGsapReveal();

  useEffect(() => {
    let rafId = 0;

    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--cursor-x", `${x}%`);
        document.documentElement.style.setProperty("--cursor-y", `${y}%`);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setShowLoader(false);
    }, 1400);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (showLoader) {
      return;
    }

    if (showEntryMoment) {
      window.sessionStorage.setItem("kle-entry-seen", "true");

      const hideEntry = window.setTimeout(() => {
        setShowEntryMoment(false);
      }, 2100);

      return () => {
        window.clearTimeout(hideEntry);
      };
    }
  }, [showLoader, showEntryMoment]);

  useEffect(() => {
    if (showLoader) {
      return;
    }

    const searchParams = new URLSearchParams(window.location.search);
    const whatsappEntry = searchParams.get("src") === "wa" || searchParams.get("apply") === "1";

    if (whatsappEntry) {
      const instantOpen = window.setTimeout(() => {
        setShowModal(true);
      }, 420);

      return () => {
        window.clearTimeout(instantOpen);
      };
    }

    const promptDelay = window.setTimeout(() => {
      setShowPrompt(true);
    }, 8500);

    return () => {
      window.clearTimeout(promptDelay);
    };
  }, [showLoader]);

  return (
    <>
      <LoadingScreen show={showLoader} />
      <SignatureEntryMoment show={showEntryMoment} />
      <AdmissionModal open={showModal} onClose={() => setShowModal(false)} soundEnabled={soundEnabled} />

      <div className="cursor-glow-overlay pointer-events-none fixed inset-0 z-[2] hidden md:block" />

      <AnimatePresence>
        {showPrompt && !showModal ? (
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 26 }}
            transition={{ duration: 0.85, ease: [0.87, 0, 0.13, 1] }}
            onClick={() => {
              playTransitionTone();
              setShowPrompt(false);
              setShowModal(true);
            }}
            className="fixed bottom-6 right-6 z-[70] max-w-[280px] rounded-2xl border border-white/15 bg-black/70 px-4 py-3 text-left backdrop-blur-xl"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Admission Concierge</p>
            <p className="mt-1 text-sm text-zinc-100">Need help choosing the best course? Start quick check-in.</p>
          </motion.button>
        ) : null}
      </AnimatePresence>

      <header className="fixed inset-x-0 top-0 z-50 mx-auto w-full border-b border-white/5 bg-black/35 backdrop-blur-lg">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10">
          <a href="#home" className="text-sm uppercase tracking-[0.2em] text-zinc-200">
            KLE Hotel Management
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-xs uppercase tracking-[0.18em] text-zinc-400 transition hover:text-zinc-100">
                {link.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              playTransitionTone();
              setShowPrompt(false);
              setShowModal(true);
            }}
            onMouseEnter={playHoverTone}
            className="rounded-full border border-white/25 px-4 py-2 text-xs uppercase tracking-[0.16em] text-zinc-200 transition hover:border-white"
          >
            Apply
          </button>
          <button
            onClick={() => setSoundEnabled((prev) => !prev)}
            className="hidden rounded-full border border-white/20 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-zinc-400 md:block"
          >
            Sound {soundEnabled ? "On" : "Off"}
          </button>
        </div>
      </header>

      <main className="relative overflow-x-hidden overflow-y-clip">
        <div className="noise-overlay" />

        <HeroSection
          onOpenApply={() => {
            setShowPrompt(false);
            setShowModal(true);
          }}
        />
        <div data-transition className="scene-transition" />
        <AboutSection />
        <div data-transition className="scene-transition" />
        <CoursesSection />
        <div data-transition className="scene-transition" />
        <FacilitiesSection />
        <div data-transition className="scene-transition" />
        <StudentJourneyWowSection />
        <div data-transition className="scene-transition" />
        <PlacementsSection />
        <PsychologySection />
        <CtaSection
          onOpenApply={() => {
            playTransitionTone();
            setShowPrompt(false);
            setShowModal(true);
          }}
        />
        <SiteFooter />
      </main>
    </>
  );
}
