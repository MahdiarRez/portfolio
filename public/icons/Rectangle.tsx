import React from "react";

function Rectangle({ classes }: { classes: string }) {
  return (
    <svg
      height="30"
      className={classes}
      viewBox="0 0 625 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_9_281)">
        <path
          d="M4.5 5H620.5V20H4.5V5Z"
          stroke="#CEB7FF"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_9_281"
          x="0"
          y="0.9"
          width="625"
          height="34"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.807843 0 0 0 0 0.717647 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_281"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9_281"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default Rectangle;
