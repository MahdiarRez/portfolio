"use client";
import React from "react";
import clsx from "clsx";
import TooltipCustom from "@/app/components/TooltipCustom";
function LeftArrow({ direction }: { direction: "left" | "right" }) {
  return (
    <div
      data-tooltip-content={
        direction === "right" ? "Next project" : "Prev project"
      }
      data-tooltip-place={direction === "left" ? "right" : "left"}
      data-tooltip-id="project"
    >
      <svg
        viewBox="0 0 54 105"
        fill="none"
        className={clsx(
          `size-16 lg:size-20 xl:size-24 cursor-pointer group transition-transform duration-300 max-w-fit `,
          {
            "rotate-180 sm2:hover:translate-x-1": direction === "right",
            "rotate-0 sm2:hover:-translate-x-1": direction === "left",
          },
        )}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M52.3014 0V1.6063M52.3014 1.6063V102L2 51.8031L52.3014 1.6063Z"
          className="stroke-Pink group-hover:stroke-white transition-colors duration-300"
          strokeWidth="2"
        />
        <path
          d="M10.3835 51.5611L46.0137 86.6301V16.4921L10.3835 51.5611Z"
          className="fill-Pink group-hover:fill-white transition-colors duration-300"
        />
        <path
          d="M46.0137 15.3699V16.4921M46.0137 16.4921V86.6301L10.3835 51.5611L46.0137 16.4921Z"
          className="stroke-Pink group-hover:stroke-white transition-colors duration-300"
          strokeWidth="2"
        />
      </svg>
      <TooltipCustom id="project" />
    </div>
  );
}

export default LeftArrow;
