import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServicesEngagement from "@/components/services/ServicesEngagement";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ServicesProcess />
        <ServicesEngagement />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
