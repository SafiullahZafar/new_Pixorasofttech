import type { RefObject } from "react";
import type { MotionValue } from "framer-motion";

export interface SupplierSectionProps {
  heroRef: RefObject<HTMLDivElement | null>;
  heroScale: MotionValue<number>;
  mobileHeroImage: string;
  heroImage: string;
  title: string;
  aboutDescription: string;
  challengeText: string;
  solutionText: string;
  resultsText: string;
  liveUrl: string;
  cardHovered: boolean;
  setCardHovered: (hovered: boolean) => void;
}
