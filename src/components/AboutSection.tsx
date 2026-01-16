import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bandArt from "@/assets/band-art-halftone.jpg";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section ref={ref} id="about" className="py-24 bg-hero-gradient overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-2xl" />
            <motion.div style={{ y: imageY }} className="relative">
              <img
                src={bandArt}
                alt="Jam Lima Band"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Tentang <span className="text-gradient">Kami</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Kami adalah 5 mahasiswa Indonesia di NUS. Selama 11 hari antara akhir ujian dan libur panjang, 
                kami mencuri waktu merekam full album berisi 11 lagu yang kami tulis, aransemen, rekam, mix, dan master sendiri.
              </p>
              <p>
                Proses rekaman kami lakukan di kamar asrama sang gitaris dengan peralatan seadanya dan ilmu 
                rekaman yang baru dipelajari saat itu juga. Yang paling epic adalah rekaman vokal yang hanya 
                ber-setup-kan lemari baju dan matras.
              </p>
              <p>
                Proses mixing dan mastering pun tidak kalah menantang di mana kami harus mempelajar semuanya dari nol. 
                Kami harap para pendengar dapat menikmati karya kami dengan segala kementahan dan keindahannya.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              {[
                { value: "1,570+", label: "Followers" },
                { value: "1,096", label: "Monthly Listeners" },
                { value: "12", label: "Lagu" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-card/50 rounded-xl border border-border"
                >
                  <p className="text-3xl font-display font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
