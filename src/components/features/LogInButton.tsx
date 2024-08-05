"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import { Loader } from "../ui/loader";

export const LoginButton = () => {
  const mutation = useMutation({
    mutationFn: async () => {
      signIn();
    },
  });

  return (
    <Button
      className=""
      variant="default"
      size="sm"
      disabled={mutation.isPending}
      onClick={() => {
        mutation.mutate();
      }}
    >
      {mutation.isPending ? (
        <Loader className="mr-2" size={12} />
      ) : (
        <LogIn className="mr-2" size={12} />
      )}
      Login
    </Button>
  );
};
