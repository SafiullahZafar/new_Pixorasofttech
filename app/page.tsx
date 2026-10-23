import Navbar       from "@/components/Navbar";
import StartAnimation from "@/components/StartAnimation";
import Hero         from "@/components/Hero";
import Services     from "@/components/Services";
import WhyUs        from "@/components/WhyUs";
import Projects     from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import CTABanner    from "@/components/CTABanner";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="home" role="main">
        <StartAnimation />
        {/* 1. Hero + trusted brands */}
        <Hero />
        {/* 2. Services */}
        <Services />
        {/* 3. Why Us */}
        <WhyUs />
        {/* 4. Recent Projects */}
        <Projects />
        {/* 5. Testimonials */}
        <Testimonials />
        {/* 6. CTA Banner */}
        <CTABanner />
      </main>

      {/* 7. Footer */}
      <Footer />
    </>
  );
}
