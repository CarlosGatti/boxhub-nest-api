-- AlterTable
ALTER TABLE "DefinedBrandingProject"
ADD COLUMN "isPublic" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN "publishedAt" TIMESTAMP(3),
ADD COLUMN "isFeatured" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE INDEX "DefinedBrandingProject_isPublic_status_publishedAt_idx"
ON "DefinedBrandingProject"("isPublic", "status", "publishedAt" DESC);
