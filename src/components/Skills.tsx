import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaReact, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiBootstrap, SiTailwindcss, SiFastapi, 
  SiMysql, SiSqlite, SiHtml5, SiCss3, SiJavascript, SiDjango,
  SiPytest, SiScrapy, SiSqlalchemy, SiScikitlearn, SiTensorflow, SiKeras,
  SiPytorch, SiNumpy, SiPandas, SiPlotly, SiOpencv,
  SiPython, SiApachespark, SiSpacy, SiHuggingface, SiApachehadoop
 
 } from "react-icons/si";
 import { DiMsqlServer } from "react-icons/di";
import { useState } from "react";

const allSkills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <SiHtml5 className="mr-2 h-5 w-5" /> },
      { name: "CSS", icon: <SiCss3 className="mr-2 h-5 w-5" /> },
      { name: "JavaScript", icon: <SiJavascript className="mr-2 h-5 w-5" /> },
      { name: "React", icon: <FaReact className="mr-2 h-5 w-5" /> },
      { name: "Next.js", icon: <SiNextdotjs className="mr-2 h-5 w-5" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="mr-2 h-5 w-5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="mr-2 h-5 w-5" /> },
      { name: "TKinter", icon: <SiTailwindcss className="mr-2 h-5 w-5" /> },

    ],
  },
  {
    category: "Backend",
    items: [
      { name: "FastAPI", icon: <SiFastapi className="mr-2 h-5 w-5" /> },
      { name: "Django", icon: <SiDjango className="mr-2 h-5 w-5" /> },
      { name: "Weaviate", icon: <FaDatabase className="mr-2 h-5 w-5" /> },
      { name: "MySQL", icon: <SiMysql className="mr-2 h-5 w-5" /> },
      { name: "SQLite", icon: <SiSqlite className="mr-2 h-5 w-5" /> },
      { name: "MSSQL", icon: <DiMsqlServer className="mr-2 h-5 w-5" /> },
      { name: "Pytest", icon: <SiPytest className="mr-2 h-5 w-5" /> },
      { name: "Scrapy", icon: <SiScrapy className="mr-2 h-5 w-5" /> },
      { name: "SQLAlchemy", icon: <SiSqlalchemy className="mr-2 h-5 w-5" /> },
    ],
  },
  {
    category: "ML/AI",
    items: [
      { name: "Scikit-learn", icon: <SiScikitlearn className="mr-2 h-5 w-5" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="mr-2 h-5 w-5" /> },
      { name: "Keras", icon: <SiKeras className="mr-2 h-5 w-5" /> },
      { name: "PyTorch", icon: <SiPytorch className="mr-2 h-5 w-5" /> },
      { name: "Numpy", icon: <SiNumpy className="mr-2 h-5 w-5" /> },
      { name: "Pandas", icon: <SiPandas className="mr-2 h-5 w-5" /> },
      { name: "Matplotlib", icon: <SiPython className="mr-2 h-5 w-5" /> },
      { name: "Seaborn", icon: <SiPython className="mr-2 h-5 w-5" /> },
      { name: "Plotly", icon: <SiPlotly className="mr-2 h-5 w-5" /> },
      { name: "NLTK", icon: <SiPython className="mr-2 h-5 w-5" /> },
      { name: "Spacy", icon: <SiSpacy className="mr-2 h-5 w-5" /> },
      { name: "OpenCV", icon: <SiOpencv className="mr-2 h-5 w-5" /> },      
      { name: "PySpark", icon: <SiApachespark className="mr-2 h-5 w-5" /> },
      { name: "Apache Hadoop", icon: <SiApachehadoop className="mr-2 h-5 w-5" /> },
      { name: "HuggingFace", icon: <SiHuggingface className="mr-2 h-5 w-5" /> },
    ],
  },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    allSkills.length > 0 ? allSkills[0].category : null
  );

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const displayedSkillGroup = allSkills.find(group => group.category === selectedCategory);

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold mb-4 text-center">My Skills</h3>
          
          <div className="flex space-x-2 mb-6 justify-center">
            {allSkills.map((group) => (
              <Button
                key={group.category}
                variant={selectedCategory === group.category ? "default" : "outline"}
                onClick={() => handleCategoryClick(group.category)}
              >
                {group.category}
              </Button>
            ))}
          </div>

          {displayedSkillGroup && (
            <div className="flex flex-wrap gap-4 justify-center">
              {displayedSkillGroup.items.map((skill) => (
                <Card key={skill.name} className="overflow-hidden w-auto shadow-lg">
                  <CardContent className="p-4 flex flex-row items-center h-full">
                    {skill.icon}
                    <span className="text-muted-foreground text-sm text-center">{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills; 