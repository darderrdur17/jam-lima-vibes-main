import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { BarChart3, TrendingUp } from "lucide-react";
import spotifyLogo from "@/assets/Spotify.png";
import appleMusicLogo from "@/assets/AppleMusic.jpeg";
import youtubeLogo from "@/assets/Youtube.png";
import soundcloudLogo from "@/assets/SoundCloud.jpeg";

type PlatformId = "spotify" | "apple_music" | "youtube" | "soundcloud";
type PlatformStatus = "live" | "manual" | "needs-api" | "error" | "unavailable";

interface PlatformStat {
  id: PlatformId;
  name: string;
  logo: string;
  url: string;
}

interface PlatformMetric {
  id: PlatformId;
  value: number | null;
  metricLabel: string;
  status: PlatformStatus;
  note: string;
}

interface AnalyticsResponse {
  updatedAt: string | null;
  platforms: PlatformMetric[];
}

const platformStats: PlatformStat[] = [
  {
    id: "spotify",
    name: "Spotify",
    logo: spotifyLogo,
    url: "https://open.spotify.com/artist/2mSOKnCiXZk3Ho0xLbtaI7",
  },
  {
    id: "apple_music",
    name: "Apple Music",
    logo: appleMusicLogo,
    url: "https://music.apple.com/sg/album/hidup-di-dunia/1754043162",
  },
  {
    id: "youtube",
    name: "YouTube",
    logo: youtubeLogo,
    url: "https://www.youtube.com/@jamlimaband",
  },
  {
    id: "soundcloud",
    name: "SoundCloud",
    logo: soundcloudLogo,
    url: "https://soundcloud.com/mades_jam5band",
  },
];

const statusStyles: Record<PlatformStatus, string> = {
  live: "bg-emerald-500/15 text-emerald-500 border-emerald-500/30",
  manual: "bg-amber-500/15 text-amber-500 border-amber-500/30",
  "needs-api": "bg-amber-500/15 text-amber-500 border-amber-500/30",
  error: "bg-rose-500/15 text-rose-500 border-rose-500/30",
  unavailable: "bg-muted text-muted-foreground border-border",
};

const fallbackMetrics: AnalyticsResponse = {
  updatedAt: null,
  platforms: [
    {
      id: "spotify",
      value: null,
      metricLabel: "Followers",
      status: "needs-api",
      note: "Add Spotify credentials",
    },
    {
      id: "apple_music",
      value: null,
      metricLabel: "Listeners",
      status: "unavailable",
      note: "No public listener data",
    },
    {
      id: "youtube",
      value: null,
      metricLabel: "Subscribers",
      status: "needs-api",
      note: "Add YouTube credentials",
    },
    {
      id: "soundcloud",
      value: null,
      metricLabel: "Followers",
      status: "needs-api",
      note: "Add SoundCloud credentials",
    },
  ],
};

const fetchAnalytics = async (): Promise<AnalyticsResponse> => {
  const response = await fetch("/api/analytics");
  if (!response.ok) {
    throw new Error("Failed to load analytics");
  }
  return response.json();
};

const formatValue = (value: number | null) => {
  if (value === null) {
    return "Unavailable";
  }
  return new Intl.NumberFormat("id-ID").format(value);
};

const AnalyticsSection = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["analytics"],
    queryFn: fetchAnalytics,
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });

  const metrics = data ?? fallbackMetrics;
  const updatedAt = data?.updatedAt ? new Date(data.updatedAt) : null;

  return (
    <section id="analytics" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <BarChart3 size={16} />
            Analytics Dashboard
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Pendengar <span className="text-gradient">Bulanan</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Statistik audiens di tiap platform streaming. Monthly listeners ditampilkan bila tersedia,
            selebihnya pakai followers/subscribers resmi.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {platformStats.map((platform, index) => {
            const metric = metrics.platforms.find((item) => item.id === platform.id);
            const status = isError ? "error" : metric?.status ?? "needs-api";
            const note = isLoading ? "Loading" : isError ? "API unavailable" : metric?.note ?? "Add API";
            const metricLabel = metric?.metricLabel ?? "Monthly listeners";
            const value = metric?.value ?? null;
            const displayValue = isLoading
              ? "Loading..."
              : value !== null
                ? formatValue(value)
                : status === "needs-api"
                  ? "Connect API"
                  : "Unavailable";

            return (
            <motion.a
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card-gradient rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <img
                      src={platform.logo}
                      alt={`${platform.name} logo`}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-lg">{platform.name}</p>
                    <p className="text-xs text-muted-foreground">{metricLabel}</p>
                  </div>
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${statusStyles[status]}`}
                >
                  {note}
                </span>
              </div>

              <div className="space-y-3">
                <p className="text-3xl font-display font-bold text-foreground">
                  {displayValue}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <TrendingUp size={14} className="text-primary" />
                  <span>Refresh otomatis setiap 30 menit.</span>
                </div>
              </div>
            </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-2xl border border-dashed border-border p-6 text-center"
        >
          <p className="text-muted-foreground">
            Data diambil otomatis dari API resmi. {updatedAt
              ? `Terakhir diperbarui ${updatedAt.toLocaleString("id-ID", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}.`
              : "Tambahkan kredensial API untuk mulai sinkronisasi."}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
