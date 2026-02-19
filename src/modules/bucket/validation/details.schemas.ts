import { z } from 'zod';

const isoDateString = z.string().refine((s) => {
  const d = new Date(s);
  return !isNaN(d.getTime());
}, 'Invalid ISO date string');

const checklistItem = z.object({
  label: z.string(),
  done: z.boolean(),
});

export const TRAVEL_DETAILS_SCHEMA = z.object({
  where: z.string().min(1, 'where is required'),
  startDate: isoDateString.optional(),
  endDate: isoDateString.optional(),
  withWho: z.array(z.string()).optional(),
  budget: z.number().optional(),
  notes: z.string().optional(),
  checklist: z.array(checklistItem).optional(),
});

export const EVENT_DETAILS_SCHEMA = z.object({
  title: z.string().optional(),
  artist: z.string().optional(),
  venue: z.string().optional(),
  city: z.string().optional(),
  date: isoDateString.optional(),
  ticketUrl: z.string().url().optional().or(z.literal('')),
  companions: z.array(z.string()).optional(),
});

export const PLACE_COLLECTION_DETAILS_SCHEMA = z.object({
  collectionKey: z.string().min(1, 'collectionKey is required'),
  goal: z.string().optional(),
  visitedCount: z.number().int().min(0).optional(),
  plannedCount: z.number().int().min(0).optional(),
});

export const ACHIEVEMENT_DETAILS_SCHEMA = z.object({
  proofLinks: z.array(z.string().url()).optional(),
  metrics: z.record(z.any()).optional(),
});

/**
 * GAME details shape (type=GAME).
 * platform (string[]), releaseDate, status, hoursPlayed, rating, externalIds.
 */
export const GAME_DETAILS_SCHEMA = z
  .object({
    platform: z.array(z.string()).optional(),
    releaseDate: isoDateString.optional(),
    status: z.string().optional(),
    hoursPlayed: z.number().min(0).optional(),
    rating: z.number().min(0).max(10).optional(),
    externalIds: z.record(z.string()).optional(),
  })
  .passthrough();

/**
 * MOVIE details shape (type=MOVIE).
 * title, platform/service, releaseDate, watchedAt, rating, runtimeMin.
 */
export const MOVIE_DETAILS_SCHEMA = z
  .object({
    title: z.string().optional(),
    service: z.string().optional(),
    platform: z.string().optional(),
    releaseDate: isoDateString.optional(),
    watchedAt: isoDateString.optional(),
    runtimeMin: z.number().int().min(0).optional(),
    rating: z.number().min(0).max(10).optional(),
    externalIds: z.record(z.string()).optional(),
  })
  .passthrough();

/**
 * TV_SHOW details shape (type=TV_SHOW).
 * title, service, releaseDate, watchedAt, rating, seasonCount, runtimeMin.
 */
export const TV_SHOW_DETAILS_SCHEMA = z
  .object({
    title: z.string().optional(),
    service: z.string().optional(),
    releaseDate: isoDateString.optional(),
    watchedAt: isoDateString.optional(),
    runtimeMin: z.number().int().min(0).optional(),
    seasonCount: z.number().int().min(0).optional(),
    rating: z.number().min(0).max(10).optional(),
    externalIds: z.record(z.string()).optional(),
  })
  .passthrough();

/**
 * BOOK details shape (type=BOOK).
 * author, pages, format, progress, startedAt, finishedAt, rating, favoriteQuote.
 */
export const BOOK_DETAILS_SCHEMA = z
  .object({
    author: z.string().optional(),
    pages: z.number().int().min(0).optional(),
    format: z.string().optional(),
    progress: z.number().min(0).max(100).optional(),
    startedAt: isoDateString.optional(),
    finishedAt: isoDateString.optional(),
    rating: z.number().min(0).max(10).optional(),
    favoriteQuote: z.string().optional(),
    externalIds: z.record(z.string()).optional(),
  })
  .passthrough();

export const GENERAL_DETAILS_SCHEMA = z
  .record(z.any())
  .refine((obj) => obj !== null && typeof obj === 'object' && !Array.isArray(obj), {
    message: 'details must be a JSON object, not array or string',
  });

const DETAILS_SCHEMAS: Record<string, z.ZodTypeAny> = {
  TRAVEL: TRAVEL_DETAILS_SCHEMA,
  EVENT: EVENT_DETAILS_SCHEMA,
  PLACE_COLLECTION: PLACE_COLLECTION_DETAILS_SCHEMA,
  ACHIEVEMENT: ACHIEVEMENT_DETAILS_SCHEMA,
  GENERAL: GENERAL_DETAILS_SCHEMA,
  GAME: GAME_DETAILS_SCHEMA,
  MOVIE: MOVIE_DETAILS_SCHEMA,
  TV_SHOW: TV_SHOW_DETAILS_SCHEMA,
  BOOK: BOOK_DETAILS_SCHEMA,
};

export function validateDetails(type: string, details: unknown): object | null {
  if (details === null || details === undefined) {
    return null;
  }
  if (typeof details !== 'object' || Array.isArray(details)) {
    throw new Error('details must be a JSON object, not string or array');
  }

  const schema = DETAILS_SCHEMAS[type];
  if (!schema) {
    return null;
  }

  const result = schema.safeParse(details);
  if (!result.success) {
    const messages = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`).join('; ');
    throw new Error(`Invalid details for type ${type}: ${messages}`);
  }

  return result.data as object;
}
