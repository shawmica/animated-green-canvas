
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

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]")) as HTMLElement[];
    if (sections.length === 0) return;

    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      // Defines an offset from the top of the viewport. A section's top passing this line (from top)
      // potentially makes it active. We usually take the header height or a bit more.
      // Let's use 150px as a generic offset.
      const activationPoint = scrollY + 150; 

      let newActiveSection: string | null = null;

      // Iterate through sections to find which one is currently active
      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        // A section is a candidate if its top has scrolled past the activation point
        if (sectionTop <= activationPoint) {
          newActiveSection = section.id;
        }
      }
      
      // If scrolled to the very top, ensure the first section is active
      if (scrollY < 50 && sections.length > 0) {
        newActiveSection = sections[0].id;
      }
      // If scrolled to the very bottom, ensure the last section is active
      else if ((viewportHeight + scrollY) >= document.body.scrollHeight - 50 && sections.length > 0) {
        newActiveSection = sections[sections.length - 1].id;
      }

      // If no section was determined (e.g. in a large gap between sections, or sections are too small)
      // default to the first one if not already set by top/bottom conditions.
      if (newActiveSection === null && sections.length > 0 && scrollY >= 50 && (viewportHeight + scrollY) < document.body.scrollHeight - 50) {
         // This case is less likely with the current logic but acts as a fallback.
         // Try to find the section whose top is closest to the activationPoint
         let closestSection: string | null = null;
         let minDistance = Infinity;
         for (const section of sections) {
            const distance = Math.abs(section.offsetTop - activationPoint);
            if (distance < minDistance) {
                minDistance = distance;
                closestSection = section.id;
            }
         }
         newActiveSection = closestSection;
      }


      if (newActiveSection === null && sections.length > 0) {
        // Final fallback: if still null, ensure the first section is selected.
        newActiveSection = sections[0].id;
      }

      setActiveSection(newActiveSection);
    };

    // Set initial active section
    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", updateActiveSection); // Recalculate on resize

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
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
