import React from "react";
import type { Metadata } from "next";
// import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import backgroundImage from "@/public/contactBackground.png";
import Modal from "@/app/skills/components/Modal";
import BackBtn from "@/app/components/BackBtn";
import PagesTitle from "@/app/components/common/PagesTitle";
import "./index.css";
import ContactForm from "@/app/contact/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact me",
  description: "Contact Mahdiyar",
};
// const Bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

function Page() {
  return (
    <div className="h-screen flex justify-center items-center overflow-hidden">
      <Image
        src={backgroundImage}
        alt="bg-image"
        className="object-cover object-center h-full z-0"
      />
      <BackBtn />
      <PagesTitle classes="contactTitle-shadow-text">Contact me</PagesTitle>
      <ContactForm />
      <Modal />
    </div>
  );
}

export default Page;
