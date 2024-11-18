import React from "react";
import backgroundImage from "../public/homeBackground.png";
import Image from "next/image";
import localFont from "next/font/local";
import NeonText from "@/app/components/NeonText";
import HeaderNeonText from "@/app/components/HeaderNeonText";
import FadeInDiv from "@/app/components/motions/FadeInDiv";
import FadeUpDiv from "@/app/components/motions/FadeUpDiv";
import Socials from "@/app/components/Socials";
import Description from "@/app/components/Description";
// import FadeInDiv from "@/components/FadeInDiv";

const deathStar = localFont({
  src: "../public/fonts/DeathStar.otf",
  display: "swap",
});

function Page() {
  return (
    <div className="h-dvh">
      <Image
        src={backgroundImage}
        alt="bg-image"
        className="object-cover h-full z-0"
      />
      <Socials />
      <div
        className={`${deathStar.className} tracking-wide w-screen flex justify-center absolute top-28 sm:top-24 `}
      >
        <div className="flex flex-col items-center justify-center px-7 gap-y-1 md:gap-y-2">
          <HeaderNeonText skill="React JS" isReverse={false} />
          <FadeInDiv>
            <NeonText classes="text-2xl sm2:text-4xl md:text-5xl">
              Front-end Developer
            </NeonText>
          </FadeInDiv>
          <HeaderNeonText skill="Next JS" isReverse={true} />
          <FadeUpDiv>
            <NeonText
              classes="inline-block mt-16 text-2xl md:text-3xl "
              tracking="tracking-widest"
            >
              I am{" "}
              <span className="sm:hover:text-Pink transition-colors duration-300 cursor-default ease-in-out">
                Mahdiyar
              </span>
            </NeonText>
          </FadeUpDiv>
        </div>
      </div>
      <Description />
    </div>
  );
}

export default Page;
