import React from "react";
import Image from "next/image";
import TooltipCustom from "@/app/components/TooltipCustom";
import pic from "../../public/mahdiyarPicture.jpeg";

function MahdiyarPicture() {
  return (
    <div
      className="flex-[3] overflow-hidden cursor-default border border-solid border-neutral-700 rounded-md sm:block hidden"
      data-tooltip-id="myPic"
      data-tooltip-place="bottom"
      data-tooltip-content="Me"
    >
      <Image
        src={pic}
        alt="Mahdiyar picture"
        id="2"
        className={
          "max-w-[190px] hover:scale-150 scale-125 transition-transform duration-300 md:max-w-[194px] object-cover object-bottom h-min overflow-hidden"
        }
        placeholder={"blur"}
      />
      <TooltipCustom id="myPic" />
    </div>
  );
}

export default MahdiyarPicture;
