"use client";
import React, { useState } from "react";
import { TooltipProps } from "@/app/types";
import ReactMarkdown from "react-markdown";

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
        <div className="z-10 p-4 min-w-[80vw] sm:min-w-[260px] absolute translate-y-full -bottom-8 bg-lightBlue flex flex-col items-center shadow-lg rounded-md">
          <ReactMarkdown className="text-sm">{message}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
