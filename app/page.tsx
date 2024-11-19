import React from "react";
import localFont from "next/font/local";
import NeonText from "@/app/components/NeonText";
import HeaderNeonText from "@/app/components/HeaderNeonText";
import FadeInDiv from "@/app/components/motions/FadeInDiv";
import FadeUpDiv from "@/app/components/motions/FadeUpDiv";
import Description from "@/app/components/Description";
import { Bebas_Neue } from "next/font/google";

const Bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const deathStar = localFont({
  src: "../public/fonts/DeathStar.otf",
  display: "swap",
});

export default function Page() {
  return (
    <>
      <div
        className={`${deathStar.className} tracking-wide w-full mx-auto z-20 relative flex flex-col justify-start items-center h-full`}
      >
        <div className="flex flex-col items-center justify-center px-7 gap-y-1 md:gap-y-2">
          <HeaderNeonText skill="React JS" isReverse={false} />
          <FadeInDiv>
            <NeonText classes="text-2xl sm2:text-4xl md:text-5xl xl:text-7xl">
              Front-end Developer
            </NeonText>
          </FadeInDiv>
          <HeaderNeonText skill="Next JS" isReverse={true} />
          <FadeUpDiv>
            <NeonText
              classes="inline-block mt-16 text-2xl md:text-3xl"
              tracking="tracking-widest"
            >
              I am{" "}
              <span className="sm:hover:text-Pink transition-colors duration-300 cursor-default ease-in-out">
                Mahdiyar
              </span>
            </NeonText>
          </FadeUpDiv>
          <Description />
        </div>
      </div>
      <div
        className={`${deathStar.className} tracking-wide w-full mx-auto z-20 relative flex flex-col justify-start items-center h-full`}
      >
        <div className="flex flex-col items-center justify-center px-7 gap-y-1 md:gap-y-2">
          <HeaderNeonText hasWord={false} />
          <FadeInDiv>
            <NeonText classes="text-2xl sm2:text-4xl md:text-5xl xl:text-6xl ">
              My skills
            </NeonText>
          </FadeInDiv>
          <HeaderNeonText hasWord={false} />
        </div>
        <span className={`${Bebas.className}`}>
          Here is a list of some of my skills
        </span>
      </div>
    </>
  );
}
