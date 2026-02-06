export function extractYoutubeVideoId(url: string | null): string | null {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();

    if (host === 'youtu.be') {
      const id = parsed.pathname.split('/').filter(Boolean)[0];
      return id || null;
    }

    if (host === 'youtube.com' || host.endsWith('.youtube.com')) {
      const watchId = parsed.searchParams.get('v');
      if (watchId) return watchId;

      const segments = parsed.pathname.split('/').filter(Boolean);
      const shortsIndex = segments.indexOf('shorts');
      if (shortsIndex >= 0 && segments[shortsIndex + 1]) {
        return segments[shortsIndex + 1];
      }
      const embedIndex = segments.indexOf('embed');
      if (embedIndex >= 0 && segments[embedIndex + 1]) {
        return segments[embedIndex + 1];
      }
    }
  } catch {
    return null;
  }

  return null;
}

export function buildYoutubeThumbnailUrl(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}
