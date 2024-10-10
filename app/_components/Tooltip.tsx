'use client';
import React, { useState } from 'react';
import { TooltipProps } from '@/app/types';
import ReactMarkdown from 'react-markdown';


const Tooltip = ({ message, children }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="sm:relative flex flex-col items-center group"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <>
          <div onClick={() => setIsVisible(false)} className="sm:hidden fixed w-screen h-screen bg-black opacity-70 top-0 left-0"></div>
          <div className="z-10 min-w-[80vw] sm:min-w-[260px] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 sm:absolute sm:translate-x-0 sm:translate-y-0 sm:top-28 sm:left-[inherit] p-8 sm:p-4 bg-lightBlue flex flex-col items-center justify-center shadow-lg rounded-md h-fit">
            <ReactMarkdown className="text-sm text-black">
              {message}
            </ReactMarkdown>
          </div>
        </>
      )}
    </div>
  );
};

export default Tooltip;
