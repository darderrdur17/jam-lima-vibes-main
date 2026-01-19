const MusicPlayerSection = () => {
  return (
    <section id="listen" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Dengerin <span className="text-gradient">Sekarang</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Preview lagu-lagu kami langsung di sini. Kalau suka, jangan lupa follow di Spotify!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Spotify Album Embed */}
          <div className="bg-card-gradient rounded-2xl border border-border p-6 animate-fade-in">
            <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-3">
              <span className="text-2xl">🎧</span>
              Hidup Di Dunia - Full Album
            </h3>
            <div className="rounded-xl overflow-hidden">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/artist/2mSOKnCiXZk3Ho0xLbtaI7?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Jam Lima Spotify Player"
              ></iframe>
            </div>
          </div>

          {/* SoundCloud Embed */}
          <div className="bg-card-gradient rounded-2xl border border-border p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-3">
              <span className="text-2xl">☁️</span>
              Demo Tracks - SoundCloud
            </h3>
            <div className="rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="352"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/m-amadeus-ihsan-candra/sets/jam-6-jam-7-jam-8-bukan-jam-5&color=%23d84315&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
                title="Jam Lima SoundCloud Player"
              ></iframe>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Dengerin demo dan unreleased tracks eksklusif di SoundCloud kami!
            </p>
          </div>
        </div>

        {/* Latest Single Highlight */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl border border-primary/20 p-8 text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
            🔥 Latest Release
          </span>
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
            Rayuan Gila - OUT NOW!
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Single terbaru kami sudah rilis! Stream sekarang di semua platform musik favorit kamu.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://open.spotify.com/artist/2mSOKnCiXZk3Ho0xLbtaI7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1DB954] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              <span>🎧</span> Play on Spotify
            </a>
            <a
              href="https://music.apple.com/sg/album/rayuan-gila-single/1835015290"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              <span>🍎</span> Apple Music
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayerSection;
