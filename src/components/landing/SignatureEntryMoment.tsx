"use client";

import { AnimatePresence, motion } from "framer-motion";

type SignatureEntryMomentProps = {
  show: boolean;
};

export function SignatureEntryMoment({ show }: SignatureEntryMomentProps) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[130] overflow-hidden"
          style={{ background: "#030302" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.65, ease: [0.87, 0, 0.13, 1] } }}
        >
          {/* ── Left Door Panel ─────────────────────── */}
          <motion.div
            className="absolute bottom-0 left-0 top-0 w-1/2 overflow-hidden"
            style={{
              background: "linear-gradient(170deg, #120b04 0%, #1f1208 20%, #2b1809 45%, #1e1007 70%, #0e0804 100%)",
              borderRight: "1px solid rgba(209,178,122,0.55)",
            }}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 1.35, delay: 0.65, ease: [0.87, 0, 0.13, 1] }}
          >
            {/* Outer frame inset */}
            <div
              className="absolute inset-4"
              style={{ border: "1px solid rgba(209,178,122,0.18)", borderRadius: "2px" }}
            />
            {/* Inner frame inset */}
            <div
              className="absolute inset-9"
              style={{ border: "1px solid rgba(209,178,122,0.09)", borderRadius: "1px" }}
            />
            {/* Top panel */}
            <div
              className="absolute left-8 right-8"
              style={{
                top: "6%",
                height: "34%",
                border: "1px solid rgba(209,178,122,0.22)",
                background: "linear-gradient(160deg, rgba(255,255,255,0.025), rgba(0,0,0,0.1))",
                borderRadius: "2px",
              }}
            />
            {/* Bottom panel */}
            <div
              className="absolute left-8 right-8"
              style={{
                bottom: "6%",
                height: "34%",
                border: "1px solid rgba(209,178,122,0.22)",
                background: "linear-gradient(160deg, rgba(255,255,255,0.025), rgba(0,0,0,0.1))",
                borderRadius: "2px",
              }}
            />
            {/* Gold vertical edge trim */}
            <div
              className="absolute right-0 bottom-0 top-0 w-px"
              style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(209,178,122,0.7) 30%, rgba(209,178,122,0.7) 70%, transparent 100%)" }}
            />
            {/* Gold horizontal centre stripe */}
            <div
              className="absolute left-8 right-8"
              style={{
                top: "calc(44% - 1px)",
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(209,178,122,0.28), transparent)",
              }}
            />
            {/* Door knob */}
            <div
              className="absolute"
              style={{ right: "14px", top: "50%", transform: "translateY(-50%)" }}
            >
              <div
                style={{
                  width: "12px",
                  height: "36px",
                  borderRadius: "6px",
                  border: "1px solid rgba(209,178,122,0.8)",
                  background: "linear-gradient(to right, #7a5a22, #d4b57c, #8a6428, #c9a355, #7a5a22)",
                  boxShadow: "0 0 8px rgba(209,178,122,0.35), inset 0 1px 2px rgba(255,255,255,0.2)",
                }}
              />
            </div>
          </motion.div>

          {/* ── Right Door Panel ─────────────────────── */}
          <motion.div
            className="absolute bottom-0 right-0 top-0 w-1/2 overflow-hidden"
            style={{
              background: "linear-gradient(190deg, #0e0804 0%, #1e1007 25%, #2b1809 50%, #1f1208 75%, #120b04 100%)",
              borderLeft: "1px solid rgba(209,178,122,0.55)",
            }}
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.35, delay: 0.65, ease: [0.87, 0, 0.13, 1] }}
          >
            {/* Outer frame */}
            <div
              className="absolute inset-4"
              style={{ border: "1px solid rgba(209,178,122,0.18)", borderRadius: "2px" }}
            />
            {/* Inner frame */}
            <div
              className="absolute inset-9"
              style={{ border: "1px solid rgba(209,178,122,0.09)", borderRadius: "1px" }}
            />
            {/* Top panel */}
            <div
              className="absolute left-8 right-8"
              style={{
                top: "6%",
                height: "34%",
                border: "1px solid rgba(209,178,122,0.22)",
                background: "linear-gradient(160deg, rgba(255,255,255,0.025), rgba(0,0,0,0.1))",
                borderRadius: "2px",
              }}
            />
            {/* Bottom panel */}
            <div
              className="absolute left-8 right-8"
              style={{
                bottom: "6%",
                height: "34%",
                border: "1px solid rgba(209,178,122,0.22)",
                background: "linear-gradient(160deg, rgba(255,255,255,0.025), rgba(0,0,0,0.1))",
                borderRadius: "2px",
              }}
            />
            {/* Gold left edge trim */}
            <div
              className="absolute left-0 bottom-0 top-0 w-px"
              style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(209,178,122,0.7) 30%, rgba(209,178,122,0.7) 70%, transparent 100%)" }}
            />
            {/* Gold horizontal centre stripe */}
            <div
              className="absolute left-8 right-8"
              style={{
                top: "calc(44% - 1px)",
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(209,178,122,0.28), transparent)",
              }}
            />
            {/* Door knob */}
            <div
              className="absolute"
              style={{ left: "14px", top: "50%", transform: "translateY(-50%)" }}
            >
              <div
                style={{
                  width: "12px",
                  height: "36px",
                  borderRadius: "6px",
                  border: "1px solid rgba(209,178,122,0.8)",
                  background: "linear-gradient(to right, #7a5a22, #d4b57c, #8a6428, #c9a355, #7a5a22)",
                  boxShadow: "0 0 8px rgba(209,178,122,0.35), inset 0 1px 2px rgba(255,255,255,0.2)",
                }}
              />
            </div>
          </motion.div>

          {/* ── Central glow bloom ─────────────────────── */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "min(70vw, 700px)",
              height: "min(70vw, 700px)",
              background: "radial-gradient(circle, rgba(240,215,163,0.48) 0%, rgba(209,178,122,0.12) 38%, transparent 68%)",
              filter: "blur(22px)",
            }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: [0, 0.65, 0.35], scale: [0.4, 1.15, 1.4] }}
            transition={{ duration: 2.2, ease: "easeOut" }}
          />

          {/* ── Monogram centrepiece ─────────────────────── */}
          <motion.div
            className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            {/* Top gold rule */}
            <div
              style={{
                width: "1px",
                height: "52px",
                background: "linear-gradient(to bottom, transparent, rgba(209,178,122,0.8))",
              }}
            />
            {/* KLE monogram */}
            <motion.p
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
                letterSpacing: "0.18em",
                color: "#fff",
                lineHeight: 1,
                textShadow: "0 0 40px rgba(209,178,122,0.5)",
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              KLE
            </motion.p>
            {/* Gold divider */}
            <motion.div
              style={{
                height: "1px",
                width: "80px",
                background: "linear-gradient(90deg, transparent, #d1b27a, transparent)",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.55, delay: 0.4 }}
            />
            <motion.p
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.48em",
                color: "#d1b27a",
                textTransform: "uppercase",
                opacity: 0.9,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Hotel Management
            </motion.p>
            {/* Bottom gold rule */}
            <div
              style={{
                width: "1px",
                height: "52px",
                background: "linear-gradient(to top, transparent, rgba(209,178,122,0.8))",
              }}
            />
          </motion.div>

          {/* ── Welcome text ─────────────────────────── */}
          <motion.p
            className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
            style={{ fontSize: "0.6rem", letterSpacing: "0.42em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Welcome
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
