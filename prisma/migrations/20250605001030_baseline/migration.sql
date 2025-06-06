-- CreateEnum
CREATE TYPE "LogAction" AS ENUM ('USER_LOGIN', 'USER_LOGOUT', 'ITEM_CREATED', 'ITEM_DELETED', 'CONTAINER_CREATED', 'CONTAINER_DELETED', 'BUTTON_CLICKED', 'PAGE_VIEWED', 'SEARCH_USED', 'CUSTOM_ACTION');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Visibility" AS ENUM ('PUBLIC', 'PRIVATE');

-- CreateEnum
CREATE TYPE "CommunityMemberRole" AS ENUM ('OWNER', 'MEMBER', 'ADMIN');

-- CreateEnum
CREATE TYPE "EventMemberRole" AS ENUM ('OWNER', 'MEMBER', 'ADMIN');

-- CreateEnum
CREATE TYPE "CommunityPrivacy" AS ENUM ('OWNER', 'MEMBER', 'ADMIN', 'ALL');

-- CreateEnum
CREATE TYPE "MembershipStatus" AS ENUM ('PENDING', 'ACCEPTED', 'DECLINED', 'CANCELED');

-- CreateEnum
CREATE TYPE "TypeOfDeparture" AS ENUM ('VOLUNTARY', 'INVOLUNTARY', 'RETIREMENT', 'OTHER');

-- CreateEnum
CREATE TYPE "StorageRole" AS ENUM ('ADMIN', 'MEMBER');

-- CreateTable
CREATE TABLE "Storage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Storage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorageMember" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "storageId" INTEGER NOT NULL,
    "role" "StorageRole" NOT NULL DEFAULT 'MEMBER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StorageMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Container" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "qrCode" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "storageId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Container_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "containerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "nickname" TEXT,
    "public" BOOLEAN NOT NULL DEFAULT false,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "profilePicture" TEXT,
    "about" TEXT,
    "linkedinUrl" TEXT,
    "twitterUrl" TEXT,
    "githubUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isPremium" BOOLEAN NOT NULL DEFAULT false,
    "subscriptionId" TEXT,
    "expiresAt" TIMESTAMP(3),
    "willExpireAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Log" (
    "id" SERIAL NOT NULL,
    "action" "LogAction" NOT NULL,
    "userId" INTEGER,
    "details" TEXT,
    "route" TEXT,
    "metadata" JSONB,
    "ipAddress" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ContainerCategories" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "StorageMember_userId_storageId_key" ON "StorageMember"("userId", "storageId");

-- CreateIndex
CREATE UNIQUE INDEX "Container_code_key" ON "Container"("code");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "userEmail" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ContainerCategories_AB_unique" ON "_ContainerCategories"("A", "B");

-- CreateIndex
CREATE INDEX "_ContainerCategories_B_index" ON "_ContainerCategories"("B");

-- AddForeignKey
ALTER TABLE "StorageMember" ADD CONSTRAINT "StorageMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorageMember" ADD CONSTRAINT "StorageMember_storageId_fkey" FOREIGN KEY ("storageId") REFERENCES "Storage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Container" ADD CONSTRAINT "Container_storageId_fkey" FOREIGN KEY ("storageId") REFERENCES "Storage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_containerId_fkey" FOREIGN KEY ("containerId") REFERENCES "Container"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContainerCategories" ADD CONSTRAINT "_ContainerCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContainerCategories" ADD CONSTRAINT "_ContainerCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "Container"("id") ON DELETE CASCADE ON UPDATE CASCADE;
