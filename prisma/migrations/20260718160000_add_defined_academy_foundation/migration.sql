-- Defined Academy foundation (additive, backward-compatible)

-- CreateEnum
CREATE TYPE "DefinedAcademyStatus" AS ENUM ('DRAFT', 'ACTIVE', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "DefinedAcademyCourseStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "DefinedAcademyCourseVisibility" AS ENUM ('PUBLIC', 'AUTHENTICATED', 'PRIVATE');

-- CreateEnum
CREATE TYPE "DefinedAcademyContentStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "DefinedAcademyLessonType" AS ENUM ('VIDEO', 'ARTICLE', 'RESOURCE', 'MIXED');

-- CreateEnum
CREATE TYPE "DefinedAcademyResourceType" AS ENUM ('PDF', 'IMAGE', 'FILE', 'TEXT', 'GUIDE', 'TEMPLATE', 'CHECKLIST', 'EXTERNAL_LINK', 'EMBED');

-- CreateEnum
CREATE TYPE "DefinedAcademyResourceStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "DefinedAcademyEnrollmentStatus" AS ENUM ('ENROLLED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "DefinedAcademyLessonProgressStatus" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED');

-- CreateEnum
CREATE TYPE "DefinedAcademyPartnerStatus" AS ENUM ('DRAFT', 'ACTIVE', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "DefinedAcademyShortLinkStatus" AS ENUM ('ACTIVE', 'DISABLED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "DefinedAcademyReferralCampaignStatus" AS ENUM ('DRAFT', 'ACTIVE', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "DefinedAcademyReferralSourceType" AS ENUM ('SCHOOL', 'PARTNER', 'PROFESSIONAL', 'LINKEDIN', 'EMAIL', 'EVENT', 'SOCIAL', 'ORGANIC', 'OTHER');

-- CreateEnum
CREATE TYPE "DefinedAcademyReferralStatus" AS ENUM ('VISITED', 'REGISTERED', 'ENROLLED', 'INVALID', 'EXPIRED');

-- CreateTable
CREATE TABLE "DefinedAcademy" (
    "id" SERIAL NOT NULL,
    "appId" INTEGER,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "status" "DefinedAcademyStatus" NOT NULL DEFAULT 'DRAFT',
    "logoUrl" TEXT,
    "settings" JSONB,
    "publishedAt" TIMESTAMP(3),
    "archivedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedAcademy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefinedAcademyCourse" (
    "id" SERIAL NOT NULL,
    "academyId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "summary" TEXT,
    "description" TEXT,
    "coverImageUrl" TEXT,
    "status" "DefinedAcademyCourseStatus" NOT NULL DEFAULT 'DRAFT',
    "visibility" "DefinedAcademyCourseVisibility" NOT NULL DEFAULT 'PUBLIC',
    "level" TEXT,
    "estimatedDurationMinutes" INTEGER,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "publishedAt" TIMESTAMP(3),
    "createdById" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedAcademyCourse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefinedAcademyModule" (
    "id" SERIAL NOT NULL,
    "courseId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "status" "DefinedAcademyContentStatus" NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedAcademyModule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefinedAcademyLesson" (
    "id" SERIAL NOT NULL,
    "moduleId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "summary" TEXT,
    "description" TEXT,
    "lessonType" "DefinedAcademyLessonType" NOT NULL DEFAULT 'VIDEO',
    "videoUrl" TEXT,
    "videoProvider" TEXT,
    "videoDurationSeconds" INTEGER,
    "bodyContent" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "status" "DefinedAcademyContentStatus" NOT NULL DEFAULT 'DRAFT',
    "visibility" "DefinedAcademyCourseVisibility" NOT NULL DEFAULT 'PUBLIC',
    "isPreview" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedAcademyLesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefinedAcademyResource" (
    "id" SERIAL NOT NULL,
    "academyId" INTEGER NOT NULL,
    "lessonId" INTEGER,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "type" "DefinedAcademyResourceType" NOT NULL,
    "fileUrl" TEXT,
    "externalUrl" TEXT,
    "textContent" TEXT,
    "mimeType" TEXT,
    "fileName" TEXT,
    "fileSize" INTEGER,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "visibility" "DefinedAcademyCourseVisibility" NOT NULL DEFAULT 'PUBLIC',
    "status" "DefinedAcademyResourceStatus" NOT NULL DEFAULT 'DRAFT',
    "downloadable" BOOLEAN NOT NULL DEFAULT true,
    "createdById" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedAcademyResource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefinedAcademyEnrollment" (
    "id" SERIAL NOT NULL,
    "courseId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "DefinedAcademyEnrollmentStatus" NOT NULL DEFAULT 'ENROLLED',
    "enrolledAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "lastAccessedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedAcademyEnrollment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefinedAcademyLessonProgress" (
    "id" SERIAL NOT NULL,
    "enrollmentId" INTEGER NOT NULL,
    "lessonId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "DefinedAcademyLessonProgressStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "progressPercentage" INTEGER NOT NULL DEFAULT 0,
    "lastPositionSeconds" INTEGER,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "lastAccessedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedAcademyLessonProgress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefinedAcademyPartnerCategory" (
    "id" SERIAL NOT NULL,
    "academyId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedAcademyPartnerCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefinedAcademyPartner" (
    "id" SERIAL NOT NULL,
    "academyId" INTEGER NOT NULL,
    "categoryId" INTEGER,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "websiteUrl" TEXT,
    "contactUrl" TEXT,
    "logoUrl" TEXT,
    "location" TEXT,
    "status" "DefinedAcademyPartnerStatus" NOT NULL DEFAULT 'DRAFT',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedAcademyPartner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefinedAcademyShortLink" (
    "id" SERIAL NOT NULL,
    "academyId" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "destinationUrl" TEXT NOT NULL,
    "resourceId" INTEGER,
    "courseId" INTEGER,
    "partnerId" INTEGER,
    "referralCampaignId" INTEGER,
    "status" "DefinedAcademyShortLinkStatus" NOT NULL DEFAULT 'ACTIVE',
    "expiresAt" TIMESTAMP(3),
    "visitCount" INTEGER NOT NULL DEFAULT 0,
    "createdById" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedAcademyShortLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefinedAcademyShortLinkEvent" (
    "id" SERIAL NOT NULL,
    "shortLinkId" INTEGER NOT NULL,
    "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,
    "anonymousSessionHash" TEXT,
    "referrer" TEXT,
    "userAgentSummary" TEXT,
    "campaignMetadata" JSONB,

    CONSTRAINT "DefinedAcademyShortLinkEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefinedAcademyReferralCampaign" (
    "id" SERIAL NOT NULL,
    "academyId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "sourceType" "DefinedAcademyReferralSourceType" NOT NULL DEFAULT 'OTHER',
    "partnerId" INTEGER,
    "courseId" INTEGER,
    "resourceId" INTEGER,
    "status" "DefinedAcademyReferralCampaignStatus" NOT NULL DEFAULT 'DRAFT',
    "startsAt" TIMESTAMP(3),
    "endsAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedAcademyReferralCampaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefinedAcademyReferral" (
    "id" SERIAL NOT NULL,
    "academyId" INTEGER NOT NULL,
    "campaignId" INTEGER,
    "referrerUserId" INTEGER,
    "partnerId" INTEGER,
    "referredUserId" INTEGER,
    "referralCode" TEXT NOT NULL,
    "status" "DefinedAcademyReferralStatus" NOT NULL DEFAULT 'VISITED',
    "firstVisitedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "registeredAt" TIMESTAMP(3),
    "enrolledAt" TIMESTAMP(3),
    "attributionExpiresAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedAcademyReferral_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DefinedAcademy_slug_key" ON "DefinedAcademy"("slug");

-- CreateIndex
CREATE INDEX "DefinedAcademy_status_idx" ON "DefinedAcademy"("status");

-- CreateIndex
CREATE INDEX "DefinedAcademy_appId_idx" ON "DefinedAcademy"("appId");

-- CreateIndex
CREATE UNIQUE INDEX "DefinedAcademyCourse_academyId_slug_key" ON "DefinedAcademyCourse"("academyId", "slug");

-- CreateIndex
CREATE INDEX "DefinedAcademyCourse_academyId_idx" ON "DefinedAcademyCourse"("academyId");

-- CreateIndex
CREATE INDEX "DefinedAcademyCourse_academyId_status_idx" ON "DefinedAcademyCourse"("academyId", "status");

-- CreateIndex
CREATE INDEX "DefinedAcademyCourse_academyId_sortOrder_idx" ON "DefinedAcademyCourse"("academyId", "sortOrder");

-- CreateIndex
CREATE INDEX "DefinedAcademyModule_courseId_idx" ON "DefinedAcademyModule"("courseId");

-- CreateIndex
CREATE INDEX "DefinedAcademyModule_courseId_sortOrder_idx" ON "DefinedAcademyModule"("courseId", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "DefinedAcademyLesson_moduleId_slug_key" ON "DefinedAcademyLesson"("moduleId", "slug");

-- CreateIndex
CREATE INDEX "DefinedAcademyLesson_moduleId_idx" ON "DefinedAcademyLesson"("moduleId");

-- CreateIndex
CREATE INDEX "DefinedAcademyLesson_moduleId_sortOrder_idx" ON "DefinedAcademyLesson"("moduleId", "sortOrder");

-- CreateIndex
CREATE INDEX "DefinedAcademyResource_academyId_idx" ON "DefinedAcademyResource"("academyId");

-- CreateIndex
CREATE INDEX "DefinedAcademyResource_lessonId_idx" ON "DefinedAcademyResource"("lessonId");

-- CreateIndex
CREATE INDEX "DefinedAcademyResource_academyId_status_idx" ON "DefinedAcademyResource"("academyId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "DefinedAcademyEnrollment_courseId_userId_key" ON "DefinedAcademyEnrollment"("courseId", "userId");

-- CreateIndex
CREATE INDEX "DefinedAcademyEnrollment_userId_idx" ON "DefinedAcademyEnrollment"("userId");

-- CreateIndex
CREATE INDEX "DefinedAcademyEnrollment_courseId_idx" ON "DefinedAcademyEnrollment"("courseId");

-- CreateIndex
CREATE UNIQUE INDEX "DefinedAcademyLessonProgress_enrollmentId_lessonId_key" ON "DefinedAcademyLessonProgress"("enrollmentId", "lessonId");

-- CreateIndex
CREATE INDEX "DefinedAcademyLessonProgress_userId_idx" ON "DefinedAcademyLessonProgress"("userId");

-- CreateIndex
CREATE INDEX "DefinedAcademyLessonProgress_lessonId_idx" ON "DefinedAcademyLessonProgress"("lessonId");

-- CreateIndex
CREATE UNIQUE INDEX "DefinedAcademyPartnerCategory_academyId_slug_key" ON "DefinedAcademyPartnerCategory"("academyId", "slug");

-- CreateIndex
CREATE INDEX "DefinedAcademyPartnerCategory_academyId_idx" ON "DefinedAcademyPartnerCategory"("academyId");

-- CreateIndex
CREATE UNIQUE INDEX "DefinedAcademyPartner_academyId_slug_key" ON "DefinedAcademyPartner"("academyId", "slug");

-- CreateIndex
CREATE INDEX "DefinedAcademyPartner_academyId_idx" ON "DefinedAcademyPartner"("academyId");

-- CreateIndex
CREATE INDEX "DefinedAcademyPartner_academyId_status_idx" ON "DefinedAcademyPartner"("academyId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "DefinedAcademyShortLink_code_key" ON "DefinedAcademyShortLink"("code");

-- CreateIndex
CREATE INDEX "DefinedAcademyShortLink_academyId_idx" ON "DefinedAcademyShortLink"("academyId");

-- CreateIndex
CREATE INDEX "DefinedAcademyShortLink_status_idx" ON "DefinedAcademyShortLink"("status");

-- CreateIndex
CREATE INDEX "DefinedAcademyShortLinkEvent_shortLinkId_idx" ON "DefinedAcademyShortLinkEvent"("shortLinkId");

-- CreateIndex
CREATE INDEX "DefinedAcademyShortLinkEvent_shortLinkId_occurredAt_idx" ON "DefinedAcademyShortLinkEvent"("shortLinkId", "occurredAt");

-- CreateIndex
CREATE UNIQUE INDEX "DefinedAcademyReferralCampaign_academyId_code_key" ON "DefinedAcademyReferralCampaign"("academyId", "code");

-- CreateIndex
CREATE INDEX "DefinedAcademyReferralCampaign_academyId_idx" ON "DefinedAcademyReferralCampaign"("academyId");

-- CreateIndex
CREATE INDEX "DefinedAcademyReferralCampaign_academyId_status_idx" ON "DefinedAcademyReferralCampaign"("academyId", "status");

-- CreateIndex
CREATE INDEX "DefinedAcademyReferral_academyId_idx" ON "DefinedAcademyReferral"("academyId");

-- CreateIndex
CREATE INDEX "DefinedAcademyReferral_referralCode_idx" ON "DefinedAcademyReferral"("referralCode");

-- CreateIndex
CREATE INDEX "DefinedAcademyReferral_referredUserId_idx" ON "DefinedAcademyReferral"("referredUserId");

-- CreateIndex
CREATE INDEX "DefinedAcademyReferral_referrerUserId_idx" ON "DefinedAcademyReferral"("referrerUserId");

-- AddForeignKey
ALTER TABLE "DefinedAcademy" ADD CONSTRAINT "DefinedAcademy_appId_fkey" FOREIGN KEY ("appId") REFERENCES "App"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyCourse" ADD CONSTRAINT "DefinedAcademyCourse_academyId_fkey" FOREIGN KEY ("academyId") REFERENCES "DefinedAcademy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyCourse" ADD CONSTRAINT "DefinedAcademyCourse_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyModule" ADD CONSTRAINT "DefinedAcademyModule_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "DefinedAcademyCourse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyLesson" ADD CONSTRAINT "DefinedAcademyLesson_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "DefinedAcademyModule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyResource" ADD CONSTRAINT "DefinedAcademyResource_academyId_fkey" FOREIGN KEY ("academyId") REFERENCES "DefinedAcademy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyResource" ADD CONSTRAINT "DefinedAcademyResource_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "DefinedAcademyLesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyResource" ADD CONSTRAINT "DefinedAcademyResource_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyEnrollment" ADD CONSTRAINT "DefinedAcademyEnrollment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "DefinedAcademyCourse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyEnrollment" ADD CONSTRAINT "DefinedAcademyEnrollment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyLessonProgress" ADD CONSTRAINT "DefinedAcademyLessonProgress_enrollmentId_fkey" FOREIGN KEY ("enrollmentId") REFERENCES "DefinedAcademyEnrollment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyLessonProgress" ADD CONSTRAINT "DefinedAcademyLessonProgress_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "DefinedAcademyLesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyLessonProgress" ADD CONSTRAINT "DefinedAcademyLessonProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyPartnerCategory" ADD CONSTRAINT "DefinedAcademyPartnerCategory_academyId_fkey" FOREIGN KEY ("academyId") REFERENCES "DefinedAcademy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyPartner" ADD CONSTRAINT "DefinedAcademyPartner_academyId_fkey" FOREIGN KEY ("academyId") REFERENCES "DefinedAcademy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyPartner" ADD CONSTRAINT "DefinedAcademyPartner_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "DefinedAcademyPartnerCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyShortLink" ADD CONSTRAINT "DefinedAcademyShortLink_academyId_fkey" FOREIGN KEY ("academyId") REFERENCES "DefinedAcademy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyShortLink" ADD CONSTRAINT "DefinedAcademyShortLink_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "DefinedAcademyResource"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyShortLink" ADD CONSTRAINT "DefinedAcademyShortLink_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "DefinedAcademyCourse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyShortLink" ADD CONSTRAINT "DefinedAcademyShortLink_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "DefinedAcademyPartner"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyShortLink" ADD CONSTRAINT "DefinedAcademyShortLink_referralCampaignId_fkey" FOREIGN KEY ("referralCampaignId") REFERENCES "DefinedAcademyReferralCampaign"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyShortLink" ADD CONSTRAINT "DefinedAcademyShortLink_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyShortLinkEvent" ADD CONSTRAINT "DefinedAcademyShortLinkEvent_shortLinkId_fkey" FOREIGN KEY ("shortLinkId") REFERENCES "DefinedAcademyShortLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyReferralCampaign" ADD CONSTRAINT "DefinedAcademyReferralCampaign_academyId_fkey" FOREIGN KEY ("academyId") REFERENCES "DefinedAcademy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyReferralCampaign" ADD CONSTRAINT "DefinedAcademyReferralCampaign_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "DefinedAcademyPartner"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyReferralCampaign" ADD CONSTRAINT "DefinedAcademyReferralCampaign_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "DefinedAcademyCourse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyReferralCampaign" ADD CONSTRAINT "DefinedAcademyReferralCampaign_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "DefinedAcademyResource"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyReferral" ADD CONSTRAINT "DefinedAcademyReferral_academyId_fkey" FOREIGN KEY ("academyId") REFERENCES "DefinedAcademy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyReferral" ADD CONSTRAINT "DefinedAcademyReferral_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "DefinedAcademyReferralCampaign"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyReferral" ADD CONSTRAINT "DefinedAcademyReferral_referrerUserId_fkey" FOREIGN KEY ("referrerUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyReferral" ADD CONSTRAINT "DefinedAcademyReferral_referredUserId_fkey" FOREIGN KEY ("referredUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedAcademyReferral" ADD CONSTRAINT "DefinedAcademyReferral_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "DefinedAcademyPartner"("id") ON DELETE SET NULL ON UPDATE CASCADE;
