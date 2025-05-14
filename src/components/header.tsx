
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-background/80 backdrop-blur-lg shadow-md" : "py-4 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover-link font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg shadow-lg animate-fade-in">
          <nav className="container py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-foreground/80 hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
