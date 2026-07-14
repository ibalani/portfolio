import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { experience, sectionLabels } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <SectionEyebrow {...sectionLabels.experience} />
      </Reveal>

      <div className="mt-8 space-y-10">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08}>
            <div className="grid gap-1 sm:grid-cols-[180px_1fr] sm:gap-6">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {job.start} — {job.end}
              </p>
              <div>
                <h3 className="font-medium text-zinc-950 dark:text-zinc-50">
                  {job.role} · {job.company}
                </h3>
                {job.location && (
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {job.location}
                  </p>
                )}
                <ul className="mt-3 list-disc space-y-1.5 pl-4 text-zinc-700 marker:text-orange-500 dark:text-zinc-300">
                  {job.highlights.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
