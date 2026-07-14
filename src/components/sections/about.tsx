import { Reveal } from "@/components/reveal";
import { about } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <h2 className="text-sm font-mono text-zinc-500 dark:text-zinc-400">
          01 · About
        </h2>
        <div className="mt-4 max-w-2xl space-y-4 text-lg text-zinc-700 dark:text-zinc-300">
          {about.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
