-- CreateEnum
CREATE TYPE "BucketGoalType" AS ENUM ('GENERAL', 'TRAVEL', 'EVENT', 'PLACE_COLLECTION', 'ACHIEVEMENT');

-- CreateEnum
CREATE TYPE "BucketGoalStatus" AS ENUM ('IDEA', 'PLANNED', 'IN_PROGRESS', 'DONE', 'DROPPED');

-- CreateEnum
CREATE TYPE "BucketPinSource" AS ENUM ('MANUAL', 'NOMINATIM', 'GOOGLE');

-- CreateEnum
CREATE TYPE "BucketMediaType" AS ENUM ('IMAGE', 'VIDEO', 'LINK');

-- CreateTable
CREATE TABLE "BucketGoal" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "type" "BucketGoalType" NOT NULL DEFAULT 'GENERAL',
    "status" "BucketGoalStatus" NOT NULL DEFAULT 'IDEA',
    "priority" INTEGER NOT NULL DEFAULT 0,
    "details" JSONB,
    "coverUrl" TEXT,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "targetDate" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BucketGoal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BucketGoalLog" (
    "id" SERIAL NOT NULL,
    "goalId" INTEGER NOT NULL,
    "note" TEXT NOT NULL,
    "happenedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BucketGoalLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BucketGoalPin" (
    "id" SERIAL NOT NULL,
    "goalId" INTEGER NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "label" TEXT,
    "source" "BucketPinSource" NOT NULL DEFAULT 'MANUAL',
    "placeId" TEXT,
    "address" TEXT,
    "raw" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BucketGoalPin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BucketGoalMedia" (
    "id" SERIAL NOT NULL,
    "goalId" INTEGER,
    "logId" INTEGER,
    "url" TEXT NOT NULL,
    "type" "BucketMediaType" NOT NULL DEFAULT 'IMAGE',
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BucketGoalMedia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "BucketGoal_userId_idx" ON "BucketGoal"("userId");

-- CreateIndex
CREATE INDEX "BucketGoal_type_idx" ON "BucketGoal"("type");

-- CreateIndex
CREATE INDEX "BucketGoal_status_idx" ON "BucketGoal"("status");

-- CreateIndex
CREATE INDEX "BucketGoal_createdAt_idx" ON "BucketGoal"("createdAt");

-- CreateIndex
CREATE INDEX "BucketGoal_userId_type_idx" ON "BucketGoal"("userId", "type");

-- CreateIndex
CREATE INDEX "BucketGoal_userId_status_idx" ON "BucketGoal"("userId", "status");

-- CreateIndex
CREATE INDEX "BucketGoal_userId_createdAt_idx" ON "BucketGoal"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "BucketGoalLog_goalId_idx" ON "BucketGoalLog"("goalId");

-- CreateIndex
CREATE INDEX "BucketGoalLog_happenedAt_idx" ON "BucketGoalLog"("happenedAt");

-- CreateIndex
CREATE INDEX "BucketGoalLog_goalId_happenedAt_idx" ON "BucketGoalLog"("goalId", "happenedAt");

-- CreateIndex
CREATE INDEX "BucketGoalPin_goalId_idx" ON "BucketGoalPin"("goalId");

-- CreateIndex
CREATE INDEX "BucketGoalPin_source_idx" ON "BucketGoalPin"("source");

-- CreateIndex
CREATE INDEX "BucketGoalPin_goalId_lat_lng_idx" ON "BucketGoalPin"("goalId", "lat", "lng");

-- CreateIndex
CREATE INDEX "BucketGoalMedia_goalId_idx" ON "BucketGoalMedia"("goalId");

-- CreateIndex
CREATE INDEX "BucketGoalMedia_logId_idx" ON "BucketGoalMedia"("logId");

-- AddForeignKey
ALTER TABLE "BucketGoal" ADD CONSTRAINT "BucketGoal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BucketGoalLog" ADD CONSTRAINT "BucketGoalLog_goalId_fkey" FOREIGN KEY ("goalId") REFERENCES "BucketGoal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BucketGoalPin" ADD CONSTRAINT "BucketGoalPin_goalId_fkey" FOREIGN KEY ("goalId") REFERENCES "BucketGoal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BucketGoalMedia" ADD CONSTRAINT "BucketGoalMedia_goalId_fkey" FOREIGN KEY ("goalId") REFERENCES "BucketGoal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BucketGoalMedia" ADD CONSTRAINT "BucketGoalMedia_logId_fkey" FOREIGN KEY ("logId") REFERENCES "BucketGoalLog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
