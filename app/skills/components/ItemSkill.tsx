"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/app/components/ui/LinkPreview";

function ItemSkill({
  children,
  i,
  color,
  url,
}: {
  children: React.ReactNode;
  i: number;
  color?: string;
  url: string;
}) {
  return (
    <LinkPreview
      url={url}
      className={`${color} transition-colors duration-300 cursor-pointer text-white`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 1.5 + i * 0.1 }}
        className={`text-sm lg:text-base bg-black bg-opacity-45 border-solid  border border-Pink w-[6.5rem] lg:py-3 py-1.5 rounded-sm sm:w-32 md:w-28 lg:w-32 text-center text-nowrap`}
      >
        {children}
      </motion.div>
    </LinkPreview>
  );
}

export default ItemSkill;
