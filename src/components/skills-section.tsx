
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState, useRef } from "react";
import { BadgeCheck, Star, Code, Server, PaintBucket, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

type Skill = {
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  category: "frontend" | "backend" | "design" | "tools";
};

type CategoryIcon = {
  [key: string]: JSX.Element;
};

export default function SkillsSection() {
  const [animateSkills, setAnimateSkills] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>("frontend");
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
      
      const x = (e.clientX - left - width / 2) / width;
      const y = (e.clientY - top - height / 2) / height;
      
      setMousePosition({ x, y });
    }
  };

  const skills: Skill[] = [
    { name: "HTML/CSS", level: "expert", category: "frontend" },
    { name: "JavaScript", level: "expert", category: "frontend" },
    { name: "TypeScript", level: "advanced", category: "frontend" },
    { name: "React", level: "expert", category: "frontend" },
    { name: "Vue.js", level: "intermediate", category: "frontend" },
    { name: "Angular", level: "intermediate", category: "frontend" },
    { name: "Tailwind CSS", level: "expert", category: "frontend" },
    { name: "Node.js", level: "advanced", category: "backend" },
    { name: "Express", level: "advanced", category: "backend" },
    { name: "MongoDB", level: "intermediate", category: "backend" },
    { name: "PostgreSQL", level: "advanced", category: "backend" },
    { name: "GraphQL", level: "intermediate", category: "backend" },
    { name: "REST API", level: "expert", category: "backend" },
    { name: "Docker", level: "advanced", category: "backend" },
    { name: "Figma", level: "intermediate", category: "design" },
    { name: "Adobe XD", level: "intermediate", category: "design" },
    { name: "UI/UX", level: "advanced", category: "design" },
    { name: "Responsive Design", level: "expert", category: "design" },
    { name: "Prototyping", level: "intermediate", category: "design" },
    { name: "Git", level: "advanced", category: "tools" },
    { name: "Jest", level: "intermediate", category: "tools" },
    { name: "Webpack", level: "intermediate", category: "tools" },
    { name: "CI/CD", level: "intermediate", category: "tools" },
    { name: "AWS", level: "intermediate", category: "tools" },
  ];

  const categories = [
    { id: "frontend", name: "Frontend", icon: <Code className="h-5 w-5" /> },
    { id: "backend", name: "Backend", icon: <Server className="h-5 w-5" /> },
    { id: "design", name: "Design", icon: <PaintBucket className="h-5 w-5" /> },
    { id: "tools", name: "Tools", icon: <Wrench className="h-5 w-5" /> },
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
      <div className="flex items-center space-x-1">
        {Array(stars[level]).fill(0).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
        {Array(4 - stars[level]).fill(0).map((_, i) => (
          <Star key={i} className="h-4 w-4 text-muted" />
        ))}
      </div>
    );
  };

  const categoryIcons: CategoryIcon = {
    frontend: <Code className="h-6 w-6" />,
    backend: <Server className="h-6 w-6" />,
    design: <PaintBucket className="h-6 w-6" />,
    tools: <Wrench className="h-6 w-6" />
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-20 relative overflow-hidden transition-all duration-700"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0 -z-10 ice-pattern opacity-20"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      
      {/* Animated orbit particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="orbit absolute w-2 h-2 rounded-full bg-primary/40 blur-sm"
          style={{
            top: `${30 + i * 10}%`,
            left: '50%',
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${8 + i * 2}s`,
          }}
        ></div>
      ))}
      
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

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-500 transform hover:scale-105",
                activeCategory === category.id 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                  : "bg-accent/30 text-foreground hover:bg-accent/50"
              )}
            >
              {category.icon}
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skill Cards with 3D effect */}
        <div 
          className="perspective grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          style={{
            transform: isHovered 
              ? `rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)` 
              : 'none',
            transition: 'transform 0.3s ease-out'
          }}
        >
          {activeCategory && categories
            .filter((cat) => cat.id === activeCategory)
            .map((category) => (
              <div key={category.id} className="col-span-full">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {skills
                    .filter((skill) => skill.category === category.id)
                    .map((skill, index) => (
                      <Card 
                        key={index} 
                        className={cn(
                          "skill-card overflow-hidden reveal dark:bg-card/80 backdrop-blur-sm border-primary/10",
                          animateSkills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        )}
                        style={{ 
                          transitionDelay: `${index * 100 + 200}ms`,
                          transform: `scale(${isHovered ? 1 - (Math.abs(mousePosition.x) + Math.abs(mousePosition.y)) * 0.03 : 1})`,
                        }}
                      >
                        <CardContent className="p-6 relative overflow-hidden">
                          {/* Animated background glow */}
                          <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer"></div>
                          
                          <div className="flex flex-col h-full">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center space-x-2">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                  {categoryIcons[skill.category]}
                                </div>
                                <span className="font-medium text-lg">{skill.name}</span>
                              </div>
                              <div className="ripple bg-primary/5 w-8 h-8 rounded-full flex items-center justify-center">
                                <BadgeCheck className="h-4 w-4 text-primary" />
                              </div>
                            </div>
                            
                            <div className="mt-auto">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground capitalize">
                                  {skill.level}
                                </span>
                                <div className="transition-all duration-300 hover:scale-110 origin-right">
                                  {renderSkillLevel(skill.level)}
                                </div>
                              </div>
                              
                              {/* Skill progress bar */}
                              <div className="w-full h-1 bg-muted/50 rounded-full mt-2 overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full"
                                  style={{ 
                                    width: skill.level === 'beginner' ? '25%' : 
                                           skill.level === 'intermediate' ? '50%' :
                                           skill.level === 'advanced' ? '75%' : '100%',
                                    transition: 'width 1s ease-out',
                                    transitionDelay: `${index * 100 + 500}ms`
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
