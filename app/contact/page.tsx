import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Modal from "@/app/skills/components/Modal";
import BackBtn from "@/app/components/BackBtn";
import PagesTitle from "@/app/components/common/PagesTitle";
import "./index.css";
import ContactForm from "@/app/contact/components/ContactForm";
import Socials from "@/app/components/Socials";

export const metadata: Metadata = {
  title: "Contact me",
  description: "Contact Mahdiyar",
};

function Page() {
  return (
    <div className="h-dvh flex justify-center items-center overflow-hidden relative">
      <Image
        src="/contactBackground.png"
        alt="bg-image"
        width={1000}
        height={700}
        className="object-cover object-center h-full z-0 w-full"
      />
      <BackBtn />
      <PagesTitle classes="contactTitle-shadow-text text-5xl sm2:text-6xl">
        Contact me
      </PagesTitle>
      <ContactForm />
      <Socials isForMobile={true} />
      <Modal>
        Have questions or ideas ? <br /> Don’t hesitate to get in touch !{" "}
      </Modal>
    </div>
  );
}

export default Page;
