import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import Academic from "@/components/Academic";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Achievements />
      <Academic />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-border/40">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sabbir Ahmed. Designed with precision and care.
        </p>
      </footer>
    </div>
  );
};

export default Index;
