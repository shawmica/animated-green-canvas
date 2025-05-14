
import { Card, CardContent } from "@/components/ui/card";
import { Code, Briefcase, User } from "lucide-react";
import { useState } from "react";

export default function AboutSection() {
  const [hoverService, setHoverService] = useState<number | null>(null);
  
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and performant web applications using modern frameworks and technologies.",
      icon: <Code className="h-8 w-8 text-primary" />,
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces with a focus on user experience and accessibility.",
      icon: <User className="h-8 w-8 text-primary" />,
    },
    {
      title: "Consulting",
      description: "Providing expert advice on web technologies, architecture, and development best practices.",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 animate-float" style={{animationDuration: '15s'}}></div>
        <div className="absolute bottom-1/3 right-1/5 w-40 h-40 rounded-full bg-accent/20 animate-float" style={{animationDuration: '18s', animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground mt-6">
            I'm a passionate Full Stack Developer with 5+ years of experience building web applications. 
            I specialize in JavaScript, React, Node.js, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
          <div className="space-y-6 reveal">
            <h3 className="text-2xl font-bold relative inline-block">
              My Journey
              <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-primary/70"></span>
            </h3>
            <p className="text-muted-foreground">
              I started my career as a front-end developer and gradually expanded my skills to include back-end development, 
              DevOps, and cloud infrastructure. This diverse skill set allows me to tackle projects end-to-end and deliver 
              complete solutions.
            </p>
            <p className="text-muted-foreground">
              Over the years, I've worked with startups, agencies, and enterprise clients across various industries. 
              My approach combines technical excellence with a keen eye for design and user experience.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="transform transition-all duration-300 hover:translate-x-1 hover:text-primary">
                <h4 className="font-bold">Name:</h4>
                <p className="text-muted-foreground">John Doe</p>
              </div>
              <div className="transform transition-all duration-300 hover:translate-x-1 hover:text-primary">
                <h4 className="font-bold">Email:</h4>
                <p className="text-muted-foreground">hello@johndoe.com</p>
              </div>
              <div className="transform transition-all duration-300 hover:translate-x-1 hover:text-primary">
                <h4 className="font-bold">Location:</h4>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
              <div className="transform transition-all duration-300 hover:translate-x-1 hover:text-primary">
                <h4 className="font-bold">Availability:</h4>
                <p className="text-muted-foreground">Open to opportunities</p>
              </div>
            </div>
          </div>

          <div className="order-first md:order-last">
            <div className="relative h-80 overflow-hidden rounded-xl reveal">
              <div className="absolute inset-0 bg-gradient-to-tl from-primary/80 to-primary/20 opacity-60 mix-blend-overlay"></div>
              <div className="w-full h-full bg-muted flex items-center justify-center text-6xl font-bold text-muted-foreground/30 relative">
                <span className="sr-only">Developer image</span>
                {/* Enhanced placeholder for developer image */}
                <div className="w-full h-full bg-pattern flex items-center justify-center relative overflow-hidden">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/10 animate-pulse-slow"></div>
                  
                  {/* Animated elements */}
                  <div className="absolute w-20 h-20 border-2 border-primary/20 rounded-lg rotate-12 animate-float" style={{top: '15%', left: '20%', animationDuration: '5s'}}></div>
                  <div className="absolute w-16 h-16 border border-primary/30 rounded-full animate-float" style={{bottom: '25%', right: '15%', animationDuration: '7s', animationDelay: '1s'}}></div>
                  
                  <div className="text-center z-10 bg-background/30 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
                    <p className="text-xl font-bold">John Doe</p>
                    <p className="text-sm">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 reveal">
          <h3 className="text-2xl font-bold text-center mb-10 relative inline-block">
            What I Do
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/70"></span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`
                  transition-all duration-500 overflow-hidden
                  ${hoverService === index ? 'shadow-lg shadow-primary/20 -translate-y-2' : ''}
                `}
                onMouseEnter={() => setHoverService(index)}
                onMouseLeave={() => setHoverService(null)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`
                    mb-4 inline-block p-3 bg-primary/10 rounded-full 
                    transform transition-all duration-500
                    ${hoverService === index ? 'scale-110 bg-primary/20' : ''}
                  `}>
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  {/* Animated underline on hover */}
                  <div className={`
                    mt-4 h-0.5 bg-primary transform origin-left transition-all duration-300
                    ${hoverService === index ? 'w-1/3 opacity-100' : 'w-0 opacity-0'}
                  `}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
