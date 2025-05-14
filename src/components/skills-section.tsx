
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

type Skill = {
  name: string;
  proficiency: number;
  category: "frontend" | "backend" | "design" | "tools";
};

export default function SkillsSection() {
  const [animateSkills, setAnimateSkills] = useState(false);
  
  // Trigger animation when the component is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateSkills(true);
        }
      },
      { threshold: 0.3 }
    );
    
    observer.observe(document.querySelector('#skills') as Element);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const skills: Skill[] = [
    { name: "HTML/CSS", proficiency: 90, category: "frontend" },
    { name: "JavaScript", proficiency: 85, category: "frontend" },
    { name: "TypeScript", proficiency: 80, category: "frontend" },
    { name: "React", proficiency: 85, category: "frontend" },
    { name: "Node.js", proficiency: 80, category: "backend" },
    { name: "Express", proficiency: 75, category: "backend" },
    { name: "MongoDB", proficiency: 70, category: "backend" },
    { name: "PostgreSQL", proficiency: 75, category: "backend" },
    { name: "Figma", proficiency: 65, category: "design" },
    { name: "UI/UX", proficiency: 70, category: "design" },
    { name: "Git", proficiency: 80, category: "tools" },
    { name: "Docker", proficiency: 65, category: "tools" },
  ];

  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "design", name: "Design" },
    { id: "tools", name: "Tools" },
  ];

  return (
    <section id="skills" className="py-20 bg-accent/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            My Skills
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-6">
            I've developed expertise in various technologies through years of practice and real-world projects.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {categories.map((category, catIndex) => (
            <Card 
              key={category.id} 
              className="overflow-hidden reveal hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1"
              data-delay={catIndex * 150}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <span className="inline-block w-3 h-3 bg-primary rounded-full mr-2 animate-pulse-slow"></span>
                  {category.name}
                </h3>
                <div className="space-y-6">
                  {skills
                    .filter((skill) => skill.category === category.id)
                    .map((skill, index) => (
                      <div key={index} className="transform transition-all duration-500">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: animateSkills ? `${skill.proficiency}%` : '0%',
                              transitionDelay: `${index * 100 + 200}ms` 
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
