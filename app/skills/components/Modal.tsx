"use client";
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";
import { Vortex } from "@/app/components/ui/VortexBg";

const Bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

function Modal() {
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        setIsOpen(true);
      }
    });

    return () => {
      window.removeEventListener("keydown", (e) => {
        if (e.code === "Enter") {
          setIsOpen(true);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-0 h-screen flex justify-center items-center left-0 w-screen z-50"
        >
          <div
            className={`${Bebas.className} text-center tracking-wider text-3xl text-white bg-black max-w-3/4 rounded-md flex justify-center items-center h-3/4 bg-opacity-80 px-10 py-5 backdrop-blur-sm`}
          >
            <Vortex className="z-0 w-20" />
            <span className="z-50">
              Hover on skill <br /> to see the website !
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
