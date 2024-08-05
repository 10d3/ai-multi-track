/*
  Warnings:

  - You are about to drop the column `StripeId` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `endsAt` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `isPaused` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `isUsageBased` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `renewsAt` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `statusFormatted` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionItemId` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `trialEndsAt` on the `Subscription` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[stripe_customer_id]` on the table `Subscription` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[stripe_subcription_id]` on the table `Subscription` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[stripe_price_id]` on the table `Subscription` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[stripe_Current_period_end]` on the table `Subscription` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `price` on the `Plan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "Subscription_StripeId_key";

-- AlterTable
ALTER TABLE "Plan" ALTER COLUMN "productId" SET DATA TYPE TEXT,
ALTER COLUMN "variantId" SET DATA TYPE TEXT,
DROP COLUMN "price",
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "StripeId",
DROP COLUMN "email",
DROP COLUMN "endsAt",
DROP COLUMN "isPaused",
DROP COLUMN "isUsageBased",
DROP COLUMN "name",
DROP COLUMN "orderId",
DROP COLUMN "price",
DROP COLUMN "renewsAt",
DROP COLUMN "status",
DROP COLUMN "statusFormatted",
DROP COLUMN "subscriptionItemId",
DROP COLUMN "trialEndsAt",
ADD COLUMN     "stripe_Current_period_end" TIMESTAMP(3),
ADD COLUMN     "stripe_customer_id" TEXT,
ADD COLUMN     "stripe_price_id" TEXT,
ADD COLUMN     "stripe_subcription_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_stripe_customer_id_key" ON "Subscription"("stripe_customer_id");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_stripe_subcription_id_key" ON "Subscription"("stripe_subcription_id");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_stripe_price_id_key" ON "Subscription"("stripe_price_id");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_stripe_Current_period_end_key" ON "Subscription"("stripe_Current_period_end");
