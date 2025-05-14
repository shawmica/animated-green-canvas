
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string | null;
  imageUrl?: string;
};

export default function ProjectsSection() {
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Here are some of my recent projects. Each one presented unique challenges and learning opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden card-hover animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Project Image or Placeholder */}
              <div className="h-52 bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-xl font-bold text-primary/50">{project.title}</div>
                </div>
              </div>

              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1 button-hover"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <Github className="mr-2 h-4 w-4" /> Code
                </Button>
                {project.liveUrl && (
                  <Button 
                    className="flex-1 button-hover"
                    onClick={() => window.open(project.liveUrl!, "_blank")}
                  >
                    Live Demo
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
