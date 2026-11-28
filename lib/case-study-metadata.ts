import type { Metadata } from "next";
import { excludedProjectIds, projects } from "@/lib/projects";

const projectIdBySlug: Record<string, string> = {
  "brew-haven": "brew-haven",
  "catering-app": "catering-app",
  crm: "crm",
  "delivery-dashboard": "dom",
  "eduka-college": "eduka-college",
  "fitplus-app": "fitplus-app",
  "glass-haven": "glass-haven",
  "goody-supplies": "goody-supplies",
  hrms: "hrms",
  inventory: "inventory",
  rms: "inventory",
  "kb-exports": "kb-exports",
  messenger: "messenger",
  "rider-app": "rider-app",
  salon: "salon-pos",
  "shopease-ecommerce": "shopease-ecommerce",
  "solar-solutions": "solar-solutions",
  "state-college": "state-college",
  supplier: "supplier",
  "supplier-wholesale-app": "supplier-wholesale-app",
  "textile-erp": "lms",
  "travel-hotel-hub": "travel-hotel-hub",
  veloura: "veloura",
  zostel: "zostel",
};

export function getCaseStudyProject(slug: string) {
  return projects.find((item) => item.id === projectIdBySlug[slug]);
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
    ...(excludedProjectIds.has(project.id)
      ? { robots: { index: false, follow: true } }
      : {}),
  };
}
