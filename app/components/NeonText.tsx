import React, { ReactNode } from "react";
import localFont from "next/font/local";

const deathStar = localFont({
  src: "../../public/fonts/DeathStar.otf",
  display: "swap",
});

function NeonText({
  children,
  classes,
  tracking = "tracking-wide",
  clickable = false,
}: {
  children: ReactNode;
  classes: string;
  tracking?: string;
  clickable?: boolean;
}) {
  if (clickable) {
    return (
      <span
        style={{
          filter: "drop-shadow(0px 0px 10px rgba(256, 256, 256, 0.7))",
        }}
        className={`${deathStar.className} stroke-text brightness-110 text-transparent uppercase ${classes} ${tracking}  text-nowrap`}
      >
        {children}
      </span>
    );
  }
  return (
    <span
      className={`${deathStar.className} stroke-text brightness-110 text-transparent uppercase ${classes} ${tracking} shadow-text text-nowrap`}
    >
      {children}
    </span>
  );
}

export default NeonText;
