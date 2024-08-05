import { auth } from "@/lib/auth/auth";
import { stripe } from "@/lib/payment/stripe";
import { prisma } from "@/lib/prima";
import { absoluteUrl } from "@/lib/utils";
import { NextResponse } from "next/server";

const settingsUrl = absoluteUrl("/home/settings");

export async function GET(req: any) {
  const url = req.nextUrl.searchParams;
  const priceId = url.get("a");
  // const planDetail = await prisma.plan.findUnique({
  //   where: {
  //     productPriceId: priceId,
  //   },
  // });
  try {
    const session = await auth();
    const userId = session?.user?.id;

    if (!userId) {
      return new NextResponse("Need to login first", { status: 401 });
    }

    if (!priceId) {
      return new NextResponse("Price ID is required", { status: 400 });
    }

    const userSubcription = await prisma.subscription.findUnique({
      where: {
        userId,
      },
    });

    if (userSubcription && userSubcription.StripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubcription.StripeCustomerId,
        return_url: settingsUrl,
      });

      return new NextResponse(JSON.stringify({ url: stripeSession.url }));
    }

    const stripeCheckout = await stripe.checkout.sessions.create({
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ["card", "paypal", "link"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: session.user?.email as string,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      metadata: {
        userId,
      },
    });

    return new NextResponse(JSON.stringify({ url: stripeCheckout.url }));
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
