import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  Twitter,
  Facebook,
  ChevronDown,
} from "lucide-react";
import { Button } from "./ui/button";
import { useParallax } from "@/hooks/useParallax";

const Hero = () => {
  const parallaxSlow = useParallax(0.3);
  const parallaxFast = useParallax(0.5);
  const socialLinks = [
    { icon: Mail, href: "mailto:sabbirahmed12546@gmail.com", label: "Email" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sabbir-ahmed1254",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/Tony1254-CS", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/Sabbir1254", label: "Twitter" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/s.a_tony?igsh=dWh6dnEzZzdnNmhv",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://m.me/sabbir.ahmed.1254",
      label: "Facebook",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,176,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,180,255,0.08),transparent_50%)]" />

      {/* Floating orbs with parallax */}
      <div
        ref={parallaxSlow}
        className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"
      />
      <div
        ref={parallaxFast}
        className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"
      />

      <div className="relative container-custom section-padding">
        <div className="flex flex-col items-center gap-12 animate-fade-in">
          {/* Profile Image with dramatic effect */}
          <div className="relative group">
            {/* Outer glow rings */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-700 animate-pulse scale-110" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/20 rounded-full blur-3xl group-hover:blur-[100px] transition-all duration-700 scale-125" />

            {/* Image container */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-full opacity-80 blur-sm group-hover:blur-md transition-all duration-500" />
              <img
                src="https://i.ibb.co/ycNKLpXb/IMG20250926145713.jpg"
                alt="Sabbir Ahmed"
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-card shadow-2xl ring-4 ring-accent/20 group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
            </div>
          </div>

          {/* Name with gradient */}
          <div className="space-y-6 text-center">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent animate-fade-in">
              Sabbir Ahmed
            </h1>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
            <p className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed font-light">
              CSE Student exploring{" "}
              <span className="text-accent font-medium">Machine Learning</span>,
              <span className="text-primary font-medium"> Cybersecurity</span> &
              <span className="text-accent font-medium">
                {" "}
                Intelligent Systems
              </span>
            </p>
          </div>

          {/* Social Links with enhanced style */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            {socialLinks.map((social, index) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                className="hover-lift rounded-full border-2 hover:border-accent hover:bg-accent/5 transition-all duration-300 backdrop-blur-sm bg-card/50"
                style={{ animationDelay: `${index * 0.1}s` }}
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          {/* CTA with gradient */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="rounded-full px-10 py-6 text-lg hover-lift bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 py-6 text-lg hover-lift border-2 hover:border-accent backdrop-blur-sm bg-card/50"
              asChild
            >
              <a href="#achievements">View Work</a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
