-- CreateTable
CREATE TABLE "PomodoroUserSettings" (
    "userId" INTEGER NOT NULL,
    "focusMinutes" INTEGER NOT NULL DEFAULT 25,
    "shortBreakMinutes" INTEGER NOT NULL DEFAULT 5,
    "longBreakMinutes" INTEGER NOT NULL DEFAULT 15,
    "longBreakEvery" INTEGER NOT NULL DEFAULT 4,
    "autoStartBreaks" BOOLEAN NOT NULL DEFAULT false,
    "autoStartFocus" BOOLEAN NOT NULL DEFAULT false,
    "timezone" TEXT NOT NULL DEFAULT 'UTC',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PomodoroUserSettings_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE INDEX "PomodoroSession_userId_status_idx" ON "PomodoroSession"("userId", "status");

-- CreateIndex
CREATE INDEX "PomodoroSession_userId_createdAt_idx" ON "PomodoroSession"("userId", "createdAt" DESC);

-- AddForeignKey
ALTER TABLE "PomodoroUserSettings" ADD CONSTRAINT "PomodoroUserSettings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
