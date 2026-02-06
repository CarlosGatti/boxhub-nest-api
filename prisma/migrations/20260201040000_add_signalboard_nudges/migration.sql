-- CreateEnum
DO $$ BEGIN
    CREATE TYPE "FeedEventAction" AS ENUM ('OPENED', 'SKIPPED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- CreateTable
CREATE TABLE IF NOT EXISTS "FeedEvent" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "sourceId" INTEGER NOT NULL,
    "action" "FeedEventAction" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FeedEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "FeedSourceNudge" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "sourceId" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeedSourceNudge_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX IF NOT EXISTS "FeedEvent_userId_sourceId_createdAt_idx" ON "FeedEvent"("userId", "sourceId", "createdAt");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "FeedEvent_userId_itemId_createdAt_idx" ON "FeedEvent"("userId", "itemId", "createdAt");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "FeedSourceNudge_userId_sourceId_status_idx" ON "FeedSourceNudge"("userId", "sourceId", "status");

-- AddForeignKey
ALTER TABLE "FeedEvent" DROP CONSTRAINT IF EXISTS "FeedEvent_userId_fkey";
ALTER TABLE "FeedEvent" ADD CONSTRAINT "FeedEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "FeedEvent" DROP CONSTRAINT IF EXISTS "FeedEvent_itemId_fkey";
ALTER TABLE "FeedEvent" ADD CONSTRAINT "FeedEvent_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "FeedItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "FeedEvent" DROP CONSTRAINT IF EXISTS "FeedEvent_sourceId_fkey";
ALTER TABLE "FeedEvent" ADD CONSTRAINT "FeedEvent_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "FeedSource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedSourceNudge" DROP CONSTRAINT IF EXISTS "FeedSourceNudge_userId_fkey";
ALTER TABLE "FeedSourceNudge" ADD CONSTRAINT "FeedSourceNudge_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "FeedSourceNudge" DROP CONSTRAINT IF EXISTS "FeedSourceNudge_sourceId_fkey";
ALTER TABLE "FeedSourceNudge" ADD CONSTRAINT "FeedSourceNudge_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "FeedSource"("id") ON DELETE CASCADE ON UPDATE CASCADE;
