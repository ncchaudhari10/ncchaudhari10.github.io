import { useEffect } from "react";
import Starfield from "@/components/starfield";
import FloatingEquations from "@/components/floating-equations";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import JourneyTimeline from "@/components/journey-timeline";
import ResearchSection from "@/components/research-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import ConnectSection from "@/components/connect-section";

export default function Home() {
  useEffect(() => {
    // Add dark class to html element
    document.documentElement.classList.add('dark');
    
    // Smooth scroll for navigation
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes('#')) {
        e.preventDefault();
        const id = target.href.split('#')[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-cosmic-dark text-cosmic-silver overflow-x-hidden">
      <Starfield />
      <FloatingEquations />
      <Navigation />
      
      <main>
        <HeroSection />
        <JourneyTimeline />
        <ResearchSection />
        <ProjectsSection />
        {/* <SkillsSection /> */}
        <ConnectSection />
      </main>
      
      <footer className="py-8 border-t border-cosmic-gold border-opacity-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-cosmic-silver">
            &copy; {new Date().getFullYear()} Niraj Chaudhari.
          </p>
          <p className="text-cosmic-silver opacity-75 mt-2">
            "Always curious, always learning, always pushing the boundaries of data exploration to empower smarter decisions."
          </p>
        </div>
      </footer>
    </div>
  );
}
