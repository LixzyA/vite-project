
import { Instagram, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/LixzyA" },
    { icon: Instagram, href: "https://www.instagram.com/felix.a._/" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/felix-antony-95894b206/" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold">Portfolio</span>
            <p className="mt-2 text-primary-foreground/70 max-w-md">
              {/* Crafting digital experiences that make an impact through thoughtful design and development. */}
              Developing systems and implementing machine learning solutions to solve complex problems.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label={`Social media link ${index + 1}`}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/70 text-sm">
            &copy; {currentYear} Felix Antony. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
