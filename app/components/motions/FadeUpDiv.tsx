"use client";
import React from "react";
import { motion } from "framer-motion";

function FadeUpDiv({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 17 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        bounce: 0.4,
        duration: 0.5,
        type: "spring",
        stiffness: "100",
        damping: 8,
        delay: 1,
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeUpDiv;
