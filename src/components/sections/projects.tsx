import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <h2 className="text-sm font-mono text-zinc-500 dark:text-zinc-400">
          03 · Projects
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-black/10 p-6 transition-colors hover:border-black/20 dark:border-white/10 dark:hover:border-white/20">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-medium text-zinc-950 dark:text-zinc-50">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400">
                  {project.repo && (
                    <a
                      href={project.repo}
                      aria-label={`${project.title} repository`}
                      className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
                    >
                      <GithubIcon className="h-[17px] w-[17px]" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      aria-label={`${project.title} live link`}
                      className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-black/5 px-2.5 py-1 text-xs text-zinc-600 dark:bg-white/10 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
