
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string | null;
  imageUrl?: string;
};

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, shopping cart, and secure checkout.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Task Management App",
      description: "A productivity tool for managing tasks, projects, and teams with real-time updates.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills with a modern design.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      description: "A weather application providing current conditions and forecasts for locations worldwide.",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      githubUrl: "https://github.com",
      liveUrl: null,
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/20 rounded-bl-full opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/20 rounded-tr-full opacity-50 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            My Projects
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-6">
            Here are some of my recent projects. Each one presented unique challenges and learning opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`
                overflow-hidden reveal transform transition-all duration-500 
                ${hoveredIndex === index ? 'scale-[1.02] shadow-lg shadow-primary/20' : 'scale-100'}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Project Image with enhanced hover effect */}
              <div className="h-52 bg-muted relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/30 transform transition-transform duration-500 group-hover:scale-110"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-xl font-bold text-primary/70 transform transition-all duration-500 group-hover:scale-110 group-hover:text-primary">{project.title}</div>
                </div>
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader>
                <CardTitle className="relative">
                  {project.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transform transition-all duration-300 group-hover:w-full"></span>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full transform transition-all duration-300 hover:scale-105 hover:bg-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1 group overflow-hidden relative"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <span className="relative z-10 flex items-center">
                    <Github className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" /> 
                    Code
                  </span>
                  <span className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
                {project.liveUrl && (
                  <Button 
                    className="flex-1 group overflow-hidden relative"
                    onClick={() => window.open(project.liveUrl!, "_blank")}
                  >
                    <span className="relative z-10">Live Demo</span>
                    <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
