"use client";

import { motion } from "framer-motion";

// Stylized top-down half-court markings — boundary, key, free-throw circle,
// three-point arc — mirrored left/right into a full court.
function CourtLines() {
  return (
    <svg
      viewBox="0 0 200 100"
      className="h-full w-full text-black/[0.06] dark:text-white/[0.08]"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.6}
    >
      <rect x="4" y="4" width="192" height="92" rx="1" />
      <line x1="100" y1="4" x2="100" y2="96" />
      <circle cx="100" cy="50" r="10" />

      <rect x="4" y="32" width="36" height="36" />
      <circle cx="40" cy="50" r="10" />
      <path d="M 4 14 A 76 76 0 0 1 4 86" />

      <rect x="160" y="32" width="36" height="36" />
      <circle cx="160" cy="50" r="10" />
      <path d="M 196 14 A 76 76 0 0 0 196 86" />
    </svg>
  );
}

export function CourtBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 h-[70vw] max-h-[900px] w-[140vw] max-w-[1800px] -translate-x-1/2 -translate-y-1/2">
        <CourtLines />
      </div>

      <motion.div
        className="absolute -top-40 left-1/2 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-300 via-orange-300 to-transparent opacity-35 blur-[120px] dark:from-orange-500 dark:via-orange-700 dark:opacity-25"
        animate={{ x: ["-52%", "-48%", "-52%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-orange-200 via-amber-200 to-transparent opacity-25 blur-[110px] dark:from-orange-700 dark:via-red-800 dark:opacity-15"
        animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-orange-200 via-amber-100 to-transparent opacity-20 blur-[110px] dark:from-orange-800 dark:via-black dark:opacity-15"
        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
