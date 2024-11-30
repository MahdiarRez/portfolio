"use client";
import React from "react";
import FadeUpDiv from "@/app/components/motions/FadeUpDiv";

function Description({ children }: { children: React.ReactNode }) {
  return (
    <FadeUpDiv
      delay={3.7}
      className={
        "absolute flex justify-center items-center left-0 right-0 bottom-28 sm:bottom-32"
      }
    >
      <div className="relative flex group justify-center items-center cursor-pointer">
        <Stroke1 />
        {children}
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
