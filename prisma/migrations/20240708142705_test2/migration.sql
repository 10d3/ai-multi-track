/*
  Warnings:

  - You are about to drop the column `lemonSqueezyId` on the `Subscription` table. All the data in the column will be lost.
  - The `endsAt` column on the `Subscription` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `trialEndsAt` column on the `Subscription` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `WebhookEvent` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[StripeId]` on the table `Subscription` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `StripeId` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Subscription_lemonSqueezyId_key";

-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "lemonSqueezyId",
ADD COLUMN     "StripeId" TEXT NOT NULL,
DROP COLUMN "endsAt",
ADD COLUMN     "endsAt" TIMESTAMP(3),
DROP COLUMN "trialEndsAt",
ADD COLUMN     "trialEndsAt" TIMESTAMP(3);

-- DropTable
DROP TABLE "WebhookEvent";

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_StripeId_key" ON "Subscription"("StripeId");
