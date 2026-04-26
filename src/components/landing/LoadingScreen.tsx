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
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1] } }}
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              className="h-12 w-12 rounded-full border border-zinc-500 border-t-white"
              animate={{ rotate: 360 }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
            />
            <motion.p
              className="text-xs uppercase tracking-[0.28em] text-zinc-400"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
            >
              KLE Hospitality
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
