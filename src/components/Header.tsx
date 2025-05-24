
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <span className="text-xl md:text-2xl font-bold font-heading">Felix Antony</span>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center space-x-8">
              {["about", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-sm font-medium animated-underline capitalize"
                >
                  {item}
                </button>
              ))}
              <Button onClick={() => window.open("https://drive.google.com/file/d/1G-eNLn53k-Dj14IrkYFESVdsA8fEyiLB/view?usp=drive_link", "_blank")} size="sm">
                Resume
              </Button>
            </nav>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {["about", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-3 py-2 text-base font-medium capitalize"
              >
                {item}
              </button>
            ))}
            <div className="px-3 py-2">
              <Button onClick={() => window.open("https://drive.google.com/file/d/1G-eNLn53k-Dj14IrkYFESVdsA8fEyiLB/view?usp=drive_link", "_blank")} className="w-full">
                Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
