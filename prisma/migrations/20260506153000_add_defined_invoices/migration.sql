-- CreateEnum
CREATE TYPE "DefinedInvoiceStatus" AS ENUM ('DRAFT', 'SENT', 'PAID', 'OVERDUE', 'CANCELLED');

-- CreateEnum
CREATE TYPE "DefinedInvoicePaymentStatus" AS ENUM ('UNPAID', 'PARTIALLY_PAID', 'PAID', 'REFUNDED');

-- CreateTable
CREATE TABLE "DefinedInvoice" (
    "id" SERIAL NOT NULL,
    "projectId" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,
    "invoiceNumber" TEXT NOT NULL,
    "status" "DefinedInvoiceStatus" NOT NULL DEFAULT 'DRAFT',
    "paymentStatus" "DefinedInvoicePaymentStatus" NOT NULL DEFAULT 'UNPAID',
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "issueDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate" TIMESTAMP(3),
    "sentAt" TIMESTAMP(3),
    "paidAt" TIMESTAMP(3),
    "subtotal" DECIMAL(20,2) NOT NULL,
    "discountAmount" DECIMAL(20,2) NOT NULL DEFAULT 0,
    "taxAmount" DECIMAL(20,2) NOT NULL DEFAULT 0,
    "total" DECIMAL(20,2) NOT NULL,
    "paymentInstructions" TEXT,
    "notes" TEXT,
    "terms" TEXT,
    "publicToken" TEXT,
    "pdfUrl" TEXT,
    "createdById" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedInvoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefinedInvoiceItem" (
    "id" SERIAL NOT NULL,
    "invoiceId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" DECIMAL(20,2) NOT NULL DEFAULT 1,
    "unitPrice" DECIMAL(20,2) NOT NULL,
    "total" DECIMAL(20,2) NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedInvoiceItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DefinedInvoice_invoiceNumber_key" ON "DefinedInvoice"("invoiceNumber");

-- CreateIndex
CREATE UNIQUE INDEX "DefinedInvoice_publicToken_key" ON "DefinedInvoice"("publicToken");

-- CreateIndex
CREATE INDEX "DefinedInvoice_projectId_idx" ON "DefinedInvoice"("projectId");

-- CreateIndex
CREATE INDEX "DefinedInvoice_clientId_idx" ON "DefinedInvoice"("clientId");

-- CreateIndex
CREATE INDEX "DefinedInvoice_status_idx" ON "DefinedInvoice"("status");

-- CreateIndex
CREATE INDEX "DefinedInvoice_paymentStatus_idx" ON "DefinedInvoice"("paymentStatus");

-- CreateIndex
CREATE INDEX "DefinedInvoice_createdAt_idx" ON "DefinedInvoice"("createdAt");

-- CreateIndex
CREATE INDEX "DefinedInvoice_dueDate_idx" ON "DefinedInvoice"("dueDate");

-- CreateIndex
CREATE INDEX "DefinedInvoiceItem_invoiceId_idx" ON "DefinedInvoiceItem"("invoiceId");

-- CreateIndex
CREATE INDEX "DefinedInvoiceItem_sortOrder_idx" ON "DefinedInvoiceItem"("sortOrder");

-- AddForeignKey
ALTER TABLE "DefinedInvoice" ADD CONSTRAINT "DefinedInvoice_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "DefinedProject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedInvoice" ADD CONSTRAINT "DefinedInvoice_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "DefinedClient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedInvoice" ADD CONSTRAINT "DefinedInvoice_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedInvoiceItem" ADD CONSTRAINT "DefinedInvoiceItem_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "DefinedInvoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;
