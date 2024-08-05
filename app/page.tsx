import Hero from "@/components/shared/Hero";
import { MarqueeDemo } from "@/components/shared/MarqeeeDemo";
import { PlanCard } from "@/components/shared/PlanCard";
import Presentation from "@/components/shared/Presentation";
import Pricing from "@/components/shared/Pricing";
import FeaturesTabs from "@/components/shared/FeaturesTabs";
import CTA from "@/components/shared/CTA";
import { prisma } from "@/lib/prima";
import { syncPlans } from "@/lib/payment/stripe";
import { transcribe } from "@/lib/transcribe/transcribe";
import { cloningVoice } from "@/lib/cloning-voice/voice-cloning";
import { TTS } from "@/lib/tts/text-to-speech";
import { transcreateText } from "@/lib/transcreate/transcreation";

export default async function Home() {
  // const test = await syncPlans();
  // console.log(test)
  // const result = await transcribe();
  // console.log(result);
  // const test2 = await cloningVoice();
  // console.log(test2);
  const text = "Runner's knee runner's knee";
  const targetLang = "japanese";
  // const textToSpeech= "Runner's knee runner's knee"
  // const output_format = 'mp3'
  // const test3 = await TTS({textToSpeech, output_format})
  // console.log(test3)
  // const test4 = await transcreateText({ text, targetLang });
  // console.log(test4)
  const allPlans: any = await prisma.plan.findMany();
  return (
    <main className="flex h-auto md:min-h-screen flex-col items-center w-full gap-28 md:gap-48">
      <Hero />
      <Pricing
        tag="Feautures"
        title="Save Hours of Repetitive Work: Focus on creating, let us handle the language barriers."
      >
        <FeaturesTabs />
      </Pricing>
      <Presentation
        title="For Content Creators"
        Description="Spend less time managing languages. Save hours of repetitive work, ship faster, and grow your audience!"
        imageDark="/dashboard.png"
        imageLight="/dashboard.png"
      />
      <Presentation
        title="For Bikes Lovers"
        Description="Spend less time customizing your vehicle. Save hours of repetitive code, ship fast, get profitable!"
        imageDark="/dashboard.png"
        imageLight="/dashboard.png"
        isTrue
      />
      <Pricing
        tag="Pricing"
        title="Spend less time managing languages. Save hours of repetitive work!"
      >
        <PlanCard allPlans={allPlans} />
      </Pricing>
      <Pricing tag="Thinking" title="What people thinks about us">
        <MarqueeDemo />
      </Pricing>
      <CTA />
    </main>
  );
}
