import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import localFont from "next/font/local";

const deathStar = localFont({
  src: "../../public/fonts/DeathStar.otf",
  display: "swap",
});

function GithubBtn({
  github,
  isForMobile = false,
}: {
  github: string;
  isForMobile?: boolean;
}) {
  if (isForMobile) {
    return (
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
          className={`${deathStar.className} sm:hidden block text-base md:text-lg bg-transparent w-52 text-nowrap md:w-40 text-Pink border border-solid border-Pink px-3 py-1 rounded-[0.235rem] hover:text-white hover:border-white transition-colors duration-300 ease-in-out tracking-wide`}
        >
          Github
        </motion.button>
      </Link>
    );
  }
  return (
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
  );
}

function DemoBtn({
  demo,
  isForMobile = false,
}: {
  demo: string;
  isForMobile?: boolean;
}) {
  if (isForMobile) {
    return (
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
          className={`${deathStar.className} sm:hidden block text-base md:text-lg bg-transparent w-52  text-nowrap md:w-40 text-Pink border border-solid border-Pink px-3 py-1 rounded-[0.235rem] hover:text-white hover:border-white transition-colors duration-300 ease-in-out tracking-wide`}
        >
          Demo
        </motion.button>
      </Link>
    );
  }
  return (
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
  );
}

export { GithubBtn, DemoBtn };
