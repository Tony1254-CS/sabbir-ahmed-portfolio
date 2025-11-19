import { 
  Brain, 
  Shield, 
  Code, 
  Coffee, 
  FileCode, 
  GitBranch, 
  Terminal, 
  Lightbulb,
  Search,
  PenTool,
  MessageSquare,
  Users
} from "lucide-react";

const Skills = () => {
  const skills = [
    { icon: Brain, name: "Machine Learning" },
    { icon: Shield, name: "Cybersecurity" },
    { icon: Code, name: "Python" },
    { icon: Coffee, name: "Java" },
    { icon: FileCode, name: "C, C++" },
    { icon: GitBranch, name: "Git & GitHub" },
    { icon: Terminal, name: "Linux & Windows" },
    { icon: Lightbulb, name: "Problem Solving" },
    { icon: Search, name: "Research & Analysis" },
    { icon: PenTool, name: "Creative Writing" },
    { icon: MessageSquare, name: "Communication" },
    { icon: Users, name: "Teamwork" },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground text-lg">Technical expertise and soft skills</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover-lift group text-center"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="inline-flex p-3 bg-primary/5 rounded-xl mb-3 group-hover:bg-primary/10 transition-colors">
                <skill.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="font-medium text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
