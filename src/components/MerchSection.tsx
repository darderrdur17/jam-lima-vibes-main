import { motion } from "framer-motion";
import { ShoppingBag, ExternalLink } from "lucide-react";

const merchItems = [
  {
    id: 1,
    name: "Jam Lima Logo Tee",
    description: "Kaos hitam dengan logo Jam Lima klasik",
    price: "Rp 150.000",
    category: "Apparel",
    available: true,
  },
  {
    id: 2,
    name: "Hidup Di Dunia Hoodie",
    description: "Hoodie eksklusif album pertama kami",
    price: "Rp 350.000",
    category: "Apparel",
    available: true,
  },
  {
    id: 3,
    name: "Band Poster Set",
    description: "Set poster A3 dengan artwork album",
    price: "Rp 75.000",
    category: "Accessories",
    available: true,
  },
  {
    id: 4,
    name: "Jam Lima Sticker Pack",
    description: "10 sticker desain eksklusif",
    price: "Rp 35.000",
    category: "Accessories",
    available: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const MerchSection = () => {
  return (
    <section id="merch" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-muted/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <ShoppingBag className="inline-block mr-2" size={16} />
            Official Merchandise
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Band <span className="text-gradient">Merch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tunjukkin dukungan kamu dengan koleksi merchandise resmi Jam Lima!
          </p>
        </motion.div>

        {/* Merch Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {merchItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group bg-card-gradient rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Placeholder Image */}
              <div className="aspect-square bg-muted relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <ShoppingBag className="mx-auto mb-2 text-muted-foreground" size={48} />
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">{item.price}</span>
                  {item.available && (
                    <span className="text-xs text-green-500 font-medium">
                      ✓ Tersedia
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="https://tr.ee/PE-7jFIf1J"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-300 hover:scale-105"
          >
            <ShoppingBag size={24} />
            Kunjungi Toko Online
            <ExternalLink size={18} />
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Pengiriman ke seluruh Indonesia & Singapore 🇮🇩 🇸🇬
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MerchSection;
