-- Step 1: Create new enum with all categories
CREATE TYPE "DiscartItemCategory_new" AS ENUM ('FURNITURE', 'ELECTRONICS', 'KIDS', 'SPORTS', 'OTHER', 'BOOK');

-- Step 2: Add temporary column with new enum
ALTER TABLE "DiscartItem" ADD COLUMN "category_temp" "DiscartItemCategory_new" DEFAULT 'OTHER';

-- Step 3: Migrate existing data: Normalize all category values to UPPERCASE enum values
UPDATE "DiscartItem" 
SET "category_temp" = CASE 
  -- Handle UPPERCASE values (from previous enum)
  WHEN UPPER("category"::text) = 'GENERAL' THEN 'OTHER'::"DiscartItemCategory_new"
  WHEN UPPER("category"::text) = 'BOOK' THEN 'BOOK'::"DiscartItemCategory_new"
  WHEN UPPER("category"::text) = 'OTHER' THEN 'OTHER'::"DiscartItemCategory_new"
  WHEN UPPER("category"::text) = 'FURNITURE' THEN 'FURNITURE'::"DiscartItemCategory_new"
  WHEN UPPER("category"::text) = 'ELECTRONICS' THEN 'ELECTRONICS'::"DiscartItemCategory_new"
  WHEN UPPER("category"::text) = 'KIDS' THEN 'KIDS'::"DiscartItemCategory_new"
  WHEN UPPER("category"::text) = 'SPORTS' THEN 'SPORTS'::"DiscartItemCategory_new"
  -- Handle title case values (from frontend)
  WHEN LOWER("category"::text) = 'other' THEN 'OTHER'::"DiscartItemCategory_new"
  WHEN LOWER("category"::text) = 'furniture' THEN 'FURNITURE'::"DiscartItemCategory_new"
  WHEN LOWER("category"::text) = 'electronics' THEN 'ELECTRONICS'::"DiscartItemCategory_new"
  WHEN LOWER("category"::text) = 'kids' THEN 'KIDS'::"DiscartItemCategory_new"
  WHEN LOWER("category"::text) = 'sports' THEN 'SPORTS'::"DiscartItemCategory_new"
  WHEN LOWER("category"::text) IN ('book', 'books') THEN 'BOOK'::"DiscartItemCategory_new"
  -- Fallback: anything else becomes OTHER
  ELSE 'OTHER'::"DiscartItemCategory_new"
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

