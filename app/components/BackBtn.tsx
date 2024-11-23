import React from "react";
import Link from "next/link";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Bebas_Neue } from "next/font/google";

const Bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

function BackBtn() {
  return (
    <Link
      href="/"
      className={`${Bebas.className} animate-fade animate-delay-[2000ms] animate-duration-500 flex flex-row items-center justify-center gap-0.5 absolute top-6 left-6 md:top-7 md:left-7 lg:top-11 lg:left-11 text-white hover:cursor-pointer hover:text-Pink group z-50 transition-colors duration-300`}
    >
      <MdOutlineArrowBackIosNew className="-mt-0.5 text-xl font-bold md:text-2xl group-hover:-translate-x-1 transition-transform duration-300" />
      <span className="text-2xl sm2:text-2xl md:text-3xl text-center text-nowrap">
        Go back
      </span>
    </Link>
  );
}

export default BackBtn;
