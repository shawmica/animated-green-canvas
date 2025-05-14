
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useEffect } from "react";

const Index = () => {
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
      // Fix: Cast the element to HTMLElement to access style property
      (el as HTMLElement).style.opacity = "0";
      observer.observe(el);
    });

    return () => {
      hiddenElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
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
