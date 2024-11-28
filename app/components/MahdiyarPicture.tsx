import React from "react";
import Image from "next/image";

function MahdiyarPicture() {
  return (
    <Image
      src={"/mahdiyarPic.jpeg"}
      alt="Mahdiyar picture"
      className={
        "max-w-[170px] cursor-default md:max-w-[194px] object-cover object-bottom flex-[3] h-fit border border-solid border-neutral-700 rounded-md overflow-hidden"
      }
      width={200}
      height={200}
    />
  );
}

export default MahdiyarPicture;
