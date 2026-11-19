import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ProjectsExplorer } from "@/components/projects/projects-explorer";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Projects",
  description: "Mobile apps for health, games, faith and everyday life, with on-device AI. Built end to end.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 md:pt-20">
      <PageHeader
        page="projects"
        eyebrow="Selected work"
        title={<>Things I&apos;ve <span className="text-gradient">built.</span></>}
        intro={
          <p>
            I don&apos;t build apps just to have another repository on GitHub. I like taking a real problem, turning it into a
            product, and figuring out what it takes to make the thing actually work.
          </p>
        }
      />
      <ProjectsExplorer />
      <Reveal className="mt-24 max-w-3xl border-l-2 border-blue/50 pl-6 md:pl-8">
        <p className="text-lg leading-relaxed text-muted md:text-2xl">
          The projects are different, but the pattern is the same:
          <span className="text-fg"> find something worth solving, learn what I don&apos;t know, build the first version, break it, fix it, and keep going.</span>
        </p>
      </Reveal>
    </div>
  );
}
