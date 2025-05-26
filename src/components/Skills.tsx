import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaReact, FaPython, FaDatabase, FaBrain } from "react-icons/fa";
import { SiNextdotjs, SiBootstrap, SiTailwindcss, SiFastapi, SiMysql, SiSqlite } from "react-icons/si";
import { useState } from "react";

const allSkills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <FaReact className="mr-2 h-5 w-5" /> },
      { name: "CSS", icon: <FaReact className="mr-2 h-5 w-5" /> },
      { name: "JavaScript", icon: <FaReact className="mr-2 h-5 w-5" /> },
      { name: "React", icon: <FaReact className="mr-2 h-5 w-5" /> },
      { name: "Next.js", icon: <SiNextdotjs className="mr-2 h-5 w-5" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="mr-2 h-5 w-5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="mr-2 h-5 w-5" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "FastAPI", icon: <SiFastapi className="mr-2 h-5 w-5" /> },
      { name: "Weaviate", icon: <FaDatabase className="mr-2 h-5 w-5" /> },
      { name: "MySQL", icon: <SiMysql className="mr-2 h-5 w-5" /> },
      { name: "SQLite", icon: <SiSqlite className="mr-2 h-5 w-5" /> },
    ],
  },
  {
    category: "ML/AI",
    items: [
      { name: "Data Analytics", icon: <FaBrain className="mr-2 h-5 w-5" /> },
      { name: "Model Building", icon: <FaBrain className="mr-2 h-5 w-5" /> },
      { name: "LLMs", icon: <FaBrain className="mr-2 h-5 w-5" /> },
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
    <section id="skills" className="py-16 md:py-24 bg-secondary/50">
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
                <Card key={skill.name} className="overflow-hidden w-auto">
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