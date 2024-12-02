import React from "react";
import { Spotlight } from "@/app/components/ui/Sparklight";

function NotFound() {
  return (
    <div className="h-dvh w-dvw rounded-md flex md:items-center md:justify-center bg-DarkBlue antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl py-2 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Error 404
          <br /> Page not found.
        </h1>
        <p className="mt-6 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Click here to navigate to home.
        </p>
        <button className="text-Pink border-Pink border border-solid px-4 py-1 mx-auto block mt-3 rounded-[0.25rem]">
          Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;
