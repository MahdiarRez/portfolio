"use client";
import React from "react";
import { motion } from "framer-motion";

function FadeXdiv({
  children,
  className,
  leftOrRight,
}: {
  children: React.ReactNode;
  className?: string;
  leftOrRight: "left" | "right";
}) {
  if (leftOrRight === "left") {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          bounce: 0.4,
          duration: 0.5,
          type: "spring",
          stiffness: "100",
          damping: 8,
          delay: 0.7,
        }}
      >
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        bounce: 0.4,
        duration: 0.5,
        type: "spring",
        stiffness: "100",
        damping: 8,
        delay: 0.7,
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeXdiv;
