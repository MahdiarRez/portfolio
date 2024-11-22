import React from "react";
import backgroundImage from "../public/homeBackground.png";
import Image from "next/image";
import localFont from "next/font/local";
import NeonText from "@/app/components/NeonText";
import HeaderNeonText from "@/app/components/HeaderNeonText";
import FadeInDiv from "@/app/components/motions/FadeInDiv";
import FadeUpDiv from "@/app/components/motions/FadeUpDiv";
import Description from "@/app/components/Description";
import Navbar from "@/app/components/Navbar";
import { SparklesPreview } from "@/app/components/SnowHeader";
import { TypoGraphyCustom } from "@/app/components/TypoGraphyCustom";
import { ShootingStars } from "@/app/components/ui/ShootingStar";

const deathStar = localFont({
  src: "../public/fonts/DeathStar.otf",
  display: "swap",
});

function Page() {
  return (
    <div className="h-dvh">
      <Image
        src={backgroundImage}
        alt="bg-image"
        className="object-cover h-full z-0"
      />
      <ShootingStars />
      <Navbar />
      <main
        className={`${deathStar.className} tracking-wide w-screen flex justify-center absolute top-36 sm:top-24 `}
      >
        <div className="flex flex-col items-center justify-center gap-y-1 md:gap-y-2 w-[320px] sm2:w-[432px] md:w-[578px] lg:w-[722px] xl:w-[862px]">
          <HeaderNeonText skill="React JS" isReverse={false} />
          <FadeInDiv
            className="w-full flex justify-center items-center"
            delay={1}
          >
            <NeonText classes="text-[1.67rem] sm2:text-4xl md:text-5xl lg:text-6xl xl:text-7xl block flex min-w-full justify-start items-center">
              Front-end Developer
            </NeonText>
          </FadeInDiv>
          <HeaderNeonText skill="Next JS" isReverse={true} />
          <SparklesPreview />
          <FadeUpDiv>
            <NeonText
              classes="inline-block -mt-20 z-40 text-2xl md:text-3xl "
              tracking="tracking-widest"
            >
              <TypoGraphyCustom text="Hello i am Mahdiyar" />
            </NeonText>
          </FadeUpDiv>
        </div>
      </main>
      <Description />
    </div>
  );
}

export default Page;
