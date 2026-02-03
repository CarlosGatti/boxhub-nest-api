-- CreateEnum
DO $$ BEGIN
    CREATE TYPE "HomeOpsWeeklyPlanStatus" AS ENUM ('PLANNED', 'ACTIVE', 'ARCHIVED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- CreateTable
CREATE TABLE IF NOT EXISTS "HomeOpsWeeklyPlan" (
    "id" SERIAL NOT NULL,
    "householdId" INTEGER NOT NULL,
    "weekStartDate" TIMESTAMP(3) NOT NULL,
    "status" "HomeOpsWeeklyPlanStatus" NOT NULL DEFAULT 'PLANNED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HomeOpsWeeklyPlan_pkey" PRIMARY KEY ("id")
);

-- AddColumn
ALTER TABLE "HomeOpsTaskInstance" ADD COLUMN IF NOT EXISTS "weeklyPlanId" INTEGER;
ALTER TABLE "HomeOpsTaskInstance" ADD COLUMN IF NOT EXISTS "sourceKey" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "HomeOpsWeeklyPlan_householdId_weekStartDate_key" ON "HomeOpsWeeklyPlan"("householdId", "weekStartDate");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "HomeOpsWeeklyPlan_householdId_idx" ON "HomeOpsWeeklyPlan"("householdId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "HomeOpsTaskInstance_weeklyPlanId_idx" ON "HomeOpsTaskInstance"("weeklyPlanId");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "HomeOpsTaskInstance_weeklyPlanId_sourceKey_key" ON "HomeOpsTaskInstance"("weeklyPlanId", "sourceKey");

-- AddForeignKey
ALTER TABLE "HomeOpsWeeklyPlan" DROP CONSTRAINT IF EXISTS "HomeOpsWeeklyPlan_householdId_fkey";
ALTER TABLE "HomeOpsWeeklyPlan" ADD CONSTRAINT "HomeOpsWeeklyPlan_householdId_fkey" FOREIGN KEY ("householdId") REFERENCES "HomeOpsHousehold"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeOpsTaskInstance" DROP CONSTRAINT IF EXISTS "HomeOpsTaskInstance_weeklyPlanId_fkey";
ALTER TABLE "HomeOpsTaskInstance" ADD CONSTRAINT "HomeOpsTaskInstance_weeklyPlanId_fkey" FOREIGN KEY ("weeklyPlanId") REFERENCES "HomeOpsWeeklyPlan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
