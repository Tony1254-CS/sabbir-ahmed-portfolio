import { Trophy, Award, BookOpen, Mic, Palette, Lightbulb } from "lucide-react";

const Achievements = () => {
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
    <section id="achievements" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements</h2>
          <p className="text-muted-foreground text-lg">Milestones that shaped my journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <achievement.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.subtitle}</p>
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
