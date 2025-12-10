// app/page.tsx
import AboutSection from "./components/AboutSection";
import CampLocationCard from "./components/CampLocationCard";
import CampsStats from "./components/CampsStats";
import HeroSection from "./components/HeroSection";
import ProgramBenefits from "./components/ProgramBenefits";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <CampsStats />
      <CampLocationCard />
      <ProgramBenefits />
    </main>
  );
}
