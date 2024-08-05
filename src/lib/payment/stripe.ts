'use server'

import Stripe from "stripe";
import { prisma } from "../prima";

export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: "2024-06-20",
  typescript: true,
});

export const syncPlans = async () => {
  const plans = await stripe.plans.list({
    active: true,
  });

  const data = plans.data;
  // console.log(data)

  for (const element of data) {
    const test = await prisma.plan.upsert({
      where: {
        productPriceId: element.id,
      },
      update: {
        productId: element.product as string,
        price: element.amount as number,
        interval: element.interval,
        intervalCount: element.interval_count,
      },
      create: {
        productPriceId: element.id,
        productId: element.product as string,
        price: element.amount as number,
        interval: element.interval,
        intervalCount: element.interval_count,
      },
    });
    // console.log(test)
    return test
  }
  // return plans;
};
