-- AlterTable
ALTER TABLE "DefinedIntakeForm"
ADD COLUMN "shareToken" TEXT,
ADD COLUMN "shareTokenCreatedAt" TIMESTAMP(3),
ADD COLUMN "shareTokenExpiresAt" TIMESTAMP(3),
ADD COLUMN "shareRevokedAt" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "DefinedIntakeForm_shareToken_key" ON "DefinedIntakeForm"("shareToken");

-- CreateIndex
CREATE INDEX "DefinedIntakeForm_shareTokenExpiresAt_idx" ON "DefinedIntakeForm"("shareTokenExpiresAt");
