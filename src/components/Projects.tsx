import { Brain, Shield, Cpu, FileText, Wrench } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Brain,
      title: "Machine Learning Experiments",
      description: "Exploring ML algorithms, model training, and data analysis with practical implementations",
    },
    {
      icon: Shield,
      title: "Cybersecurity Research",
      description: "CTF challenges, VM labs, and basic penetration testing in controlled environments",
    },
    {
      icon: Cpu,
      title: "AI & LLM Workflows",
      description: "Working with Ollama, building AI pipelines, and experimenting with language models",
    },
    {
      icon: FileText,
      title: "Creative Writing & Content",
      description: "Bilingual content creation, technical documentation, and storytelling",
    },
    {
      icon: Wrench,
      title: "Technical Troubleshooting",
      description: "System optimization, debugging, and solving complex technical challenges",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects & Interests</h2>
          <p className="text-muted-foreground text-lg">What I'm working on and exploring</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                  <project.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
