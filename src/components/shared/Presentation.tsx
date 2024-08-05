import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface PresentationProps {
  Description: string;
  title: string;
  className?: string;
  imageDark: string;
  imageLight: string;
  logo?: any;
  isTrue?:boolean
}

export default function Presentation({
  title,
  Description,
  imageDark,
  imageLight,
  className,
  logo,
  isTrue
}: PresentationProps) {
  return (
    <section
      className={cn(
        `w-full h-auto flex flex-col ${isTrue ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between gap-12 md:gap-24`,
        className
      )}
    >
      <div className="flex flex-col w-full md:max-w-4xl text-start gap-3 md:gap-6">
        <div className="w-auto flex flex-row text-start gap-2">
          {logo && logo}
          <h1 className="md:text-5xl font-semibold text-3xl">{title}</h1>
        </div>
        <p className="md:text-xl text-[1rem]">{Description}</p>
      </div>
      <div className="w-full items-center justify-center text-center rounded-sm">
        <Image
          src={imageDark}
          alt="Hero Image"
          className="hidden w-full rounded-[inherit] border object-contain shadow-lg dark:block"
          width={1000}
          height={1000}
        />
        <Image
          src={imageLight}
          alt="Hero Image"
          className="block w-full rounded-[inherit] border object-contain shadow-lg dark:hidden"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
}
