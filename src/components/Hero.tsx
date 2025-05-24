
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <span className="inline-block mb-3 font-medium text-primary animate-fade-in">
            Hello, I'm
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <span className="block">Felix Antony</span>
            <span className="block mt-2 text-muted-foreground">
              Backend & ML/AI Engineer
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
            I design scalable systems and intelligent algorithms that solve complex problems. 
            Focused on high-performance architecture, efficient data pipelines, and deploying machine learning models that make an impact
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <Button onClick={scrollToProjects} className="group">
              View my work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
