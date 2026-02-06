import { createHash } from 'crypto';
import Parser from 'rss-parser';
import axios from 'axios';
import { Prisma, FeedItemStatus, FeedItemType } from '@prisma/client';
import { PrismaService } from '../../../core/prisma/prisma.service';

type IngestResult = {
  attempted: number;
  created: number;
  skipped: number;
  errors: string[];
};

export class SignalboardRssIngestor {
  private readonly parser = new Parser();

  constructor(private readonly prisma: PrismaService) {}

  private isAllowedUrl(url: string) {
    try {
      const parsed = new URL(url);
      if (!['http:', 'https:'].includes(parsed.protocol)) return false;
      const host = parsed.hostname.toLowerCase();
      if (host === 'localhost' || host === '127.0.0.1' || host === '0.0.0.0' || host === '::1') {
        return false;
      }
      return true;
    } catch {
      return false;
    }
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

  private hashContent(sourceId: number, url: string | null, publishedAt: Date | null, title: string) {
    const datePart = publishedAt ? publishedAt.toISOString() : '';
    const canonical = url ?? '';
    return createHash('sha256')
      .update(`${sourceId}|${canonical}|${datePart}|${title}`)
      .digest('hex');
  }

  async ingestSource(source: { id: number; url: string }, limit = 20): Promise<IngestResult> {
    const errors: string[] = [];
    let attempted = 0;
    let created = 0;
    let skipped = 0;

    if (!this.isAllowedUrl(source.url)) {
      return {
        attempted: 0,
        created: 0,
        skipped: 0,
        errors: ['Invalid or blocked URL'],
      };
    }

    let feed: Parser.Output<any>;
    try {
      const response = await axios.get(source.url, { timeout: 10_000 });
      feed = await this.parser.parseString(response.data);
    } catch (error: any) {
      return {
        attempted: 0,
        created: 0,
        skipped: 0,
        errors: [error?.message || 'Failed to fetch or parse RSS'],
      };
    }

    const items = (feed.items || []).slice(0, limit);
    for (const entry of items) {
      attempted += 1;
      const title = entry.title?.trim();
      if (!title) {
        skipped += 1;
        if (errors.length < 5) errors.push('Missing title');
        continue;
      }
      const canonicalUrl = entry.link || (entry.guid as string | undefined) || null;
      const publishedAt = this.parseDate(entry.isoDate || entry.pubDate || null);
      const contentText = entry.contentSnippet || this.stripHtml(entry.content) || null;

      let imageUrl: string | null = null;
      if (entry.enclosure?.url && entry.enclosure?.type?.startsWith('image/')) {
        imageUrl = entry.enclosure.url;
      } else if ((entry as any)['media:content']?.url) {
        imageUrl = (entry as any)['media:content'].url;
      }

      const contentHash = this.hashContent(source.id, canonicalUrl, publishedAt, title);

      const data: Prisma.FeedItemCreateInput = {
        source: { connect: { id: source.id } },
        type: FeedItemType.ARTICLE,
        status: FeedItemStatus.ACTIVE,
        title,
        canonicalUrl,
        publishedAt,
        contentText,
        imageUrl,
        metrics: {
          source: 'rss',
          guid: entry.guid,
          categories: entry.categories ?? [],
        } as Prisma.InputJsonValue,
        contentHash,
      };

      try {
        await this.prisma.feedItem.create({ data });
        created += 1;
      } catch (error: any) {
        if (error?.code === 'P2002') {
          skipped += 1;
          continue;
        }
        skipped += 1;
        if (errors.length < 5) errors.push(error?.message || 'Failed to create item');
      }
    }

    return { attempted, created, skipped, errors };
  }
}
