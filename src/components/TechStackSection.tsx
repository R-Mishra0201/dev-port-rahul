import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone, Cloud, Zap } from "lucide-react";

const TechStackSection = () => {
  const techCategories = [
    {
      title: "Frontend",
      icon: Globe,
      technologies: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend", 
      icon: Database,
      technologies: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Mobile",
      icon: Smartphone,
<<<<<<< HEAD
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "DevOps",
      icon: Cloud,
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux", "Nginx"],
      color: "from-orange-500 to-red-500",
=======
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Capacitor"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      color: "from-red-500 to-yellow-500",
>>>>>>> bb6b6d9 (main)
    },
    {
      title: "Tools",
      icon: Code,
      technologies: ["Git", "VS Code", "Figma", "Postman", "Jest", "Webpack"],
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Performance",
      icon: Zap,
      technologies: ["Optimization", "SEO", "Analytics", "Testing", "Security", "Monitoring"],
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section id="tech-stack" className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
<<<<<<< HEAD
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
=======
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-2s"></div>
>>>>>>> bb6b6d9 (main)
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-hero-gradient bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I use cutting-edge technologies and tools to create exceptional web experiences. 
            Here's what I'm proficient in:
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              {/* Glass Card */}
              <div className="relative p-6 bg-glass-gradient backdrop-blur-glass border border-white/10 rounded-2xl shadow-glass hover:shadow-elegant transition-all duration-300">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]">
                  <div className={`w-full h-full rounded-2xl bg-gradient-to-r ${category.color} opacity-20`}></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground ml-4">{category.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1 + techIndex * 0.05 
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-2 bg-background/50 backdrop-blur-sm rounded-lg border border-white/5 hover:border-white/20 transition-all duration-200 cursor-pointer"
                      >
                        <span className="text-sm text-foreground font-medium">{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-hero-gradient rounded-full text-white font-semibold shadow-elegant hover:shadow-glass transition-all duration-300"
          >
            Let's Build Something Amazing Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;