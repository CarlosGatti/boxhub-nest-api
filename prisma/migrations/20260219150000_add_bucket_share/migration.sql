-- CreateEnum
CREATE TYPE "BucketShareType" AS ENUM ('GOAL', 'TYPE', 'CUSTOM');

-- CreateTable
CREATE TABLE "BucketShare" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "type" "BucketShareType" NOT NULL,
    "payload" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BucketShare_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BucketShare_token_key" ON "BucketShare"("token");

-- CreateIndex
CREATE INDEX "BucketShare_userId_idx" ON "BucketShare"("userId");

-- CreateIndex
CREATE INDEX "BucketShare_createdAt_idx" ON "BucketShare"("createdAt");

-- AddForeignKey
ALTER TABLE "BucketShare" ADD CONSTRAINT "BucketShare_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
