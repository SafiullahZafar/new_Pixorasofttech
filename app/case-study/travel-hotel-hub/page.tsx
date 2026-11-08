import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyTravelHotelHub from "@/components/case-study/travel_hotel_hub/CaseStudyTravelHotelHub";
import { projects } from "@/lib/projects";

export default function TravelHotelHubCaseStudyPage() {
  const project = projects.find((item) => item.id === "travel-hotel-hub");

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyTravelHotelHub project={project} />
      </main>
      <Footer />
    </>
  );
}
