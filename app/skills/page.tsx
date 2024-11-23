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
import "./index.css";
import { ShootingStars } from "@/app/components/ui/ShootingStar";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import ListSkills from "@/app/skills/components/ListSkills";
import Modal from "@/app/skills/components/Modal";

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
        className="object-cover object-center h-full z-0"
      />
      <Link
        href="/"
        className={`${Bebas.className}  animate-fade animate-delay-[2000ms] animate-duration-500 flex flex-row items-center justify-center gap-0.5 absolute top-6 left-6 md:top-7 md:left-7 lg:top-11 lg:left-11 text-white hover:cursor-pointer hover:text-Pink group z-50 transition-colors duration-300`}
      >
        <MdOutlineArrowBackIosNew className="-mt-0.5 text-xl font-bold md:text-2xl group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="text-2xl sm2:text-2xl md:text-3xl text-center text-nowrap">
          Go back
        </span>
      </Link>
      <ShootingStars />
      <div
        className={`${deathStar.className} flex flex-col absolute top-24  items-center gap-y-1 md:gap-y-2 max-w-min`}
      >
        <HeaderNeonText isReverse={false} hasWord={false} />
        <FadeInDiv delay={1}>
          <NeonText
            clickable={false}
            classes="text-5xl sm2:text-6xl lg:text-7xl xl:text-8xl pl-1 skillsTitle-shadow-text"
          >
            Skills
          </NeonText>
        </FadeInDiv>
        <HeaderNeonText isReverse={true} hasWord={false} />
        <SparklesPreview />
      </div>
      <FadeUpDiv className="absolute top-52 sm2:top-56 md:top-60 lg:top-72">
        <span
          className={`${Bebas.className} inline-block z-40 text-2xl sm2:text-3xl lg:tracking-wide md:text-4xl text-white stroke-text`}
        >
          <TypoGraphyCustom
            classes="intro-shadow-text"
            text="Here is a list of my skills."
          />
        </span>
      </FadeUpDiv>
      <ListSkills />
      <Modal />
    </div>
  );
}

export default Page;
