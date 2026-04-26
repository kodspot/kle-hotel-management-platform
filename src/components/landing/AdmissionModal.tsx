"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { courses, whatsappNumber } from "@/data/content";

type AdmissionModalProps = {
  open: boolean;
  onClose: () => void;
  soundEnabled: boolean;
};

type FormState = {
  name: string;
  phone: string;
  course: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  course: courses[0].title,
};

const stepLabels = ["Name", "Program", "Phone", "Review"] as const;

export function AdmissionModal({ open, onClose, soundEnabled }: AdmissionModalProps) {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [stepIndex, setStepIndex] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "error" | "success">("idle");
  const [isStepTransitioning, setIsStepTransitioning] = useState(false);
  const [pulseTick, setPulseTick] = useState(0);

  const progress = ((stepIndex + 1) / stepLabels.length) * 100;
  const targetPrompt =
    stepIndex === 0
      ? "Welcome. Let us begin your journey. May we have your name?"
      : stepIndex === 1
        ? `Wonderful, ${formState.name || "future professional"}. Which program feels right for your dream career?`
        : stepIndex === 2
          ? "Please share your number and our counselor will reach out with personal guidance shortly."
          : "Lovely. Please review your details before we connect you with our concierge.";

  const whatsappUrl = useMemo(() => {
    const message = `Hi, I am ${formState.name}. I want admission guidance for ${formState.course}. My phone number is ${formState.phone}. Please schedule my counseling.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }, [formState.course, formState.name, formState.phone]);

  useEffect(() => {
    if (!soundEnabled) {
      return;
    }

    const AudioCtx = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

    if (!AudioCtx) {
      return;
    }

    const context = new AudioCtx();
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = "triangle";
    oscillator.frequency.value = 520 + stepIndex * 34;
    gain.gain.value = 0.0001;
    gain.gain.exponentialRampToValueAtTime(0.015, context.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.14);

    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.15);

    return () => {
      context.close();
    };
  }, [soundEnabled, stepIndex]);

  const goNext = () => {
    if (stepIndex === 0 && !formState.name.trim()) {
      setStatus("error");
      return;
    }

    if (stepIndex === 2 && !formState.phone.trim()) {
      setStatus("error");
      return;
    }

    setIsStepTransitioning(true);
    setStatus("idle");
    setPulseTick((prev) => prev + 1);
    window.setTimeout(() => {
      setStepIndex((prev) => Math.min(prev + 1, stepLabels.length - 1));
      setIsStepTransitioning(false);
    }, 240);
  };

  const goBack = () => {
    setIsStepTransitioning(true);
    setStatus("idle");
    window.setTimeout(() => {
      setStepIndex((prev) => Math.max(prev - 1, 0));
      setIsStepTransitioning(false);
    }, 220);
  };

  const closeModal = () => {
    onClose();
    window.setTimeout(() => {
      setStepIndex(0);
      setStatus("idle");
    }, 140);
  };

  const onSubmit = async () => {
    if (!formState.name || !formState.phone || !formState.course) {
      setStatus("error");
      return;
    }

    try {
      setStatus("submitting");

      const response = await fetch("/api/admissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          source: window.location.search.includes("src=wa") ? "whatsapp-link" : "landing-page",
        }),
      });

      if (!response.ok) {
        throw new Error("Lead submission failed");
      }

      setStatus("success");

      window.setTimeout(() => {
        window.location.href = whatsappUrl;
      }, 1100);
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
            initial={{ opacity: 0, y: 26, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.9, ease: [0.87, 0, 0.13, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="grid min-h-[640px] md:grid-cols-[0.95fr_1.05fr]">
              <div className="relative hidden overflow-hidden border-r border-white/10 md:block">
                <Image
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1400&q=70"
                  alt="Hospitality concierge admission"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="absolute inset-0 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(0,0,0,0.32),rgba(0,0,0,0.9))]" />
                <div className="relative z-10 flex h-full flex-col justify-between p-8">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-300">KLE Concierge Check-In</p>
                  <div>
                    <h4 className="max-w-xs text-4xl leading-tight text-white">Hospitality admissions curated with executive precision.</h4>
                    <div className="mt-6 space-y-3 text-sm text-zinc-300">
                      <p>Apply in 30 seconds</p>
                      <p>Priority counseling support</p>
                      <p>Placement-oriented course matching</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col p-6 md:p-9">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Concierge Form</p>
                    <h4 className="mt-2 text-2xl tracking-tight text-white md:text-3xl">Your Premium Admission Entry</h4>
                  </div>
                  <button onClick={closeModal} className="rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-300">
                    Close
                  </button>
                </div>

                <div className="mt-5 h-1 w-full rounded-full bg-white/10">
                  <motion.div className="h-full rounded-full bg-[#d6b57d]" animate={{ width: `${progress}%` }} transition={{ duration: 0.9, ease: [0.87, 0, 0.13, 1] }} />
                </div>

                <div className="mt-2 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                  <span>Step {stepIndex + 1}</span>
                  <span className="flex items-center gap-2">
                    {stepLabels[stepIndex]}
                    <motion.span
                      key={pulseTick}
                      className="inline-block h-2 w-2 rounded-full bg-[#d6b57d]"
                      initial={{ scale: 0.6, opacity: 0.35 }}
                      animate={{ scale: [0.6, 1.35, 1], opacity: [0.35, 1, 0.7] }}
                      transition={{ duration: 0.85, ease: [0.87, 0, 0.13, 1] }}
                    />
                  </span>
                </div>

                <div className="mt-8 flex-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={stepLabels[stepIndex]}
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 1.02, ease: [0.87, 0, 0.13, 1] }}
                      className="space-y-5"
                    >
                      <p className="min-h-[52px] text-base leading-relaxed text-zinc-300 md:text-lg">
                        <span key={targetPrompt} className="typewriter-text">{targetPrompt}</span>
                      </p>

                      {stepIndex === 0 ? (
                        <div className="space-y-4">
                          <label className="block">
                            <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-zinc-500">Your Name</span>
                            <input
                              autoFocus
                              className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-zinc-100 outline-none"
                              type="text"
                              name="name"
                              value={formState.name}
                              onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
                              placeholder="Enter your full name"
                              required
                            />
                          </label>
                        </div>
                      ) : null}

                      {stepIndex === 1 ? (
                        <div className="space-y-3">
                          <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-zinc-500">Select Course</span>
                          <div className="grid gap-3">
                            {courses.map((course) => {
                              const active = formState.course === course.title;
                              return (
                                <button
                                  key={course.title}
                                  type="button"
                                  onClick={() => setFormState((prev) => ({ ...prev, course: course.title }))}
                                  className={`rounded-2xl border px-4 py-4 text-left transition ${
                                    active
                                      ? "border-[#d6b57d] bg-[#d6b57d]/10 text-white"
                                      : "border-white/10 bg-white/[0.02] text-zinc-300 hover:border-white/25"
                                  }`}
                                >
                                  <div className="flex items-center justify-between gap-4">
                                    <div>
                                      <p className="text-sm font-medium">{course.title}</p>
                                      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-500">{course.duration}</p>
                                    </div>
                                    {active ? <span className="text-[#d6b57d]">✓</span> : null}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ) : null}

                      {stepIndex === 2 ? (
                        <label className="block">
                          <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-zinc-500">Phone Number</span>
                          <input
                            autoFocus
                            className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-zinc-100 outline-none"
                            type="tel"
                            name="phone"
                            value={formState.phone}
                            onChange={(event) => setFormState((prev) => ({ ...prev, phone: event.target.value }))}
                            placeholder="Enter your mobile number"
                            required
                          />
                          <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[#d6b57d]">Apply in 30 seconds</p>
                        </label>
                      ) : null}

                      {stepIndex === 3 ? (
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                          <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">Review Details</p>
                          <dl className="mt-4 space-y-3 text-sm text-zinc-300">
                            <div className="flex items-center justify-between gap-3">
                              <dt>Name</dt>
                              <dd>{formState.name}</dd>
                            </div>
                            <div className="flex items-center justify-between gap-3">
                              <dt>Program</dt>
                              <dd className="max-w-[65%] text-right">{formState.course}</dd>
                            </div>
                            <div className="flex items-center justify-between gap-3">
                              <dt>Phone</dt>
                              <dd>{formState.phone}</dd>
                            </div>
                          </dl>
                        </div>
                      ) : null}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {status === "error" ? (
                  <p className="mt-2 text-sm text-red-400">Please complete this step correctly before continuing.</p>
                ) : null}

                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.87, 0, 0.13, 1] }}
                    className="mt-2 flex items-center gap-2 text-sm text-emerald-300"
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20">✓</span>
                    Our counselor will contact you shortly. Redirecting to WhatsApp concierge...
                  </motion.div>
                ) : null}

                <div className="mt-6 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={stepIndex === 0 || status === "submitting" || status === "success" || isStepTransitioning}
                    aria-disabled={stepIndex === 0 || status === "submitting" || status === "success" || isStepTransitioning}
                    className="rounded-full border border-white/15 px-5 py-2 text-xs uppercase tracking-[0.14em] text-zinc-300 transition disabled:cursor-not-allowed disabled:opacity-35"
                  >
                    Back
                  </button>

                  {stepIndex < stepLabels.length - 1 ? (
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={isStepTransitioning}
                      className="lux-button rounded-full bg-white px-6 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={onSubmit}
                      disabled={status === "submitting" || status === "success"}
                      className="lux-button rounded-full bg-white px-6 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black disabled:cursor-not-allowed disabled:opacity-80"
                    >
                      {status === "submitting" ? "Submitting..." : "Submit & Open WhatsApp"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
