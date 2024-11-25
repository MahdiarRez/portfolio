"use client";
import React from "react";
import FadeXdiv from "@/app/components/motions/FadeXdiv";
import { Bebas_Neue } from "next/font/google";
import TooltipCustom from "@/app/components/TooltipCustom";

const Bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

function Cv() {
  const handleDownload = () => {
    window.open("/resume.pdf", "_blank"); // Adjust the path if necessary
  };

  return (
    <FadeXdiv
      leftOrRight="left"
      delay={2}
      className="absolute hidden sm:flex z-50 items-center justify-center right-7 bottom-7 lg:right-11 lg:bottom-11"
    >
      <button
        onClick={handleDownload}
        data-tooltip-id="cv"
        type="button"
        data-tooltip-content="Click for download resume"
        data-tooltip-place="top-end"
        className={`${Bebas.className} mb-1 cursor-pointer sm:hover:text-white transition-colors duration-300 text-3xl block text-Pink tracking-wide lg:text-4xl`}
      >
        Resume
      </button>
      <TooltipCustom id="cv" />
    </FadeXdiv>
  );
}

export default Cv;
