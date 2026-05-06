-- CreateEnum
CREATE TYPE "PomodoroTaskStatus" AS ENUM ('TODO', 'DOING', 'DONE', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "PomodoroSessionMode" AS ENUM ('FOCUS', 'SHORT_BREAK', 'LONG_BREAK');

-- CreateEnum
CREATE TYPE "PomodoroSessionStatus" AS ENUM ('RUNNING', 'PAUSED', 'COMPLETED', 'CANCELLED');

-- CreateTable
CREATE TABLE "PomodoroTask" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" "PomodoroTaskStatus" NOT NULL DEFAULT 'TODO',
    "projectId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PomodoroTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PomodoroSession" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "taskId" INTEGER,
    "projectId" INTEGER,
    "mode" "PomodoroSessionMode" NOT NULL,
    "status" "PomodoroSessionStatus" NOT NULL DEFAULT 'RUNNING',
    "durationMinutes" INTEGER NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "pausedAt" TIMESTAMP(3),
    "resumedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "cancelledAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PomodoroSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PomodoroTask_userId_idx" ON "PomodoroTask"("userId");

-- CreateIndex
CREATE INDEX "PomodoroTask_status_idx" ON "PomodoroTask"("status");

-- CreateIndex
CREATE INDEX "PomodoroTask_projectId_idx" ON "PomodoroTask"("projectId");

-- CreateIndex
CREATE INDEX "PomodoroTask_createdAt_idx" ON "PomodoroTask"("createdAt");

-- CreateIndex
CREATE INDEX "PomodoroSession_userId_idx" ON "PomodoroSession"("userId");

-- CreateIndex
CREATE INDEX "PomodoroSession_taskId_idx" ON "PomodoroSession"("taskId");

-- CreateIndex
CREATE INDEX "PomodoroSession_projectId_idx" ON "PomodoroSession"("projectId");

-- CreateIndex
CREATE INDEX "PomodoroSession_status_idx" ON "PomodoroSession"("status");

-- CreateIndex
CREATE INDEX "PomodoroSession_mode_idx" ON "PomodoroSession"("mode");

-- CreateIndex
CREATE INDEX "PomodoroSession_createdAt_idx" ON "PomodoroSession"("createdAt");

-- AddForeignKey
ALTER TABLE "PomodoroTask" ADD CONSTRAINT "PomodoroTask_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PomodoroTask" ADD CONSTRAINT "PomodoroTask_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "DefinedProject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PomodoroSession" ADD CONSTRAINT "PomodoroSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PomodoroSession" ADD CONSTRAINT "PomodoroSession_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "PomodoroTask"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PomodoroSession" ADD CONSTRAINT "PomodoroSession_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "DefinedProject"("id") ON DELETE SET NULL ON UPDATE CASCADE;
