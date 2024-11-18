"use client";
import React from "react";
import { motion } from "framer-motion";

function ScaleInDiv({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <motion.div className={className}>{children}</motion.div>;
}

export default ScaleInDiv;
