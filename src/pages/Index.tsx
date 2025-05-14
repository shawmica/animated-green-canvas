
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  // Enhanced scroll reveal effect with staggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get data-delay attribute or default to 0
            const delay = entry.target.getAttribute('data-delay') || '0';
            // Apply the animation with the delay
            setTimeout(() => {
              entry.target.classList.add("animate-fade-in");
              (entry.target as HTMLElement).style.opacity = "1";
            }, parseInt(delay));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.15, // Slightly increased threshold for better timing
      }
    );

    const hiddenElements = document.querySelectorAll(".reveal");
    hiddenElements.forEach((el, index) => {
      el.classList.remove("animate-fade-in");
      // Set staggered delays based on element position
      el.setAttribute('data-delay', (index * 100).toString());
      // Cast the element to HTMLElement to access style property
      (el as HTMLElement).style.opacity = "0";
      observer.observe(el);
    });

    return () => {
      hiddenElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Add section visibility functionality
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const handleSectionVisibility = () => {
      sections.forEach(section => {
        const sectionId = section.getAttribute("id");
        const sectionTop = section.getBoundingClientRect().top;
        const isVisible = sectionTop < window.innerHeight * 0.5 && 
                         sectionTop > -section.clientHeight * 0.5;
        
        if (isVisible) {
          section.classList.add("section-visible");
          section.classList.remove("section-hidden");
          setActiveSection(sectionId);
        } else {
          section.classList.remove("section-visible");
          section.classList.add("section-hidden");
        }
      });
    };
    
    // Initialize all sections as hidden
    sections.forEach(section => {
      section.classList.add("section-hidden");
    });
    
    // Show the first section by default
    if (sections.length > 0) {
      sections[0].classList.add("section-visible");
      sections[0].classList.remove("section-hidden");
    }
    
    window.addEventListener("scroll", handleSectionVisibility);
    
    // Run once to set initial state
    handleSectionVisibility();
    
    return () => {
      window.removeEventListener("scroll", handleSectionVisibility);
    };
  }, []);
  
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
