import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Image from "next/image";
import backgroundImage from "../public/homeBackground.png";
import Socials from "@/app/components/Socials";

export const metadata: Metadata = {
  title: "Mahdiyar Rezaei",
  description: "About Mahdiyar Rezaei",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden bg-[#070622]">
        <div className="h-screen relative">
          <Image
            src={backgroundImage}
            alt="Background Image"
            fill={true}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <Socials />
          <main className="w-full pt-20 mx-auto h-full overflow-y-scroll z-10 relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
