-- CreateTable: Create Comment table
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "discartItemId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "parentId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable: Create Rating table
CREATE TABLE "Rating" (
    "id" SERIAL NOT NULL,
    "sellerId" INTEGER NOT NULL,
    "buyerId" INTEGER NOT NULL,
    "stars" INTEGER NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex: Create indexes for Comment
CREATE INDEX "Comment_discartItemId_idx" ON "Comment"("discartItemId");
CREATE INDEX "Comment_userId_idx" ON "Comment"("userId");
CREATE INDEX "Comment_parentId_idx" ON "Comment"("parentId");

-- CreateIndex: Create indexes for Rating
CREATE INDEX "Rating_sellerId_idx" ON "Rating"("sellerId");
CREATE INDEX "Rating_buyerId_idx" ON "Rating"("buyerId");

-- CreateUniqueIndex: Prevent duplicate ratings
CREATE UNIQUE INDEX "Rating_sellerId_buyerId_key" ON "Rating"("sellerId", "buyerId");

-- AddForeignKey: Add foreign key for Comment.discartItemId
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_discartItemId_fkey" FOREIGN KEY ("discartItemId") REFERENCES "DiscartItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey: Add foreign key for Comment.userId
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey: Add foreign key for Comment.parentId (self-referencing)
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey: Add foreign key for Rating.sellerId
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey: Add foreign key for Rating.buyerId
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

