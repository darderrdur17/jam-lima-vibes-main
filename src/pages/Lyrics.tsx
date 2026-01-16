import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowLeft, Music, ExternalLink } from "lucide-react";
import albumCover from "@/assets/album-hidup-di-dunia.jpeg";

interface LyricSection {
  type: "verse" | "chorus" | "prechorus" | "bridge" | "outro";
  lines: string[];
}

interface Song {
  id: string;
  title: string;
  duration: string;
  description: string;
  themes: string[];
  language: "id" | "en" | "mixed";
}

const songs: Song[] = [
  {
    id: "sadarkan-aku",
    title: "Sadarkan Aku",
    duration: "4:12",
    description: "Lagu pembuka album yang berbicara tentang kesadaran diri dan menerima kenyataan bahwa hidup tidak selalu sempurna. Pesan utamanya adalah untuk bersyukur dengan apa yang ada dan menyadari bahwa hidup di dunia ini tidak selamanya.",
    themes: ["Kesadaran", "Penerimaan", "Syukur"],
    language: "id",
  },
  {
    id: "masa-mudaku",
    title: "Masa Mudaku",
    duration: "3:45",
    description: "Sebuah nostalgia tentang masa muda dan cinta sejati. Lagu ini mengekspresikan keinginan untuk ditemani oleh orang yang dicintai hingga akhir hayat, dan bagaimana cinta itu menjadi alasan untuk terus hidup.",
    themes: ["Cinta", "Nostalgia", "Kesetiaan"],
    language: "id",
  },
  {
    id: "hanya-untukmu",
    title: "Hanya Untukmu",
    duration: "4:02",
    description: "Janji setia yang tulus untuk orang yang dicintai. Lagu ini menyatakan bahwa semua perjuangan hidup ini hanya untuk satu orang, dan janji untuk tetap setia hingga mati.",
    themes: ["Janji", "Kesetiaan", "Cinta Abadi"],
    language: "id",
  },
  {
    id: "heart-shaped-eyes",
    title: "Heart Shaped Eyes",
    duration: "3:38",
    description: "A song about finding unexpected love on the open road. The narrator discovers someone special whose eyes captivated them, and now they can't stop thinking about that person.",
    themes: ["Love at First Sight", "Longing", "Connection"],
    language: "en",
  },
  {
    id: "maybelline",
    title: "Maybelline",
    duration: "4:15",
    description: "Tentang hubungan yang rumit di usia muda. Lagu ini menggambarkan perasaan bingung dalam hubungan, dengan harapan bahwa masih ada kesempatan untuk memperbaiki segalanya.",
    themes: ["Hubungan", "Harapan", "Masa Muda"],
    language: "en",
  },
  {
    id: "sk-cinta",
    title: "S.K. Cinta",
    duration: "4:28",
    description: "Lagu tentang kerinduan yang mendalam dan cinta yang tidak terbalas. Meskipun orang yang dicintai sudah bersama orang lain, perasaan cinta dan harapan tetap ada.",
    themes: ["Kerinduan", "Cinta Bertepuk Sebelah Tangan", "Pengorbanan"],
    language: "id",
  },
  {
    id: "ku-rela",
    title: "Ku Rela",
    duration: "3:55",
    description: "Tentang kerelaan untuk terus mencoba meskipun sudah berkali-kali gagal. Lagu ini tentang keteguhan hati dan keyakinan bahwa kali ini akan berbeda.",
    themes: ["Kegigihan", "Harapan", "Keteguhan"],
    language: "id",
  },
  {
    id: "alam-bawah-sadar",
    title: "Alam Bawah Sadar",
    duration: "4:05",
    description: "Kisah cinta yang hanya ada dalam angan-angan. Tentang seseorang yang dicintai dari jauh selama bertahun-tahun, yang tidak pernah mengetahui perasaan sang penulis.",
    themes: ["Cinta Rahasia", "Angan-angan", "Harapan"],
    language: "id",
  },
  {
    id: "kamu-kamu",
    title: "Kamu, Kamu (Bersatu)",
    duration: "4:32",
    description: "Lagu cinta yang manis tentang kebersamaan dan dedikasi total kepada pasangan. Dengan sentuhan bilingual, lagu ini merayakan cinta yang menyatukan dua hati.",
    themes: ["Cinta", "Kebersamaan", "Dedikasi"],
    language: "mixed",
  },
  {
    id: "saat-kau-disini",
    title: "Saat Kau Disini",
    duration: "4:18",
    description: "Tentang kerinduan mendalam pada seseorang yang telah pergi. Lagu ini mengekspresikan betapa hidupnya terasa hampa tanpa kehadiran orang yang dicintai.",
    themes: ["Kerinduan", "Kehilangan", "Kenangan"],
    language: "id",
  },
  {
    id: "kawan",
    title: "Kawan",
    duration: "3:42",
    description: "Lagu penutup album yang indah tentang persahabatan dan dukungan. Pesan untuk teman yang sedang berjuang: jangan ragu untuk bersedih, dan jangan padamkan api semangat.",
    themes: ["Persahabatan", "Dukungan", "Semangat"],
    language: "id",
  },
];

const Lyrics = () => {
  const [expandedSong, setExpandedSong] = useState<string | null>(null);

  const toggleSong = (id: string) => {
    setExpandedSong(expandedSong === id ? null : id);
  };

  const getLanguageLabel = (lang: Song["language"]) => {
    switch (lang) {
      case "id":
        return "🇮🇩 Indonesian";
      case "en":
        return "🇬🇧 English";
      case "mixed":
        return "🌏 Bilingual";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Kembali</span>
            </Link>
            <span className="font-display text-xl font-bold text-primary">Jam Lima</span>
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Album Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                src={albumCover}
                alt="Hidup Di Dunia Album"
                className="w-48 h-48 md:w-56 md:h-56 rounded-2xl shadow-2xl object-cover"
              />
              <div className="text-center md:text-left">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3"
                >
                  Album Lyrics & Themes
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl md:text-5xl font-display font-bold mb-3"
                >
                  Hidup Di Dunia
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl text-muted-foreground mb-4"
                >
                  Jam Lima • 2024
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-muted-foreground mb-6 max-w-lg"
                >
                  11 lagu yang menceritakan perjalanan hidup, cinta, dan persahabatan. 
                  Klik pada judul lagu untuk melihat deskripsi dan tema.
                </motion.p>
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://open.spotify.com/artist/2mSOKnCiXZk3Ho0xLbtaI7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1DB954] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  <Music size={20} />
                  Dengerin di Spotify
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Songs List */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-card rounded-2xl border border-border overflow-hidden"
            >
              {songs.map((song, index) => (
                <motion.div
                  key={song.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`border-b border-border last:border-b-0 ${
                    expandedSong === song.id ? "bg-muted/50" : ""
                  }`}
                >
                  {/* Song Header */}
                  <motion.button
                    onClick={() => toggleSong(song.id)}
                    whileHover={{ backgroundColor: "rgba(var(--muted), 0.3)" }}
                    className="w-full flex items-center gap-4 p-5 md:p-6 text-left transition-colors group"
                  >
                    {/* Track Number */}
                    <span className="w-8 h-8 flex items-center justify-center text-sm font-medium text-muted-foreground bg-muted rounded-lg shrink-0">
                      {index + 1}
                    </span>

                    {/* Song Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors truncate">
                        {song.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{song.duration}</span>
                        <span className="text-xs">{getLanguageLabel(song.language)}</span>
                      </div>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: expandedSong === song.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={20} className="text-muted-foreground shrink-0" />
                    </motion.div>
                  </motion.button>

                  {/* Song Content (Expandable) */}
                  <AnimatePresence>
                    {expandedSong === song.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-6 pl-[4.5rem]">
                          <div className="bg-background rounded-xl p-6 border border-border space-y-4">
                            {/* Description */}
                            <div>
                              <h4 className="text-sm font-semibold text-primary mb-2">Tentang Lagu</h4>
                              <p className="text-muted-foreground leading-relaxed">
                                {song.description}
                              </p>
                            </div>

                            {/* Themes */}
                            <div>
                              <h4 className="text-sm font-semibold text-primary mb-2">Tema</h4>
                              <div className="flex flex-wrap gap-2">
                                {song.themes.map((theme) => (
                                  <span
                                    key={theme}
                                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                                  >
                                    {theme}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Listen Link */}
                            <div className="pt-2">
                              <a
                                href="https://open.spotify.com/artist/2mSOKnCiXZk3Ho0xLbtaI7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                              >
                                <Music size={16} />
                                Dengerin lagu ini di Spotify
                                <ExternalLink size={14} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-center"
            >
              <p className="text-muted-foreground">
                Lirik lengkap tersedia di{" "}
                <a
                  href="https://open.spotify.com/artist/2mSOKnCiXZk3Ho0xLbtaI7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Spotify
                </a>
                ,{" "}
                <a
                  href="https://music.apple.com/sg/album/hidup-di-dunia/1754043162"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Apple Music
                </a>
                , dan platform streaming lainnya.
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Jam Lima. Made with 🎵 di NUS, Singapore.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Lyrics;
