import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from "react-icons/fa";
import {
  SiMongodb, SiNextdotjs, SiTailwindcss, SiFirebase, SiKubernetes,
  SiFlutter, SiSwift, SiKotlin, SiExpo, SiTerraform, SiIonic, SiCapacitor
} from "react-icons/si";
import { Code, Database, Smartphone, Cloud, Wrench } from "lucide-react";
import styles from "./TechStackSection.module.css"; // Optional if using custom animations

const techStacks = [
  {
    title: "Frontend",
    icon: Code,
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
    color: "from-blue-500 to-green-500",
  },
  {
    title: "Backend",
    icon: Database,
    technologies: ["Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL"],
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Mobile",
    icon: Smartphone,
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Capacitor"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    color: "from-red-500 to-yellow-500",
  },
  {
    title: "Tools",
    icon: Wrench,
    technologies: ["Git", "VS Code", "Postman", "Figma", "Notion", "Jira"],
    color: "from-indigo-500 to-blue-500",
  },
];

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="relative py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Tech <span className="bg-hero-gradient bg-clip-text text-transparent">Stack</span>
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {techStacks.map((stack, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 bg-gradient-to-tr ${stack.color} text-white shadow-md transition-transform transform hover:scale-105`}
            >
              <div className="flex items-center gap-4 mb-4">
                <stack.icon className="h-8 w-8" />
                <h3 className="text-xl font-semibold">{stack.title}</h3>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {stack.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-2s"
        ></div>
      </div>
    </section>
  );
};

export default TechStackSection;
