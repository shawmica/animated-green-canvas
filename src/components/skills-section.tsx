
import { Card, CardContent } from "@/components/ui/card";

type Skill = {
  name: string;
  proficiency: number;
  category: "frontend" | "backend" | "design" | "tools";
};

export default function SkillsSection() {
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
    <section id="skills" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            I've developed expertise in various technologies through years of practice and real-world projects.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {categories.map((category) => (
            <Card key={category.id} className="overflow-hidden animate-scale-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <span className="inline-block w-3 h-3 bg-primary rounded-full mr-2"></span>
                  {category.name}
                </h3>
                <div className="space-y-6">
                  {skills
                    .filter((skill) => skill.category === category.id)
                    .map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full"
                            style={{ 
                              width: `${skill.proficiency}%`,
                              transition: "width 1.5s ease-in-out" 
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
