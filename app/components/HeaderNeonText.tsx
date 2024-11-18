import React from "react";
import FadeXdiv from "@/app/components/motions/FadeXdiv";

function HeaderNeonText({
  skill,
  isReverse,
}: {
  skill: string;
  isReverse: boolean;
}) {
  if (!isReverse)
    return (
      <FadeXdiv
        leftOrRight="left"
        className="flex flex-row items-center justify-center gap-3 md:gap-4 w-full px-0.5"
      >
        <span className="text-nowrap text-sm md:text-lg font-normal tracking-wider text-Pink">
          {skill}
        </span>
        <div className="w-full h-3.5 md:h-4 rounded-sm border border-solid border-Pink"></div>
      </FadeXdiv>
    );
  return (
    <FadeXdiv
      leftOrRight="right"
      className="flex flex-row-reverse items-center justify-center gap-3 md:gap-4 w-full px-0.5"
    >
      <span className="text-nowrap text-sm md:text-lg font-normal tracking-wider text-Pink">
        {skill}
      </span>
      <div className="w-full h-3.5 md:h-4 rounded-sm border border-solid border-Pink"></div>
    </FadeXdiv>
  );
}

export default HeaderNeonText;
