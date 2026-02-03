-- CreateEnum
DO $$ BEGIN
    CREATE TYPE "HomeOpsWeekday" AS ENUM ('MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- AlterColumn
ALTER TABLE "HomeOpsTaskTemplate"
  ALTER COLUMN "daysOfWeek" TYPE "HomeOpsWeekday"[]
  USING ARRAY(SELECT unnest("daysOfWeek")::"HomeOpsWeekday");

ALTER TABLE "HomeOpsTaskTemplate"
  ALTER COLUMN "daysOfWeek" SET DEFAULT '{}'::"HomeOpsWeekday"[];
