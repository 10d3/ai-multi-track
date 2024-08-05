import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="w-full flex flex-col items-center gap-6 rounded-lg p-6 text-center md:rounded-xl md:p-12 mb-28 md:mb-48">
      <h2 className="!my-0 text-3xl md:text-5xl">Boost your app, launch, earn</h2>
      <h3 className="!mb-0 text-muted-foreground">
        <p>
          Don&apos;t waste time on Stripe subscriptions or designing a pricing
          section...
        </p>
      </h3>
      <div className="not-prose mx-auto flex items-center gap-2">
        <Button className="w-fit" asChild>
          <Link href="#">Get Started</Link>
        </Button>
        <Button className="w-fit" variant="link" asChild>
          <Link href="#">Learn More {"->"}</Link>
        </Button>
      </div>
    </section>
  );
}
