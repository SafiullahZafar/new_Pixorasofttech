import { getCaseStudyProject } from "@/lib/case-study-metadata";
import { projectCaseStudyRoutes } from "@/lib/projects";
import JsonLd from "./JsonLd";

const siteUrl = "https://pixorasofttech.com";

export default function CaseStudyStructuredData({ slug }: { slug: string }) {
  const project = getCaseStudyProject(slug);
  if (!project) return null;

  const route = projectCaseStudyRoutes[project.id];
  if (!route) return null;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${siteUrl}/projects`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: `${siteUrl}${route}`,
          },
        ],
      }}
    />
  );
}
