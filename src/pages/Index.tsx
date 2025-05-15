
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
  
  // Enhanced scroll reveal effect with staggered animations - REMOVED

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
      setActiveSection(sections[0].getAttribute("id"));
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
