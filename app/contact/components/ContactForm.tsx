"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Bebas_Neue, Montserrat } from "next/font/google";
import toast from "react-hot-toast";
import clsx from "clsx";
import FadeXdiv from "@/app/components/motions/FadeXdiv";

const Bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const Mont = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

const ContactForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    emailErr: "",
    subjectErr: "",
    messageErr: "",
  });
  const [formIsLoading, setFormIsLoading] = useState(false);

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  const subjectPattern = /^[a-zA-Z0-9.-]+$/;
  const messagePattern = /^[a-zA-Z0-9.-]+$/;

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const isEmailValid = emailPattern.test(formData.email);
    const isSubjectValid = subjectPattern.test(formData.subject);
    const isMessageValid = messagePattern.test(formData.message);

    if (!isEmailValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailErr: "Please enter a valid email address.",
      }));
    }

    if (!isSubjectValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        subjectErr: "Please enter a valid subject.",
      }));
    }

    if (!isMessageValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        messageErr: "Please enter a valid message.",
      }));
    }

    if (!isEmailValid || !isSubjectValid || !isMessageValid) return null;
    setFormIsLoading(true);
    emailjs
      .send(
        "service_bm9rycd",
        "template_sbjhtbl",
        formData,
        "q_R0r-Vq9vndc_uyP",
      )
      .then(() => {
        const success = "Your message has been sent successfully!";
        toast.success(success, {
          className: `${Mont.className} text-xs sm:text-sm md:text-base text-nowrap min-w-fit font-medium tracking-tight`,
        });
        setFormData({ subject: "", email: "", message: "" });
        setFormIsLoading(false);
      })
      .catch(() => {
        const error = "Failed to send your message.";
        toast.error(error, {
          className: `${Mont.className} text-xs sm:text-sm md:text-base text-nowrap min-w-fit font-medium tracking-tight`,
        });
        setFormIsLoading(false);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      emailRef.current?.focus();
    }, 2500);
  }, []);

  useEffect(() => {
    Object.values(errors).map((item) => {
      if (item) {
        console.log(item);
        toast.error(item, {
          className: `${Mont.className} text-xs sm:text-sm md:text-base text-nowrap min-w-fit font-medium tracking-tight`,
        });
      }
    });
  }, [errors]);

  return (
    <div
      className={`${Bebas.className} xl:mr-10 absolute mt-16 max-w-[300px] sm2:max-w-[400px] lg:mt-48 md:mt-20 lg:max-w-[500px] xl:max-w-[600px] w-full`}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-3 lg:gap-4 w-full relative"
      >
        <FadeXdiv
          delay={1}
          leftOrRight={"right"}
          className="flex flex-row items-center justify-between gap-5 lg:gap-1 w-full"
        >
          <label className="text-white flex-1 text-center text-2xl lg:text-3xl text-nowrap">
            Email :
          </label>
          <input
            className="bg-Pink flex-[2] sm:flex-[3] rounded-sm px-2.5 outline-none py-1 lg:py-2 lg:px-4 tracking-wider lg:text-lg bg-opacity-70 placeholder:text-gray-600 text-base focus:bg-opacity-100 w-full"
            type="email"
            name="email"
            ref={emailRef}
            placeholder="Jaden123@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            spellCheck={false}
          />
        </FadeXdiv>
        <FadeXdiv
          delay={1.4}
          leftOrRight={"left"}
          className="flex flex-row items-center justify-between gap-5 lg:gap-1 w-full"
        >
          <label className="text-white flex-1 text-center text-2xl lg:text-3xl text-nowrap">
            Subject :
          </label>
          <input
            className="bg-Pink flex-[2] sm:flex-[3] rounded-sm px-2.5 outline-none py-1 lg:py-2 lg:px-4 tracking-wider lg:text-lg bg-opacity-70 placeholder:text-gray-600 text-base focus:bg-opacity-100 w-full"
            type="text"
            name="subject"
            placeholder="Hiring to company."
            value={formData.subject}
            onChange={handleChange}
            required
            spellCheck={false}
          />
        </FadeXdiv>
        <FadeXdiv
          delay={1.8}
          leftOrRight={"right"}
          className="flex flex-row items-center justify-between gap-5 lg:gap-1 w-full"
        >
          <label className="text-white flex-1 text-center text-2xl lg:text-3xl text-nowrap self-start">
            Message :
          </label>
          <textarea
            className="bg-Pink flex-[2] sm:flex-[3] rounded-sm min-h-16 lg:min-h-20 lg:max-h-28 max-h-24 self-end px-2.5 outline-none py-1 lg:py-2 lg:px-4 tracking-wider lg:text-lg bg-opacity-70 placeholder:text-gray-600 text-base focus:bg-opacity-100 w-full"
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            required
            spellCheck={false}
          ></textarea>
        </FadeXdiv>
        {formData.subject && formData.message && formData.email && (
          <button
            disabled={formIsLoading}
            type="submit"
            className={clsx(
              `bg-Pink text-white px-8 animate-fade-up animate-duration-500 self-end transition-colors duration-300 py-1 rounded-sm -bottom-16 absolute text-xl`,
              {
                "bg-opacity-70 cursor-not-allowed": formIsLoading,
                "bg-opacity-100 cursor-pointer hover:bg-Purple": !formIsLoading,
              },
            )}
          >
            {formIsLoading ? "Is sending..." : "Send Message"}
          </button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
