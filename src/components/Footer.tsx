const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-primary">Jam Lima</span>
            <span className="text-muted-foreground">🕔</span>
          </div>
          
          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} Jam Lima. Made with ❤️ di NUS, Singapore.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/jam5band"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://open.spotify.com/artist/2mSOKnCiXZk3Ho0xLbtaI7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Spotify
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
