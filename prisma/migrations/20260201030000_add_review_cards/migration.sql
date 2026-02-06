-- CreateEnum
DO $$ BEGIN
    CREATE TYPE "ReviewCardProjectStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE "ReviewCardLinkMode" AS ENUM ('DIRECT', 'REDIRECT');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE "ReviewCardExportType" AS ENUM ('PNG', 'PDF');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE "ReviewCardExportStatus" AS ENUM ('QUEUED', 'DONE', 'FAILED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE "ReviewCardPremiumRequestStatus" AS ENUM ('OPEN', 'IN_PROGRESS', 'DELIVERED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- CreateTable
CREATE TABLE IF NOT EXISTS "ReviewCardBusiness" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "placeId" TEXT,
    "googleReviewUrl" TEXT,
    "website" TEXT,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReviewCardBusiness_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "ReviewCardTemplate" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "aspect" TEXT NOT NULL,
    "schemaVersion" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "previewImageUrl" TEXT,
    "defaultDesignJson" JSONB NOT NULL,
    "editableFieldsJson" JSONB NOT NULL,
    "constraintsJson" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReviewCardTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "ReviewCardProject" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "businessId" INTEGER NOT NULL,
    "templateId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT,
    "status" "ReviewCardProjectStatus" NOT NULL DEFAULT 'DRAFT',
    "reviewLinkMode" "ReviewCardLinkMode" NOT NULL DEFAULT 'REDIRECT',
    "googleReviewUrlFinal" TEXT,
    "designJson" JSONB,
    "assetsJson" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReviewCardProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "ReviewCardExport" (
    "id" SERIAL NOT NULL,
    "projectId" INTEGER NOT NULL,
    "type" "ReviewCardExportType" NOT NULL,
    "format" TEXT NOT NULL,
    "status" "ReviewCardExportStatus" NOT NULL DEFAULT 'QUEUED',
    "fileUrl" TEXT,
    "errorMessage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReviewCardExport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "ReviewCardScanEvent" (
    "id" SERIAL NOT NULL,
    "projectId" INTEGER NOT NULL,
    "ipHash" TEXT,
    "userAgent" TEXT,
    "referer" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReviewCardScanEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "ReviewCardPremiumRequest" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "projectId" INTEGER,
    "notes" TEXT NOT NULL,
    "status" "ReviewCardPremiumRequestStatus" NOT NULL DEFAULT 'OPEN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReviewCardPremiumRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "ReviewCardTemplate_key_key" ON "ReviewCardTemplate"("key");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "ReviewCardTemplate_isActive_idx" ON "ReviewCardTemplate"("isActive");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "ReviewCardTemplate_aspect_idx" ON "ReviewCardTemplate"("aspect");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "ReviewCardTemplate_category_idx" ON "ReviewCardTemplate"("category");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "ReviewCardProject_slug_key" ON "ReviewCardProject"("slug");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "ReviewCardBusiness_userId_idx" ON "ReviewCardBusiness"("userId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "ReviewCardProject_userId_idx" ON "ReviewCardProject"("userId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "ReviewCardProject_businessId_idx" ON "ReviewCardProject"("businessId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "ReviewCardProject_templateId_idx" ON "ReviewCardProject"("templateId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "ReviewCardProject_status_idx" ON "ReviewCardProject"("status");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "ReviewCardExport_projectId_idx" ON "ReviewCardExport"("projectId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "ReviewCardExport_status_idx" ON "ReviewCardExport"("status");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "ReviewCardScanEvent_projectId_idx" ON "ReviewCardScanEvent"("projectId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "ReviewCardScanEvent_createdAt_idx" ON "ReviewCardScanEvent"("createdAt");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "ReviewCardScanEvent_projectId_createdAt_idx" ON "ReviewCardScanEvent"("projectId", "createdAt");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "ReviewCardPremiumRequest_userId_idx" ON "ReviewCardPremiumRequest"("userId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "ReviewCardPremiumRequest_projectId_idx" ON "ReviewCardPremiumRequest"("projectId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "ReviewCardPremiumRequest_status_idx" ON "ReviewCardPremiumRequest"("status");

-- AddForeignKey
ALTER TABLE "ReviewCardBusiness" DROP CONSTRAINT IF EXISTS "ReviewCardBusiness_userId_fkey";
ALTER TABLE "ReviewCardBusiness" ADD CONSTRAINT "ReviewCardBusiness_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewCardProject" DROP CONSTRAINT IF EXISTS "ReviewCardProject_userId_fkey";
ALTER TABLE "ReviewCardProject" ADD CONSTRAINT "ReviewCardProject_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ReviewCardProject" DROP CONSTRAINT IF EXISTS "ReviewCardProject_businessId_fkey";
ALTER TABLE "ReviewCardProject" ADD CONSTRAINT "ReviewCardProject_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "ReviewCardBusiness"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ReviewCardProject" DROP CONSTRAINT IF EXISTS "ReviewCardProject_templateId_fkey";
ALTER TABLE "ReviewCardProject" ADD CONSTRAINT "ReviewCardProject_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "ReviewCardTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "ReviewCardExport" DROP CONSTRAINT IF EXISTS "ReviewCardExport_projectId_fkey";
ALTER TABLE "ReviewCardExport" ADD CONSTRAINT "ReviewCardExport_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "ReviewCardProject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ReviewCardScanEvent" DROP CONSTRAINT IF EXISTS "ReviewCardScanEvent_projectId_fkey";
ALTER TABLE "ReviewCardScanEvent" ADD CONSTRAINT "ReviewCardScanEvent_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "ReviewCardProject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ReviewCardPremiumRequest" DROP CONSTRAINT IF EXISTS "ReviewCardPremiumRequest_userId_fkey";
ALTER TABLE "ReviewCardPremiumRequest" ADD CONSTRAINT "ReviewCardPremiumRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ReviewCardPremiumRequest" DROP CONSTRAINT IF EXISTS "ReviewCardPremiumRequest_projectId_fkey";
ALTER TABLE "ReviewCardPremiumRequest" ADD CONSTRAINT "ReviewCardPremiumRequest_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "ReviewCardProject"("id") ON DELETE SET NULL ON UPDATE CASCADE;
