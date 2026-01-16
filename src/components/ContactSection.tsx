import { Instagram, Mail, Youtube, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/jam5band",
    icon: Instagram,
    handle: "@jam5band",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@jamlimaband",
    icon: Youtube,
    handle: "@jamlimaband",
  },
  {
    name: "Email",
    url: "mailto:jam.lima.cihuy@gmail.com",
    icon: Mail,
    handle: "jam.lima.cihuy@gmail.com",
  },
  {
    name: "Merchandise",
    url: "https://tr.ee/PE-7jFIf1J",
    icon: ShoppingBag,
    handle: "Shop Merch",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Hubungi <span className="text-gradient">Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Mau kolaborasi atau cuma mau say hi? Reach out to us!
          </p>

          {/* Social Links Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-display font-semibold text-foreground">{link.name}</p>
                  <p className="text-sm text-muted-foreground">{link.handle}</p>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-card-gradient rounded-2xl border border-border p-8">
            <h3 className="text-xl font-display font-semibold mb-4">
              Mau denger demo terbaru?
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out Rayuan Gila versi demo di link khusus!
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://tr.ee/C2SxsHWWxF" target="_blank" rel="noopener noreferrer">
                Dengerin Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
