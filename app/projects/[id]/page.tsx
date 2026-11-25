import { notFound, redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetail from "@/components/portfolio/ProjectDetail";
import { projectCaseStudyRoutes, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

// Allow dynamic params in dev (not just pre-generated ones)
export const dynamicParams = true;

const legacyCaseStudyRedirects: Record<string, string> = {
  "brew-heaven": "/case-study/brew-haven",
  "delivery-dashboard": "/case-study/delivery-dashboard",
  supplier: "/case-study/supplier",
  salon: "/case-study/salon",
  "textile-erp": "/case-study/textile-erp",
  "fitplus-app": "/case-study/fitplus-app",
  "shopease-ecommerce": "/case-study/shopease-ecommerce",
  "catering-app": "/case-study/catering-app",
  "supplier-wholesale-app": "/case-study/supplier-wholesale-app",
};

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const canonicalCaseStudy = projectCaseStudyRoutes[id] ?? legacyCaseStudyRedirects[id];
  if (canonicalCaseStudy) {
    redirect(canonicalCaseStudy);
  }

  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  );
}
