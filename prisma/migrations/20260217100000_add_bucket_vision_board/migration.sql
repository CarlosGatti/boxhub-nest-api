-- CreateEnum
CREATE TYPE "BucketVisionPeriodType" AS ENUM ('YEAR', 'QUARTER', 'CUSTOM');

-- CreateEnum
CREATE TYPE "BucketVisionSectionType" AS ENUM ('LIFE_WELLBEING', 'SCHOOL_LEARNING', 'DREAM_BIG', 'CAREER_GROWTH', 'VISUAL_INSPIRATION', 'CUSTOM');

-- CreateEnum
CREATE TYPE "BucketVisionItemType" AS ENUM ('IMAGE', 'QUOTE', 'COLOR', 'LINK', 'GOAL_REF');

-- CreateEnum
CREATE TYPE "BucketVisionLayoutMode" AS ENUM ('FORM', 'CANVAS');

-- CreateTable
CREATE TABLE "BucketVisionBoard" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'Your Vision Board',
    "periodType" "BucketVisionPeriodType" NOT NULL DEFAULT 'YEAR',
    "year" INTEGER,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "theme" TEXT,
    "layoutMode" "BucketVisionLayoutMode" NOT NULL DEFAULT 'FORM',
    "coverUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BucketVisionBoard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BucketVisionSection" (
    "id" SERIAL NOT NULL,
    "boardId" INTEGER NOT NULL,
    "type" "BucketVisionSectionType" NOT NULL,
    "title" TEXT,
    "content" JSONB NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BucketVisionSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BucketVisionItem" (
    "id" SERIAL NOT NULL,
    "boardId" INTEGER NOT NULL,
    "type" "BucketVisionItemType" NOT NULL,
    "text" TEXT,
    "url" TEXT,
    "color" TEXT,
    "metadata" JSONB,
    "order" INTEGER NOT NULL DEFAULT 0,
    "layout" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BucketVisionItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BucketVisionGoalLink" (
    "id" SERIAL NOT NULL,
    "boardId" INTEGER NOT NULL,
    "goalId" INTEGER NOT NULL,
    "label" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BucketVisionGoalLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BucketVisionCheckin" (
    "id" SERIAL NOT NULL,
    "boardId" INTEGER NOT NULL,
    "kind" TEXT,
    "notes" TEXT,
    "mood" JSONB,
    "snapshot" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BucketVisionCheckin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BucketVisionBoard_userId_year_key" ON "BucketVisionBoard"("userId", "year");

-- CreateIndex
CREATE INDEX "BucketVisionBoard_userId_idx" ON "BucketVisionBoard"("userId");

-- CreateIndex
CREATE INDEX "BucketVisionBoard_userId_year_idx" ON "BucketVisionBoard"("userId", "year");

-- CreateIndex
CREATE UNIQUE INDEX "BucketVisionSection_boardId_type_key" ON "BucketVisionSection"("boardId", "type");

-- CreateIndex
CREATE INDEX "BucketVisionSection_boardId_idx" ON "BucketVisionSection"("boardId");

-- CreateIndex
CREATE INDEX "BucketVisionItem_boardId_idx" ON "BucketVisionItem"("boardId");

-- CreateIndex
CREATE INDEX "BucketVisionItem_boardId_type_idx" ON "BucketVisionItem"("boardId", "type");

-- CreateIndex
CREATE UNIQUE INDEX "BucketVisionGoalLink_boardId_goalId_key" ON "BucketVisionGoalLink"("boardId", "goalId");

-- CreateIndex
CREATE INDEX "BucketVisionGoalLink_boardId_idx" ON "BucketVisionGoalLink"("boardId");

-- CreateIndex
CREATE INDEX "BucketVisionGoalLink_goalId_idx" ON "BucketVisionGoalLink"("goalId");

-- CreateIndex
CREATE INDEX "BucketVisionCheckin_boardId_idx" ON "BucketVisionCheckin"("boardId");

-- CreateIndex
CREATE INDEX "BucketVisionCheckin_boardId_createdAt_idx" ON "BucketVisionCheckin"("boardId", "createdAt");

-- AddForeignKey
ALTER TABLE "BucketVisionBoard" ADD CONSTRAINT "BucketVisionBoard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BucketVisionSection" ADD CONSTRAINT "BucketVisionSection_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "BucketVisionBoard"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BucketVisionItem" ADD CONSTRAINT "BucketVisionItem_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "BucketVisionBoard"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BucketVisionGoalLink" ADD CONSTRAINT "BucketVisionGoalLink_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "BucketVisionBoard"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BucketVisionGoalLink" ADD CONSTRAINT "BucketVisionGoalLink_goalId_fkey" FOREIGN KEY ("goalId") REFERENCES "BucketGoal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BucketVisionCheckin" ADD CONSTRAINT "BucketVisionCheckin_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "BucketVisionBoard"("id") ON DELETE CASCADE ON UPDATE CASCADE;
