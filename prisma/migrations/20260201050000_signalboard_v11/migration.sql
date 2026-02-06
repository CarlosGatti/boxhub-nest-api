-- CreateEnum
DO $$ BEGIN
    CREATE TYPE "FeedItemLastAction" AS ENUM ('OPEN', 'READ', 'SKIP', 'SAVE', 'HIDE');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- AlterTable
ALTER TABLE "FeedItemState" ADD COLUMN IF NOT EXISTS "openedAt" TIMESTAMP(3);
ALTER TABLE "FeedItemState" ADD COLUMN IF NOT EXISTS "skippedAt" TIMESTAMP(3);
ALTER TABLE "FeedItemState" ADD COLUMN IF NOT EXISTS "skipCount" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "FeedItemState" ADD COLUMN IF NOT EXISTS "actionCount" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "FeedItemState" ADD COLUMN IF NOT EXISTS "lastAction" "FeedItemLastAction";

-- CreateTable
CREATE TABLE IF NOT EXISTS "FeedSourcePreference" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "sourceId" INTEGER NOT NULL,
    "notifyOnNew" BOOLEAN NOT NULL DEFAULT false,
    "isMuted" BOOLEAN NOT NULL DEFAULT false,
    "mutedUntil" TIMESTAMP(3),
    "consecutiveSkips" INTEGER NOT NULL DEFAULT 0,
    "lastInteractedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeedSourcePreference_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "FeedSourcePreference_userId_sourceId_key" ON "FeedSourcePreference"("userId", "sourceId");
CREATE INDEX IF NOT EXISTS "FeedSourcePreference_userId_idx" ON "FeedSourcePreference"("userId");
CREATE INDEX IF NOT EXISTS "FeedSourcePreference_sourceId_idx" ON "FeedSourcePreference"("sourceId");
CREATE INDEX IF NOT EXISTS "FeedSourcePreference_consecutiveSkips_idx" ON "FeedSourcePreference"("consecutiveSkips");

-- AddForeignKey
ALTER TABLE "FeedSourcePreference" DROP CONSTRAINT IF EXISTS "FeedSourcePreference_userId_fkey";
ALTER TABLE "FeedSourcePreference" ADD CONSTRAINT "FeedSourcePreference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "FeedSourcePreference" DROP CONSTRAINT IF EXISTS "FeedSourcePreference_sourceId_fkey";
ALTER TABLE "FeedSourcePreference" ADD CONSTRAINT "FeedSourcePreference_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "FeedSource"("id") ON DELETE CASCADE ON UPDATE CASCADE;
