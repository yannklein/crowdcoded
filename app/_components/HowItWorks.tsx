import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers, faLaptopCode, faHandshake} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Step = {
  icon: IconProp;
  description: JSX.Element;
};

const steps: Step[] = [
  {
    icon: faUsers,
    description: (
      <>
        You become <span className="text-coralBlue">the patron</span> of the web project for an impactful business
      </>
    ),
  },
  {
    icon: faLaptopCode,
    description: (
      <>
        We build a tailor-made <span className="text-coralBlue">web app</span> for them with your funding
      </>
    ),
  },
  {
    icon: faHandshake,
    description: (
      <>
        The business increases its <span className="text-coralBlue">positive impact</span> on our society
      </>
    ),
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-lightBlue text-center w-full md:h-[548px] py-24 shadow-default">
      <h2 className="text-5xl font-heading mb-12">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-around">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <FontAwesomeIcon
                  icon={step.icon}
                  size="7x"
                />
            <div className="text-2xl mt-5 mb-4 w-72">
              <p className="">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
