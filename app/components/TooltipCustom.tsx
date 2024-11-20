import React from "react";
import { Tooltip } from "react-tooltip";

function TooltipCustom({ id }: { id: string }) {
  return (
    <Tooltip
      id={id}
      style={{
        backgroundColor: "#E2C9FF",
        fontSize: "0.8rem",
        color: "black",
      }}
    />
  );
}

export default TooltipCustom;
