import HeroSection from "@/components/HeroSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/Testimonials"; // ✅ include this if needed

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
      <TestimonialsSection /> {/* ✅ keep or remove based on your UI */}
      <PricingSection />
      <ContactSection />
    </div>
  );
};

export default Index;
