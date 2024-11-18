"use client";
import React from "react";
import NeonText from "@/app/components/NeonText";
import FadeUpDiv from "@/app/components/motions/FadeUpDiv";
import { Montserrat } from "next/font/google";

const Mont = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

function Description() {
  const [descriptionIsOpen, setDescriptionIsOpen] = React.useState(false);

  return (
    <FadeUpDiv className="absolute bottom-20 sm:bottom-28 md:bottom-20 flex justify-center items-center left-0 right-0 ">
      <div className="relative flex group justify-center items-center ">
        <Stroke1 />
        {!descriptionIsOpen ? (
          <div
            className=" flex justify-center items-center py-7 px-10 cursor-pointer hover:brightness-110 transition-all duration-300 animate-fade-up animate-duration-500"
            onClick={() => setDescriptionIsOpen(!descriptionIsOpen)}
          >
            <NeonText
              clickable={true}
              classes={"text-2xl font-bold text-center sm:text-3xl "}
              tracking="tigh"
            >
              Click
              <br /> to open
            </NeonText>
          </div>
        ) : (
          <div
            onClick={() => setDescriptionIsOpen(!descriptionIsOpen)}
            className="px-7 cursor-pointer py-6 max-w-[330px] sm2:max-w-96 sm:max-w-[450px] lg:max-w-[550px] animate-fade-down animate-duration-500"
          >
            <p
              className={`${Mont.className} text-xs md:tracking-wider tracking-wide leading-5 sm2:text-sm sm2:py-6 sm2:px-5 py-3 px-2 bg-black bg-opacity-35 border-solid border border-Pink text-center font-light text-white`}
            >
              I am a skilled Front-End Developer with expertise in React and
              Next.js. With a strong focus on creating intuitive and responsive
              web applications, I leverage my knowledge of modern JavaScript
              frameworks to build seamless user experiences.
            </p>
          </div>
        )}
        <Stroke2 />
      </div>
    </FadeUpDiv>
  );
}

function Stroke1() {
  return (
    <svg
      className="absolute top-0 left-0 group-hover:top-2 group-hover:left-2 transition-all ease-out duration-300 "
      width="45"
      // height="57"
      viewBox="0 0 64 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1V55.4688H10.7351V10.7073H62.3854V1H1Z"
        stroke="#CEB7FF"
        style={{ filter: "drop-shadow(0px 0px 6px rgba(256,256,256,0.7)" }}
        strokeWidth="2"
      />
    </svg>
  );
}

function Stroke2() {
  return (
    <svg
      className="absolute bottom-0 right-0 transform rotate-180 group-hover:bottom-2 group-hover:right-2 transition-all ease-out duration-300 "
      width="45"
      // height="57"
      viewBox="0 0 64 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1V55.4688H10.7351V10.7073H62.3854V1H1Z"
        stroke="#CEB7FF"
        style={{ filter: "drop-shadow(0px 0px 6px rgba(256,256,256,0.7)" }}
        strokeWidth="2"
      />
    </svg>
  );
}

export default Description;
