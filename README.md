# Jam Lima Official Website

Jam Lima adalah band bocah-bocah Indonesia di NUS Singapore yang membawakan musik dari hati untuk kalian semua.

## Tentang Project

Website resmi untuk band Jam Lima, menampilkan:
- Album debut "Hidup Di Dunia"
- Single terbaru "Rayuan Gila"
- Informasi tentang band
- Galeri musik dan foto
- Merchandise
- Informasi kontak dan jadwal pertunjukan

## Teknologi yang Digunakan

Project ini dibangun dengan teknologi modern:

- **Vite** - Build tool yang cepat
- **TypeScript** - Type-safe JavaScript
- **React** - Library UI
- **shadcn-ui** - Komponen UI yang indah
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animasi smooth
- **React Router** - Routing untuk SPA

## Cara Menjalankan Project

### Persyaratan

- Node.js & npm terinstall - [install dengan nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Langkah-langkah

```sh
# 1. Clone repository
git clone <YOUR_GIT_URL>

# 2. Masuk ke direktori project
cd <YOUR_PROJECT_NAME>

# 3. Install dependencies
npm install

# 4. Jalankan development server
npm run dev
```

### Script yang Tersedia

- `npm run dev` - Jalankan development server
- `npm run build` - Build untuk production
- `npm run build:dev` - Build untuk development
- `npm run lint` - Jalankan ESLint
- `npm run preview` - Preview build production
- `npm run test` - Jalankan test
- `npm run test:watch` - Jalankan test dengan watch mode

## Struktur Project

```
src/
├── components/          # Komponen React
│   ├── ui/             # Komponen shadcn-ui
│   └── ...             # Komponen custom
├── pages/              # Halaman utama
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Gambar dan media
└── test/               # File test
```

## Deployment

Project ini dapat di-deploy ke berbagai platform hosting seperti:
- Vercel
- Netlify
- GitHub Pages
- VPS/Server

Build production dengan:
```sh
npm run build
```

## Kontribusi

Jika ingin berkontribusi pada development website Jam Lima:

1. Fork repository
2. Buat branch fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## Lisensi

Project ini dibuat untuk band Jam Lima.

## Kontak

- **Instagram**: [@jam5band](https://instagram.com/jam5band)
- **Website**: [jam-lima.vercel.app](https://jam-lima.vercel.app)
