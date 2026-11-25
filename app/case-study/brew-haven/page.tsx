import { getCaseStudyMetadata } from "@/lib/case-study-metadata";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyBrewHaven from "@/components/case-study/brew_haven/CaseStudyBrewHaven";
import { projects } from "@/lib/projects";

export const metadata = getCaseStudyMetadata("brew-haven");

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
