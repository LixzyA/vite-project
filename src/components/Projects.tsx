import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Learning Recommendation System with LLM",
      description: "A Learning Recommendation System using a Large Language Model (LLM) to suggest personalized learning paths based on user profiles and course content, achieving 96% on NDCG@5.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["Python", "FastAPI", "SentenceTransformer", "LLM", "Weaviate"],
      link: "https://github.com/LixzyA/Learning-Recommendation-System-with-LLM",
    },
    {
      title: "Instant Messaging App",
      description: "An Instant Messaging App that enables real-time text communication between users with features like user authentication and chat interface.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tags: ["Python", "Socket", "TKinter", "MySQL"],
      link: "https://github.com/LixzyA/Instant-Messaging-App",
    },
    {
      title: "Email Spam Detection",
      description: "This project implements an Email Spam Detection system using machine learning to classify emails as spam or not spam based on their content, achieving 97% accuracy score.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Classification", "Data Cleaning", "Data analysis", "NLP"],
      link: "https://github.com/LixzyA/Email-spam-detection",
    },
    {
      title: "Predict Calorie Expenditure",
      description: "This project predicts calorie expenditure using machine learning models based on physical activity data.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["Regression", "EDA", "Feature Engineering"],
      link: "https://github.com/LixzyA/Predict-Calorie-Expenditure",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            A selection of my recent work, showcasing my skills and experience in Backend & ML/AI.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <a
                  href={project.link}
                  className="inline-flex items-center text-sm font-medium group"
                >
                  View project
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
