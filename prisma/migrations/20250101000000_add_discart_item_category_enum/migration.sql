-- CreateEnum: Create DiscartItemCategory enum
CREATE TYPE "DiscartItemCategory" AS ENUM ('GENERAL', 'BOOK');

-- Step 1: Add a temporary column with the new enum type
ALTER TABLE "DiscartItem" ADD COLUMN "category_new" "DiscartItemCategory" DEFAULT 'GENERAL';

-- Step 2: Update all existing records to GENERAL (preserving existing data)
UPDATE "DiscartItem" SET "category_new" = 'GENERAL';

-- Step 3: Make the new column NOT NULL (since we've set defaults)
ALTER TABLE "DiscartItem" ALTER COLUMN "category_new" SET NOT NULL;

-- Step 4: Drop the old category column
ALTER TABLE "DiscartItem" DROP COLUMN "category";

-- Step 5: Rename the new column to category
ALTER TABLE "DiscartItem" RENAME COLUMN "category_new" TO "category";

-- Step 6: Set default value for future inserts
ALTER TABLE "DiscartItem" ALTER COLUMN "category" SET DEFAULT 'GENERAL';

