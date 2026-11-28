import { getCaseStudyMetadata } from "@/lib/case-study-metadata";
import CaseStudyStructuredData from "@/components/seo/CaseStudyStructuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyTravelHotelHub from "@/components/case-study/travel_hotel_hub/CaseStudyTravelHotelHub";
import { projects } from "@/lib/projects";

export const metadata = getCaseStudyMetadata("travel-hotel-hub");

export default function TravelHotelHubCaseStudyPage() {
  const project = projects.find((item) => item.id === "travel-hotel-hub");

  return (
    <>
      <CaseStudyStructuredData slug="travel-hotel-hub" />
      <Navbar />
      <main>
        <CaseStudyTravelHotelHub project={project} />
      </main>
      <Footer />
    </>
  );
}
