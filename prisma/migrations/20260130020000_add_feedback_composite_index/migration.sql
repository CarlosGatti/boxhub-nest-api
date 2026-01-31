-- CreateIndex
CREATE INDEX IF NOT EXISTS "Feedback_targetAppId_status_createdAt_idx"
ON "Feedback"("targetAppId", "status", "createdAt");
