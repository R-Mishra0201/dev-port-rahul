import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Full-Stack
            </span>
            <br />
            <span className="text-foreground">Web Developer</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I craft beautiful, responsive websites and powerful web applications 
            that help businesses grow and succeed in the digital world.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-hero-gradient hover:opacity-90 shadow-elegant group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 hover:bg-primary/10"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Skills Icons */}
          <motion.div 
            className="flex justify-center space-x-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {[
              { icon: Code, label: "Development" },
              { icon: Palette, label: "Design" },
              { icon: Zap, label: "Performance" }
            ].map((skill, index) => (
              <motion.div
                key={skill.label}
                className="flex flex-col items-center space-y-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="w-12 h-12 bg-glass-gradient backdrop-blur-glass border border-white/10 rounded-lg flex items-center justify-center shadow-glass">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">{skill.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;