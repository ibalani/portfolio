import { Reveal } from "@/components/reveal";
import { certifications, skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <h2 className="text-sm font-mono text-zinc-500 dark:text-zinc-400">
          04 · Skills
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.08}>
            <div>
              <h3 className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                {group.category}
              </h3>
              <ul className="mt-3 space-y-1.5 text-zinc-600 dark:text-zinc-400">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={skills.length * 0.08}>
        <div className="mt-10 border-t border-black/5 pt-6 dark:border-white/10">
          <h3 className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
            Certifications
          </h3>
          <ul className="mt-3 space-y-1.5 text-zinc-600 dark:text-zinc-400">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
