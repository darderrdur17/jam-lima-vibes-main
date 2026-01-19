import { motion } from "framer-motion";
import { ShoppingBag, ExternalLink } from "lucide-react";
import blueRingerFront from "@/assets/id-11134207-7rbk6-m9ob10zhkk9e53@resize_w900_nl.jpeg";
import blueRingerBack from "@/assets/id-11134207-7rbk5-m9ob10zhkkcib2.jpeg";
import frontGraphicMain from "@/assets/id-11134207-7rbk5-m9obhtmarit732.jpeg";
import frontGraphicDetail from "@/assets/id-11134207-7rbkd-m9obhtmasxd91b.jpeg";
import frontGraphicBack from "@/assets/id-11134207-7rbk5-m9obhtmaristd1.jpeg";
import backCartoonFront from "@/assets/id-11134207-7rbk2-m9obd6ajmk9906.jpeg";
import backCartoonBack from "@/assets/id-11134207-7rbk1-m9obd6ajnytpcb.jpeg";

const merchItems = [
  {
    id: 1,
    name: "Blue Ringer Tee",
    description: "Blue ringer tee resmi Jam Lima.",
    price: "Rp 99.000",
    category: "Apparel",
    available: true,
    comingSoon: false,
    url: "https://shopee.co.id/Blue-Ringer-Tee-Jam-Lima-Official-Merchandise-Asli-i.1538030115.26436505906?extraParams=%7B%22display_model_id%22%3A227815947923%7D",
    images: [blueRingerFront, blueRingerBack],
  },
  {
    id: 2,
    name: "Front Graphic Tee",
    description: "Kaos dengan graphic depan khas Jam Lima.",
    price: "Rp 99.000",
    category: "Apparel",
    available: true,
    comingSoon: false,
    url: "https://shopee.co.id/Front-Graphic-Tee-Jam-Lima-Official-Merchandise-Asli-i.1538030115.41350615868?extraParams=%7B%22display_model_id%22%3A295048533301%7D",
    images: [frontGraphicMain, frontGraphicDetail, frontGraphicBack],
  },
  {
    id: 3,
    name: "Back Cartoon Tee",
    description: "Kaos dengan desain kartun di bagian belakang.",
    price: "Rp 99.000",
    category: "Apparel",
    available: true,
    comingSoon: false,
    url: "https://shopee.co.id/Back-Cartoon-Tee-Jam-Lima-Official-Merchandise-Asli-i.1538030115.26286505986?extraParams=%7B%22display_model_id%22%3A270048499302%7D",
    images: [backCartoonFront, backCartoonBack],
  },
  {
    id: 4,
    name: "Merch Lainnya",
    description: "Merch baru segera hadir. Stay tuned!",
    price: "",
    category: "Coming Soon",
    available: false,
    comingSoon: true,
    url: "",
    images: [],
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
          {merchItems.map((item) => {
            const cardContent = (
              <>
                <div className="aspect-square bg-muted relative overflow-hidden">
                  {item.images?.length ? (
                    <img
                      src={item.images[0]}
                      alt={`${item.name} photo`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-4">
                        <ShoppingBag className="mx-auto mb-2 text-muted-foreground" size={48} />
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  )}
                  {item.comingSoon && (
                    <div className="absolute inset-0 bg-background/70 flex items-center justify-center">
                      <span className="px-4 py-2 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        Segera Hadir
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>

                {item.images && item.images.length > 1 && (
                  <div className="grid grid-cols-3 gap-2 p-4 pt-3">
                    {item.images.slice(1, 4).map((image, imageIndex) => (
                      <div
                        key={`${item.id}-${imageIndex}`}
                        className="aspect-square overflow-hidden rounded-lg border border-border/60 bg-muted"
                      >
                        <img
                          src={image}
                          alt={`${item.name} photo ${imageIndex + 2}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className={`p-5 ${item.images && item.images.length > 1 ? "pt-0" : ""}`}>
                  <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    {item.available ? (
                      <>
                        <span className="font-bold text-primary">{item.price}</span>
                        <span className="text-xs text-green-500 font-medium">
                          ✓ Tersedia
                        </span>
                      </>
                    ) : (
                      <span className="text-xs text-amber-500 font-medium">
                        Segera Hadir
                      </span>
                    )}
                  </div>
                </div>
              </>
            );

            return item.url ? (
              <motion.a
                key={item.id}
                variants={itemVariants}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card-gradient rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {cardContent}
              </motion.a>
            ) : (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group bg-card-gradient rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {cardContent}
              </motion.div>
            );
          })}
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
            href="https://shopee.co.id/jamlimamerch"
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
