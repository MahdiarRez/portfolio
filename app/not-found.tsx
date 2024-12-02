import React from "react";
import { Spotlight } from "@/app/components/ui/Sparklight";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const deathStar = localFont({
  src: "../public/fonts/DeathStar.otf",
  display: "swap",
});

const Mont = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

function NotFound() {
  return (
    <div className="h-dvh w-dvw rounded-md flex md:items-center md:justify-center bg-DarkBlue antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1
          className={`${deathStar.className} tracking-widest text-4xl sm:text-5xl md:text-6xl py-2 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50`}
        >
          Error 404
          <br /> Page not found.
        </h1>
        <p
          className={`${Mont.className} mt-9 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto`}
        >
          Click here to navigate to home.
        </p>
        <Link
          href={"/"}
          className={` ${deathStar.className} tracking-wider text-Pink border-Pink border border-solid px-8 hover:text-white hover:border-white transition-colors duration-300 w-fit text-xl py-1.5 mx-auto block mt-6 rounded-[0.25rem]`}
        >
          Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
