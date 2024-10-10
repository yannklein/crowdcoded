'use client';

import React from 'react';
import { cn } from '@/lib/twMerge';
import Tooltip from './Tooltip';

const DonationProgress: React.FC<{
  donators: string[];
  goal: number;
  count: number;
  amount: number;
  dict: any;
}> = async ({ donators, goal, count, amount, dict }) => {
  const progressPct = Math.round((amount / goal) * 100);
  const classComputed =
    'relative rounded text-center font-heading text-xl bg-white w-full h-8';
  let sponsorsSoFar = "No sponsors yet, **be the first**!"; 
  if (donators.length === 1) {
    sponsorsSoFar = `With the special support of 🎉: **${donators[0]}**`;
  } else if (donators.length > 1) {
    sponsorsSoFar = `With the special support of 🎉: **${donators.slice(0,-2).join(', ')} and ${donators.at(-1)}**`;
  }

  return (
    <div className="pb-2">
      <div className="flex justify-between items-center">
        <Tooltip message={sponsorsSoFar}>
          <h3 className="text-md lg:text-md font-heading">
            {count} {dict.projectDetails.fundingCard.sponsorsSoFar}
          </h3>
        </Tooltip>
        <p className="text-sm lg:text-md text-coralBlue font-heading">
          ¥{amount} {dict.projectDetails.fundingCard.outOf} ¥{goal}
        </p>
      </div>
      <div className={cn(classComputed)}>
        <div
          className="absolute top-0 left-0 flex justify-center items-center h-full bg-coralBlue text-white rounded"
          style={{ width: `${progressPct < 10 ? 10 : progressPct}%` }}
        >
          {progressPct}%
        </div>
      </div>
    </div>
  );
};

export default DonationProgress;

