import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { TypoGraphyCustom } from "@/app/components/TypoGraphyCustom";
import FadeUpDiv from "@/app/components/motions/FadeUpDiv";
import { Bebas_Neue } from "next/font/google";
import "./index.css";
import ListSkills from "@/app/skills/components/ListSkills";
import Modal from "@/app/skills/components/Modal";
import BackBtn from "@/app/components/BackBtn";
import PagesTitle from "@/app/components/common/PagesTitle";
import bg from "../../public/skillsBackground.jpg";

export const metadata: Metadata = {
  title: "Skills",
  description: "Mahdiyar's skills",
};

const Bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

function Page() {
  return (
    <div className="h-dvh flex justify-center items-center overflow-hidden">
      <Image
        src={bg}
        priority
        quality={100}
        placeholder="blur"
        fill
        sizes={"100vw"}
        alt="bg-image"
        className="object-cover object-center h-full z-0 w-full"
      />
      <BackBtn />
      <PagesTitle classes="skillsTitle-shadow-text text-6xl sm2:text-7xl">
        Skills
      </PagesTitle>
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
      <Modal>
        Hover on skill <br /> to see the website !
      </Modal>
    </div>
  );
}

export default Page;
