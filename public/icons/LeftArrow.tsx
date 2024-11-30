"use client";
import React from "react";
import clsx from "clsx";
import TooltipCustom from "@/app/components/TooltipCustom";
function LeftArrow({
  direction,
  handler,
  disable,
}: {
  direction: "left" | "right";
  handler: never;
  disable: boolean;
}) {
  return (
    <button
      data-tooltip-content={
        direction === "right" && !disable
          ? "Next project"
          : direction === "left" && !disable
            ? "Prev project"
            : ""
      }
      data-tooltip-place={direction === "left" ? "right" : "left"}
      data-tooltip-id="project"
      disabled={disable}
      onClick={handler}
    >
      <svg
        viewBox="0 0 54 105"
        fill="none"
        className={clsx(
          `size-16 lg:size-20 xl:size-24  group transition-transform duration-300 max-w-fit `,
          {
            "rotate-180": direction === "right",
            "rotate-0 sm2:hover:-translate-x-1": direction === "left",
          },
          {
            "sm2:hover:translate-x-1": !disable && direction === "right",
            "sm2:hover:-translate-x-1": !disable && direction === "left",
          },
          { "cursor-pointer": !disable, "cursor-not-allowed": disable },
        )}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M52.3014 0V1.6063M52.3014 1.6063V102L2 51.8031L52.3014 1.6063Z"
          className={clsx(` transition-colors duration-300`, {
            "group-hover:stroke-white stroke-Pink": !disable,
            "stroke-gray-400": disable,
          })}
          strokeWidth="2"
        />
        <path
          d="M10.3835 51.5611L46.0137 86.6301V16.4921L10.3835 51.5611Z"
          className={clsx(`transition-colors duration-300`, {
            " group-hover:fill-white fill-Pink": !disable,
            "fill-gray-400 ": disable,
          })}
        />
        <path
          d="M46.0137 15.3699V16.4921M46.0137 16.4921V86.6301L10.3835 51.5611L46.0137 16.4921Z"
          className={clsx(` transition-colors duration-300`, {
            "group-hover:stroke-white stroke-Pink": !disable,
            "stroke-gray-400": disable,
          })}
          strokeWidth="2"
        />
      </svg>
      <TooltipCustom id="project" />
    </button>
  );
}

export default LeftArrow;
