import React from "react";
import { BorderBeamDemo } from "./BorderBeam";
import { Button } from "../ui/button";
import { NeonGradientCardDemo } from "./NeonGradientCard";
import { AvatarCirclesDemo } from "./Avatars";
import { Star } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const appFeautured = [
    {
      title: "Product Hunt",
      logo: <ProductHuntIcon width="24" height="24" />,
      linkTo: "#",
    },
    {
      title: "Hacker News",
      logo: (
        <HackerNewsIcon
          color="#FFFFFF"
          backgroundColor="#FF6600"
          width="24"
          height="24"
        />
      ),
      linkTo: "#",
    },
    {
      title: "Reddit",
      logo: <RedditIcon color="#FFFFFF" backgroundColor="#FF6600" />,
      linkTo: "#",
    },
  ];
  return (
    <section className="min-h-[44rem] md:min-h-screen w-full flex flex-col items-center justify-center gap-12 md:pt-24">
      <div className="flex flex-col w-full md:max-w-4xl text-center items-center justify-center gap-6">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Expand Your Reach with Seamless Multi-Language Audio Tracks
        </h1>
        <p className="text-[1rem] md:text-xl max-w-2xl">
          Break Language Barriers, Multiply Your Audience <br/>AI-Powered
          Transcreation for Perfect Voice Match <br/> Effortless Multi-Language
          Publishing
        </p>
        <div className="flex flex-row items-center gap-6">
          <Button className="font-semibold" size="lg" variant="default">
            Get Started
          </Button>
          <Button className="font-semibold" size="lg" variant="secondary">
            Tutorials
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <AvatarCirclesDemo />
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
          <div className="flex flex-row">
            {Array.from({ length: 5 }, (_, i) => (
              <Star fill="#0BD97A" color="#0BD97A" key={i} size={16} />
            ))}
          </div>
          <p className="text-[0.75rem]">from 99+ happy customers</p>
        </div>
      </div>
      <NeonGradientCardDemo
        imageDark="/dashboard.png"
        imageLight="/dashboard.png"
      />
      {/* <BorderBeamDemo /> */}

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2">
        <h1 className="text-[0.8rem]">Feautured on </h1>
        <div className="flex flex-row flex-wrap gap-4">
          {appFeautured.map((app, i) => (
            <div key={i} className="flex flex-row gap-2">
              <Link
                className="flex flex-row gap-2 items-center justify-center text-[0.6rem] md:text-xl"
                href={app.linkTo}
              >
                {app.logo}
                <p>{app.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductHuntIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      // width="24"
      // height="24"
      viewBox="0 0 250 250"
      fill="none"
    >
      <path
        d="M250 125C250 194.033 194.033 250 125 250C55.967 250 0 194.033 0 125C0 55.967 55.967 0 125 0C194.033 0 250 55.967 250 125Z"
        fill="#DA552F"
      />
      <path
        d="M168.455 112.558C168.455 129.215 155.207 142.5 139.091 142.5H116.739V168.409H93.9891V81.5909H139.091C155.207 81.5909 168.455 94.8405 168.455 112.558ZM144.375 112.558C144.375 106.015 139.034 100.682 132.489 100.682H116.739V124.455H132.489C139.034 124.455 144.375 119.091 144.375 112.558Z"
        fill="white"
      />
    </svg>
  );
}

function HackerNewsIcon({
  color = "#FFFFFF",
  backgroundColor = "#FF6600",
  ...props
}) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      // width="24"
      // height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect width="24" height="24" rx="12" fill={backgroundColor} />
      <path d="M12 4L9 12H11V20H13V12H15L12 4Z" fill={color} />
    </svg>
  );
}

function RedditIcon({
  color = "#FF4500",
  backgroundColor = "#FFFFFF",
  ...props
}) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect width="24" height="24" rx="12" fill={backgroundColor} />
      <circle cx="12" cy="12" r="10" fill={color} />
      <path
        d="M16.904 10.062c-.402 0-.777.164-1.062.428-1.006-.676-2.37-1.109-3.898-1.146l.783-3.683 2.56.541-.009.075c0 .802.65 1.451 1.452 1.451.803 0 1.453-.649 1.453-1.451s-.65-1.451-1.453-1.451c-.54 0-1.007.306-1.261.761l-2.941-.62c-.163-.034-.322.04-.414.181-.041.064-.107.204-.144.374l-.848 3.991c-1.511.003-2.891.428-3.91 1.116-.287-.273-.662-.438-1.064-.438-1.866 0-2.473 2.511-1.297 3.687-.045.09-.082.185-.106.283-.313 1.287 1.467 2.573 3.601 2.573.94 0 1.83-.207 2.48-.568.649.361 1.54.568 2.48.568 2.127 0 3.918-1.29 3.602-2.573a1.416 1.416 0 00-.106-.283c1.176-1.176.57-3.687-1.295-3.687zM8.693 12.291c.621 0 1.125.504 1.125 1.125 0 .62-.504 1.124-1.125 1.124-.62 0-1.124-.504-1.124-1.124 0-.621.504-1.125 1.124-1.125zm6.615 4.004c-.672.672-2.49.705-3.306.001a.426.426 0 01-.06-.598.426.426 0 01.598-.06c.399.338 1.782.471 2.409 0a.426.426 0 01.598.06c.164.185.15.464-.06.597zm-.14-2.88c-.621 0-1.125-.504-1.125-1.124 0-.621.504-1.125 1.125-1.125.62 0 1.124.504 1.124 1.125 0 .62-.504 1.124-1.124 1.124z"
        fill={backgroundColor}
      />
    </svg>
  );
}
