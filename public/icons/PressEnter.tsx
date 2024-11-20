"use client";
import React from "react";
import { Bebas_Neue } from "next/font/google";
import FadeXdiv from "@/app/components/motions/FadeXdiv";
import TooltipCustom from "@/app/components/TooltipCustom";

const Bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

function PressEnter() {
  return (
    <FadeXdiv
      leftOrRight="right"
      delay={2}
      className="absolute hidden md:flex z-50 md:flex-col items-center justify-center left-7 bottom-7 lg:left-11 lg:bottom-11"
    >
      <span
        data-tooltip-id="tooltip"
        data-tooltip-content="Press Enter key"
        data-tooltip-place="top-start"
        className={`${Bebas.className} mb-1 cursor-default text-2xl block text-Pink tracking-wide lg:text-3xl`}
      >
        Press
      </span>
      <svg
        width="56"
        height="56"
        viewBox="0 0 73 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_21_3860"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="73"
          height="74"
        >
          <path
            d="M64.5 71.25C67.8137 71.25 70.5 68.5637 70.5 65.25V8.75C70.5 5.43629 67.8137 2.75 64.5 2.75H42.25C38.9363 2.75 36.25 5.43629 36.25 8.75V24.15C36.25 27.4637 33.5637 30.15 30.25 30.15H8C4.68629 30.15 2 32.8363 2 36.15V65.25C2 68.5637 4.68629 71.25 8 71.25H64.5Z"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.1125 43.85L24.2625 50.7L31.1125 57.55"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M53.375 35.2875V50.7H24.2625"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </mask>
        <g mask="url(#mask0_21_3860)">
          <path
            d="M-4.85004 -4.09998H77.35V78.1H-4.85004V-4.09998Z"
            fill="#CEB7FF"
          />
        </g>
      </svg>
      <TooltipCustom id="tooltip" />
    </FadeXdiv>
  );
}

export default PressEnter;
