import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface NeonGradientCardDemoProps {
  imageLight: string;
  imageDark: string;
  className?: string;
}

export async function NeonGradientCardDemo({
  imageLight,
  imageDark,
  className,
}: NeonGradientCardDemoProps) {
  return (
    <NeonGradientCard
      className={cn(
        "w-full items-center justify-center text-center",
        className
      )}
    >
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
    </NeonGradientCard>
  );
}
