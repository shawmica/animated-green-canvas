
import { Card, CardContent } from "@/components/ui/card";
import { Code, Briefcase, User } from "lucide-react";

export default function AboutSection() {
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
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            I'm a passionate Full Stack Developer with 5+ years of experience building web applications. 
            I specialize in JavaScript, React, Node.js, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold">My Journey</h3>
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
              <div>
                <h4 className="font-bold">Name:</h4>
                <p className="text-muted-foreground">John Doe</p>
              </div>
              <div>
                <h4 className="font-bold">Email:</h4>
                <p className="text-muted-foreground">hello@johndoe.com</p>
              </div>
              <div>
                <h4 className="font-bold">Location:</h4>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-bold">Availability:</h4>
                <p className="text-muted-foreground">Open to opportunities</p>
              </div>
            </div>
          </div>

          <div className="order-first md:order-last">
            <div className="relative h-80 overflow-hidden rounded-xl animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-tl from-primary/80 to-primary/20 opacity-60 mix-blend-overlay"></div>
              <div className="w-full h-full bg-muted flex items-center justify-center text-6xl font-bold text-muted-foreground/30">
                <span className="sr-only">Developer image</span>
                {/* Placeholder for developer image */}
                <div className="w-full h-full bg-pattern flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xl font-bold">John Doe</p>
                    <p className="text-sm">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-10">What I Do</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
