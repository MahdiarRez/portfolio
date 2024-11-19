"use client";
import React from "react";
import { motion } from "framer-motion";

function FadeInDiv({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 50,
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInDiv;
