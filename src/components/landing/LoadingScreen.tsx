"use client";

import { AnimatePresence, motion } from "framer-motion";

type LoadingScreenProps = {
  show: boolean;
};

export function LoadingScreen({ show }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[120] flex flex-col items-center justify-center"
          style={{ background: "#050504" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] } }}
        >
          {/* SVG ring with animated stroke */}
          <div className="relative flex items-center justify-center">
            <svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
              className="absolute"
              style={{ transform: "rotate(-90deg)" }}
            >
              <circle cx="48" cy="48" r="44" stroke="rgba(209,178,122,0.12)" strokeWidth="1" />
              <motion.circle
                cx="48"
                cy="48"
                r="44"
                stroke="#d1b27a"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray={276.46}
                initial={{ strokeDashoffset: 276.46 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
              />
            </svg>

            {/* Monogram */}
            <motion.div
              className="flex flex-col items-center gap-1"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            >
              <span
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "1.75rem",
                  letterSpacing: "0.14em",
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                KLE
              </span>
            </motion.div>
          </div>

          {/* Brand text */}
          <motion.p
            className="mt-6 text-[10px] uppercase tracking-[0.45em] text-[#d1b27a]"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 0.85, letterSpacing: "0.45em" }}
            transition={{ duration: 0.85, delay: 0.45 }}
          >
            Hotel Management
          </motion.p>

          <motion.p
            className="mt-2 text-[9px] uppercase tracking-[0.22em] text-zinc-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.85 }}
          >
            Excellence in Hospitality
          </motion.p>

          {/* Bottom gold line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(209,178,122,0.4), transparent)" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
