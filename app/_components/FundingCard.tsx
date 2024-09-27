import React from 'react';
import Markdown from 'react-markdown';
import DonationProgress from './DonationProgress';
import { ProjectProps } from '@/app/types/Props';
import FundingAmountSelector from './FundingAmountSelector';

const FundingCard: React.FC<{ project: ProjectProps }> = ({ project }) => {
  return (
    <div className="p-8 min-w-[400px] h-fit sticky top-8 bg-cream rounded-md shadow-[0_0_24px_0_rgba(0,0,0,0.3)]">
      <h2 className="text-3xl mb-4 text-center">Crowd Coded Mission</h2>
      <img
        className="w-full h-[160px] object-contain bg-white rounded mb-4"
        src="https://res.cloudinary.com/yanninthesky/image/upload/v1727435191/crowdcoded/c954eb76d6df499ab5e20975de7bb371_txdaod.jpg"
        alt="website thumbnail"
      />
      <Markdown className='mb-4'>
        Shoko and Sho’s farm website has been around for quite sometimes and
        became cluttered and hard to maintain. They need a **website update**
        that will help them better sell their produce.
      </Markdown>
      <DonationProgress project={project} />
      <h3 className="text-2xl text-center mb-2">Be part of the patrons team</h3>
      <FundingAmountSelector />
    </div>
  );
};

export default FundingCard;
