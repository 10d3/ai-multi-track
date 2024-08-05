import { cn } from "@/lib/utils";


interface PricingProps {
  tag: string;
  title: string;
  children: React.ReactNode;
  className?: string; // Make className optional
}

export default function Pricing({tag,title,children,className}:PricingProps) {
  return (
    <section className={cn("w-full h-auto flex flex-col items-center justify-between gap-12 md:gap-24", className)}>
      <div className="flex flex-col gap-4 items-center justify-center text-center">
        <p className="text-xl">{tag}</p>
        <h1 className="md:text-5xl font-semibold text-3xl">{title}</h1>
      </div>
      <div className="w-full">
        {children}
      </div>
    </section>
  );
}
