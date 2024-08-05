import TextReveal from "@/components/magicui/text-reveal";

export async function TextRevealDemo() {
  return (
    <div className="z-10 flex h-auto md:min-h-[5rem] w-full items-center justify-center">
      <TextReveal text="Custom-Hicle AI will change the way you customize your vehicle." />
    </div>
  );
}
