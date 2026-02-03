-- CreateTable
CREATE TABLE IF NOT EXISTS "HomeOpsTaskTemplateSlot" (
    "id" SERIAL NOT NULL,
    "templateId" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "windowStart" TEXT NOT NULL,
    "windowEnd" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "HomeOpsTaskTemplateSlot_pkey" PRIMARY KEY ("id")
);

-- AddColumn
ALTER TABLE "HomeOpsTaskTemplate" ADD COLUMN IF NOT EXISTS "effortWeight" INTEGER NOT NULL DEFAULT 1;
ALTER TABLE "HomeOpsTaskTemplate" ADD COLUMN IF NOT EXISTS "occurrences" INTEGER;

-- AddColumn
ALTER TABLE "HomeOpsTaskInstance" ADD COLUMN IF NOT EXISTS "effortWeight" INTEGER NOT NULL DEFAULT 1;
ALTER TABLE "HomeOpsTaskInstance" ADD COLUMN IF NOT EXISTS "slotLabel" TEXT;
ALTER TABLE "HomeOpsTaskInstance" ADD COLUMN IF NOT EXISTS "windowStart" TEXT;
ALTER TABLE "HomeOpsTaskInstance" ADD COLUMN IF NOT EXISTS "windowEnd" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "HomeOpsTaskTemplateSlot_templateId_order_key" ON "HomeOpsTaskTemplateSlot"("templateId", "order");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "HomeOpsTaskTemplateSlot_templateId_idx" ON "HomeOpsTaskTemplateSlot"("templateId");

-- AddForeignKey
ALTER TABLE "HomeOpsTaskTemplateSlot" DROP CONSTRAINT IF EXISTS "HomeOpsTaskTemplateSlot_templateId_fkey";
ALTER TABLE "HomeOpsTaskTemplateSlot" ADD CONSTRAINT "HomeOpsTaskTemplateSlot_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "HomeOpsTaskTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;
