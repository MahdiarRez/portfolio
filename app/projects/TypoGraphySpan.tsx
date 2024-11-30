import React from "react";
import FadeUpDiv from "@/app/components/motions/FadeUpDiv";
import { Bebas_Neue } from "next/font/google";

const Bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

function TypoGraphySpan({ children }: { children: React.ReactNode }) {
  return (
    <FadeUpDiv className="absolute top-60 sm2:top-64 md:top-[16.5rem] lg:top-72">
      <span
        className={`${Bebas.className} inline-block z-40 text-3xl lg:tracking-wide md:text-4xl text-white stroke-text `}
      >
        {children}
      </span>
    </FadeUpDiv>
  );
}

export default TypoGraphySpan;
