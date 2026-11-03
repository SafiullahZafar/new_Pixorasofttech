import type { ServiceDetail } from "@/lib/service-details";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import WebsiteGallerySection from "./WebsiteGallerySection";
import CapabilitiesSection from "./CapabilitiesSection";
import SelectedWorkSection from "./SelectedWorkSection";
import ProcessSection from "./ProcessSection";
import FAQSection from "./FAQSection";

export default function WebDevelopmentPage({ service }: { service: ServiceDetail }) {
  return (
    <main className="overflow-x-clip bg-transparent pt-[60px] text-[#131927]">
      <HeroSection />
      <AboutSection overview={service.overview} />
      <WebsiteGallerySection />
      <CapabilitiesSection technologies={service.technologies} />
      <SelectedWorkSection />
      <ProcessSection process={service.process} />
      <FAQSection faqs={service.faqs} />
    </main>
  );
}
