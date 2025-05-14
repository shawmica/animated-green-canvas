
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full bg-primary/30 blur-3xl animate-float" style={{animationDelay: '1s', animationDuration: '7s'}}></div>
        <div className="absolute top-2/3 -right-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl animate-pulse-slow" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
        
        {/* Additional animated elements */}
        <div className="absolute top-1/3 left-1/3 w-24 h-24 rounded-full bg-accent/40 blur-xl animate-float" style={{animationDelay: '1.5s', animationDuration: '6s'}}></div>
        <div className="absolute bottom-1/4 left-1/5 w-32 h-32 rounded-full bg-primary/15 blur-2xl animate-pulse-slow" style={{animationDelay: '3s', animationDuration: '9s'}}></div>
        
        {/* Animated particles */}
        <div className="hidden md:block absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/60 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${5 + Math.random() * 7}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[2fr,1fr] gap-8 items-center">
            {/* Text Content with enhanced animations */}
            <div className="space-y-6">
              <div className="overflow-hidden">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                  Hi, I'm <span className="text-primary animate-pulse-slow inline-block">John Doe</span>
                  <div className="mt-2 animate-slide-in-left" style={{animationDelay: '0.4s'}}>Full Stack Developer</div>
                </h1>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground animate-slide-in-left" style={{animationDelay: '0.6s'}}>
                I build exceptional and accessible digital experiences for the web.
                Passionate about creating elegant solutions to complex problems.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4 animate-slide-in-left" style={{animationDelay: '0.8s'}}>
                <Button size="lg" className="button-hover relative overflow-hidden group">
                  <span className="relative z-10">Download CV</span>
                  <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
                <Button size="lg" variant="outline" className="button-hover relative overflow-hidden group">
                  <span className="relative z-10">Get in touch</span>
                  <span className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </div>
            </div>
            
            {/* Profile Image with enhanced animations */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl animate-float mx-auto">
                  {/* Placeholder profile image with improved styling */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/80 to-primary/30 flex items-center justify-center text-white/80 text-7xl font-bold relative overflow-hidden">
                    <div className="relative z-10">JD</div>
                    <div className="absolute inset-0 bg-[length:400%_400%] bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-pulse-slow"></div>
                
                {/* Decorative elements */}
                <div className="absolute -right-4 top-1/4 w-8 h-8 rounded-full bg-accent/80 animate-bounce-light" style={{animationDelay: '1s'}}></div>
                <div className="absolute -left-2 bottom-1/4 w-6 h-6 rounded-full bg-primary/60 animate-bounce-light" style={{animationDelay: '0.5s'}}></div>
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
