import React from "react";
import NeonText from "@/app/components/NeonText";

function Description() {
  return (
    <div className="absolute bottom-28 flex justify-center items-center left-0 right-0 md:bottom-32 ">
      <div className="relative flex justify-center items-center sm:hover:backdrop-brightness-90 transition-all duration-300 cursor-pointer py-7 px-10">
        <Stroke1 />
        <NeonText
          clickable={true}
          classes={"text-2xl font-bold text-center sm:text-3xl"}
          tracking="tigh"
        >
          Click
          <br /> to open
        </NeonText>
        <Stroke2 />
      </div>
    </div>
  );
}

function Stroke1() {
  return (
    <svg
      className="absolute top-0 left-0"
      width="45"
      // height="57"
      viewBox="0 0 64 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1V55.4688H10.7351V10.7073H62.3854V1H1Z"
        stroke="#CEB7FF"
        style={{ filter: "drop-shadow(0px 0px 6px rgba(256,256,256,0.7)" }}
        strokeWidth="2"
      />
    </svg>
  );
}
function Stroke2() {
  return (
    <svg
      className="absolute bottom-0 right-0 transform rotate-180"
      width="45"
      // height="57"
      viewBox="0 0 64 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1V55.4688H10.7351V10.7073H62.3854V1H1Z"
        stroke="#CEB7FF"
        style={{ filter: "drop-shadow(0px 0px 6px rgba(256,256,256,0.7)" }}
        strokeWidth="2"
      />
    </svg>
  );
}

export default Description;
