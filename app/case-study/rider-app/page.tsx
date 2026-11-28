import { getCaseStudyMetadata } from "@/lib/case-study-metadata";
import CaseStudyStructuredData from "@/components/seo/CaseStudyStructuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyRiderApp from "@/components/case-study/rider_app/CaseStudyRiderApp";
import { projects } from "@/lib/projects";

export const metadata = getCaseStudyMetadata("rider-app");

export default function RiderAppCaseStudyPage() {
  const project = projects.find((item) => item.id === "rider-app");

  return (
    <>
      <CaseStudyStructuredData slug="rider-app" />
      <Navbar />
      <main>
        <CaseStudyRiderApp project={project} />
      </main>
      <Footer />
    </>
  );
}
