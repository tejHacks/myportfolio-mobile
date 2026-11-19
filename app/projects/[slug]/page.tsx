import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { ProjectDetail } from "@/components/projects/project-detail";

export const dynamicParams = false;

/** Independent products that should never be suggested alongside each other. */
const keepApart: string[][] = [["cribdoc", "lumicare"]];

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return { title: p.name, description: p.tagline, openGraph: { title: p.name, description: p.tagline } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  // Related: share a category, excluding self and unrelated products
  const related = projects
    .filter(
      (p) =>
        p.slug !== project.slug &&
        !keepApart.some((pair) => pair.includes(project.slug) && pair.includes(p.slug)) &&
        p.categories.some((c) => project.categories.includes(c)),
    )
    .slice(0, 3);

  return <ProjectDetail project={project} related={related} />;
}
