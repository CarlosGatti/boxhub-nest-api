-- Bucket List refinements: versioning, nullable content, periodKey
-- Safe, additive changes. No data deletion or renames.

-- BucketGoal: add detailsSchemaVersion (default 1)
ALTER TABLE "BucketGoal" ADD COLUMN "detailsSchemaVersion" INTEGER NOT NULL DEFAULT 1;

-- BucketVisionSection: make content nullable (empty sections allowed)
ALTER TABLE "BucketVisionSection" ALTER COLUMN "content" DROP NOT NULL;

-- BucketVisionBoard: add periodKey (nullable, for future QUARTER/CUSTOM support)
ALTER TABLE "BucketVisionBoard" ADD COLUMN "periodKey" TEXT;

-- Index for periodKey lookups
CREATE INDEX "BucketVisionBoard_userId_periodKey_idx" ON "BucketVisionBoard"("userId", "periodKey");
