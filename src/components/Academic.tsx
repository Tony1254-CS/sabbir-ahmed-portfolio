import { GraduationCap, Award } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const Academic = () => {
  const parallaxBg = useParallax(0.25);
  const records = [
    {
      degree: "CSE Undergraduate",
      institution: "Dhaka International University",
      year: "3rd Year",
      grade: "CGPA 3.84",
      icon: GraduationCap,
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "HSC 2022",
      year: "Science",
      grade: "GPA 5.00",
      icon: Award,
    },
    {
      degree: "Secondary School Certificate",
      institution: "SSC 2020",
      year: "Science",
      grade: "GPA 5.00",
      icon: Award,
    },
  ];

  return (
    <section id="academic" className="relative section-padding overflow-hidden">
      {/* Background effects with parallax */}
      <div ref={parallaxBg} className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5" />
      
      <div className="relative container-custom">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Education</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Academic Excellence
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">Educational journey with consistent performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {records.map((record, index) => (
            <div
              key={index}
              className="group glass-card rounded-3xl p-10 hover-lift text-center relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s`, animation: 'fadeIn 0.6s ease-out forwards' }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="inline-flex p-5 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <record.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                  {record.degree}
                </h3>
                <p className="text-muted-foreground font-medium mb-2">{record.institution}</p>
                <p className="text-sm text-muted-foreground mb-4">{record.year}</p>
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full border-2 border-accent/20">
                  <span className="font-bold text-lg bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    {record.grade}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academic;
