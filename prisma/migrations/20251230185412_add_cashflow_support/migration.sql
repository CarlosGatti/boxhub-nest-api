-- CreateEnum
CREATE TYPE "CashflowType" AS ENUM ('INCOME', 'EXPENSE');

-- CreateEnum
CREATE TYPE "RecurrenceFrequency" AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY', 'QUARTERLY', 'YEARLY');

-- CreateTable
CREATE TABLE "CashflowCategory" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "color" TEXT,
    "icon" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CashflowCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CashflowEntry" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "type" "CashflowType" NOT NULL,
    "amount" DECIMAL(20,2) NOT NULL,
    "description" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CashflowEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecurringCashflow" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "type" "CashflowType" NOT NULL,
    "amount" DECIMAL(20,2) NOT NULL,
    "description" TEXT,
    "frequency" "RecurrenceFrequency" NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "nextDueDate" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RecurringCashflow_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CashflowCategory_userId_idx" ON "CashflowCategory"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CashflowCategory_userId_name_key" ON "CashflowCategory"("userId", "name");

-- CreateIndex
CREATE INDEX "CashflowEntry_userId_idx" ON "CashflowEntry"("userId");

-- CreateIndex
CREATE INDEX "CashflowEntry_categoryId_idx" ON "CashflowEntry"("categoryId");

-- CreateIndex
CREATE INDEX "CashflowEntry_date_idx" ON "CashflowEntry"("date");

-- CreateIndex
CREATE INDEX "CashflowEntry_type_idx" ON "CashflowEntry"("type");

-- CreateIndex
CREATE INDEX "RecurringCashflow_userId_idx" ON "RecurringCashflow"("userId");

-- CreateIndex
CREATE INDEX "RecurringCashflow_categoryId_idx" ON "RecurringCashflow"("categoryId");

-- CreateIndex
CREATE INDEX "RecurringCashflow_nextDueDate_idx" ON "RecurringCashflow"("nextDueDate");

-- CreateIndex
CREATE INDEX "RecurringCashflow_isActive_idx" ON "RecurringCashflow"("isActive");

-- AddForeignKey
ALTER TABLE "CashflowCategory" ADD CONSTRAINT "CashflowCategory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CashflowEntry" ADD CONSTRAINT "CashflowEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CashflowEntry" ADD CONSTRAINT "CashflowEntry_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "CashflowCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecurringCashflow" ADD CONSTRAINT "RecurringCashflow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecurringCashflow" ADD CONSTRAINT "RecurringCashflow_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "CashflowCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
