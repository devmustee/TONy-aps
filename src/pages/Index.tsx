import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Leaderboard } from "@/components/Leaderboard";
import { PartnerShowcase } from "@/components/PartnerShowcase";
import { SmartInfluence } from "@/components/SmartInfluence";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Leaderboard />
      <PartnerShowcase />
      <SmartInfluence />
      <Footer />
    </div>
  );
};

export default Index;
