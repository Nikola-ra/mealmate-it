
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TargetSection from "@/components/TargetSection";
import MarketSection from "@/components/MarketSection";
import BusinessSection from "@/components/BusinessSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TargetSection />
        <MarketSection />
        <BusinessSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
