import { Award, Plus } from "lucide-react";
import { Button } from "./ui/button";

const Certificates = () => {
  // Placeholder for certificate images - user will upload these
  const certificates = [
    { id: 1, title: "Certificate 1", image: "/placeholder.svg" },
    { id: 2, title: "Certificate 2", image: "/placeholder.svg" },
    { id: 3, title: "Certificate 3", image: "/placeholder.svg" },
  ];

  return (
    <section id="certificates" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certificates</h2>
          <p className="text-muted-foreground text-lg">Recognitions and certifications</p>
        </div>

        {/* Empty state with placeholder */}
        <div className="glass-card rounded-2xl p-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex p-6 bg-muted/50 rounded-2xl mb-6">
            <Award className="h-12 w-12 text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Certificate Gallery</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            This is where your certificates will be displayed. Upload your achievement certificates to showcase them in a beautiful grid layout.
          </p>
          <Button variant="outline" size="lg" className="rounded-full">
            <Plus className="h-4 w-4 mr-2" />
            Add Certificates
          </Button>
        </div>

        {/* This will be replaced with actual certificate grid when images are uploaded */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="glass-card rounded-xl overflow-hidden hover-lift cursor-pointer"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Certificates;
