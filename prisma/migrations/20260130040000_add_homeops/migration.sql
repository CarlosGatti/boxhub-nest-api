-- CreateEnum
DO $$ BEGIN
    CREATE TYPE "HouseholdRole" AS ENUM ('OWNER', 'ADMIN', 'MEMBER');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- CreateEnum
DO $$ BEGIN
    CREATE TYPE "HomeOpsAssignmentMode" AS ENUM ('FIXED', 'ROUND_ROBIN', 'BALANCED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- CreateEnum
DO $$ BEGIN
    CREATE TYPE "HomeOpsTaskStatus" AS ENUM ('OPEN', 'DONE', 'SKIPPED', 'CARRIED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- CreateEnum
DO $$ BEGIN
    CREATE TYPE "HomeOpsFrequency" AS ENUM ('ONCE', 'DAILY', 'WEEKLY', 'BIWEEKLY', 'MONTHLY', 'CUSTOM');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- CreateTable
CREATE TABLE IF NOT EXISTS "HomeOpsHousehold" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "appId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HomeOpsHousehold_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "HomeOpsHouseholdMember" (
    "id" SERIAL NOT NULL,
    "householdId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "role" "HouseholdRole" NOT NULL DEFAULT 'MEMBER',
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HomeOpsHouseholdMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "HomeOpsTaskTemplate" (
    "id" SERIAL NOT NULL,
    "householdId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT,
    "points" INTEGER NOT NULL DEFAULT 1,
    "estimatedMinutes" INTEGER,
    "frequency" "HomeOpsFrequency" NOT NULL,
    "interval" INTEGER,
    "daysOfWeek" TEXT[] NOT NULL DEFAULT '{}',
    "dayOfMonth" INTEGER,
    "timezone" TEXT NOT NULL DEFAULT 'America/Denver',
    "assignmentMode" "HomeOpsAssignmentMode" NOT NULL DEFAULT 'FIXED',
    "fixedAssigneeId" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdById" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HomeOpsTaskTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "HomeOpsTaskInstance" (
    "id" SERIAL NOT NULL,
    "householdId" INTEGER NOT NULL,
    "templateId" INTEGER,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT,
    "points" INTEGER NOT NULL DEFAULT 1,
    "estimatedMinutes" INTEGER,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "assigneeId" INTEGER,
    "status" "HomeOpsTaskStatus" NOT NULL DEFAULT 'OPEN',
    "completedAt" TIMESTAMP(3),
    "completedById" INTEGER,
    "skippedAt" TIMESTAMP(3),
    "skipReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HomeOpsTaskInstance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "HomeOpsWorkloadLedger" (
    "id" SERIAL NOT NULL,
    "householdId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "weekStart" TIMESTAMP(3) NOT NULL,
    "pointsCompleted" INTEGER NOT NULL DEFAULT 0,
    "minutesCompleted" INTEGER NOT NULL DEFAULT 0,
    "tasksCompleted" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HomeOpsWorkloadLedger_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "HomeOpsHouseholdMember_householdId_userId_key" ON "HomeOpsHouseholdMember"("householdId", "userId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "HomeOpsHousehold_ownerId_idx" ON "HomeOpsHousehold"("ownerId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "HomeOpsHousehold_appId_idx" ON "HomeOpsHousehold"("appId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "HomeOpsHouseholdMember_userId_idx" ON "HomeOpsHouseholdMember"("userId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "HomeOpsTaskTemplate_householdId_idx" ON "HomeOpsTaskTemplate"("householdId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "HomeOpsTaskTemplate_isActive_idx" ON "HomeOpsTaskTemplate"("isActive");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "HomeOpsTaskInstance_householdId_idx" ON "HomeOpsTaskInstance"("householdId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "HomeOpsTaskInstance_dueDate_idx" ON "HomeOpsTaskInstance"("dueDate");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "HomeOpsTaskInstance_status_idx" ON "HomeOpsTaskInstance"("status");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "HomeOpsTaskInstance_assigneeId_idx" ON "HomeOpsTaskInstance"("assigneeId");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "HomeOpsWorkloadLedger_householdId_userId_weekStart_key" ON "HomeOpsWorkloadLedger"("householdId", "userId", "weekStart");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "HomeOpsWorkloadLedger_householdId_idx" ON "HomeOpsWorkloadLedger"("householdId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "HomeOpsWorkloadLedger_userId_idx" ON "HomeOpsWorkloadLedger"("userId");

-- AddForeignKey
ALTER TABLE "HomeOpsHousehold" DROP CONSTRAINT IF EXISTS "HomeOpsHousehold_ownerId_fkey";
ALTER TABLE "HomeOpsHousehold" ADD CONSTRAINT "HomeOpsHousehold_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeOpsHousehold" DROP CONSTRAINT IF EXISTS "HomeOpsHousehold_appId_fkey";
ALTER TABLE "HomeOpsHousehold" ADD CONSTRAINT "HomeOpsHousehold_appId_fkey" FOREIGN KEY ("appId") REFERENCES "App"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeOpsHouseholdMember" DROP CONSTRAINT IF EXISTS "HomeOpsHouseholdMember_householdId_fkey";
ALTER TABLE "HomeOpsHouseholdMember" ADD CONSTRAINT "HomeOpsHouseholdMember_householdId_fkey" FOREIGN KEY ("householdId") REFERENCES "HomeOpsHousehold"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeOpsHouseholdMember" DROP CONSTRAINT IF EXISTS "HomeOpsHouseholdMember_userId_fkey";
ALTER TABLE "HomeOpsHouseholdMember" ADD CONSTRAINT "HomeOpsHouseholdMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeOpsTaskTemplate" DROP CONSTRAINT IF EXISTS "HomeOpsTaskTemplate_householdId_fkey";
ALTER TABLE "HomeOpsTaskTemplate" ADD CONSTRAINT "HomeOpsTaskTemplate_householdId_fkey" FOREIGN KEY ("householdId") REFERENCES "HomeOpsHousehold"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeOpsTaskTemplate" DROP CONSTRAINT IF EXISTS "HomeOpsTaskTemplate_createdById_fkey";
ALTER TABLE "HomeOpsTaskTemplate" ADD CONSTRAINT "HomeOpsTaskTemplate_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeOpsTaskTemplate" DROP CONSTRAINT IF EXISTS "HomeOpsTaskTemplate_fixedAssigneeId_fkey";
ALTER TABLE "HomeOpsTaskTemplate" ADD CONSTRAINT "HomeOpsTaskTemplate_fixedAssigneeId_fkey" FOREIGN KEY ("fixedAssigneeId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeOpsTaskInstance" DROP CONSTRAINT IF EXISTS "HomeOpsTaskInstance_householdId_fkey";
ALTER TABLE "HomeOpsTaskInstance" ADD CONSTRAINT "HomeOpsTaskInstance_householdId_fkey" FOREIGN KEY ("householdId") REFERENCES "HomeOpsHousehold"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeOpsTaskInstance" DROP CONSTRAINT IF EXISTS "HomeOpsTaskInstance_templateId_fkey";
ALTER TABLE "HomeOpsTaskInstance" ADD CONSTRAINT "HomeOpsTaskInstance_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "HomeOpsTaskTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeOpsTaskInstance" DROP CONSTRAINT IF EXISTS "HomeOpsTaskInstance_assigneeId_fkey";
ALTER TABLE "HomeOpsTaskInstance" ADD CONSTRAINT "HomeOpsTaskInstance_assigneeId_fkey" FOREIGN KEY ("assigneeId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeOpsTaskInstance" DROP CONSTRAINT IF EXISTS "HomeOpsTaskInstance_completedById_fkey";
ALTER TABLE "HomeOpsTaskInstance" ADD CONSTRAINT "HomeOpsTaskInstance_completedById_fkey" FOREIGN KEY ("completedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeOpsWorkloadLedger" DROP CONSTRAINT IF EXISTS "HomeOpsWorkloadLedger_householdId_fkey";
ALTER TABLE "HomeOpsWorkloadLedger" ADD CONSTRAINT "HomeOpsWorkloadLedger_householdId_fkey" FOREIGN KEY ("householdId") REFERENCES "HomeOpsHousehold"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeOpsWorkloadLedger" DROP CONSTRAINT IF EXISTS "HomeOpsWorkloadLedger_userId_fkey";
ALTER TABLE "HomeOpsWorkloadLedger" ADD CONSTRAINT "HomeOpsWorkloadLedger_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
