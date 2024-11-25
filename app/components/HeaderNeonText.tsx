import React from "react";
import FadeXdiv from "@/app/components/motions/FadeXdiv";

function HeaderNeonText({
  skill,
  isReverse,
  hasWord = true,
}: {
  skill?: string;
  isReverse?: boolean;
  hasWord?: boolean;
}) {
  if (hasWord) {
    if (!isReverse)
      return (
        <FadeXdiv
          leftOrRight="left"
          className="flex flex-row items-center text-nowrap justify-center gap-3 md:gap-4 w-full px-0.5"
        >
          <span
            className="text-nowrap text-sm md:text-lg font-normal tracking-wider text-Pink"
            style={{ textShadow: "0px 0px 7px #B377FF" }}
          >
            {skill}
          </span>
          <div
            style={{ boxShadow: "0px 0px 5px #B377FF" }}
            className="w-full h-3.5 md:h-4 brightness-110 rounded-sm border border-solid border-Pink"
          ></div>
        </FadeXdiv>
      );
    return (
      <FadeXdiv
        leftOrRight="right"
        className="flex flex-row-reverse items-center text-nowrap justify-center gap-3 md:gap-4 w-full px-0.5"
      >
        <span
          className="text-nowrap text-sm md:text-lg font-normal tracking-wider text-Pink"
          style={{ textShadow: "0px 0px 7px #B377FF" }}
        >
          {skill}
        </span>
        <div
          style={{ boxShadow: "0px 0px 5px #B377FF" }}
          className="w-full h-3.5 md:h-4 brightness-110  rounded-sm border border-solid border-Pink"
        ></div>
      </FadeXdiv>
    );
  }
  if (isReverse) {
    return (
      <FadeXdiv
        leftOrRight="right"
        className="flex flex-row items-center justify-center gap-3 md:gap-4 w-full px-0.5"
      >
        <div
          style={{ boxShadow: "0px 0px 5px #B377FF" }}
          className="w-full h-3.5 md:h-4 brightness-110 rounded-sm border border-solid border-Pink"
        ></div>
      </FadeXdiv>
    );
  }
  return (
    <FadeXdiv
      leftOrRight="left"
      className="flex flex-row items-center justify-center gap-3 md:gap-4 w-full px-0.5"
    >
      <div
        style={{ boxShadow: "0px 0px 5px #B377FF" }}
        className="w-full h-3.5 md:h-4 brightness-110 rounded-sm border border-solid border-Pink"
      ></div>
    </FadeXdiv>
  );
}

export default HeaderNeonText;
