import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faLaptopCode,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { Step } from "@/app/types";



const HowItWorks = ({ dict }) => {
  const steps: Step[] = [
    {
      icon: faUsers,
      description: dict.landing.howItWorks.step1,
    },
    {
      icon: faLaptopCode,
      description: dict.landing.howItWorks.step2,
    },
    {
      icon: faHandshake,
      description: dict.landing.howItWorks.step3,
    },
  ];
  
  return (
    <section className="bg-lightBlue text-center flex flex-col items-center w-fulle md:h-[548px] py-24 shadow-default">
      <h2 className="text-5xl font-heading mb-12">{dict.landing.howItWorks.title}</h2>
      <div className="flex flex-col md:flex-row justify-around w-4/5">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <FontAwesomeIcon icon={step.icon} size="7x" />
            <div className="text-2xl mt-5 mb-4 w-72">
              <p dangerouslySetInnerHTML={{ __html: step.description}} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
