import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { profile, sectionLabels } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <SectionEyebrow {...sectionLabels.contact} />
        <h3 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Let&apos;s run it back.
        </h3>
        <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
          I&apos;m always open to new opportunities and conversations. Feel
          free to reach out.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-700"
        >
          <Mail size={16} />
          {profile.email}
        </a>

        <div className="mt-8 flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
          <a
            href={profile.socials.github}
            className="flex items-center gap-2 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            <GithubIcon className="h-[17px] w-[17px]" /> GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            className="flex items-center gap-2 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            <LinkedinIcon className="h-[17px] w-[17px]" /> LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  );
}
