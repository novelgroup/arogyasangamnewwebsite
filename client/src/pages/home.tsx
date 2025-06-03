import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { VisionMission } from "@/components/vision-mission";
import { Programs } from "@/components/programs";
import { TheoryOfChange } from "@/components/theory-of-change";
import { Impact } from "@/components/impact";
import { GetInvolved } from "@/components/get-involved";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <VisionMission />
      <Programs />
      <TheoryOfChange />
      <Impact />
      <GetInvolved />
      <Footer />
    </div>
  );
}
