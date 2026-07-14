"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] flex-col items-start justify-center px-6"
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-sm text-zinc-500 dark:text-zinc-400"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-6xl dark:text-zinc-50"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400"
        >
          {profile.role} — {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Get in touch
          </a>
          <a
            href={profile.resumeUrl}
            className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
          >
            Résumé
          </a>

          <div className="ml-2 flex items-center gap-3 text-zinc-500 dark:text-zinc-400">
            <a
              href={profile.socials.github}
              aria-label="GitHub"
              className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              <GithubIcon className="h-[19px] w-[19px]" />
            </a>
            <a
              href={profile.socials.linkedin}
              aria-label="LinkedIn"
              className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              <LinkedinIcon className="h-[19px] w-[19px]" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              <Mail size={19} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-400 dark:text-zinc-500"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
