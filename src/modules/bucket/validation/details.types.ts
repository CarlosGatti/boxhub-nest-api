/**
 * Type-specific details interfaces for BucketGoal.details (Json).
 * Used for validation and type safety when working with specialized goal types.
 * All fields are optional; validation is soft and never rejects old payloads.
 */

/** GAME: platform, releaseDate, external ids. Items may not be released yet. */
export interface BucketGoalDetailsGame {
  platform?: string[];
  releaseDate?: string;
  externalIds?: Record<string, string>;
}

/** MOVIE: service, releaseDate, runtimeMin, external ids. Items may not be released yet. */
export interface BucketGoalDetailsMovie {
  service?: string;
  releaseDate?: string;
  runtimeMin?: number;
  externalIds?: Record<string, string>;
}

/** TV_SHOW: service, releaseDate, runtimeMin, seasonCount, external ids. Items may not be released yet. */
export interface BucketGoalDetailsTvShow {
  service?: string;
  releaseDate?: string;
  runtimeMin?: number;
  seasonCount?: number;
  externalIds?: Record<string, string>;
}

/** BOOK: author, pages, format, progress, external ids. */
export interface BucketGoalDetailsBook {
  author?: string;
  pages?: number;
  format?: string;
  progress?: number;
  externalIds?: Record<string, string>;
}
