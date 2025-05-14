
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-accent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold text-primary">Portfolio</p>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} John Doe. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full bg-background/70 hover:bg-primary/20 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full bg-background/70 hover:bg-primary/20 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:hello@johndoe.com" 
              aria-label="Email"
              className="p-2 rounded-full bg-background/70 hover:bg-primary/20 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
