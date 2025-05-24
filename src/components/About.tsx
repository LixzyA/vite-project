
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Bootstrap", "Tailwind CSS"] },
    // { category: "Design", items: ["Adobe Photoshop", "UI/UX Design", "Prototyping"] },
    { category: "Backend", items: ["FastAPI", "Weaviate", "MySQL", "SQLite"] },
    { category: "ML/AI", items: ["Data Analytics", "Model Building", "LLMs"] },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-4">
              I'm an aspiring Backend & Machine Learning Engineer with 3 years of hands-on experience developing systems and ML/AI models through academic projects and research. 
              I thrive on architecting efficient data pipelines, optimizing backend services, and implementing machine learning solutions to solve complex problems.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              When I'm not coding, you can find me exploring nature trails, experimenting
              with photography, or attending tech meetups to stay connected with the
              industry.
            </p>
            <Button
              variant="outline"
              onClick={() => window.open("https://drive.google.com/file/d/1G-eNLn53k-Dj14IrkYFESVdsA8fEyiLB/view?usp=drive_link", "_blank")}
              className="mb-6 md:mb-0"
            >
              Open Resume
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.category} className="overflow-hidden">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">{skillGroup.category}</h4>
                    <ul className="space-y-1">
                      {skillGroup.items.map((skill) => (
                        <li key={skill} className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                          <span className="text-muted-foreground">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
