import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { TypoGraphyCustom } from "@/app/components/TypoGraphyCustom";
import FadeUpDiv from "@/app/components/motions/FadeUpDiv";
import { Bebas_Neue } from "next/font/google";
import "./index.css";
import BackBtn from "@/app/components/BackBtn";
import PagesTitle from "@/app/components/common/PagesTitle";
import Description from "@/app/components/Description";
import LeftArrow from "@/public/icons/LeftArrow";

export const metadata: Metadata = {
  title: "Skills",
  description: "Mahdiyar's skills",
};

const Bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

function Page() {
  return (
    <div className="h-dvh flex justify-center items-center overflow-hidden relative">
      <Image
        src="/projectsBackground.png"
        width={1000}
        height={800}
        alt="bg-image"
        className="object-cover object-center h-full z-0 w-full"
      />
      <div className="absolute flex left-4 right-4 flex-row justify-between items-center mt-10 max-w-[560px] mx-auto lg:max-w-2xl">
        <LeftArrow direction="left" />
        <LeftArrow direction="right" />
      </div>
      <BackBtn />
      <PagesTitle classes="skillsTitle-shadow-text text-6xl sm2:text-7xl">
        Projects
      </PagesTitle>
      <FadeUpDiv className="absolute top-60 sm2:top-64 md:top-[16.5rem] lg:top-72">
        <span
          className={`${Bebas.className} inline-block z-40 text-3xl lg:tracking-wide md:text-4xl text-white stroke-text`}
        >
          <TypoGraphyCustom
            classes="intro-shadow-text"
            text={`Project 1 : Pizzateria`}
          />
        </span>
      </FadeUpDiv>
      <Description />
    </div>
  );
}

export default Page;
