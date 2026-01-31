-- CreateEnum
DO $$ BEGIN
    CREATE TYPE "FeedbackStatus" AS ENUM ('PENDING', 'PUBLISHED', 'HIDDEN', 'SPAM');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- CreateTable
CREATE TABLE IF NOT EXISTS "Feedback" (
    "id" SERIAL NOT NULL,
    "targetAppId" INTEGER NOT NULL,
    "userId" INTEGER,
    "anonymousId" TEXT,
    "contactEmail" TEXT,
    "rating" INTEGER,
    "message" TEXT NOT NULL,
    "tags" TEXT[] NOT NULL DEFAULT '{}',
    "contextPath" TEXT,
    "metadata" JSONB,
    "status" "FeedbackStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Feedback_targetAppId_idx" ON "Feedback"("targetAppId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Feedback_userId_idx" ON "Feedback"("userId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Feedback_anonymousId_idx" ON "Feedback"("anonymousId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Feedback_status_idx" ON "Feedback"("status");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Feedback_createdAt_idx" ON "Feedback"("createdAt");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Feedback_targetAppId_createdAt_idx" ON "Feedback"("targetAppId", "createdAt");

-- AddForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT IF EXISTS "Feedback_targetAppId_fkey";
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_targetAppId_fkey" FOREIGN KEY ("targetAppId") REFERENCES "App"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT IF EXISTS "Feedback_userId_fkey";
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
