-- CreateEnum
CREATE TYPE "DefinedLeadStatus" AS ENUM ('RECEIVED', 'STORED');

-- CreateEnum
CREATE TYPE "DefinedLeadNotificationStatus" AS ENUM ('PENDING', 'SENT', 'FAILED');

-- CreateEnum
CREATE TYPE "DefinedLeadCrmSyncStatus" AS ENUM ('PENDING', 'SYNCED', 'FAILED', 'NOT_APPLICABLE');

-- CreateTable
CREATE TABLE "DefinedLead" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "companyName" TEXT,
    "businessType" TEXT,
    "city" TEXT,
    "state" TEXT,
    "selectedPackage" TEXT,
    "serviceInterest" TEXT,
    "message" TEXT,
    "landingSlug" TEXT,
    "referrer" TEXT,
    "utmSource" TEXT,
    "utmMedium" TEXT,
    "utmCampaign" TEXT,
    "utmContent" TEXT,
    "utmTerm" TEXT,
    "gclid" TEXT,
    "fbclid" TEXT,
    "consent" BOOLEAN NOT NULL,
    "status" "DefinedLeadStatus" NOT NULL DEFAULT 'STORED',
    "notificationStatus" "DefinedLeadNotificationStatus" NOT NULL DEFAULT 'PENDING',
    "crmSyncStatus" "DefinedLeadCrmSyncStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedLead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DefinedLead_email_idx" ON "DefinedLead"("email");

-- CreateIndex
CREATE INDEX "DefinedLead_createdAt_idx" ON "DefinedLead"("createdAt");

-- CreateIndex
CREATE INDEX "DefinedLead_landingSlug_idx" ON "DefinedLead"("landingSlug");
