import React from "react";
import Image from "next/image";
import pic from "../../public/mahdiyarPicture.jpeg";

function MahdiyarPicture() {
  return (
    <div className="flex-[3] overflow-hidden cursor-default border border-solid border-neutral-700 rounded-md sm:block hidden">
      <Image
        src={pic}
        alt="Mahdiyar picture"
        id="2"
        className={
          "max-w-[190px] scale-150 transition-transform duration-300 md:max-w-[194px]  object-cover  object-right-top pr-5 h-full overflow-hidden"
        }
        placeholder={"blur"}
      />
    </div>
  );
}

export default MahdiyarPicture;
