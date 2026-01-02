-- AlterTable: Add source column to CashflowEntry
ALTER TABLE "CashflowEntry" ADD COLUMN IF NOT EXISTS "source" TEXT;

-- CreateIndex: Create index for source field
CREATE INDEX IF NOT EXISTS "CashflowEntry_source_idx" ON "CashflowEntry"("source");

-- AlterTable: Add source column to RecurringCashflow
ALTER TABLE "RecurringCashflow" ADD COLUMN IF NOT EXISTS "source" TEXT;

-- CreateIndex: Create index for source field
CREATE INDEX IF NOT EXISTS "RecurringCashflow_source_idx" ON "RecurringCashflow"("source");
