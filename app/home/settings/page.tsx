import { SignOutButton } from "@/components/features/SignOutButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/lib/auth/auth";
import { DollarSign, User } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function page() {
  const session = await auth()
  return (
    <section className="min-h-[50vh] flex flex-col gap-6 mt-14 items-center">
        <Card className="max-w-2xl w-full md:w-[450px] h-auto">
          <CardHeader className="flex flex-row gap-4">
            <Avatar>
              <AvatarFallback>{session?.user?.name?.[0]}</AvatarFallback>
              {session?.user?.image && (
                <AvatarImage
                  src={session?.user.image}
                  alt={session?.user.name ?? "user image"}
                />
              )}
            </Avatar>
            <div className="flex flex-col gap-1">
              <CardTitle>{session?.user?.name}</CardTitle>
              <CardDescription>{session?.user?.email}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Link
              className={buttonVariants({ variant: "outline", size: "lg" })}
              href='/home/settings/profile'
            >
              <User className="mr-2" size={15} /> Profile
            </Link>
            <Link
              href="/home/settings/billing"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <DollarSign className="mr-2" size={15} /> Billing
            </Link>
          </CardContent>
          <CardFooter className="flex flex-row-reverse">
            <SignOutButton />
          </CardFooter>
        </Card>
    </section>
  );
}
