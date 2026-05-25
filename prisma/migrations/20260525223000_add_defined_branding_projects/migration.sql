-- CreateEnum
CREATE TYPE "DefinedBrandingProjectStatus" AS ENUM ('DRAFT', 'ACTIVE', 'IN_REVIEW', 'COMPLETED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "DefinedBrandingSectionType" AS ENUM ('OVERVIEW', 'CONCEPT', 'LOGO', 'COLORS', 'TYPOGRAPHY', 'VISUAL_IDENTITY', 'APPLICATIONS', 'MOCKUPS', 'DELIVERABLES', 'NOTES', 'CUSTOM');

-- CreateEnum
CREATE TYPE "DefinedBrandingAssetType" AS ENUM ('PDF_MANUAL', 'LOGO', 'IMAGE', 'MOCKUP', 'COLOR_PALETTE', 'TYPOGRAPHY', 'SOURCE_FILE', 'EXPORT', 'OTHER');

-- CreateTable
CREATE TABLE "DefinedBrandingProject" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "projectId" INTEGER,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "concept" TEXT,
    "status" "DefinedBrandingProjectStatus" NOT NULL DEFAULT 'DRAFT',
    "coverImageUrl" TEXT,
    "brandManualPdfUrl" TEXT,
    "sourcePdfFileName" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedBrandingProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefinedBrandingSection" (
    "id" SERIAL NOT NULL,
    "brandingProjectId" INTEGER NOT NULL,
    "type" "DefinedBrandingSectionType" NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT,
    "contentJson" JSONB,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedBrandingSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefinedBrandingAsset" (
    "id" SERIAL NOT NULL,
    "brandingProjectId" INTEGER NOT NULL,
    "type" "DefinedBrandingAssetType" NOT NULL,
    "name" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "fileName" TEXT,
    "mimeType" TEXT,
    "notes" TEXT,
    "metadata" JSONB,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedBrandingAsset_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DefinedBrandingProject_slug_key" ON "DefinedBrandingProject"("slug");

-- CreateIndex
CREATE INDEX "DefinedBrandingProject_clientId_idx" ON "DefinedBrandingProject"("clientId");

-- CreateIndex
CREATE INDEX "DefinedBrandingProject_projectId_idx" ON "DefinedBrandingProject"("projectId");

-- CreateIndex
CREATE INDEX "DefinedBrandingProject_status_idx" ON "DefinedBrandingProject"("status");

-- CreateIndex
CREATE INDEX "DefinedBrandingProject_slug_idx" ON "DefinedBrandingProject"("slug");

-- CreateIndex
CREATE INDEX "DefinedBrandingProject_createdAt_idx" ON "DefinedBrandingProject"("createdAt");

-- CreateIndex
CREATE INDEX "DefinedBrandingSection_brandingProjectId_idx" ON "DefinedBrandingSection"("brandingProjectId");

-- CreateIndex
CREATE INDEX "DefinedBrandingSection_order_idx" ON "DefinedBrandingSection"("order");

-- CreateIndex
CREATE INDEX "DefinedBrandingSection_type_idx" ON "DefinedBrandingSection"("type");

-- CreateIndex
CREATE INDEX "DefinedBrandingAsset_brandingProjectId_idx" ON "DefinedBrandingAsset"("brandingProjectId");

-- CreateIndex
CREATE INDEX "DefinedBrandingAsset_type_idx" ON "DefinedBrandingAsset"("type");

-- CreateIndex
CREATE INDEX "DefinedBrandingAsset_order_idx" ON "DefinedBrandingAsset"("order");

-- AddForeignKey
ALTER TABLE "DefinedBrandingProject" ADD CONSTRAINT "DefinedBrandingProject_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "DefinedClient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedBrandingProject" ADD CONSTRAINT "DefinedBrandingProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "DefinedProject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedBrandingSection" ADD CONSTRAINT "DefinedBrandingSection_brandingProjectId_fkey" FOREIGN KEY ("brandingProjectId") REFERENCES "DefinedBrandingProject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedBrandingAsset" ADD CONSTRAINT "DefinedBrandingAsset_brandingProjectId_fkey" FOREIGN KEY ("brandingProjectId") REFERENCES "DefinedBrandingProject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
