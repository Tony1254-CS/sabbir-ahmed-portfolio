import { useState } from "react";
import { Mail, Linkedin, Github, Instagram, Twitter, Facebook, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to a backend
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:sabbirahmed12546@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sabbir-ahmed1254", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Tony1254-CS", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/Sabbir1254", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/s.a_tony?igsh=dWh6dnEzZzdnNmhv", label: "Instagram" },
    { icon: Facebook, href: "https://m.me/sabbir.ahmed.1254", label: "Facebook" },
  ];

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,176,255,0.08),transparent_60%)]" />
      
      <div className="relative container-custom">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
            <span className="text-sm font-medium text-accent">Connect</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">Let's connect and collaborate</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-10 space-y-8 relative overflow-hidden group">
            {/* Animated gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-3xl opacity-0 group-hover:opacity-20 blur transition-all duration-500" />
            
            <div className="relative space-y-2">
              <label htmlFor="name" className="text-sm font-semibold">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-xl h-12 text-lg"
              />
            </div>

            <div className="relative space-y-2">
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="rounded-xl h-12 text-lg"
              />
            </div>

            <div className="relative space-y-2">
              <label htmlFor="message" className="text-sm font-semibold">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project or idea..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="rounded-xl resize-none text-lg"
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="relative w-full rounded-full h-14 text-lg hover-lift bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300"
            >
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </Button>
          </form>

          {/* Social Links */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">Or connect with me on</p>
            <div className="flex flex-wrap gap-4 justify-center">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="hover-lift rounded-full h-12 w-12 border-2 hover:border-accent hover:bg-accent/5 transition-all duration-300 backdrop-blur-sm bg-card/50"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
