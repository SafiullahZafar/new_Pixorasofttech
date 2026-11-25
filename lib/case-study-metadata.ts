import type { Metadata } from "next";
import { projects } from "@/lib/projects";

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

export function getCaseStudyMetadata(slug: string): Metadata {
  const project = projects.find((item) => item.id === projectIdBySlug[slug]);
  if (!project) return {};

  const title = `${project.title} Case Study`;
  const description = `${project.overview.slice(0, 150).trimEnd()}${project.overview.length > 150 ? "…" : ""}`;
  const canonical = `https://pixorasofttech.com/case-study/${slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { type: "article", url: canonical, title, description },
  };
}
