import React from "react";
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
import "./index.css";
import { ModalCustome } from "@/app/components/ModalCustome";
import bg from "../public/homeBackground.jpg";
const deathStar = localFont({
  src: "../public/fonts/DeathStar.otf",
  display: "swap",
});

function Page() {
  return (
    <div className="h-dvh">
      <Image
        src={bg}
        alt="bg-image"
        priority
        quality={100}
        fill
        sizes={"100vw"}
        placeholder={"blur"}
        className="object-cover h-full z-0 w-full"
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
            <NeonText classes="homeTitle-shadow-text text-[1.67rem] sm2:text-4xl md:text-5xl lg:text-6xl xl:text-7xl block flex min-w-full justify-start items-center">
              Front-end Developer
            </NeonText>
          </FadeInDiv>
          <HeaderNeonText skill="Next JS" isReverse={true} />
          <SparklesPreview />
          <FadeUpDiv>
            <NeonText
              classes="inline-block -mt-20 z-40 text-2xl md:text-3xl"
              tracking="tracking-widest"
            >
              <TypoGraphyCustom
                text="Hello I AM MAHDIAR"
                classes="introduction-shadow-text"
              />
            </NeonText>
          </FadeUpDiv>
        </div>
      </main>
      <Description>
        <ModalCustome />
      </Description>
    </div>
  );
}

export default Page;
