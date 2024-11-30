import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/app/components/ui/Modal";
import ClickToOpen from "@/app/components/ClickToOpen";
import Link from "next/link";
import { ShooterCart } from "@/app/components/ui/ShooterCart";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

const deathStar = localFont({
  src: "../../public/fonts/DeathStar.otf",
  display: "swap",
});

const Mont = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

function ModalProject({
  description,
  name,
}: {
  description: string;
  name: string;
}) {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="text-white flex justify-center group/modal-btn">
          <ClickToOpen />
        </ModalTrigger>
        <ModalBody>
          <ModalContent className="bg-DarkBlue cursor-default overflow-hidden relative ">
            <h4
              className={`${deathStar.className} text-xl sm:text-2xl md:text-3xl text-neutral-600 z-40 xl:text-4xl dark:text-neutral-100 font-bold text-center tracking-wider mb-4`}
            >
              {`About ${name}`}
            </h4>
            <div className="py-2.5 flex flex-wrap items-start justify-start max-w-sm md:max-w-full mx-auto text-white ">
              <p
                className={`${Mont.className} text-center text-sm sm2:text-base font-medium md:text-lg`}
              >
                {description}
              </p>
            </div>
            <Link
              href="/contact"
              className={`${deathStar.className} text-center text-Pink px-4 py-1 border-Pink border border-solid rounded-[0.235rem] focus:text-white focus:border-white transition-colors duration-300 mx-7 bg-transparent tracking-wider mt-3 sm:hidden`}
            >
              Get in touch
            </Link>
            <ShooterCart />
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalProject;
