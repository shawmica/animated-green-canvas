
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { BadgeCheck, Star } from "lucide-react";

type Skill = {
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
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
    { name: "HTML/CSS", level: "expert", category: "frontend" },
    { name: "JavaScript", level: "expert", category: "frontend" },
    { name: "TypeScript", level: "advanced", category: "frontend" },
    { name: "React", level: "expert", category: "frontend" },
    { name: "Node.js", level: "advanced", category: "backend" },
    { name: "Express", level: "advanced", category: "backend" },
    { name: "MongoDB", level: "intermediate", category: "backend" },
    { name: "PostgreSQL", level: "advanced", category: "backend" },
    { name: "Figma", level: "intermediate", category: "design" },
    { name: "UI/UX", level: "advanced", category: "design" },
    { name: "Git", level: "advanced", category: "tools" },
    { name: "Docker", level: "intermediate", category: "tools" },
  ];

  const categories = [
    { id: "frontend", name: "Frontend", icon: "🌐" },
    { id: "backend", name: "Backend", icon: "⚙️" },
    { id: "design", name: "Design", icon: "🎨" },
    { id: "tools", name: "Tools", icon: "🔧" },
  ];

  // Helper function to render skill level indicator
  const renderSkillLevel = (level: Skill["level"]) => {
    const stars = {
      beginner: 1,
      intermediate: 2,
      advanced: 3,
      expert: 4
    };
    
    return (
      <div className="flex items-center">
        {Array(stars[level]).fill(0).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
        {Array(4 - stars[level]).fill(0).map((_, i) => (
          <Star key={i} className="h-4 w-4 text-muted" />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-accent/10 relative overflow-hidden">
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, catIndex) => (
            <Card 
              key={category.id} 
              className="overflow-hidden reveal dark:bg-card/80 backdrop-blur-sm border-primary/10 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 transform hover:-translate-y-1"
              data-delay={catIndex * 150}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
                
                <div className="space-y-4">
                  {skills
                    .filter((skill) => skill.category === category.id)
                    .map((skill, index) => (
                      <div 
                        key={index} 
                        className={`p-3 rounded-lg transition-all duration-500 ${
                          animateSkills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        } bg-background/50 backdrop-blur-sm border border-border hover:border-primary/30 hover:bg-accent/5 group`}
                        style={{ transitionDelay: `${index * 100 + 200}ms` }}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <BadgeCheck className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <div className="transition-all duration-300 group-hover:scale-110 origin-right">
                            {renderSkillLevel(skill.level)}
                          </div>
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
