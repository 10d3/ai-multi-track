import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";

export function BorderBeamDemo() {
  return (
    <section className="relative rounded-xl">
      <Image
        src="/dashboard.png"
        alt="Hero Image"
        className="hidden w-full rounded-[inherit] border object-contain shadow-lg dark:block"
        width={1000}
        height={1000}
      />
      <Image
        src="/dashboard.png"
        alt="Hero Image"
        className="block w-full rounded-[inherit] border object-contain shadow-lg dark:hidden"
        width={1000}
        height={1000}
      />

      <BorderBeam size={250} duration={12} delay={9} />
    </section>
  );
}
