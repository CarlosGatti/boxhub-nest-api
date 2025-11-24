-- Step 1: Create new enum with all categories
CREATE TYPE "DiscartItemCategory_new" AS ENUM ('FURNITURE', 'ELECTRONICS', 'KIDS', 'SPORTS', 'OTHER', 'BOOK');

-- Step 2: Add temporary column with new enum
ALTER TABLE "DiscartItem" ADD COLUMN "category_temp" "DiscartItemCategory_new" DEFAULT 'OTHER';

-- Step 3: Migrate existing data: Convert GENERAL to OTHER, keep BOOK as BOOK
UPDATE "DiscartItem" 
SET "category_temp" = CASE 
  WHEN "category"::text = 'GENERAL' THEN 'OTHER'::"DiscartItemCategory_new"
  WHEN "category"::text = 'BOOK' THEN 'BOOK'::"DiscartItemCategory_new"
  ELSE 'OTHER'::"DiscartItemCategory_new"  -- Fallback for any unexpected values
END;

-- Step 4: Make the new column NOT NULL
ALTER TABLE "DiscartItem" ALTER COLUMN "category_temp" SET NOT NULL;

-- Step 5: Drop the old column
ALTER TABLE "DiscartItem" DROP COLUMN "category";

-- Step 6: Rename the new column to category
ALTER TABLE "DiscartItem" RENAME COLUMN "category_temp" TO "category";

-- Step 7: Set default value for future inserts
ALTER TABLE "DiscartItem" ALTER COLUMN "category" SET DEFAULT 'OTHER';

-- Step 8: Drop the old enum type
DROP TYPE "DiscartItemCategory";

-- Step 9: Rename the new enum type to the original name
ALTER TYPE "DiscartItemCategory_new" RENAME TO "DiscartItemCategory";

