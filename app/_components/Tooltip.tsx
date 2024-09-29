"use client";
import React, { useState } from "react";
import { TooltipProps } from "@/app/types";

const Tooltip = ({ message, children }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center group"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute -bottom-16 bg-lightBlue flex flex-col items-center">
          <div className="min-w-fit"></div>
          <span className="relative z-10 p-2 text-xs leading-none whitespace-no-wrap shadow-lg rounded-md">
            {message}
          </span>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
