# Jam Lima Website

Website resmi untuk band Jam Lima, sebuah band indie Indonesia yang beranggotakan 5 mahasiswa NUS Singapore. Website ini menampilkan musik, informasi band, merchandise, dan jadwal pertunjukan.

## Fitur Website

### Halaman Utama
- **Hero Section**: Perkenalan band dengan album terbaru "Rayuan Gila"
- **Music Section**: Showcase album "Hidup Di Dunia" (2024) dan single terbaru
- **Events Section**: Jadwal pertunjukan live dan riwayat show
- **About Section**: Cerita band dan statistik (1570+ followers, 1096 monthly listeners)
- **Merchandise**: Toko online untuk merchandise resmi
- **Contact**: Link ke sosial media dan informasi kontak

### Halaman Lirik
- Lirik dan deskripsi untuk 11 lagu dari album "Hidup Di Dunia"
- Tema dan bahasa setiap lagu (Indonesia, English, Bilingual)
- Link streaming ke Spotify dan Apple Music

## Teknologi

Website ini dibangun dengan:
- **React 18** dengan TypeScript
- **Vite** untuk build dan development server
- **React Router** untuk navigasi SPA
- **Framer Motion** untuk animasi
- **shadcn/ui** untuk komponen UI
- **Tailwind CSS** untuk styling
- **Radix UI** untuk primitive components
- **React Query** untuk state management

## Struktur Project

```
src/
├── components/          # Komponen React
│   ├── ui/             # Komponen shadcn/ui
│   ├── Header.tsx      # Navigation header
│   ├── HeroSection.tsx # Hero dengan album cover
│   ├── MusicSection.tsx # Showcase musik dan streaming
│   ├── AboutSection.tsx # Tentang band
│   ├── EventsSection.tsx # Jadwal dan riwayat show
│   ├── MerchSection.tsx # Merchandise
│   ├── ContactSection.tsx # Kontak dan sosial media
│   └── Footer.tsx      # Footer website
├── pages/              # Routing pages
│   ├── Index.tsx       # Halaman utama
│   ├── Lyrics.tsx      # Halaman lirik album
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom hooks
├── lib/                # Utilities
├── assets/             # Images (album covers, band photos)
└── test/               # Test files
```

## Setup dan Development

### Prerequisites
- Node.js 18+
- npm atau bun

### Installation
```bash
# Clone repository
git clone <repository-url>
cd jam-lima-vibes-main

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

### Available Scripts
- `npm run dev` - Development server (localhost:8080)
- `npm run build` - Production build
- `npm run preview` - Preview production build
- `npm run lint` - ESLint check

## Deployment

Website dapat di-deploy ke:
- Vercel
- Netlify
- GitHub Pages
- VPS/Server

Build production:
```bash
npm run build
```

## Analytics API (Live Stats)

Dashboard analytics mengambil data dari endpoint `/api/analytics`. Untuk mengaktifkan data real-time,
set environment variables berikut di Vercel/Netlify atau di `.env` lokal (jangan commit kredensial):

```
SPOTIFY_FALLBACK_FOLLOWERS=optional_manual_value
SPOTIFY_CLIENT_ID=...
SPOTIFY_CLIENT_SECRET=...
SPOTIFY_ARTIST_ID=2mSOKnCiXZk3Ho0xLbtaI7

YOUTUBE_API_KEY=...
YOUTUBE_CHANNEL_ID=...

SOUNDCLOUD_CLIENT_ID=...
SOUNDCLOUD_USER_ID=...

APPLE_MUSIC_DEVELOPER_TOKEN=...
APPLE_MUSIC_ARTIST_ID=...
APPLE_MUSIC_STOREFRONT=sg
```

Catatan:
- Spotify tidak menyediakan data monthly listeners di API publik, jadi kartu Spotify menampilkan
  followers sebagai proxy.
- Apple Music tidak menyediakan statistik listener publik; kartu akan menampilkan status unavailable.
- Letakkan file `.env` di root project, bukan di folder `api`, agar terbaca saat build/deploy.

## Kontak Band

- **Instagram**: [@jam5band](https://instagram.com/jam5band)
- **YouTube**: [@jamlimaband](https://www.youtube.com/@jamlimaband)
- **Email**: jam.lima.cihuy@gmail.com
- **Spotify**: [Jam Lima](https://open.spotify.com/artist/2mSOKnCiXZk3Ho0xLbtaI7)
- **Merchandise**: [Tree Link](https://tr.ee/PE-7jFIf1J)
