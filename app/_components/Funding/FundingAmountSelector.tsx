'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import AmountRadioButton from './AmountRadioButton';
import { cn } from '@/lib/twMerge';

export const FundingAmountSelector = ({ dict, className = '' }) => {
  const router = useRouter();
  const [selectedAmount, setSelectedAmount] = React.useState(5000);
  const [freeInputAmount, setFreeInputAmount] = React.useState(0);

  const fundingAmount = selectedAmount ? selectedAmount : freeInputAmount || 0;
  const fundUrl = '/fund?amount=' + fundingAmount;

  const handleFreeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = Number.parseInt(e.currentTarget.value, 10);
    setFreeInputAmount(amount);
    setSelectedAmount(amount);
  };

  return (
    <div>
      <div className={cn('hidden lg:grid grid-cols-2 gap-1 mb-3', className)}>
        <AmountRadioButton
          amount={3000}
          selectedAmount={selectedAmount}
          setFreeInputAmount={setFreeInputAmount}
          setSelectedAmount={setSelectedAmount}
        />
        <AmountRadioButton
          amount={5000}
          selectedAmount={selectedAmount}
          setFreeInputAmount={setFreeInputAmount}
          setSelectedAmount={setSelectedAmount}
        />
        <AmountRadioButton
          amount={10000}
          selectedAmount={selectedAmount}
          setFreeInputAmount={setFreeInputAmount}
          setSelectedAmount={setSelectedAmount}
        />
        <div className=" flex px-1 rounded font-heading border-2 border-coralBlue text-xl lg:text-3xl bg-white">
          <span className="px-1">¥</span>
          <input
            type="number"
            step="1000"
            min="0"
            className="w-full focus:outline-none text-xl lg:text-3xl"
            onInput={handleFreeInputChange}
            onFocus={handleFreeInputChange}
            value={freeInputAmount}
          />
        </div>
      </div>
      <button
        className="btn-primary w-full "
        onClick={() => router.push(fundUrl)}
      >
        {dict.projectDetails.fundingCard.fundThem}
      </button>
    </div>
  );
};
