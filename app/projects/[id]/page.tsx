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

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (id === "brew-haven") {
    redirect("/case-study/brew-heaven");
  }
  if (id === "delivery-dashboard") {
    redirect("/case-study/delivery-dashboard");
  }
  if (id === "hrms") {
    redirect("/case-study/hrms");
  }
  if (id === "kb-exports") {
    redirect("/case-study/kb-exports");
  }
  if (id === "crm") {
    redirect("/case-study/crm");
  }
  if (id === "inventory") {
    redirect("/case-study/inventory");
  }
  if (id === "supplier") {
    redirect("/case-study/supplier");
  }
  if (id === "salon-pos" || id === "salon") {
    redirect("/case-study/salon");
  }
  if (id === "lms" || id === "textile-erp") {
    redirect("/case-study/textile-erp");
  }
  if (id === "rider-app") {
    redirect("/case-study/rider-app");
  }
  if (id === "fitplus-app") {
    redirect("/case-study/fitplus-app");
  }
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // After notFound(), TypeScript still sees project as possibly undefined
  // so we assert it here
  return (
    <>
      <Navbar />
      <main>
        <ProjectDetail project={project!} />
      </main>
      <Footer />
    </>
  );
}
