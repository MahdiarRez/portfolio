import React from "react";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";

const Bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

function NavbarMobile() {
  return (
    <div className="absolute animate-fade animate-duration-500 animate-delay-[1700ms] top-16 left-0 right-0 w-full sm:hidden flex justify-center items-center">
      <ul
        className={`${Bebas.className} flex flex-row w-full justify-center gap-9 items-center`}
      >
        <Link
          href="/skills"
          className="text-white font-light text-lg opacity-90 shadow-text tracking-wider"
        >
          Skills
        </Link>
        <li className="text-white font-light text-lg opacity-90 shadow-text tracking-wider">
          Projects
        </li>
        <li className="text-white font-light text-lg opacity-90 shadow-text tracking-wider">
          Contact me
        </li>
      </ul>
    </div>
  );
}

export default NavbarMobile;
