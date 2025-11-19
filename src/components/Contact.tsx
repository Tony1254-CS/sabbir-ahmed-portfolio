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
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">Let's connect and collaborate</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project or idea..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="rounded-xl resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full rounded-full hover-lift">
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </form>

          {/* Social Links */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Or connect with me on</p>
            <div className="flex flex-wrap gap-3 justify-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
