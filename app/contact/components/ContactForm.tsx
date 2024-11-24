"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Bebas_Neue } from "next/font/google";

const Bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .send(
        "service_bm9rycd",
        "template_sbjhtbl",
        formData,
        "q_R0r-Vq9vndc_uyP",
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ subject: "", email: "", message: "" }); // Reset form
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setErrorMessage("Failed to send your message. Please try again later.");
      });
  };

  return (
    <div
      className={`${Bebas.className} absolute  max-w-[300px] sm2:max-w-[400px] lg:mt-32 md:mt-20 lg:max-w-[500px] xl:max-w-[600px] w-full`}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-3 lg:gap-4 w-full "
      >
        <div className="flex flex-row items-center justify-between gap-5 lg:gap-1 w-full">
          <label className="text-white flex-1 text-center text-2xl lg:text-3xl text-nowrap">
            Email :
          </label>
          <input
            className="bg-Pink flex-[2] sm:flex-[3] rounded-sm px-2.5 outline-none py-1 lg:py-2 lg:px-4 tracking-wide lg:text-lg bg-opacity-80 placeholder:text-gray-600 text-base focus:bg-opacity-100 w-full"
            type="email"
            name="email"
            placeholder="Jaden123@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-row items-center justify-between gap-5 lg:gap-1 w-full">
          <label className="text-white flex-1 text-center text-2xl lg:text-3xl text-nowrap">
            Subject :
          </label>
          <input
            className="bg-Pink flex-[2] sm:flex-[3] rounded-sm px-2.5 outline-none py-1 lg:py-2 lg:px-4 tracking-wide lg:text-lg bg-opacity-80 placeholder:text-gray-600 text-base focus:bg-opacity-100 w-full"
            type="text"
            name="subject"
            placeholder="Hiring to company."
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-row items-center justify-between gap-5 lg:gap-1 w-full">
          <label className="text-white flex-1 text-center text-2xl lg:text-3xl text-nowrap self-start">
            Message :
          </label>
          <textarea
            className="bg-Pink flex-[2] sm:flex-[3] rounded-sm min-h-16 max-h-24 self-end px-2.5 outline-none py-1 lg:py-2 lg:px-4 tracking-wide lg:text-lg bg-opacity-80 placeholder:text-gray-600 text-base focus:bg-opacity-100 w-full"
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default ContactForm;
