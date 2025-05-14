
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full bg-primary/30 blur-3xl animate-pulse" style={{animationDelay: '1s', animationDuration: '7s'}}></div>
        <div className="absolute top-2/3 -right-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl animate-pulse" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[2fr,1fr] gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-primary">John Doe</span>
                <div className="mt-2">Full Stack Developer</div>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                I build exceptional and accessible digital experiences for the web.
                Passionate about creating elegant solutions to complex problems.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <Button size="lg" className="button-hover">
                  Download CV
                </Button>
                <Button size="lg" variant="outline" className="button-hover">
                  Get in touch
                </Button>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl animate-scale-in mx-auto">
                  {/* Placeholder profile image - replace with your own */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/80 to-primary/30 flex items-center justify-center text-white/80 text-7xl font-bold">JD</div>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center border border-primary/30 bg-background/50 backdrop-blur-sm animate-bounce hover:bg-primary/10 transition-colors"
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </a>
      </div>
    </section>
  );
}
