"use client";
import React from "react";
import { ModalFooter } from "@/app/components/ui/Modal";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import TooltipCustom from "@/app/components/TooltipCustom";
import Link from "next/link";

const deathStar = localFont({
  src: "../../public/fonts/DeathStar.otf",
  display: "swap",
});

function ProjectNav({
  technos,
  github,
  demo,
}: {
  technos: string[];
  github: string;
  demo: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.4,
        type: "spring",
        stiffness: 100,
      }}
      className="min-h-[430px] flex flex-col gap-5 ml-5 z-50 max-h-[431px]"
    >
      <ModalFooter
        className={`font-bold gap-3 cursor-default justify-center overflow-hidden hidden sm:flex`}
      >
        <Link href={github} target={"_blank"}>
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.5,
              type: "spring",
              stiffness: 50,
              delay: 0.4 + 0.2,
            }}
            className={`${deathStar.className} hidden sm:block text-base md:text-lg bg-transparent w-[8.5rem] text-nowrap md:w-40 text-Pink border border-solid border-Pink px-3 py-1 rounded-[0.235rem] hover:text-white hover:border-white transition-colors duration-300 ease-in-out tracking-wide`}
          >
            Github
          </motion.button>
        </Link>
        <Link href={demo} target={"_blank"}>
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.5,
              type: "spring",
              stiffness: 50,
              delay: 0.4 + 0.4,
            }}
            className={`${deathStar.className} hidden sm:block text-base md:text-lg bg-transparent w-[8.5rem] text-nowrap md:w-40 text-Pink border border-solid border-Pink px-3 py-1 rounded-[0.235rem] hover:text-white hover:border-white transition-colors duration-300 ease-in-out tracking-wide`}
          >
            Demo
          </motion.button>
        </Link>
      </ModalFooter>
      <div
        className="flex-[3] p-6 overflow-hidden bg-DarkBlue cursor-default border border-solid border-neutral-700 rounded-md sm:flex sm:flex-col items-start justify-between hidden"
        data-tooltip-id="technos"
        data-tooltip-place="bottom"
        data-tooltip-content="Technologies"
        id={"3"}
      >
        {technos.map((tech) => (
          <span
            id={"4"}
            key={tech}
            className={`bg-gradient-to-t from-Pink to-white bg-clip-text text-transparent text-left tracking-wider ${deathStar.className}`}
          >
            {tech}
          </span>
        ))}
        <TooltipCustom id="technos" />
      </div>
    </motion.div>
  );
}

export default ProjectNav;
