import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getImpactIcon } from "@/utils/getImpactIcon";
import Tooltip from "./Tooltip";

const categories = [
  "ORGANIC",
  "SUSTAINABLE",
  "EDUCATES",
  "SOCIAL",
  "CLIMATE",
  "EQUAL",
];

const ImpactfulBusinesses: React.FC = () => {
  const logos = categories.map((category) => getImpactIcon(category));
  return (
    <section className="pt-12 md:pt-28 pb-8 text-center">
      <h2 className="text-4xl md:text-5xl font-heading mb-4">
        We Focus on Impactful Businesses
      </h2>
      <div className="flex justify-center mb-14">
        <p className="text-xl md:text-2xl px-8 md:px-28 md:w-3/4 mb-2 md:mb-8 font-light">
          We are the first patrons of the impactful businesses we partner with,
          we decided to give them a bit of us because{" "}
          <span className="text-coralBlue">
            they do an outstanding work in domain we cherish:
          </span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-14 mb-14">
        {logos.map((icon) => (
          <div key={icon.text} className="flex flex-col items-center">
            {icon.tooltip ? (
              <Tooltip message={icon.tooltip}>
                <div className="text-6xl mb-4" style={{ color: icon.color }}>
                  <FontAwesomeIcon icon={icon.icon} size="lg" />
                </div>
              </Tooltip>
            ) : (
              <div className="text-6xl mb-4" style={{ color: icon.color }}>
                <FontAwesomeIcon icon={icon.icon} size="lg" />
              </div>
            )}
            <p className="text-2xl" style={{ color: icon.color }}>
              {icon.text}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm font-extralight">
        * hover over each impact to know more
      </p>
    </section>
  );
};

export default ImpactfulBusinesses;
