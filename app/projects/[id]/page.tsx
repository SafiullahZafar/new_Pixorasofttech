import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetail from "@/components/portfolio/ProjectDetail";
import CaseStudyBrewHaven from "@/components/case_study_brew_haven";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

// Allow dynamic params in dev (not just pre-generated ones)
export const dynamicParams = true;

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
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
        {id === "brew-haven" ? (
          <CaseStudyBrewHaven project={project!} />
        ) : (
          <ProjectDetail project={project!} />
        )}
      </main>
      <Footer />
    </>
  );
}
