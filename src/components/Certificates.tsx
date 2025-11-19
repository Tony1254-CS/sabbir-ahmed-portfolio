import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  
  // Placeholder certificates - user will replace these with their own
  const certificates = [
    { id: 1, title: "Certificate 1", image: "https://i.ibb.co/ycNKLpXb/IMG20250926145713.jpg" },
    { id: 2, title: "Certificate 2", image: "/placeholder.svg" },
    { id: 3, title: "Certificate 3", image: "/placeholder.svg" },
    { id: 4, title: "Certificate 4", image: "/placeholder.svg" },
    { id: 5, title: "Certificate 5", image: "/placeholder.svg" },
    { id: 6, title: "Certificate 6", image: "/placeholder.svg" },
  ];

  return (
    <section id="certificates" className="relative section-padding overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(217,176,255,0.05),transparent_60%)]" />
      
      <div className="relative container-custom">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
            <span className="text-sm font-medium text-accent">Credentials</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Certificates
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">Recognitions and certifications</p>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="group glass-card rounded-2xl overflow-hidden hover-lift cursor-pointer relative"
              style={{ animationDelay: `${index * 0.1}s`, animation: 'fadeIn 0.6s ease-out forwards' }}
              onClick={() => setSelectedCert(cert.id)}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              {/* Certificate Image */}
              <div className="relative aspect-[4/3] bg-muted/30 flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedCert !== null} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedCert && (
            <div className="relative">
              <img
                src={certificates.find(c => c.id === selectedCert)?.image}
                alt="Certificate"
                className="w-full h-auto"
              />
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certificates;
