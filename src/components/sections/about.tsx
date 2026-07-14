import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { about, sectionLabels } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <SectionEyebrow {...sectionLabels.about} />
        <div className="mt-4 max-w-2xl space-y-4 text-lg text-zinc-700 dark:text-zinc-300">
          {about.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
