"use client";
import { Button } from "../ui/button";
import { ReactNode, useState } from "react";
import { Loader } from "../ui/loader";

interface ButtonCheckoutProps {
  selectedPlan: any;
  children: ReactNode;
}

export default function ButtonCheckout({
  selectedPlan,
  children,
}: ButtonCheckoutProps) {
  const [loading, setLoading] = useState(false);
  const selectedPlanId = selectedPlan.productPriceId;

  const onSubscribe = async () => {
    try {
        setLoading(true)
      const response = await fetch(
        `http://localhost:3000/api/stripe?a=${selectedPlanId}`
      );

      const data = await response.json();
      // console.log(data);
      window.location.href = data.url;
    } catch (error) {
      console.log(error);
    } finally{
        setLoading(false)
    }
  };
  return <Button disabled={loading} onClick={onSubscribe}>{loading ? <Loader/> : children}</Button>;
}
