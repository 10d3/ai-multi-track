import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Providers from "./Providers";
import Footer from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:'NextJS Boirleplate',
    template:'%s - NextJS Boilerplate'
  },
  description: "Not need anynore to configure from 0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <main className="flex w-full md:w-[80%] m-auto flex-col min-h-screen px-6 md:px-24 items-center justify-center">
            <NavBar />
            <div className="w-full">{children}</div>
            <Separator />
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
