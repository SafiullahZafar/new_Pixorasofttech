import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudySupplierWholesaleApp from "@/components/case-study/supplier_wholesale_app/CaseStudySupplierWholesaleApp";
import { projects } from "@/lib/projects";

export default function SupplierWholesaleAppCaseStudyPage() {
  const project = projects.find((item) => item.id === "supplier-wholesale-app");

  return (
    <>
      <Navbar />
      <main>
        <CaseStudySupplierWholesaleApp project={project} />
      </main>
      <Footer />
    </>
  );
}
