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
          <ModalContent className="bg-DarkBlue cursor-default overflow-hidden relative ">
            <h4
              className={`${deathStar.className} text-2xl sm:text-3xl mb-4 text-neutral-600 z-40 md:text-4xl dark:text-neutral-100 font-bold text-center tracking-wider `}
            >
              About me
            </h4>
            <div className="py-2.5 flex flex-wrap items-start justify-start max-w-sm md:max-w-full mx-auto text-white ">
              <p
                className={`${Mont.className} text-center text-sm sm2:text-base font-medium sm:text-lg`}
              >
                <span className="text-pink-100 uppercase">front-end</span>{" "}
                developer proficient in React, Next.js, Redux, React Query,
                Tailwind CSS and other libraries. Building engaging and
                performant web applications. Check out my projects and full
                skill list to know me better ! Also i am 21 years old.
              </p>
            </div>

            <Link
              href="/contact"
              className={`${deathStar.className} text-center mt-3 text-Pink px-2.5 py-3 sm:hidden text-sm text-nowrap border-Pink border border-solid rounded-[0.235rem] focus:text-white focus:border-white transition-colors duration-300 bg-transparent tracking-wider`}
            >
              Get in touch with me
            </Link>
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
      className="min-h-[430px] hidden sm:flex sm:flex-col gap-5 ml-5 z-50 max-h-[431px]"
      id="ModalNav"
    >
      <ModalFooter
        className={`font-bold gap-3 cursor-default justify-center overflow-hidden hidden sm:flex`}
      >
        <Link href="/projects">
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
