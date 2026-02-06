import { buildYoutubeThumbnailUrl, extractYoutubeVideoId } from './youtube-utils';

describe('YouTube utils', () => {
  it('extracts video id from watch URL', () => {
    const id = extractYoutubeVideoId('https://www.youtube.com/watch?v=VIDEO_ID');
    expect(id).toBe('VIDEO_ID');
    expect(buildYoutubeThumbnailUrl(id as string)).toBe('https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg');
  });

  it('extracts video id from shorts URL', () => {
    const id = extractYoutubeVideoId('https://www.youtube.com/shorts/SHORTS_ID');
    expect(id).toBe('SHORTS_ID');
    expect(buildYoutubeThumbnailUrl(id as string)).toBe('https://i.ytimg.com/vi/SHORTS_ID/hqdefault.jpg');
  });
});
