"use client";
import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";
import { Button } from "../ui/button";
import { useState } from "react";
import { formatPrice } from "@/lib/utils";
import ButtonCheckout from "./ButtonCheckout";

interface Plan {
  id: string;
  productId: string;
  productPriceId: string;
  name: string;
  description: string | null;
  price: number;
  interval: string;
  intervalCount: number;
  trialInterval: string | null;
  trialIntervalCount: number | null;
}

interface MagicCardDemoProps {
  allPlans: Plan[][];
}

export function PlanCard({ allPlans }: any) {
  // console.log(allPlans)
  const starterPlan = allPlans.filter(
    (plans: any) => plans.name === "Starter Plan"
  );
  const proPlan = allPlans.filter((plans: any) => plans.name === "Pro Plan");

  const allPlan = [starterPlan, proPlan.reverse()];

  return (
    <MagicContainer className={"flex h-auto w-auto flex-col gap-4 lg:flex-row"}>
      {allPlan.map((plan: any, i: number) => (
        <Card key={i} plan={plan} i={i} />
      ))}
    </MagicContainer>
  );
}

export function Card({ plan, i, onIntervalChange }: any) {
  const [selectedInterval, setSelectedInterval] = useState("month"); // État local pour chaque carte

  const handleIntervalChange = (interval: string) => {
    setSelectedInterval(interval);
  };

  const selectedPlan =
    plan.find((p: any) => p.interval === selectedInterval) || plan[0];
  return (
    <MagicCard
      // key={i}
      className={`flex w-full h-auto md:min-h-[35rem] cursor-pointer flex-col overflow-hidden shadow-2xl justify-between gap-10 ${
        (i + 1) % 2 === 0
          ? "bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#0BD97A_0,#0BD97A_50%,transparent_100%)]"
          : ""
      }`}
    >
      <div className="flex items-center gap-8 self-center">
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={`plan-${i}`}
              value="monthly"
              checked={selectedInterval === "month"}
              onChange={() => handleIntervalChange("month")}
            />
            <span className=" text-[0.7rem] md:text-[0.9rem]">Pay monthly</span>
          </label>
        </div>
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={`plan-${i}`}
              value="yearly"
              checked={selectedInterval === "year"}
              onChange={() => handleIntervalChange("year")}
            />
            <span className=" text-[0.7rem] md:text-[0.9rem]">Pay yearly (30% OFF 💰)</span>
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-between items-center">
          <h1 className="z-10 whitespace-nowrap text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200">
            {selectedPlan.name}
          </h1>
          {(i + 1) % 2 === 0 ? (
            <span className="animate-text bg-gradient-to-r from-[#0BD97A] to-[#c0c0c0] bg-clip-text text-transparent font-bold text-[0.8rem] md:text-[1rem] text-[#c0c0c0]">
              ⭐ Most Popular
            </span>
          ) : null}
        </div>
        <h2 className="text-3xl md:text-6xl font-bold">
          {formatPrice(selectedPlan.price)}
        </h2>
        <div className="">
          <ul className="flex flex-col gap-2 md:gap-4">
            {/* {plan.avantage.map((avan, i) => (
            <li key={i}>{avan}</li>
          ))} */}
            {[
              "NextJS boilerplate",
              "Mailgun emails",
              "Stripe / Lemon Squeezy",
              "POSTGRESQL / Vercel",
              "Google Oauth & Magic Links",
              "Components & animations",
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] opacity-80 shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <ButtonCheckout selectedPlan={selectedPlan}>Subscribe</ButtonCheckout>
        {/* <Button className="font-semibold self-center w-4/5" size="lg">
          {selectedPlan.productPriceId}
          Subscribe
        </Button> */}
      </div>
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
    </MagicCard>
  );
}
