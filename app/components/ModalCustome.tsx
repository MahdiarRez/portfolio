"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../components/ui/Modal";
import ClickToOpen from "@/app/components/ClickToOpen";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ShooterCart } from "@/app/components/ui/ShooterCart";
import MahdiyarPicture from "@/app/components/MahdiyarPicture";

const deathStar = localFont({
  src: "../../public/fonts/DeathStar.otf",
  display: "swap",
});

// const Bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const Mont = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

export function ModalCustome() {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="text-white flex justify-center group/modal-btn">
          <ClickToOpen />
        </ModalTrigger>
        <ModalBody>
          <ModalContent className="bg-DarkBlue cursor-default overflow-hidden relative">
            <h4
              className={`${deathStar.className} text-2xl md:text-3xl text-neutral-600 z-40 xl:text-4xl dark:text-neutral-100 font-bold text-center tracking-wider mb-4`}
            >
              About me
            </h4>
            <div className="py-2.5 flex flex-wrap items-start justify-start max-w-sm md:max-w-full mx-auto text-white ">
              <p
                className={`${Mont.className} text-center text-sm sm2:text-base font-medium md:text-lg`}
              >
                I am a skilled Front-End Developer with expertise in React and
                Next.js. With a strong focus on creating intuitive and
                responsive web applications, I leverage my knowledge of modern
                JavaScript frameworks to build seamless user experiences.
              </p>
            </div>
            {/*<BackgroundBeams />*/}
            <ShooterCart />
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}

export function ModalNav() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.4,
        type: "spring",
        stiffness: 100,
      }}
      className="min-h-[50%] sm:max-h-[54%] sm:min-h-[54%] flex flex-col gap-5 ml-5 z-50"
    >
      <ModalFooter
        className={` font-bold gap-3 cursor-default justify-center overflow-hidden`}
      >
        {/*<button className="px-2 py-1 bg-gray-200 text-black dark:bg-transparent dark:border-Pink dark:text-Pink border border-gray-300 rounded-[0.235rem] text-base sm:text-lg sm2:tracking-wide w-28 dark:hover:bg-Purple dark:hover:border-Purple dark:hover:text-DarkBlue ease-in-out transition-colors duration-300">*/}
        {/*  Close*/}
        {/*</button>*/}
        <button
          className={`${deathStar.className} sm:hidden bg-DarkBlue text-Pink dark:bg-Pink dark:text-DarkBlue text-base sm:text-lg sm2:tracking-wide px-2 py-1 rounded-[0.235rem] border dark:border-Pink  w-36 tracking-wide dark:hover:border-Purple dark:hover:bg-Purple ease-in-out transition-colors duration-300`}
        >
          Get in touch
        </button>
        <Link href="/">
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
            my Projects
          </motion.button>
        </Link>
        <Link href="/skills">
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
            My Skills
          </motion.button>
        </Link>
        <Link href="/contact">
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.5,
              type: "spring",
              stiffness: 50,
              delay: 0.4 + 0.6,
            }}
            className={`${deathStar.className} hidden sm:block text-base md:text-lg bg-transparent w-[8.5rem] text-nowrap md:w-40 text-Pink border border-solid border-Pink px-3 py-1 rounded-[0.235rem] hover:text-white hover:border-white transition-colors duration-300 ease-in-out tracking-wide`}
          >
            Contact me
          </motion.button>
        </Link>
      </ModalFooter>
      <MahdiyarPicture />
    </motion.div>
  );
}
