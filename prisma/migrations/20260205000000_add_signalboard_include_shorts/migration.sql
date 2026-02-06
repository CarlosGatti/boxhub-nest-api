-- Add includeShorts flag to FeedSource for YouTube Shorts filtering
ALTER TABLE "FeedSource"
ADD COLUMN "includeShorts" BOOLEAN NOT NULL DEFAULT false;
