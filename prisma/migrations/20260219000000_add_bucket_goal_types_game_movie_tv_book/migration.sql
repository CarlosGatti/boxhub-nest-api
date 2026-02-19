-- Add new BucketGoalType enum values for specialized goal categories (Games, Movies/TV, Books)
ALTER TYPE "BucketGoalType" ADD VALUE IF NOT EXISTS 'GAME';
ALTER TYPE "BucketGoalType" ADD VALUE IF NOT EXISTS 'MOVIE';
ALTER TYPE "BucketGoalType" ADD VALUE IF NOT EXISTS 'TV_SHOW';
ALTER TYPE "BucketGoalType" ADD VALUE IF NOT EXISTS 'BOOK';
