import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/90"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-hero-gradient rounded-full opacity-20"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-accent-gradient rounded-full opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Full-Stack
            </span>
            <br />
            <span className="text-foreground">Web Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            I craft beautiful, responsive websites and powerful web applications 
            that help businesses grow and succeed in the digital world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-hero-gradient hover:opacity-90 shadow-elegant group">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              Get In Touch
            </Button>
          </div>

          {/* Skills Icons */}
          <div className="flex justify-center space-x-8 animate-slide-up">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-card-gradient rounded-lg flex items-center justify-center shadow-card">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Development</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-card-gradient rounded-lg flex items-center justify-center shadow-card">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Design</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-card-gradient rounded-lg flex items-center justify-center shadow-card">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Performance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;