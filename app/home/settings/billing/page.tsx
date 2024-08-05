import ButtonCheckout from "@/components/shared/ButtonCheckout";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth } from "@/lib/auth/auth";
import { checkSubcription } from "@/lib/payment/subcription";
import { prisma } from "@/lib/prima";
import { formatDate, formatPrice } from "@/lib/utils";
import React from "react";

export default async function page() {
  const session = await auth();
  const userId = session?.user?.id;
  const subcription = await prisma.subscription.findUnique({
    where: {
      userId,
    },
    include: {
      plan: true,
    },
  });
  const isValide = await checkSubcription()
  return (
    <section className="min-h-[50vh] flex flex-col gap-6 mt-14">
      <div className=" flex flex-col gap-2">
        <h1 className="text-3xl">Billing</h1>
        <p className="text-[1rem]">View and manage your subscription</p>
      </div>
      <Card className="min-w-screen-lg">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="text-xl">{subcription?.plan.name}</CardTitle>
          <CardDescription><ButtonCheckout selectedPlan={subcription?.StripePriceId}>Manage subscription</ButtonCheckout></CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex gap-2 text-[0.8rem]">
                <span>{formatPrice(subcription?.plan.price as number)} every {subcription?.plan.interval}</span>-
                <span>{isValide ? <Badge variant='default'>Active</Badge> : <Badge variant='destructive'>Cancel</Badge>}</span>-
                <span>Renews on {formatDate(subcription?.StripeCurrentPeriodEnd)}</span>
            </div>
        </CardContent>
      </Card>
    </section>
  );
}
