import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ImpactProps } from '@/app/types';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import Tooltip from './Tooltip';
const ImpactIcon: React.FC<{
  impact: ImpactProps;
  size?: SizeProp;
  lang: string;
}> = ({ impact, size = null, lang }) => {
  return (
    <div
      key={impact.text}
      className="text-center flex flex-col"
      style={{ color: impact.color }}
    >
      {impact.tooltip && impact.tooltip[lang] ? (
        <Tooltip message={impact.tooltip[lang]}>
          <FontAwesomeIcon
            className=" lg:!hidden"
            icon={impact.icon}
            size={size || '2x'}
          />
          <FontAwesomeIcon
            className="!hidden lg:!block"
            icon={impact.icon}
            size={size || '3x'}
          />
        </Tooltip>
      ) : (
        <>
          <FontAwesomeIcon
            className=" lg:!hidden"
            icon={impact.icon}
            size={size || '2x'}
          />
          <FontAwesomeIcon
            className="!hidden lg:!block"
            icon={impact.icon}
            size={size || '3x'}
          />
        </>
      )}
      <small>{impact.text}</small>
    </div>
  );
};

export default ImpactIcon;
