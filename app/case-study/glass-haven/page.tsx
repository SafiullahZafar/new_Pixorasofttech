import { getCaseStudyMetadata } from "@/lib/case-study-metadata";
import CaseStudyStructuredData from "@/components/seo/CaseStudyStructuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyGlassHaven from "@/components/case-study/glass_haven/CaseStudyGlassHaven";
import { projects } from "@/lib/projects";

export const metadata = getCaseStudyMetadata("glass-haven");

export default function GlassHavenCaseStudyPage() {
  const project = projects.find((item) => item.id === "glass-haven");

  return (
    <>
      <CaseStudyStructuredData slug="glass-haven" />
      <Navbar />
      <main>
        <CaseStudyGlassHaven project={project} />
      </main>
      <Footer />
    </>
  );
}
