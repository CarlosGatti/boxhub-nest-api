-- CreateEnum
CREATE TYPE "DefinedProposalStatus" AS ENUM ('DRAFT', 'SENT', 'VIEWED', 'APPROVED', 'DECLINED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "DefinedProposalSectionType" AS ENUM ('TEXT', 'OBJECTIVES', 'DELIVERABLES', 'PRICING', 'TIMELINE', 'TERMS', 'CUSTOM');

-- CreateEnum
CREATE TYPE "DefinedProposalPricingType" AS ENUM ('ONE_TIME', 'MONTHLY', 'CUSTOM');

-- CreateTable
CREATE TABLE "DefinedProposal" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "projectId" INTEGER,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "status" "DefinedProposalStatus" NOT NULL DEFAULT 'DRAFT',
    "summary" TEXT,
    "contentJson" JSONB,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "shareToken" TEXT,
    "shareTokenCreatedAt" TIMESTAMP(3),
    "shareTokenExpiresAt" TIMESTAMP(3),
    "shareRevokedAt" TIMESTAMP(3),
    "sentAt" TIMESTAMP(3),
    "viewedAt" TIMESTAMP(3),
    "approvedAt" TIMESTAMP(3),
    "declinedAt" TIMESTAMP(3),
    "createdById" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedProposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefinedProposalSection" (
    "id" SERIAL NOT NULL,
    "proposalId" INTEGER NOT NULL,
    "type" "DefinedProposalSectionType" NOT NULL DEFAULT 'TEXT',
    "title" TEXT NOT NULL,
    "body" TEXT,
    "contentJson" JSONB,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedProposalSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefinedProposalPricingOption" (
    "id" SERIAL NOT NULL,
    "proposalId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "type" "DefinedProposalPricingType" NOT NULL DEFAULT 'ONE_TIME',
    "amount" DECIMAL(20,2),
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "billingNote" TEXT,
    "features" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "isRecommended" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedProposalPricingOption_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DefinedProposal_shareToken_key" ON "DefinedProposal"("shareToken");

-- CreateIndex
CREATE INDEX "DefinedProposal_clientId_idx" ON "DefinedProposal"("clientId");

-- CreateIndex
CREATE INDEX "DefinedProposal_projectId_idx" ON "DefinedProposal"("projectId");

-- CreateIndex
CREATE INDEX "DefinedProposal_status_idx" ON "DefinedProposal"("status");

-- CreateIndex
CREATE INDEX "DefinedProposal_createdAt_idx" ON "DefinedProposal"("createdAt");

-- CreateIndex
CREATE INDEX "DefinedProposal_shareToken_idx" ON "DefinedProposal"("shareToken");

-- CreateIndex
CREATE INDEX "DefinedProposalSection_proposalId_idx" ON "DefinedProposalSection"("proposalId");

-- CreateIndex
CREATE INDEX "DefinedProposalSection_order_idx" ON "DefinedProposalSection"("order");

-- CreateIndex
CREATE INDEX "DefinedProposalPricingOption_proposalId_idx" ON "DefinedProposalPricingOption"("proposalId");

-- CreateIndex
CREATE INDEX "DefinedProposalPricingOption_order_idx" ON "DefinedProposalPricingOption"("order");

-- AddForeignKey
ALTER TABLE "DefinedProposal" ADD CONSTRAINT "DefinedProposal_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "DefinedClient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedProposal" ADD CONSTRAINT "DefinedProposal_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "DefinedProject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedProposal" ADD CONSTRAINT "DefinedProposal_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedProposalSection" ADD CONSTRAINT "DefinedProposalSection_proposalId_fkey" FOREIGN KEY ("proposalId") REFERENCES "DefinedProposal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedProposalPricingOption" ADD CONSTRAINT "DefinedProposalPricingOption_proposalId_fkey" FOREIGN KEY ("proposalId") REFERENCES "DefinedProposal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
