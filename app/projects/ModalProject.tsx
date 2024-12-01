import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/app/components/ui/Modal";
import ClickToOpen from "@/app/components/ClickToOpen";
import { ShooterCart } from "@/app/components/ui/ShooterCart";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

const deathStar = localFont({
  src: "../../public/fonts/DeathStar.otf",
  display: "swap",
});

interface ProjectType {
  name: string;
  description: string;
  technos: string[];
  githubUrl: string;
  demoUrl: string;
}

const Mont = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

function ModalProject({ project }: { project: ProjectType }) {
  const { name, description, technos, githubUrl, demoUrl } = project;
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="text-white flex justify-center group/modal-btn">
          <ClickToOpen />
        </ModalTrigger>
        <ModalBody
          isProjectModal={true}
          technos={technos}
          github={githubUrl}
          demo={demoUrl}
        >
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
            <ShooterCart />
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalProject;
