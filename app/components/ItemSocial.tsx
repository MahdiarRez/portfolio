"use client";
import React from "react";
import { motion } from "framer-motion";

function ItemSocial({
  children,
  href,
  i,
}: {
  children: React.ReactNode;
  href: string;
  i: number;
}) {
  return (
    <motion.a
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 200, delay: 1.3 + i * 0.05 }}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </motion.a>
  );
}

export default ItemSocial;
