import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/Project1.png";
import project2 from "@/assets/project2.png";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "SK Interior & Decorators",
      description:
        "A modern, responsive Interior Designer website built with React and Node.js. Features include Framer Motion animation effects and an integrated contact form via EmailJS.",
      image: project1,
      technologies: ["React", "EmailJs", "Framer Motion"],
      liveUrl: "https://srkinteriors.vercel.app",
    },
    {
      id: 2,
      title: "Personal Portfolio",
      description:
        "A modern, responsive portfolio website showcasing my projects, skills, and experience. Built with Vue.js, Firebase, and D3.js, it features interactive visuals, real-time updates, and a clean, user-friendly interface to provide an engaging overview of my work.",
      image: project2,
      technologies: ["Next.Js", "Email Js", "Dark Mode"],
      liveUrl: "https://webbyrahul.vercel.app",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Coming Soon.....",
      description:
        "Creating a E-commerce project it will reflect very soon",
      image: project3,
      technologies: [""],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-hero-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development,
            design, and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group bg-card-gradient border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="secondary" className="bg-background/90 hover:bg-background">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="secondary" className="bg-background/90 hover:bg-background">
                          <Github className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button size="sm" variant="default" className="w-full bg-hero-gradient">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
