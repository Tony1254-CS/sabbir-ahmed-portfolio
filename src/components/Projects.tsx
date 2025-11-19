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
    <section id="projects" className="relative section-padding overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(217,176,255,0.05),transparent_60%)]" />
      
      <div className="relative container-custom">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
            <span className="text-sm font-medium text-accent">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Projects & Interests
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">What I'm working on and exploring</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-card rounded-3xl p-10 hover-lift relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s`, animation: 'fadeIn 0.6s ease-out forwards' }}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
              
              <div className="relative flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <project.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-2xl mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{project.description}</p>
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
