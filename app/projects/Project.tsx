"use client";
import React from "react";
import LeftArrow from "@/public/icons/LeftArrow";
import FadeUpDiv from "@/app/components/motions/FadeUpDiv";
import { TypoGraphyCustom } from "@/app/components/TypoGraphyCustom";
import Description from "@/app/components/Description";
import { Bebas_Neue } from "next/font/google";
import { projectsList } from "@/app/projects/projectsList";
import ModalProject from "@/app/projects/ModalProject";
const Bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

function Project({ children }: { children: React.ReactNode }) {
  const [currProjectIndex, setCurrProjectIndex] = React.useState(0);

  function handleNext() {
    if (currProjectIndex !== projectsList.length - 1) {
      setCurrProjectIndex((curr) => curr + 1);
    }
  }
  function handlePrev() {
    setCurrProjectIndex((curr) => curr - 1);
  }

  return (
    <>
      <div className="absolute flex left-4  right-4 flex-row justify-between items-center mt-10 max-w-[560px] mx-auto lg:max-w-2xl">
        <LeftArrow
          direction="left"
          handler={handlePrev}
          disable={currProjectIndex === 0}
        />
        <LeftArrow
          direction="right"
          handler={handleNext}
          disable={currProjectIndex === projectsList.length - 1}
        />
      </div>
      {children}
      <FadeUpDiv className="absolute top-60 sm2:top-64 md:top-[16.5rem] lg:top-72">
        <span
          className={`${Bebas.className} inline-block z-40 text-3xl lg:tracking-wide md:text-4xl text-white stroke-text `}
        >
          <TypoGraphyCustom
            classes="intro-shadow-text "
            text={`Project ${currProjectIndex + 1} : ${projectsList[currProjectIndex].name}`}
          />
        </span>
      </FadeUpDiv>
      <Description>
        <ModalProject
          name={projectsList[currProjectIndex].name}
          description={projectsList[currProjectIndex].description}
        />
      </Description>
    </>
  );
}

export default Project;
