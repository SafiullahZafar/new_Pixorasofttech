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
