"use client";
import React from "react";
import LeftArrow from "@/public/icons/LeftArrow";
import { TypoGraphyCustom } from "@/app/components/TypoGraphyCustom";
import Description from "@/app/components/Description";
import { projectsList } from "@/app/projects/projectsList";
import ModalProject from "@/app/projects/ModalProject";
import TypoGraphySpan from "@/app/projects/TypoGraphySpan";

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
          handler={handlePrev as never}
          disable={currProjectIndex === 0}
        />
        <LeftArrow
          direction="right"
          handler={handleNext as never}
          disable={currProjectIndex === projectsList.length - 1}
        />
      </div>
      {children}
      <TypoGraphySpan>
        <TypoGraphyCustom
          classes="intro-shadow-text "
          text={`Project ${currProjectIndex + 1} : ${projectsList[currProjectIndex].name}`}
        />
      </TypoGraphySpan>
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
