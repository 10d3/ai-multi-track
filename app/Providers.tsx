"use client";

import { PropsWithChildren, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/shared/theme-provider";

const queryClient = new QueryClient();

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <SessionProvider>
        <TooltipProvider>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </QueryClientProvider>
        </TooltipProvider>
      </SessionProvider>
    </>
  );
};

export default Providers;
