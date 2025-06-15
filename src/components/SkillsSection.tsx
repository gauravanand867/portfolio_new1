
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Cloud, Code, Lightbulb } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Product & Strategy",
      icon: Lightbulb,
      skills: [
        "Product Strategy & Planning",
        "Full-Cycle Product Development", 
        "UX Design Principles",
        "Technical Architecture",
        "System Design",
        "Agile Methodologies",
        "Code Review & QA"
      ]
    },
    {
      title: "Core Technologies",
      icon: Code,
      skills: [
        "MERN Stack",
        "JavaScript & TypeScript",
        "React.js & Next.js",
        "Node.js & Express.js",
        "MongoDB",
        "REST APIs",
        "Git Version Control"
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        "AWS (Lambda, ECS, S3, CloudWatch)",
        "Serverless Architecture",
        "Terraform",
        "CI/CD Pipelines",
        "Jenkins",
        "SonarQube",
        "PostgreSQL"
      ]
    },
    {
      title: "Generative AI",
      icon: Brain,
      skills: [
        "LLM API Integration",
        "OpenAI API",
        "Prompt Engineering",
        "AI Product Features",
        "Machine Learning Concepts",
        "AI-Driven Solutions",
        "Intelligent Automation"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Expertise & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="bg-gradient-to-br from-background to-background/50 border-border hover:border-primary/30 transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center pb-4">
                  <category.icon className="h-12 w-12 text-primary mx-auto mb-3" />
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-sm text-muted-foreground flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
