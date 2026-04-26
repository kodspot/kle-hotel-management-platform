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
          className="fixed inset-0 z-[130] overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.95, ease: [0.87, 0, 0.13, 1] } }}
        >
          <motion.div
            className="entry-light"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: [0.1, 0.55, 0.2], scale: [0.7, 1.05, 1.2] }}
            transition={{ duration: 1.8, ease: [0.87, 0, 0.13, 1] }}
          />

          <motion.div
            className="entry-door left-0"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.87, 0, 0.13, 1] }}
          />
          <motion.div
            className="entry-door right-0"
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.87, 0, 0.13, 1] }}
          />

          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.2, filter: "blur(16px)" }}
            animate={{ scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.35, ease: [0.87, 0, 0.13, 1] }}
          />

          <motion.p
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.36em] text-zinc-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.85, delay: 0.4, ease: [0.87, 0, 0.13, 1] }}
          >
            Welcome To KLE Hospitality
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
