-- CreateEnum
DO $$ BEGIN
    CREATE TYPE "HomeOpsWeekday" AS ENUM ('MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- AlterColumn: TEXT[] -> HomeOpsWeekday[] (drop default first, then alter type)
ALTER TABLE "HomeOpsTaskTemplate"
  ALTER COLUMN "daysOfWeek" DROP DEFAULT;

ALTER TABLE "HomeOpsTaskTemplate"
  ALTER COLUMN "daysOfWeek" TYPE "HomeOpsWeekday"[]
  USING "daysOfWeek"::"HomeOpsWeekday"[];

ALTER TABLE "HomeOpsTaskTemplate"
  ALTER COLUMN "daysOfWeek" SET DEFAULT '{}'::"HomeOpsWeekday"[];
