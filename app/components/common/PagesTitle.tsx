import React from "react";
import HeaderNeonText from "@/app/components/HeaderNeonText";
import FadeInDiv from "@/app/components/motions/FadeInDiv";
import NeonText from "@/app/components/NeonText";
import { SparklesPreview } from "@/app/components/SnowHeader";
import localFont from "next/font/local";

const deathStar = localFont({
  src: "../../../public/fonts/DeathStar.otf",
  display: "swap",
});

function PagesTitle({
  children,
  classes,
}: {
  children: React.ReactNode;
  classes: string;
}) {
  return (
    <div
      className={`${deathStar.className} flex flex-col absolute top-24 items-center gap-y-1 md:gap-y-2 max-w-min`}
    >
      <HeaderNeonText isReverse={false} hasWord={false} />
      <FadeInDiv delay={1}>
        <NeonText
          clickable={false}
          classes={`text-5xl sm2:text-6xl lg:text-7xl xl:text-8xl pl-1 ${classes}`}
        >
          {children}
        </NeonText>
      </FadeInDiv>
      <HeaderNeonText isReverse={true} hasWord={false} />
      <SparklesPreview />
    </div>
  );
}

export default PagesTitle;
