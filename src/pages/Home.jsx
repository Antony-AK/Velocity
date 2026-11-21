import Hero from "../components/home/Hero";
import BrandIntro from "../components/home/BrandIntro";
import PerformanceSpecs from "../components/home/PerformanceSpecs";
import FeaturedVehicle from "../components/home/FeaturedVehicle";
import ModelSelector from "../components/home/ModelSelector";
import Engineering from "../components/home/Engineering";
import DesignPhilosophy from "../components/home/DesignPhilosophy";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <PerformanceSpecs />
      <FeaturedVehicle />
      <ModelSelector />
      <Engineering />
      <DesignPhilosophy />
      <FinalCTA />
    </>
  );
}
