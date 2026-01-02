-- AlterTable: Add type column to CashflowCategory
ALTER TABLE "CashflowCategory" ADD COLUMN IF NOT EXISTS "type" "CashflowType" NOT NULL DEFAULT 'EXPENSE';

-- DropIndex: Remove old unique constraint
DROP INDEX IF EXISTS "CashflowCategory_userId_name_key";

-- CreateIndex: Create new unique constraint with type
CREATE UNIQUE INDEX IF NOT EXISTS "CashflowCategory_userId_name_type_key" ON "CashflowCategory"("userId", "name", "type");

-- DropIndex: Remove old index
DROP INDEX IF EXISTS "CashflowCategory_userId_idx";

-- CreateIndex: Create new index with type
CREATE INDEX IF NOT EXISTS "CashflowCategory_userId_type_idx" ON "CashflowCategory"("userId", "type");
