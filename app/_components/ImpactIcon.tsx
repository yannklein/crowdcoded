import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ImpactProps } from '@/app/types/Props';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
const ImpactIcon: React.FC<{ impact: ImpactProps, size?: SizeProp }> = ({ impact, size = null }) => {
  return (
    <div
      key={impact.text}
      className="text-center flex flex-col"
      style={{ color: impact.color }}
    >
      <FontAwesomeIcon
        className=" lg:!hidden"
        icon={impact.icon}
        size= {size || "2x"}
      />
      <FontAwesomeIcon
        className="!hidden lg:!block"
        icon={impact.icon}
        size= {size || "3x"}
      />
      <small>{impact.text}</small>
    </div>
  );
}

export default ImpactIcon;
