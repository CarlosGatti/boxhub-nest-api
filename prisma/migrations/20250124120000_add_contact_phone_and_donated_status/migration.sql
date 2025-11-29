-- AlterEnum: Add DONATED to DiscartItemStatus enum
ALTER TYPE "DiscartItemStatus" ADD VALUE 'DONATED';

-- AlterTable: Add contactPhone column to User table
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "contactPhone" TEXT;

-- AlterTable: Make contactPhone nullable in DiscartItem table
ALTER TABLE "DiscartItem" ALTER COLUMN "contactPhone" DROP NOT NULL;

