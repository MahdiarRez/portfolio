import React from "react";
import Image from "next/image";
import backgroundImage from "@/public/skillsBackground.png";
import type { Metadata } from "next";
import HeaderNeonText from "@/app/components/HeaderNeonText";
import localFont from "next/font/local";
import NeonText from "@/app/components/NeonText";
import FadeInDiv from "@/app/components/motions/FadeInDiv";
import { TypoGraphyCustom } from "@/app/components/TypoGraphyCustom";
import FadeUpDiv from "@/app/components/motions/FadeUpDiv";
import { SparklesPreview } from "@/app/components/SnowHeader";
import { Bebas_Neue } from "next/font/google";

export const metadata: Metadata = {
  title: "Mahdiyar's Skills",
  description: "Skills",
};

const Bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const deathStar = localFont({
  src: "../../public/fonts/DeathStar.otf",
  display: "swap",
});

function Page() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Image
        src={backgroundImage}
        alt="bg-image"
        className="object-cover h-full z-0"
      />
      <div
        className={`${deathStar.className} flex flex-col absolute top-20 items-center gap-y-1 md:gap-y-2`}
      >
        <HeaderNeonText isReverse={false} hasWord={false} />
        <FadeInDiv delay={1}>
          <NeonText
            clickable={false}
            classes="text-5xl md:text-6xl lg:text-7xl xl:text-8xl pl-1"
          >
            Skills
          </NeonText>
        </FadeInDiv>
        <HeaderNeonText isReverse={true} hasWord={false} />
        <SparklesPreview />
      </div>
      <FadeUpDiv className="absolute top-60 lg:top-64">
        <span
          className={`${Bebas.className} inline-block z-40 text-2xl md:text-3xl lg:text-4xl text-white stroke-text`}
        >
          <TypoGraphyCustom text="Here is a list of my skills." />
        </span>
      </FadeUpDiv>
    </div>
  );
}

export default Page;
