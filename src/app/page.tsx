import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { RewardsHighlight } from "@/components/home/RewardsHighlight";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <RewardsHighlight />
      <CTASection />
    </div>
  );
}
