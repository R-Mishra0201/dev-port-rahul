import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
<<<<<<< HEAD

=======
import TestimonialsSection from "@/components/Testimonials";
// import Testimonials from "@/components/Testimonials"; // Uncomment if you want to include testimonials
>>>>>>> bb6b6d9 (main)
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
<<<<<<< HEAD
=======
      <TestimonialsSection />
>>>>>>> bb6b6d9 (main)
      <PricingSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-card py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-2">
<<<<<<< HEAD
              DevPortfolio
=======
              WebbyRahul.com
>>>>>>> bb6b6d9 (main)
            </h3>
            <p className="text-muted-foreground mb-4">
              Creating beautiful web experiences, one project at a time.
            </p>
            <p className="text-sm text-muted-foreground">
<<<<<<< HEAD
              © 2024 DevPortfolio. All rights reserved.
=======
              © 2024 WebbyRahul.com. All rights reserved.
>>>>>>> bb6b6d9 (main)
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
