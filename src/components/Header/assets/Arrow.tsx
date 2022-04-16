import React from "react";

import { SVGPropTypes } from "../../../interfaces";

function Arrow({ fillColor }: SVGPropTypes) {
  return (
    <svg
      className="Arrow"
      width={12}
      height={7}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={fillColor}
        strokeWidth={1.8}
        strokeLinecap="round"
        d="M1.273 1 6 5.727M10.727 1 6 5.727"
      />
    </svg>
  );
}

export default Arrow;
