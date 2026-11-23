import { notFound, redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetail from "@/components/portfolio/ProjectDetail";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

// Allow dynamic params in dev (not just pre-generated ones)
export const dynamicParams = true;

const caseStudyRedirectMap: Record<string, string> = {
  "brew-haven": "/case-study/brew-haven",
  "brew-heaven": "/case-study/brew-haven",
  "delivery-dashboard": "/case-study/delivery-dashboard",
  dom: "/case-study/delivery-dashboard",
  hrms: "/case-study/hrms",
  "kb-exports": "/case-study/kb-exports",
  crm: "/case-study/crm",
  inventory: "/case-study/inventory",
  supplier: "/case-study/supplier",
  "salon-pos": "/case-study/salon",
  salon: "/case-study/salon",
  lms: "/case-study/textile-erp",
  "textile-erp": "/case-study/textile-erp",
  "rider-app": "/case-study/rider-app",
  "fitplus-app": "/case-study/fitplus-app",
  "shopease-ecommerce": "/case-study/shopease-ecommerce",
  "eduka-college": "/case-study/eduka-college",
  "glass-haven": "/case-study/glass-haven",
  "solar-solutions": "/case-study/solar-solutions",
  "state-college": "/case-study/state-college",
  zostel: "/case-study/zostel",
  "travel-hotel-hub": "/case-study/travel-hotel-hub",
  "goody-supplies": "/case-study/goody-supplies",
  "catering-app": "/case-study/catering-app",
  "supplier-wholesale-app": "/case-study/supplier-wholesale-app",
};

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (caseStudyRedirectMap[id]) {
    redirect(caseStudyRedirectMap[id]);
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
