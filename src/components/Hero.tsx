import { Mail, Linkedin, Github, Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:sabbirahmed12546@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sabbir-ahmed1254", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Tony1254-CS", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/Sabbir1254", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/s.a_tony?igsh=dWh6dnEzZzdnNmhv", label: "Instagram" },
    { icon: Facebook, href: "https://m.me/sabbir.ahmed.1254", label: "Facebook" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-custom text-center">
        <div className="flex flex-col items-center gap-8 animate-fade-in">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <img
              src="https://ibb.co.com/q3DhbCdP"
              alt="Sabbir Ahmed"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-card shadow-lg"
            />
          </div>

          {/* Name */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
              Sabbir Ahmed
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              CSE Student exploring Machine Learning, Cybersecurity & Intelligent Systems
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                className="hover-lift rounded-full"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Button
              size="lg"
              className="rounded-full px-8 hover-lift"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
