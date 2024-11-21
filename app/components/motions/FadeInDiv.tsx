"use client";
import React from "react";
import { motion } from "framer-motion";

function FadeInDiv({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 50,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInDiv;
