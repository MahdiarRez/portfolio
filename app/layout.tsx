import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Socials from "@/app/components/Socials";
import PressEnter from "@/public/icons/PressEnter";
import Cv from "@/app/components/Cv";
import { ShootingStars } from "@/app/components/ui/ShootingStar";
import { Toaster } from "react-hot-toast";

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
      <body className="bg-DarkBlue relative h-dvh overflow-hidden">
        <Socials isForMobile={false} />
        <PressEnter />
        <Cv />
        <ShootingStars />
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 3000,
            style: {
              padding: "10px",
              color: "#070622",
              backgroundColor: "white",
              marginBottom: "10px",
            },
          }}
          gutter={10}
        />
        {children}
      </body>
    </html>
  );
}
