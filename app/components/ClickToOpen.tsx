import React from "react";
import NeonText from "@/app/components/NeonText";

function ClickToOpen() {
  return (
    <div className="flex justify-center items-center py-6 px-9 cursor-pointer  transition-all duration-300 ">
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
