"use client";
import { TypewriterEffectSmooth } from "./ui/Typegraphy";

export function TypoGraphyCustom({
  text,
  classes,
}: {
  text: string;
  classes?: string;
}) {
  const createWordsArray = (t: string) => {
    const wordsArray = t.split(" ");

    return wordsArray.map((w: string) => ({
      text: w,
    }));
  };

  const words = createWordsArray(text);

  return (
    <TypewriterEffectSmooth
      className={`text-inherit ${classes}`}
      words={words}
    />
  );
}
