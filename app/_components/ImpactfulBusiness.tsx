import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getImpactIcon } from "@/utils/getImpactIcon";
import Tooltip from "./Tooltip";
import ReactMarkdown from "react-markdown";

const categories = [
  "ORGANIC",
  "SUSTAINABLE",
  "EDUCATES",
  "SOCIAL",
  "CLIMATE",
  "EQUAL",
];

const ImpactfulBusinesses = ({ dict, lang }) => {
  const logos = categories.map((category) => getImpactIcon(category));
  return (
    <section className="landing-section text-center">
      <h2 className="landing-header">
        {dict.landing.impactfulBusinesses.title}
      </h2>
      <div className="flex justify-center mb-14">
        <ReactMarkdown className="text-xl md:text-2xl font-light prose-strong:text-coralBlue prose-strong:font-light">
          {dict.landing.impactfulBusinesses.description}
        </ReactMarkdown>
        {/* <p className="text-xl md:text-2xl font-light">
          {dict.landing.impactfulBusinesses.description1}{" "}
          <span className="text-coralBlue">
          {dict.landing.impactfulBusinesses.description2}
          </span>{dict.landing.impactfulBusinesses.description3}
        </p> */}
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-14 mb-14">
        {logos.map((icon) => (
          <div key={icon.text} className="flex flex-col items-center">
            {icon.tooltip[lang] ? (
              <Tooltip message={icon.tooltip[lang]}>
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
      <p className="mt-4 mx-8 text-sm font-extralight">
        {dict.landing.impactfulBusinesses.hover}
      </p>
    </section>
  );
};

export default ImpactfulBusinesses;
