import { getCaseStudyMetadata } from "@/lib/case-study-metadata";
import CaseStudyStructuredData from "@/components/seo/CaseStudyStructuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyMessenger from "@/components/case-study/messenger/CaseStudyMessenger";
import { projects } from "@/lib/projects";

export const metadata = getCaseStudyMetadata("messenger");

export default function MessengerCaseStudyPage() {
  const project = projects.find((item) => item.id === "messenger");

  return (
    <>
      <CaseStudyStructuredData slug="messenger" />
      <Navbar />
      <main>
        <CaseStudyMessenger project={project} />
      </main>
      <Footer />
    </>
  );
}
