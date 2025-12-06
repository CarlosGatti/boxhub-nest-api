-- CreateTable
CREATE TABLE IF NOT EXISTS "App" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "App_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "UserAppAccess" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "appId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAppAccess_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "App_code_key" ON "App"("code");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "UserAppAccess_userId_appId_key" ON "UserAppAccess"("userId", "appId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "UserAppAccess_userId_idx" ON "UserAppAccess"("userId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "UserAppAccess_appId_idx" ON "UserAppAccess"("appId");

-- AddForeignKey
ALTER TABLE "UserAppAccess" DROP CONSTRAINT IF EXISTS "UserAppAccess_userId_fkey";
ALTER TABLE "UserAppAccess" ADD CONSTRAINT "UserAppAccess_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAppAccess" DROP CONSTRAINT IF EXISTS "UserAppAccess_appId_fkey";
ALTER TABLE "UserAppAccess" ADD CONSTRAINT "UserAppAccess_appId_fkey" FOREIGN KEY ("appId") REFERENCES "App"("id") ON DELETE CASCADE ON UPDATE CASCADE;

