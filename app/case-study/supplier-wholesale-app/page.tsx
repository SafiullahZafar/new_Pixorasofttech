import { getCaseStudyMetadata } from "@/lib/case-study-metadata";
import CaseStudyStructuredData from "@/components/seo/CaseStudyStructuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudySupplierWholesaleApp from "@/components/case-study/supplier_wholesale_app/CaseStudySupplierWholesaleApp";
import { projects } from "@/lib/projects";

export const metadata = getCaseStudyMetadata("supplier-wholesale-app");

export default function SupplierWholesaleAppCaseStudyPage() {
  const project = projects.find((item) => item.id === "supplier-wholesale-app");

  return (
    <>
      <CaseStudyStructuredData slug="supplier-wholesale-app" />
      <Navbar />
      <main>
        <CaseStudySupplierWholesaleApp project={project} />
      </main>
      <Footer />
    </>
  );
}
