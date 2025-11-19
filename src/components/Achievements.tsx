import { Trophy, Award, BookOpen, Mic, Palette, Lightbulb } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const Achievements = () => {
  const parallaxBg = useParallax(0.2);
  const achievements = [
    { icon: Trophy, title: "NASA Space Apps Challenge 2025", subtitle: "Regional 1st Runner-Up" },
    { icon: Award, title: "NASA Space Apps 2025", subtitle: "Global Nominee" },
    { icon: BookOpen, title: "Published Researcher", subtitle: "BIM 2025 (Springer LNNS)" },
    { icon: Award, title: "Math Olympiad", subtitle: "Division Level" },
    { icon: Palette, title: "Poster Design Competition", subtitle: "Winner" },
    { icon: Lightbulb, title: "Idea / Innovation Contest", subtitle: "Participant" },
    { icon: Mic, title: "Debate Competitions", subtitle: "Multiple Wins" },
    { icon: Mic, title: "Drama & Stage Performances", subtitle: "Active Performer" },
  ];

  return (
    <section id="achievements" className="relative section-padding overflow-hidden">
      {/* Subtle background pattern with parallax */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />
      <div ref={parallaxBg} className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,176,255,0.03),transparent_70%)]" />
      
      <div className="relative container-custom">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
            <span className="text-sm font-medium text-accent">Recognition</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">Milestones that shaped my journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl p-8 hover-lift relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s`, animation: 'fadeIn 0.6s ease-out forwards' }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative flex items-start gap-4">
                <div className="p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="h-7 w-7 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{achievement.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
