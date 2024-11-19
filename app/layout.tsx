import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Socials from "@/app/components/Socials";
import PressEnter from "@/public/icons/PressEnter";

export const metadata: Metadata = {
  title: "Mahdiyar Rezaei",
  description: "About Mahdiyar Rezaei",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#070622] relative ">
        <Socials />
        {children}
        <PressEnter />
      </body>
    </html>
  );
}
