import React from "react";
import { Bebas_Neue } from "next/font/google";

const Bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

function NavbarMobile() {
  return (
    <div className="absolute top-10 left-0 right-0 w-full flex justify-center items-center">
      <ul
        className={`${Bebas.className} flex flex-row gap-7 items-center`}
      >
        <li className="text-white font-light text-lg tracking-wider">Skills</li>
        <li className="text-white font-light text-lg tracking-wider">
          Projects
        </li>
        <li className="text-white font-light text-lg tracking-wider">
          Contact me
        </li>
      </ul>
    </div>
  );
}

export default NavbarMobile;
