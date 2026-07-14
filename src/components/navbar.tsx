"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { BasketballIcon } from "@/components/icons";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "Scouting" },
  { href: "#experience", label: "Game Log" },
  { href: "#projects", label: "Highlights" },
  { href: "#skills", label: "Starting 5" },
  { href: "#contact", label: "Get in the Game" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/70">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <BasketballIcon className="h-4 w-4 text-orange-600 dark:text-orange-500" />
          {profile.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-black/5 px-6 py-4 text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-400 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2 transition-colors hover:bg-black/5 hover:text-zinc-950 dark:hover:bg-white/10 dark:hover:text-zinc-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
