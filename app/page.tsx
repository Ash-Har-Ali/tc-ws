// app/page.tsx
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
