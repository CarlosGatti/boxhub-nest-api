-- CreateEnum
CREATE TYPE "DefinedClientType" AS ENUM ('COMPANY', 'INDIVIDUAL');

-- CreateEnum
CREATE TYPE "DefinedProjectServiceType" AS ENUM ('BRANDING', 'WEBSITE', 'VIDEO', 'ADS', 'SOCIAL', 'OTHER');

-- CreateEnum
CREATE TYPE "DefinedProjectStatus" AS ENUM ('DRAFT', 'ACTIVE', 'WAITING_ON_CLIENT', 'IN_PROGRESS', 'IN_REVIEW', 'COMPLETED', 'ARCHIVED');

-- CreateTable
CREATE TABLE "DefinedClient" (
    "id" SERIAL NOT NULL,
    "type" "DefinedClientType" NOT NULL,
    "companyName" TEXT,
    "legalName" TEXT,
    "contactName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "website" TEXT,
    "instagram" TEXT,
    "facebook" TEXT,
    "addressLine1" TEXT,
    "addressLine2" TEXT,
    "city" TEXT,
    "state" TEXT,
    "postalCode" TEXT,
    "country" TEXT,
    "businessType" TEXT,
    "serviceArea" TEXT,
    "yearsInBusiness" INTEGER,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedClient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefinedProject" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "serviceType" "DefinedProjectServiceType" NOT NULL,
    "status" "DefinedProjectStatus" NOT NULL DEFAULT 'DRAFT',
    "budget" DOUBLE PRECISION,
    "deadline" TIMESTAMP(3),
    "source" TEXT,
    "assignedTo" TEXT,
    "supplierId" INTEGER,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefinedInternalNote" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER,
    "projectId" INTEGER,
    "authorId" INTEGER NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedInternalNote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DefinedClient_email_idx" ON "DefinedClient"("email");

-- CreateIndex
CREATE INDEX "DefinedClient_companyName_idx" ON "DefinedClient"("companyName");

-- CreateIndex
CREATE INDEX "DefinedClient_contactName_idx" ON "DefinedClient"("contactName");

-- CreateIndex
CREATE INDEX "DefinedClient_createdAt_idx" ON "DefinedClient"("createdAt");

-- CreateIndex
CREATE INDEX "DefinedProject_clientId_idx" ON "DefinedProject"("clientId");

-- CreateIndex
CREATE INDEX "DefinedProject_status_idx" ON "DefinedProject"("status");

-- CreateIndex
CREATE INDEX "DefinedProject_createdAt_idx" ON "DefinedProject"("createdAt");

-- CreateIndex
CREATE INDEX "DefinedProject_clientId_status_idx" ON "DefinedProject"("clientId", "status");

-- CreateIndex
CREATE INDEX "DefinedInternalNote_clientId_idx" ON "DefinedInternalNote"("clientId");

-- CreateIndex
CREATE INDEX "DefinedInternalNote_projectId_idx" ON "DefinedInternalNote"("projectId");

-- CreateIndex
CREATE INDEX "DefinedInternalNote_authorId_idx" ON "DefinedInternalNote"("authorId");

-- CreateIndex
CREATE INDEX "DefinedInternalNote_createdAt_idx" ON "DefinedInternalNote"("createdAt");

-- AddForeignKey
ALTER TABLE "DefinedProject" ADD CONSTRAINT "DefinedProject_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "DefinedClient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedInternalNote" ADD CONSTRAINT "DefinedInternalNote_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "DefinedClient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedInternalNote" ADD CONSTRAINT "DefinedInternalNote_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "DefinedProject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedInternalNote" ADD CONSTRAINT "DefinedInternalNote_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
