"use client";
import React from "react";
import { motion } from "framer-motion";
import TooltipCustom from "@/app/components/TooltipCustom";

function ItemSocial({
  children,
  name,
  href,
  i,
}: {
  children: React.ReactNode;
  name: string;
  href: string;
  i: number;
}) {
  return (
    <motion.a
      data-tooltip-id="social-tooltip"
      data-tooltip-content={name}
      data-tooltip-place="right"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 200, delay: 1.3 + i * 0.05 }}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <TooltipCustom id="social-tooltip" />
    </motion.a>
  );
}

export default ItemSocial;
