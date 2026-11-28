import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export function getCaseStudyProject(slug: string) {
  return projects.find((project) => project.caseStudySlug === slug);
}

export function getCaseStudyMetadata(slug: string): Metadata {
  const project = getCaseStudyProject(slug);
  if (!project) return {};

  const title = `${project.title} Case Study`;
  const description = `${project.overview.slice(0, 150).trimEnd()}${project.overview.length > 150 ? "…" : ""}`;
  const canonical = `https://pixorasofttech.com/case-study/${slug}`;
  const image = { url: project.heroImg, alt: `${project.title} project preview` };

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      site: "@pixorasofttech",
      creator: "@pixorasofttech",
      title,
      description,
      images: [image.url],
    },
  };
}
