
import { ThemeToggle } from "./theme-toggle";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  activeSection?: string | null;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md",
        isScrolled ? "bg-background/80 shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a 
            href="#home" 
            className="text-xl md:text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            John Doe
          </a>
          
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "border-animated font-medium transition-all duration-300 hover:text-primary",
                  activeSection === item.id 
                    ? "text-primary border-primary" 
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden shadow-lg border-t">
          <nav className="flex flex-col py-4 bg-background/95 backdrop-blur-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "py-3 px-4 text-left transition-all duration-300 hover:bg-primary/10",
                  activeSection === item.id 
                    ? "text-primary font-medium bg-primary/5" 
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
