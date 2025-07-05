import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
      <PricingSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-card py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-2">
              DevPortfolio
            </h3>
            <p className="text-muted-foreground mb-4">
              Creating beautiful web experiences, one project at a time.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 DevPortfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
