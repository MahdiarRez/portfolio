import React from "react";
import NeonText from "@/app/components/NeonText";

interface ClickToOpenProps {
  descriptionIsOpen: boolean;
  setDescriptionIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ClickToOpen({
  descriptionIsOpen,
  setDescriptionIsOpen,
}: ClickToOpenProps) {
  return (
    <div
      className="flex justify-center items-center py-7 px-10 cursor-pointer hover:brightness-110 transition-all duration-300 "
      onClick={() => setDescriptionIsOpen(!descriptionIsOpen)}
    >
      <NeonText
        clickable={true}
        classes={"text-2xl font-bold text-center sm:text-3xl"}
        tracking="tight"
      >
        Click
        <br /> to open
      </NeonText>
    </div>
  );
}

export default ClickToOpen;
