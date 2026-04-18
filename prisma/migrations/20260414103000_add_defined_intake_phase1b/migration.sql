-- CreateEnum
CREATE TYPE "DefinedIntakeFormType" AS ENUM ('BUSINESS_INTAKE', 'BRANDING_BRIEF', 'WEBSITE_BRIEF', 'VIDEO_BRIEF', 'ADS_BRIEF');

-- CreateEnum
CREATE TYPE "DefinedIntakeFormStatus" AS ENUM ('DRAFT', 'SENT', 'SUBMITTED', 'REVIEWED');

-- CreateEnum
CREATE TYPE "DefinedIntakeAnswerType" AS ENUM ('TEXT', 'LONG_TEXT', 'NUMBER', 'BOOLEAN', 'SELECT', 'MULTI_SELECT', 'JSON');

-- CreateTable
CREATE TABLE "DefinedIntakeForm" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "projectId" INTEGER,
    "formType" "DefinedIntakeFormType" NOT NULL,
    "status" "DefinedIntakeFormStatus" NOT NULL DEFAULT 'DRAFT',
    "title" TEXT NOT NULL,
    "description" TEXT,
    "submittedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedIntakeForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefinedIntakeAnswer" (
    "id" SERIAL NOT NULL,
    "intakeFormId" INTEGER NOT NULL,
    "questionKey" TEXT NOT NULL,
    "questionLabel" TEXT,
    "answerType" "DefinedIntakeAnswerType" NOT NULL,
    "answerValue" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefinedIntakeAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DefinedIntakeForm_clientId_idx" ON "DefinedIntakeForm"("clientId");

-- CreateIndex
CREATE INDEX "DefinedIntakeForm_projectId_idx" ON "DefinedIntakeForm"("projectId");

-- CreateIndex
CREATE INDEX "DefinedIntakeForm_status_createdAt_idx" ON "DefinedIntakeForm"("status", "createdAt");

-- CreateIndex
CREATE INDEX "DefinedIntakeAnswer_intakeFormId_idx" ON "DefinedIntakeAnswer"("intakeFormId");

-- CreateIndex
CREATE INDEX "DefinedIntakeAnswer_questionKey_idx" ON "DefinedIntakeAnswer"("questionKey");

-- AddForeignKey
ALTER TABLE "DefinedIntakeForm" ADD CONSTRAINT "DefinedIntakeForm_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "DefinedClient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedIntakeForm" ADD CONSTRAINT "DefinedIntakeForm_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "DefinedProject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefinedIntakeAnswer" ADD CONSTRAINT "DefinedIntakeAnswer_intakeFormId_fkey" FOREIGN KEY ("intakeFormId") REFERENCES "DefinedIntakeForm"("id") ON DELETE CASCADE ON UPDATE CASCADE;
