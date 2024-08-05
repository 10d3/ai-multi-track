/*
  Warnings:

  - Added the required column `productPriceId` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "productPriceId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Plan" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "productPriceId" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "interval" TEXT,
    "intervalCount" INTEGER,
    "trialInterval" TEXT,
    "trialIntervalCount" INTEGER,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Plan_productPriceId_key" ON "Plan"("productPriceId");

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_productPriceId_fkey" FOREIGN KEY ("productPriceId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
