type PlatformId = "spotify" | "apple_music" | "youtube" | "soundcloud";
type PlatformStatus = "live" | "manual" | "needs-api" | "error" | "unavailable";

interface PlatformResponse {
  id: PlatformId;
  value: number | null;
  metricLabel: string;
  status: PlatformStatus;
  note: string;
}

const toNumber = (value: unknown): number | null => {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
};

const needsApi = (id: PlatformId, metricLabel: string, note: string): PlatformResponse => ({
  id,
  value: null,
  metricLabel,
  status: "needs-api",
  note,
});

const apiError = (id: PlatformId, metricLabel: string, note: string): PlatformResponse => ({
  id,
  value: null,
  metricLabel,
  status: "error",
  note,
});

const manualFallback = (id: PlatformId, metricLabel: string, value: number, note: string): PlatformResponse => ({
  id,
  value,
  metricLabel,
  status: "manual",
  note,
});

const unavailable = (id: PlatformId, metricLabel: string, note: string): PlatformResponse => ({
  id,
  value: null,
  metricLabel,
  status: "unavailable",
  note,
});

const getSpotifyStats = async (): Promise<PlatformResponse> => {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const artistId = process.env.SPOTIFY_ARTIST_ID;
  const fallbackFollowers = toNumber(process.env.SPOTIFY_FALLBACK_FOLLOWERS);

  if (!clientId || !clientSecret || !artistId) {
    if (fallbackFollowers !== null) {
      return manualFallback("spotify", "Followers", fallbackFollowers, "Manual fallback");
    }
    return needsApi("spotify", "Followers", "Add Spotify credentials");
  }

  try {
    const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ grant_type: "client_credentials" }).toString(),
    });

    if (!tokenResponse.ok) {
      if (fallbackFollowers !== null) {
        return manualFallback("spotify", "Followers", fallbackFollowers, "Manual fallback");
      }
      return apiError("spotify", "Followers", "Spotify token error");
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData?.access_token as string | undefined;

    if (!accessToken) {
      if (fallbackFollowers !== null) {
        return manualFallback("spotify", "Followers", fallbackFollowers, "Manual fallback");
      }
      return apiError("spotify", "Followers", "Missing Spotify token");
    }

    const artistResponse = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!artistResponse.ok) {
      if (fallbackFollowers !== null) {
        return manualFallback("spotify", "Followers", fallbackFollowers, "Manual fallback");
      }
      return apiError("spotify", "Followers", "Spotify artist fetch error");
    }

    const artistData = await artistResponse.json();
    const followers = toNumber(artistData?.followers?.total);

    return {
      id: "spotify",
      value: followers,
      metricLabel: "Followers",
      status: "live",
      note: "Live data",
    };
  } catch (error) {
    if (fallbackFollowers !== null) {
      return manualFallback("spotify", "Followers", fallbackFollowers, "Manual fallback");
    }
    return apiError("spotify", "Followers", "Spotify API error");
  }
};

const getYouTubeStats = async (): Promise<PlatformResponse> => {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    return needsApi("youtube", "Subscribers", "Add YouTube credentials");
  }

  if (!channelId.startsWith("UC")) {
    return needsApi("youtube", "Subscribers", "Channel ID must start with UC");
  }

  try {
    const url = new URL("https://www.googleapis.com/youtube/v3/channels");
    url.searchParams.set("part", "statistics");
    url.searchParams.set("id", channelId);
    url.searchParams.set("key", apiKey);

    const response = await fetch(url);
    if (!response.ok) {
      return apiError("youtube", "Subscribers", "YouTube API error");
    }

    const data = await response.json();
    const stats = data?.items?.[0]?.statistics;
    const subscribers = toNumber(stats?.subscriberCount);

    return {
      id: "youtube",
      value: subscribers,
      metricLabel: "Subscribers",
      status: "live",
      note: "Live data",
    };
  } catch (error) {
    return apiError("youtube", "Subscribers", "YouTube API error");
  }
};

const getSoundCloudStats = async (): Promise<PlatformResponse> => {
  const clientId = process.env.SOUNDCLOUD_CLIENT_ID;
  const userId = process.env.SOUNDCLOUD_USER_ID;

  if (!clientId || !userId) {
    return needsApi("soundcloud", "Followers", "Add SoundCloud credentials");
  }

  try {
    const url = new URL(`https://api.soundcloud.com/users/${userId}`);
    url.searchParams.set("client_id", clientId);

    const response = await fetch(url);
    if (!response.ok) {
      return apiError("soundcloud", "Followers", "SoundCloud API error");
    }

    const data = await response.json();
    const followers = toNumber(data?.followers_count);

    return {
      id: "soundcloud",
      value: followers,
      metricLabel: "Followers",
      status: "live",
      note: "Live data",
    };
  } catch (error) {
    return apiError("soundcloud", "Followers", "SoundCloud API error");
  }
};

const getAppleMusicStats = async (): Promise<PlatformResponse> => {
  const token = process.env.APPLE_MUSIC_DEVELOPER_TOKEN;
  const artistId = process.env.APPLE_MUSIC_ARTIST_ID;
  const storefront = process.env.APPLE_MUSIC_STOREFRONT ?? "sg";

  if (!token || !artistId) {
    return unavailable("apple_music", "Listeners", "No public listener data");
  }

  try {
    const response = await fetch(
      `https://api.music.apple.com/v1/catalog/${storefront}/artists/${artistId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    if (!response.ok) {
      return apiError("apple_music", "Listeners", "Apple Music API error");
    }

    return unavailable("apple_music", "Listeners", "No public listener data");
  } catch (error) {
    return apiError("apple_music", "Listeners", "Apple Music API error");
  }
};

export default async function handler(req: { method?: string }, res: any) {
  if (req.method && req.method !== "GET") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  const [spotify, appleMusic, youtube, soundcloud] = await Promise.all([
    getSpotifyStats(),
    getAppleMusicStats(),
    getYouTubeStats(),
    getSoundCloudStats(),
  ]);

  const payload = {
    updatedAt: new Date().toISOString(),
    platforms: [spotify, appleMusic, youtube, soundcloud],
  };

  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate=300");
  res.statusCode = 200;
  res.end(JSON.stringify(payload));
}
