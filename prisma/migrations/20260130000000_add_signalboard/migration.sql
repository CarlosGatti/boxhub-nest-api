-- CreateEnum
DO $$ BEGIN
    CREATE TYPE "FeedSourceType" AS ENUM ('RSS', 'YOUTUBE_CHANNEL', 'YOUTUBE_PLAYLIST', 'GOOGLE_NEWS_RSS', 'CUSTOM');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- CreateEnum
DO $$ BEGIN
    CREATE TYPE "FeedItemType" AS ENUM ('ARTICLE', 'VIDEO', 'POST');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- CreateEnum
DO $$ BEGIN
    CREATE TYPE "FeedItemStatus" AS ENUM ('ACTIVE', 'REMOVED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- CreateEnum
DO $$ BEGIN
    CREATE TYPE "FeedItemReadStatus" AS ENUM ('UNREAD', 'READ');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- CreateEnum
DO $$ BEGIN
    CREATE TYPE "FeedItemSaveStatus" AS ENUM ('NONE', 'SAVED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- CreateEnum
DO $$ BEGIN
    CREATE TYPE "FeedItemVisibility" AS ENUM ('VISIBLE', 'HIDDEN');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- CreateTable
CREATE TABLE IF NOT EXISTS "FeedProfile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "timezone" TEXT,
    "language" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeedProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "FeedCollection" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "icon" TEXT,
    "color" TEXT,
    "keywords" TEXT[] NOT NULL DEFAULT '{}',
    "blocked" TEXT[] NOT NULL DEFAULT '{}',
    "preferredDomains" TEXT[] NOT NULL DEFAULT '{}',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeedCollection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "FeedSource" (
    "id" SERIAL NOT NULL,
    "collectionId" INTEGER NOT NULL,
    "type" "FeedSourceType" NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "fetchEveryMin" INTEGER,
    "lastFetchedAt" TIMESTAMP(3),
    "failureCount" INTEGER NOT NULL DEFAULT 0,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeedSource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "FeedItem" (
    "id" SERIAL NOT NULL,
    "sourceId" INTEGER NOT NULL,
    "type" "FeedItemType" NOT NULL DEFAULT 'ARTICLE',
    "status" "FeedItemStatus" NOT NULL DEFAULT 'ACTIVE',
    "title" TEXT NOT NULL,
    "canonicalUrl" TEXT,
    "publishedAt" TIMESTAMP(3),
    "contentText" TEXT,
    "imageUrl" TEXT,
    "metrics" JSONB,
    "contentHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeedItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "FeedItemState" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "readStatus" "FeedItemReadStatus" NOT NULL DEFAULT 'UNREAD',
    "saveStatus" "FeedItemSaveStatus" NOT NULL DEFAULT 'NONE',
    "visibility" "FeedItemVisibility" NOT NULL DEFAULT 'VISIBLE',
    "readAt" TIMESTAMP(3),
    "savedAt" TIMESTAMP(3),
    "hiddenAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeedItemState_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "FeedItemSummary" (
    "id" SERIAL NOT NULL,
    "itemId" INTEGER NOT NULL,
    "summary" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeedItemSummary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "FeedProfile_userId_key" ON "FeedProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "FeedCollection_profileId_name_key" ON "FeedCollection"("profileId", "name");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "FeedCollection_profileId_idx" ON "FeedCollection"("profileId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "FeedCollection_isActive_idx" ON "FeedCollection"("isActive");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "FeedSource_collectionId_idx" ON "FeedSource"("collectionId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "FeedSource_isActive_idx" ON "FeedSource"("isActive");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "FeedSource_type_idx" ON "FeedSource"("type");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "FeedItem_contentHash_key" ON "FeedItem"("contentHash");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "FeedItem_sourceId_idx" ON "FeedItem"("sourceId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "FeedItem_publishedAt_idx" ON "FeedItem"("publishedAt");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "FeedItemState_userId_itemId_key" ON "FeedItemState"("userId", "itemId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "FeedItemState_userId_idx" ON "FeedItemState"("userId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "FeedItemState_itemId_idx" ON "FeedItemState"("itemId");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "FeedItemSummary_itemId_key" ON "FeedItemSummary"("itemId");

-- AddForeignKey
ALTER TABLE "FeedProfile" DROP CONSTRAINT IF EXISTS "FeedProfile_userId_fkey";
ALTER TABLE "FeedProfile" ADD CONSTRAINT "FeedProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedCollection" DROP CONSTRAINT IF EXISTS "FeedCollection_profileId_fkey";
ALTER TABLE "FeedCollection" ADD CONSTRAINT "FeedCollection_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "FeedProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedSource" DROP CONSTRAINT IF EXISTS "FeedSource_collectionId_fkey";
ALTER TABLE "FeedSource" ADD CONSTRAINT "FeedSource_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "FeedCollection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedItem" DROP CONSTRAINT IF EXISTS "FeedItem_sourceId_fkey";
ALTER TABLE "FeedItem" ADD CONSTRAINT "FeedItem_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "FeedSource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedItemState" DROP CONSTRAINT IF EXISTS "FeedItemState_userId_fkey";
ALTER TABLE "FeedItemState" ADD CONSTRAINT "FeedItemState_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedItemState" DROP CONSTRAINT IF EXISTS "FeedItemState_itemId_fkey";
ALTER TABLE "FeedItemState" ADD CONSTRAINT "FeedItemState_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "FeedItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedItemSummary" DROP CONSTRAINT IF EXISTS "FeedItemSummary_itemId_fkey";
ALTER TABLE "FeedItemSummary" ADD CONSTRAINT "FeedItemSummary_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "FeedItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
