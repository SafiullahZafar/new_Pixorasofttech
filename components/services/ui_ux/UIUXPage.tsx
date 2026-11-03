import type { ServiceDetail } from "@/lib/service-details";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import UXGallerySection from "./UXGallerySection";
import CapabilitiesSection from "./CapabilitiesSection";
import SelectedWorkSection from "./SelectedWorkSection";
import ProcessSection from "./ProcessSection";
import FAQSection from "./FAQSection";

export default function UIUXPage({ service }: { service: ServiceDetail }) {
  return (
    <main className="overflow-x-clip bg-transparent pt-[60px] text-[#131927]">
      <HeroSection />
      <AboutSection overview={service.overview} />
      <UXGallerySection />
      <CapabilitiesSection technologies={service.technologies} />
      <SelectedWorkSection />
      <ProcessSection process={service.process} />
      <FAQSection faqs={service.faqs} />
    </main>
  );
}
