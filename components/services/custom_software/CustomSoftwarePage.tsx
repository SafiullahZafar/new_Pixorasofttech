import type { ServiceDetail } from "@/lib/service-details";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SoftwareGallerySection from "./SoftwareGallerySection";
import CapabilitiesSection from "./CapabilitiesSection";
import SelectedWorkSection from "./SelectedWorkSection";
import ProcessSection from "./ProcessSection";
import FAQSection from "./FAQSection";

export default function CustomSoftwarePage({
  service,
}: {
  service: ServiceDetail;
}) {
  return (
    <main className="overflow-hidden bg-[#F5F5F5] pt-[60px] text-[#131927]">
      <HeroSection />
      <AboutSection overview={service.overview} />
      <SoftwareGallerySection />
      <CapabilitiesSection technologies={service.technologies} />
      <SelectedWorkSection />
      <ProcessSection process={service.process} />
      <FAQSection />
    </main>
  );
}
