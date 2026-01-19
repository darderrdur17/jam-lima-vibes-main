import { motion } from "framer-motion";
import albumHidupDiDunia from "@/assets/album-hidup-di-dunia.jpeg";
import singleRayuanGila from "@/assets/single-rayuan-gila.jpeg";
import spotifyLogo from "@/assets/Spotify.png";
import appleMusicLogo from "@/assets/AppleMusic.jpeg";
import youtubeLogo from "@/assets/Youtube.png";
import soundcloudLogo from "@/assets/SoundCloud.jpeg";

const releases = [
  {
    title: "Rayuan Gila",
    type: "Single",
    year: "2025",
    image: singleRayuanGila,
    spotifyUrl: "https://open.spotify.com/artist/2mSOKnCiXZk3Ho0xLbtaI7",
    appleUrl: "https://music.apple.com/sg/album/rayuan-gila-single/1835015290",
  },
  {
    title: "Hidup Di Dunia",
    type: "Album",
    year: "2024",
    image: albumHidupDiDunia,
    spotifyUrl: "https://open.spotify.com/artist/2mSOKnCiXZk3Ho0xLbtaI7",
    appleUrl: "https://music.apple.com/sg/album/hidup-di-dunia/1754043162",
    tracks: [
      "Sadarkan Aku",
      "Masa Mudaku",
      "Hanya Untukmu",
      "Heart Shaped Eyes",
      "Maybelline",
      "S.K. Cinta",
      "Ku Rela",
      "Alam Bawah Sadar",
      "Kamu, Kamu (Bersatu)",
      "Saat Kau Disini",
      "Kawan",
    ],
  },
];

const streamingPlatforms = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/2mSOKnCiXZk3Ho0xLbtaI7",
    logo: spotifyLogo,
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/sg/album/hidup-di-dunia/1754043162",
    logo: appleMusicLogo,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@jamlimaband",
    logo: youtubeLogo,
  },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com/mades_jam5band",
    logo: soundcloudLogo,
  },
];

const MusicSection = () => {
  return (
    <section id="music" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Musik <span className="text-gradient">Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dari kamar asrama di NUS, musik kami lahir dengan cinta dan semangat. Dengerin sekarang!
          </p>
        </motion.div>

        {/* Releases Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {releases.map((release, index) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-card-gradient rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden"
                >
                  <img
                    src={release.image}
                    alt={release.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {release.type}
                      </span>
                      <span className="text-muted-foreground text-sm">{release.year}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-3">{release.title}</h3>
                    {release.tracks && (
                      <p className="text-muted-foreground text-sm mb-4">
                        {release.tracks.length} tracks
                      </p>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={release.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#1DB954] text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                      Spotify
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={release.appleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-muted text-foreground rounded-lg text-sm font-semibold hover:bg-muted/80 transition-colors"
                    >
                      Apple Music
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Streaming Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl border border-border p-8"
        >
          <h3 className="text-xl font-display font-semibold text-center mb-6">
            Dengerin Di Mana Saja
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {streamingPlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-muted rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-transparent hover:border-primary/30"
              >
                <img
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  className="h-6 w-6 shrink-0 object-contain"
                />
                <span className="font-medium">{platform.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MusicSection;
