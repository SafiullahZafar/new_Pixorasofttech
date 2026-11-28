import { getCaseStudyMetadata } from "@/lib/case-study-metadata";
import CaseStudyStructuredData from "@/components/seo/CaseStudyStructuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyFitPlus from "@/components/case-study/fitplus_app/CaseStudyFitPlus";
import { projects } from "@/lib/projects";

export const metadata = getCaseStudyMetadata("fitplus-app");

export default function FitPlusCaseStudyPage() {
  const project = projects.find((item) => item.id === "fitplus-app");

  return (
    <>
      <CaseStudyStructuredData slug="fitplus-app" />
      <Navbar />
      <main>
        <CaseStudyFitPlus project={project} />
      </main>
      <Footer />
    </>
  );
}
