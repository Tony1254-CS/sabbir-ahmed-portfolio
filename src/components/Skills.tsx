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
    <section id="skills" className="relative section-padding overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="relative container-custom">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">Technical expertise and soft skills</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl p-8 hover-lift text-center relative overflow-hidden"
              style={{ animationDelay: `${index * 0.05}s`, animation: 'fadeIn 0.6s ease-out forwards' }}
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="inline-flex p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                  <skill.icon className="h-8 w-8 text-primary" />
                </div>
                <p className="font-semibold group-hover:text-accent transition-colors duration-300">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
