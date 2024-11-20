import React from "react";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";

const Bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

function NavbarMobile() {
  return (
    <div className="absolute animate-fade animate-duration-500 animate-delay-[1700ms] top-16 left-0 right-0 w-full sm:hidden flex justify-center items-center">
      <ul className={`flex flex-row w-full justify-center gap-4 items-center`}>
        <NavbarBtn href="/skills">Skills</NavbarBtn>
        <NavbarBtn href="/projects">Projects</NavbarBtn>
        <NavbarBtn href="/contact">Contact me</NavbarBtn>
      </ul>
    </div>
  );
}

function NavbarBtn({
  href,
  children,
  classes,
  isResumeBtn = false,
}: {
  href: string;
  children: React.ReactNode;
  classes?: string;
  isResumeBtn?: boolean;
}) {
  if (isResumeBtn) {
    return (
      <Link
        href={href}
        className={`${classes} ${Bebas.className} text-white bg-Pink font-light hover:bg-Purple transition-colors duration-300 rounded-sm  px-3 py-2 flex justify-center items-center text-base sm:hidden opacity-90 shadow-text tracking-wider`}
      >
        {children}
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className={`${classes} ${Bebas.className} text-white bg-Pink font-light hover:bg-Purple transition-colors duration-300 rounded-sm w-24 sm:w-28 lg:w-32 px-2 py-1 flex justify-center items-center text-base sm:text-lg opacity-90 shadow-text tracking-wider`}
    >
      {children}
    </Link>
  );
}

export { NavbarBtn };
export default NavbarMobile;
