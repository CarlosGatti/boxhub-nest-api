-- Defined Academy Career Journey (isolated domain extension)

CREATE TYPE "DefinedAcademyCareerJourneyStatus" AS ENUM ('DRAFT', 'ACTIVE', 'ARCHIVED');
CREATE TYPE "DefinedAcademyCareerStageContentType" AS ENUM ('COURSE', 'RESOURCE');

CREATE TABLE "DefinedAcademyCareerJourney" (
    "id" SERIAL NOT NULL,
    "academyId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "status" "DefinedAcademyCareerJourneyStatus" NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedAcademyCareerJourney_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "DefinedAcademyCareerStage" (
    "id" SERIAL NOT NULL,
    "journeyId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "summary" TEXT,
    "iconKey" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedAcademyCareerStage_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "DefinedAcademyCareerStageContent" (
    "id" SERIAL NOT NULL,
    "stageId" INTEGER NOT NULL,
    "contentType" "DefinedAcademyCareerStageContentType" NOT NULL,
    "courseId" INTEGER,
    "resourceId" INTEGER,
    "label" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedAcademyCareerStageContent_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "DefinedAcademyUserCareerProfile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "academyId" INTEGER NOT NULL,
    "journeyId" INTEGER NOT NULL,
    "currentStageId" INTEGER,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedAcademyUserCareerProfile_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "DefinedAcademyUserCareerStageCompletion" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "stageId" INTEGER NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,

    CONSTRAINT "DefinedAcademyUserCareerStageCompletion_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "DefinedAcademyCareerJourney_academyId_key" ON "DefinedAcademyCareerJourney"("academyId");
CREATE UNIQUE INDEX "DefinedAcademyCareerJourney_academyId_slug_key" ON "DefinedAcademyCareerJourney"("academyId", "slug");
CREATE INDEX "DefinedAcademyCareerJourney_academyId_status_idx" ON "DefinedAcademyCareerJourney"("academyId", "status");

CREATE UNIQUE INDEX "DefinedAcademyCareerStage_journeyId_slug_key" ON "DefinedAcademyCareerStage"("journeyId", "slug");
CREATE INDEX "DefinedAcademyCareerStage_journeyId_idx" ON "DefinedAcademyCareerStage"("journeyId");
CREATE INDEX "DefinedAcademyCareerStage_journeyId_sortOrder_idx" ON "DefinedAcademyCareerStage"("journeyId", "sortOrder");

CREATE INDEX "DefinedAcademyCareerStageContent_stageId_idx" ON "DefinedAcademyCareerStageContent"("stageId");
CREATE INDEX "DefinedAcademyCareerStageContent_stageId_sortOrder_idx" ON "DefinedAcademyCareerStageContent"("stageId", "sortOrder");
CREATE INDEX "DefinedAcademyCareerStageContent_courseId_idx" ON "DefinedAcademyCareerStageContent"("courseId");
CREATE INDEX "DefinedAcademyCareerStageContent_resourceId_idx" ON "DefinedAcademyCareerStageContent"("resourceId");

CREATE UNIQUE INDEX "DefinedAcademyUserCareerProfile_userId_academyId_key" ON "DefinedAcademyUserCareerProfile"("userId", "academyId");
CREATE INDEX "DefinedAcademyUserCareerProfile_userId_idx" ON "DefinedAcademyUserCareerProfile"("userId");
CREATE INDEX "DefinedAcademyUserCareerProfile_academyId_idx" ON "DefinedAcademyUserCareerProfile"("academyId");
CREATE INDEX "DefinedAcademyUserCareerProfile_journeyId_idx" ON "DefinedAcademyUserCareerProfile"("journeyId");
CREATE INDEX "DefinedAcademyUserCareerProfile_currentStageId_idx" ON "DefinedAcademyUserCareerProfile"("currentStageId");

CREATE UNIQUE INDEX "DefinedAcademyUserCareerStageCompletion_profileId_stageId_key" ON "DefinedAcademyUserCareerStageCompletion"("profileId", "stageId");
CREATE INDEX "DefinedAcademyUserCareerStageCompletion_profileId_idx" ON "DefinedAcademyUserCareerStageCompletion"("profileId");
CREATE INDEX "DefinedAcademyUserCareerStageCompletion_stageId_idx" ON "DefinedAcademyUserCareerStageCompletion"("stageId");

ALTER TABLE "DefinedAcademyCareerJourney" ADD CONSTRAINT "DefinedAcademyCareerJourney_academyId_fkey" FOREIGN KEY ("academyId") REFERENCES "DefinedAcademy"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "DefinedAcademyCareerStage" ADD CONSTRAINT "DefinedAcademyCareerStage_journeyId_fkey" FOREIGN KEY ("journeyId") REFERENCES "DefinedAcademyCareerJourney"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "DefinedAcademyCareerStageContent" ADD CONSTRAINT "DefinedAcademyCareerStageContent_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "DefinedAcademyCareerStage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "DefinedAcademyCareerStageContent" ADD CONSTRAINT "DefinedAcademyCareerStageContent_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "DefinedAcademyCourse"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "DefinedAcademyCareerStageContent" ADD CONSTRAINT "DefinedAcademyCareerStageContent_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "DefinedAcademyResource"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "DefinedAcademyUserCareerProfile" ADD CONSTRAINT "DefinedAcademyUserCareerProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "DefinedAcademyUserCareerProfile" ADD CONSTRAINT "DefinedAcademyUserCareerProfile_academyId_fkey" FOREIGN KEY ("academyId") REFERENCES "DefinedAcademy"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "DefinedAcademyUserCareerProfile" ADD CONSTRAINT "DefinedAcademyUserCareerProfile_journeyId_fkey" FOREIGN KEY ("journeyId") REFERENCES "DefinedAcademyCareerJourney"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "DefinedAcademyUserCareerProfile" ADD CONSTRAINT "DefinedAcademyUserCareerProfile_currentStageId_fkey" FOREIGN KEY ("currentStageId") REFERENCES "DefinedAcademyCareerStage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "DefinedAcademyUserCareerStageCompletion" ADD CONSTRAINT "DefinedAcademyUserCareerStageCompletion_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "DefinedAcademyUserCareerProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "DefinedAcademyUserCareerStageCompletion" ADD CONSTRAINT "DefinedAcademyUserCareerStageCompletion_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "DefinedAcademyCareerStage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
