import React from "react";
import { Montserrat } from "next/font/google";
import { NavbarBtn } from "@/app/components/Navbar";

const Mont = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

interface ClickToOpenProps {
  descriptionIsOpen: boolean;
  setDescriptionIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function TextDescription({
  descriptionIsOpen,
  setDescriptionIsOpen,
}: ClickToOpenProps) {
  return (
    <div
      onClick={() => setDescriptionIsOpen(!descriptionIsOpen)}
      className="px-7 cursor-pointer py-6 max-w-[330px] sm2:max-w-96 sm:max-w-[450px] lg:max-w-[550px] animate-fade-down animate-duration-500"
    >
      <div
        className={`${Mont.className} text-xs md:tracking-wider tracking-wide leading-5 sm2:text-sm sm2:py-6 sm2:px-5 py-3 px-2 bg-black bg-opacity-35 border-solid border border-Pink text-center font-light text-white`}
      >
        <p>
          I am a skilled Front-End Developer with expertise in React and
          Next.js. With a strong focus on creating intuitive and responsive web
          applications, I leverage my knowledge of modern JavaScript frameworks
          to build seamless user experiences.
        </p>
        <div className="border-b border-Pink border-solid pb-3.5 border-opacity-35 sm:block hidden h-2 w-full"></div>
        <div className="hidden sm:flex mt-3.5 flex-row gap-4 w-full items-center justify-center">
          <NavbarBtn href="/skills">Skills</NavbarBtn>
          <NavbarBtn href="/projects">Projects</NavbarBtn>
          <NavbarBtn classes="text-nowrap" href="/contact">
            Contact me
          </NavbarBtn>
        </div>
      </div>
    </div>
  );
}

export default TextDescription;
