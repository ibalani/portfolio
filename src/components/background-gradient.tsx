"use client";

import { motion } from "framer-motion";

export function BackgroundGradient() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        className="absolute -top-32 -left-32 h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-rose-300 via-fuchsia-300 to-indigo-300 opacity-30 blur-[110px] dark:from-rose-600 dark:via-fuchsia-700 dark:to-indigo-700 dark:opacity-20"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 -right-40 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-sky-300 via-indigo-300 to-violet-300 opacity-25 blur-[110px] dark:from-sky-700 dark:via-indigo-700 dark:to-violet-800 dark:opacity-15"
        animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-amber-200 via-orange-200 to-rose-200 opacity-25 blur-[110px] dark:from-amber-700 dark:via-orange-700 dark:to-rose-800 dark:opacity-15"
        animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 -bottom-32 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-emerald-200 via-teal-200 to-sky-200 opacity-20 blur-[110px] dark:from-emerald-800 dark:via-teal-800 dark:to-sky-800 dark:opacity-12"
        animate={{ x: [0, -20, 0], y: [0, -25, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
