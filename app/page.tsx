// app/page.tsx
import AboutSection from "./components/AboutSection";
import CampLocationCard from "./components/CampLocationCard";
import CampsStats from "./components/CampsStats";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import ProgramBenefits from "./components/ProgramBenefits";
import TestimonialsSection from "./components/TestimonialsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <CampsStats />
      <CampLocationCard />
      <ProgramBenefits />
      <TestimonialsSection />
      <GallerySection />
    </main>
  );
}
