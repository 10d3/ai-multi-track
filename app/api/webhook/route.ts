import { stripe } from "@/lib/payment/stripe";
import { prisma } from "@/lib/prima";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_SECRET_WEBHOOK!
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(`webhook error : ${error}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (event.type === "checkout.session.completed") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );
    if (!session?.metadata?.userId) {
      return new NextResponse("user Id is required", { status: 400 });
    }
    try {
      await prisma.subscription.create({
        data: {
          userId: session?.metadata?.userId,
          StripeSubcriptionId: subscription.id,
          StripeCustomerId: subscription.customer as string,
          StripePriceId: subscription.items.data[0].price.id,
          StripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000
          ),
          productPriceId: subscription.items.data[0].price.id,
        },
      });
      return new NextResponse(null, { status: 200 });
    } catch (error) {
      return new NextResponse(`Database error: ${error}`, { status: 500 });
    }
  }
  if (event.type === "invoice.payment_succeeded") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );
    try {
      await prisma.subscription.update({
        where: {
          StripeSubcriptionId: subscription.id,
        },
        data: {
          StripePriceId: subscription.items.data[0].price.id,
          StripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000
          ),
          productPriceId: subscription.items.data[0].price.id,
        },
      });
      return new NextResponse(null, { status: 200 });
    } catch (error) {
      return new NextResponse(`Database error: ${error}`, { status: 500 });
    }
  }
  return new NextResponse("Unhandled event type", { status: 400 });
}
