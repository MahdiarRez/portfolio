import React from "react";
import Image from "next/image";
import backgroundImage from "@/public/skillsBackground.png";

function Page() {
  return (
    <div className="h-screen">
      <Image
        src={backgroundImage}
        alt="bg-image"
        className="object-cover h-full z-0"
      />
    </div>
  );
}

export default Page;
