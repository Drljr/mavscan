import HeroSection from "./components/home/HeroSection";
import FeaturesSection from "./components/home/FeaturesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-20 pt-12 md:px-8 lg:px-10">
        <HeroSection />
        <FeaturesSection />
      </div>
    </div>
  );
}
