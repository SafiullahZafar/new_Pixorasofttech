import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyBrewHaven from "@/components/case-study/brew_haven/CaseStudyBrewHaven";
import { projects } from "@/lib/projects";

export default function BrewHavenCaseStudyPage() {
  const project = projects.find((item) => item.id === "brew-haven");

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyBrewHaven project={project} />
      </main>
      <Footer />
    </>
  );
}
