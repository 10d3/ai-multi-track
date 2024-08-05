import { auth } from "../auth/auth";
import { prisma } from "../prima";

const DAY_IN_MS = 86_400_000;

export const checkSubcription = async () => {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return false;
  }

  const userSubcription = await prisma.subscription.findUnique({
    where: {
      userId,
    },
    select: {
      StripeCurrentPeriodEnd: true,
      StripeCustomerId: true,
      StripePriceId: true,
      StripeSubcriptionId: true,
    },
  });

  if (!userSubcription) {
    return false;
  }

  const isValide =
    userSubcription?.StripePriceId &&
    userSubcription.StripeCurrentPeriodEnd?.getTime()! > Date.now();

  // console.log(userSubcription.StripeCurrentPeriodEnd?.getTime()!)
  // console.log(userSubcription.StripeCurrentPeriodEnd?.getTime()! > new Date('2024-09-10T12:38:52.000Z').getTime())
  // console.log(Date.now())

  return !!isValide;
};
