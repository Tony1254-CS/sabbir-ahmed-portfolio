import { GraduationCap, Award } from "lucide-react";

const Academic = () => {
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
    <section id="academic" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Academic Record</h2>
          <p className="text-muted-foreground text-lg">Educational excellence throughout the journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {records.map((record, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover-lift text-center"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-flex p-4 bg-primary/5 rounded-2xl mb-6">
                <record.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{record.degree}</h3>
              <p className="text-muted-foreground mb-1">{record.institution}</p>
              <p className="text-sm text-muted-foreground mb-3">{record.year}</p>
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
                <span className="font-semibold text-accent">{record.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academic;
