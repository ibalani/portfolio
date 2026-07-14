import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-black/5 px-6 py-8 text-center text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">
      © {new Date().getFullYear()} {profile.name}. Full-court build with
      Next.js & Tailwind.
    </footer>
  );
}
