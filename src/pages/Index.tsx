
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
  // Add scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const hiddenElements = document.querySelectorAll(".reveal");
    hiddenElements.forEach((el) => {
      el.classList.remove("animate-fade-in");
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
