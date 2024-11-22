import React from "react";
import { FlipWords } from "./ui/FlipWord";

export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <FlipWords
      className="text-nowrap text-sm md:text-lg font-normal tracking-wider text-Pink"
      words={words}
    />
  );
}
