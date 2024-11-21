"use client";
import React from "react";
import { SparklesCore } from "./ui/Sparkles";
import FadeInDiv from "@/app/components/motions/FadeInDiv";

export function SparklesPreview() {
  return (
    <FadeInDiv delay={2} className="w-full h-20 relative">
      {/* Gradients */}
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent left-0 right-0 via-Pink to-transparent h-[2px] w-full blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent left-0 right-0 via-Purple to-transparent h-px w-full" />

      {/* Core component */}
      <SparklesCore
        background="transparent"
        minSize={0.1}
        maxSize={1}
        particleDensity={200}
        className="w-full h-full"
        particleColor="#E2C9FF"
      />

      {/* Radial Gradient to prevent sharp edges */}
      <div className="absolute inset-0 w-full h-full bg-transparent rounded-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    </FadeInDiv>
  );
}
