import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Socials from "@/app/components/Socials";
import PressEnter from "@/public/icons/PressEnter";
import Cv from "@/app/components/Cv";
import { ShootingStars } from "@/app/components/ui/ShootingStar";

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
      <body className="bg-DarkBlue relative ">
        <Socials />
        <PressEnter />
        <Cv />
        <ShootingStars />
        {children}
      </body>
    </html>
  );
}
