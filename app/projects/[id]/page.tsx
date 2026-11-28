import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetail from "@/components/portfolio/ProjectDetail";
import { projects } from "@/lib/projects";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

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
