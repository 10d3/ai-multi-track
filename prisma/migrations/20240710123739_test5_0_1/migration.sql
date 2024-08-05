-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_productPriceId_fkey";

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_productPriceId_fkey" FOREIGN KEY ("productPriceId") REFERENCES "Plan"("productPriceId") ON DELETE RESTRICT ON UPDATE CASCADE;
