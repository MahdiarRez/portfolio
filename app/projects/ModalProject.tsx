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
import { DemoBtn, GithubBtn } from "@/app/projects/NavBtn";
import Image from "next/image";

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
  imgUrl: string;
}

const Mont = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

function ModalProject({ project }: { project: ProjectType }) {
  const { name, description, technos, githubUrl, demoUrl, imgUrl } = project;
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
          <ModalContent className="bg-DarkBlue cursor-default overflow-hidden relative">
            <h4
              className={`${deathStar.className} text-xl sm2:text-2xl md:text-3xl z-40 xl:text-4xl text-neutral-100 font-bold text-center tracking-widest`}
            >
              {name}
            </h4>
            <div className="py-2.5 flex flex-wrap items-start justify-start max-w-sm md:max-w-full mx-auto text-white ">
              <p
                className={`${Mont.className} text-center text-sm sm:text-base font-medium md:text-lg`}
              >
                {description}
              </p>
            </div>
            <div className="bg-DarkBlue hidden sm:flex w-full relative max-h-32 h-32 overflow-hidden border border-solid border-neutral-700 rounded-md cursor-default">
              <Image
                src={imgUrl}
                placeholder={"blur"}
                blurDataURL={imgUrl}
                fill
                alt="project-pic"
                width={380}
                height={380}
                className="w-full z-10 object-cover object-center hover:object-top transition-all duration-300 h-32"
              />
            </div>
            <div className="sm:hidden flex flex-col mt-3 sm2:mt-1.5 items-center justify-center gap-3">
              <GithubBtn github={githubUrl} isForMobile={true} />
              <DemoBtn demo={demoUrl} isForMobile={true} />
            </div>
            <ShooterCart />
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalProject;
