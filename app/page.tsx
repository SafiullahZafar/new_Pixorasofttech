import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <>
      {/* Skip to main content — accessibility + SEO */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <Cursor />
      <Navbar />

      {/* Semantic main landmark */}
      <main id="main-content" className="relative" role="main">
        {/* Hero section */}
        <Hero />

        {/* Stats section */}
        <Stats />

        {/* Services section */}
        <Services />

        {/* Work Process / Workflow section */}
        <Process />

        {/* Contact section */}
        <Contact />

        {/* Global Background Elements */}
        <div
          className="fixed inset-0 -z-50 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[#030014]" />
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full" />
        </div>
      </main>

      {/* Footer landmark */}
      <Footer />
    </>
  );
}
