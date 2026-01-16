import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import bandPhoto from "@/assets/band-photo.jpg";
import bandHalftone from "@/assets/band-art-halftone.jpg";
import albumCover from "@/assets/album-hidup-di-dunia.jpeg";
import singleCover from "@/assets/single-rayuan-gila.jpeg";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: "live" | "behind-the-scenes" | "promo";
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: bandPhoto, alt: "Jam Lima band photo", category: "promo" },
  { id: 2, src: bandHalftone, alt: "Jam Lima artistic halftone", category: "promo" },
  { id: 3, src: albumCover, alt: "Hidup Di Dunia album cover", category: "promo" },
  { id: 4, src: singleCover, alt: "Rayuan Gila single cover", category: "promo" },
];

const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<"all" | "live" | "behind-the-scenes" | "promo">("all");

  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Photo <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Momen-momen seru dari perjalanan Jam Lima. Dari panggung sampai behind the scenes!
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { key: "all", label: "Semua" },
            { key: "live", label: "Live Shows" },
            { key: "behind-the-scenes", label: "Behind the Scenes" },
            { key: "promo", label: "Promo" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setFilter(item.key as typeof filter)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                filter === item.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder Message */}
        {filteredImages.length < 8 && (
          <div className="text-center mt-12 p-8 bg-card rounded-2xl border border-dashed border-border">
            <p className="text-muted-foreground">
              📸 More photos coming soon! Follow us on{" "}
              <a
                href="https://www.instagram.com/jam5band"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Instagram
              </a>{" "}
              for the latest updates.
            </p>
          </div>
        )}

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Image */}
            <div
              className="max-w-5xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[currentIndex].src}
                alt={filteredImages[currentIndex].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 font-medium">
                {filteredImages[currentIndex].alt}
              </p>
              <p className="text-white/60 text-center text-sm mt-1">
                {currentIndex + 1} / {filteredImages.length}
              </p>
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all z-10"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
