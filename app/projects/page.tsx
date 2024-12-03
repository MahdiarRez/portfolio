import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import "./index.css";
import Project from "@/app/projects/Project";
import BackBtn from "@/app/components/BackBtn";
import PagesTitle from "@/app/components/common/PagesTitle";
import bg from "../../public/projectsBackground.jpg";

export const metadata: Metadata = {
  title: "Projects",
  description: "Mahdiar's projects",
};

function Page() {
  return (
    <div className="h-dvh flex justify-center items-center overflow-hidden relative  min-h-[683px]">
      <Image
        src={bg}
        priority
        placeholder={"blur"}
        alt="bg-image"
        quality={100}
        fill
        sizes={"100vw"}
        className="object-cover object-center h-full z-0 w-full"
      />
      <Project>
        <BackBtn />
        <PagesTitle classes="project-shadow-text text-6xl sm2:text-7xl ">
          Projects
        </PagesTitle>
      </Project>
    </div>
  );
}

export default Page;
