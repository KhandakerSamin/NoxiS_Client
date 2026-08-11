import Hero from "@/components/Homepage/Hero";
import DigitalMastery from "@/components/Homepage/DigitalMastery";
import Pricing from "@/components/Homepage/Pricing";
import AtomicStack from "@/components/Homepage/AtomicStack";
import ImpactfulTransformations from "@/components/Homepage/ImpactfulTransformations";
import FeaturedWork from "@/components/Homepage/FeaturedWork";
import StatsBar from "@/components/Homepage/StatsBar";
import PrecisionSteps from "@/components/Homepage/PrecisionSteps";
import FAQSection from "@/components/Homepage/FAQSection";
import CTASection from "@/components/Homepage/CTASection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <DigitalMastery />
      <Pricing />
      <AtomicStack />
      <ImpactfulTransformations />
      <FeaturedWork />
      <StatsBar />
      <PrecisionSteps />
      <FAQSection />
      <CTASection />
    </main>
  );
}