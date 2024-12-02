"use client";
import React from "react";
import { ModalFooter } from "@/app/components/ui/Modal";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import TooltipCustom from "@/app/components/TooltipCustom";
import { DemoBtn, GithubBtn } from "@/app/projects/NavBtn";

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
      className="min-h-[430px] hidden sm:flex sm:flex-col gap-5 ml-5 z-50 max-h-[431px]"
    >
      <ModalFooter
        className={`font-bold gap-3 cursor-default justify-center overflow-hidden hidden sm:flex`}
      >
        <GithubBtn github={github} />
        <DemoBtn demo={demo} />
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
