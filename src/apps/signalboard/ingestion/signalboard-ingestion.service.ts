import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { createHash } from 'crypto';
import Parser from 'rss-parser';
import { lastValueFrom } from 'rxjs';
import { FeedItemStatus, FeedItemType, FeedSourceType } from '@prisma/client';
import { PrismaService } from '../../../core/prisma/prisma.service';
import { buildYoutubeThumbnailUrl, extractYoutubeVideoId } from './youtube-utils';

@Injectable()
export class SignalboardIngestionService {
  private static hasLoggedYoutubeSample = false;
  private readonly parser = new Parser({
    customFields: {
      item: [
        'media:content',
        'media:thumbnail',
        'media:group',
        'media:description',
        'media:duration',
        'itunes:image',
        'itunes:duration',
        'yt:videoId',
        'yt:duration',
      ],
    },
  });

  constructor(
    private readonly prisma: PrismaService,
    private readonly http: HttpService,
  ) {}

  async ingestSources({
    userId,
    collectionId,
    sourceId,
    limitSources,
  }: {
    userId: number;
    collectionId?: number;
    sourceId?: number;
    limitSources?: number;
  }): Promise<{
    sourcesProcessed: number;
    itemsSeen: number;
    itemsCreated: number;
    itemsUpdated: number;
    errors: string[];
  }> {
    const profile = await this.prisma.feedProfile.findUnique({ where: { userId } });
    if (!profile) {
      return { sourcesProcessed: 0, itemsSeen: 0, itemsCreated: 0, itemsUpdated: 0, errors: [] };
    }

    const sources = await this.prisma.feedSource.findMany({
      where: {
        isActive: true,
        type: {
          in: [
            FeedSourceType.RSS,
            FeedSourceType.GOOGLE_NEWS_RSS,
            FeedSourceType.YOUTUBE_CHANNEL,
            FeedSourceType.YOUTUBE_PLAYLIST,
          ],
        },
        collection: {
          isActive: true,
          profileId: profile.id,
          ...(collectionId ? { id: collectionId } : {}),
        },
        ...(sourceId ? { id: sourceId } : {}),
      },
      ...(limitSources ? { take: limitSources } : {}),
      orderBy: { id: 'asc' },
    });

    let sourcesProcessed = 0;
    let itemsSeen = 0;
    let itemsCreated = 0;
    let itemsUpdated = 0;
    const errors: string[] = [];

    for (const source of sources) {
      sourcesProcessed += 1;
      try {
        const { data } = await lastValueFrom(
          this.http.get(source.url, {
            timeout: 10_000,
            responseType: 'text',
            headers: {
              'User-Agent': 'SignalBoardBot/1.0 (+https://carlosgatti.com)',
            },
          }),
        );
        const feed = await this.parser.parseString(data);
        const entries = feed.items || [];
        itemsSeen += entries.length;
        const isYoutubeSource = this.isYoutubeFeed(source.url);
        const includeShorts = (source as any).includeShorts === true;

        for (const entry of entries) {
          if (isYoutubeSource && process.env.NODE_ENV !== 'production') {
            this.logYoutubeSample(entry);
          }
          const title = this.pickTitle(entry);
          if (!title) continue;

          const canonicalUrl = this.pickCanonicalUrl(entry);
          const publishedAt = this.parseDate(
            entry.isoDate || entry.pubDate || (entry as any).published || (entry as any).updated || null,
          );
          const contentText = entry.contentSnippet || this.stripHtml(entry.content) || null;
          const isYoutubeEntry = isYoutubeSource || this.isYoutubeLink(canonicalUrl);
          const imageUrl = isYoutubeEntry
            ? this.pickYoutubeThumbnail(entry, canonicalUrl)
            : this.pickImageUrl(entry);
          if (!includeShorts && isYoutubeEntry && this.isShortEntry(entry, canonicalUrl, title, contentText)) {
            continue;
          }
          const contentHash = this.hashContent(source.id, {
            key: entry.guid || canonicalUrl || title,
            publishedAt,
          });

          const existing = await this.prisma.feedItem.findUnique({
            where: { contentHash },
            select: {
              id: true,
              title: true,
              canonicalUrl: true,
              publishedAt: true,
              imageUrl: true,
              contentText: true,
            },
          });

          if (!existing) {
            try {
              await this.prisma.feedItem.create({
                data: {
                  source: { connect: { id: source.id } },
                  type: isYoutubeEntry ? FeedItemType.VIDEO : FeedItemType.ARTICLE,
                  status: FeedItemStatus.ACTIVE,
                  title,
                  canonicalUrl,
                  publishedAt,
                  imageUrl,
                  contentText,
                  contentHash,
                },
              });
              itemsCreated += 1;
              continue;
            } catch (error: any) {
              if (error?.code !== 'P2002') {
                throw error;
              }
            }
          }

          const updateData: Record<string, any> = {
            status: FeedItemStatus.ACTIVE,
            type: isYoutubeEntry ? FeedItemType.VIDEO : FeedItemType.ARTICLE,
          };

          if (existing && (!existing.title || existing.title.trim() === '') && title) {
            updateData.title = title;
          }
          if (existing && !existing.canonicalUrl && canonicalUrl) {
            updateData.canonicalUrl = canonicalUrl;
          }
          if (existing && !existing.publishedAt && publishedAt) {
            updateData.publishedAt = publishedAt;
          }
          if (existing && !existing.imageUrl && imageUrl) {
            updateData.imageUrl = imageUrl;
          }
          if (existing && !existing.contentText && contentText) {
            updateData.contentText = contentText;
          }

          await this.prisma.feedItem.update({
            where: { contentHash },
            data: updateData,
          });
          itemsUpdated += 1;

        }

        await this.prisma.feedSource.update({
          where: { id: source.id },
          data: { lastFetchedAt: new Date(), failureCount: 0 },
        });
      } catch (error: any) {
        const message = error?.message || 'Failed to fetch or parse RSS';
        if (errors.length < 10) {
          errors.push(`source:${source.id} ${message}`);
        }
        await this.prisma.feedSource.update({
          where: { id: source.id },
          data: { failureCount: { increment: 1 } },
        });
      }
    }

    return { sourcesProcessed, itemsSeen, itemsCreated, itemsUpdated, errors };
  }

  private stripHtml(value?: string | null) {
    if (!value) return null;
    return value.replace(/<[^>]*>/g, '').trim();
  }

  private parseDate(value?: string | null) {
    if (!value) return null;
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  private pickTitle(entry: any) {
    const title = entry.title?.trim() || this.stripHtml(entry.contentSnippet) || entry.link || entry.guid;
    return title?.trim() || null;
  }

  private pickCanonicalUrl(entry: any) {
    const url = entry.link || entry.id || entry.guid || null;
    return typeof url === 'string' ? url.trim() : null;
  }

  private pickImageUrl(entry: any) {
    const enclosureImage =
      entry.enclosure?.url && entry.enclosure?.type?.startsWith('image/')
        ? entry.enclosure.url
        : null;
    const mediaThumbnails = this.asArray(entry['media:thumbnail'] || entry['media:group']?.['media:thumbnail']);
    const mediaThumbUrl = mediaThumbnails.find((thumb: any) => thumb?.url)?.url || null;
    const mediaContents = this.asArray(entry['media:content'] || entry['media:group']?.['media:content']);
    const mediaImage =
      mediaContents.find((item: any) => (item?.type || '').startsWith('image/'))?.url || null;
    const itunesImage = entry['itunes:image']?.href || entry['itunes:image']?.url || null;
    return mediaThumbUrl || mediaImage || enclosureImage || itunesImage;
  }

  private pickYoutubeThumbnail(entry: any, canonicalUrl: string | null) {
    const primary =
      this.readThumbnailUrl(entry?.['media:group']?.['media:thumbnail']) ||
      this.readThumbnailUrl(entry?.['media:thumbnail']) ||
      this.readThumbnailUrl(entry?.['media:group']?.['media:thumbnail'], 'url') ||
      this.readThumbnailUrl(entry?.['media:thumbnail'], 'url') ||
      this.findThumbnailUrl(entry);

    if (primary) {
      return primary;
    }

    const videoId = extractYoutubeVideoId(canonicalUrl);
    return videoId ? buildYoutubeThumbnailUrl(videoId) : null;
  }

  private readThumbnailUrl(
    value: any,
    fallbackKey: 'url' | '@_url' = '@_url',
  ): string | null {
    if (!value) return null;
    if (typeof value === 'string') {
      return this.isUrlLike(value) ? value : null;
    }
    if (Array.isArray(value)) {
      for (const item of value) {
        const candidate = this.readThumbnailUrl(item, fallbackKey);
        if (candidate) return candidate;
      }
      return null;
    }
    if (typeof value === 'object') {
      const direct = value?.[fallbackKey] || value?.url || value?.href;
      if (direct && this.isUrlLike(direct)) return direct;
    }
    return null;
  }

  private findThumbnailUrl(value: any): string | null {
    if (!value) return null;
    if (typeof value === 'string') {
      return this.isUrlLike(value) ? value : null;
    }
    if (Array.isArray(value)) {
      for (const item of value) {
        const found = this.findThumbnailUrl(item);
        if (found) return found;
      }
      return null;
    }
    if (typeof value === 'object') {
      for (const [key, child] of Object.entries(value)) {
        if (key.toLowerCase().includes('thumbnail')) {
          const candidate =
            this.readThumbnailUrl(child) ||
            (typeof child === 'object'
              ? this.readThumbnailUrl((child as any).url) || this.readThumbnailUrl((child as any).href)
              : null);
          if (candidate) return candidate;
        }
        const found = this.findThumbnailUrl(child);
        if (found) return found;
      }
    }
    return null;
  }

  private isUrlLike(value: string) {
    return value.startsWith('http://') || value.startsWith('https://');
  }

  private isYoutubeFeed(url: string) {
    return url.includes('youtube.com/feeds/videos.xml');
  }

  private isYoutubeLink(url: string | null) {
    if (!url) return false;
    try {
      const host = new URL(url).hostname.toLowerCase();
      return host === 'youtube.com' || host.endsWith('.youtube.com') || host === 'youtu.be';
    } catch {
      return false;
    }
  }

  private isShortEntry(entry: any, canonicalUrl: string | null, title: string, contentText: string | null) {
    const linkHasShorts = canonicalUrl?.includes('/shorts/') ?? false;
    const titleHasShorts = title.toLowerCase().includes('#shorts');
    const description = this.getEntryDescription(entry, contentText);
    const descriptionHasShorts = description?.toLowerCase().includes('#shorts') ?? false;
    const durationSeconds = this.getDurationSeconds(entry);
    const durationIsShort = durationSeconds !== null && durationSeconds <= 60;

    return linkHasShorts || titleHasShorts || descriptionHasShorts || durationIsShort;
  }

  private getEntryDescription(entry: any, contentText: string | null) {
    const mediaDescription =
      typeof entry['media:description'] === 'string'
        ? entry['media:description']
        : entry['media:group']?.['media:description'];
    const raw =
      mediaDescription ||
      contentText ||
      entry.contentSnippet ||
      (typeof entry.content === 'string' ? entry.content : null);
    return raw ? this.stripHtml(raw) : null;
  }

  private getDurationSeconds(entry: any): number | null {
    const ytDuration = entry['yt:duration']?.seconds ?? entry['media:group']?.['yt:duration']?.seconds;
    const mediaDuration = entry['media:duration'] ?? entry['media:group']?.['media:duration'];
    const itunesDuration = entry['itunes:duration'];
    const candidate = ytDuration ?? mediaDuration ?? itunesDuration;

    if (candidate === undefined || candidate === null) return null;

    if (typeof candidate === 'number') return candidate;
    if (typeof candidate === 'string') {
      const trimmed = candidate.trim();
      if (/^\d+$/.test(trimmed)) return Number(trimmed);
      if (trimmed.includes(':')) {
        const parts = trimmed.split(':').map((part) => Number(part));
        if (parts.some((p) => Number.isNaN(p))) return null;
        if (parts.length === 2) return parts[0] * 60 + parts[1];
        if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
      }
      const iso = this.parseIsoDuration(trimmed);
      if (iso !== null) return iso;
    }

    return null;
  }

  private parseIsoDuration(value: string): number | null {
    const match = value.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/i);
    if (!match) return null;
    const hours = match[1] ? Number(match[1]) : 0;
    const minutes = match[2] ? Number(match[2]) : 0;
    const seconds = match[3] ? Number(match[3]) : 0;
    if ([hours, minutes, seconds].some((part) => Number.isNaN(part))) {
      return null;
    }
    return hours * 3600 + minutes * 60 + seconds;
  }

  private logYoutubeSample(entry: any) {
    if (SignalboardIngestionService.hasLoggedYoutubeSample) return;
    SignalboardIngestionService.hasLoggedYoutubeSample = true;
    try {
      console.log('[SignalBoard] Sample YouTube RSS entry:', JSON.stringify(entry, null, 2));
    } catch {
      console.log('[SignalBoard] Sample YouTube RSS entry:', entry);
    }
  }

  private hashContent(
    sourceId: number,
    {
      key,
      publishedAt,
    }: {
      key: string;
      publishedAt: Date | null;
    },
  ) {
    const publishedAtIso = publishedAt ? publishedAt.toISOString() : '';
    return createHash('sha256').update(`${sourceId}:${key}:${publishedAtIso}`).digest('hex');
  }

  private asArray<T>(value: T | T[] | null | undefined): T[] {
    if (!value) return [];
    return Array.isArray(value) ? value : [value];
  }
}
