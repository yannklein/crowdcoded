'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Modal } from './Modal';
import { cn } from '@/lib/twMerge';
import DonationProgress from './DonationProgress';

type FundModalProps = {
  count: number;
  amount: number;
  goal: number;
  mission: string;
  dict: any;
};

const FundModal: React.FC<FundModalProps> = ({
  count,
  amount,
  goal,
  mission,
  dict
}) => {
  const [selectedAmount, setSelectedAmount] = useState<number | string>(3000);
  const [customAmount, setCustomAmount] = useState<string>('');

  const handleSelectAmount = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedAmount('');
    setCustomAmount(event.target.value);
  };

  return (
    <Modal.Root triggerText={dict.landing.featured.donate}>
      <Modal.Content className="text-center p-8 bg-cream">
        <h1 className="text-5xl mb-4">{dict.landing.featured.mission}</h1>
        <div className="flex flex-col items-center md:flex-row mb-6">
          <Image
            className="w-24 md:w-56 mr-2 mb-4 md:mb-0"
            src="/logo.png"
            alt="image"
            width={100}
            height={100}
          />
          <p className="text-left ml-4">{mission}</p>
        </div>
        <DonationProgress
          amount={amount}
          count={count}
          goal={goal}
          dict={dict}
        />
        <div className="px-1 md:px-14">
          <h3 className="text-2xl md:text-3xl mb-2">
            {dict.projectDetails.fundingCard.beAPatron}
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <button
              className={cn(
                `btn-primary ${
                  selectedAmount === 3000 ? 'opacity-100' : 'opacity-50'
                }`
              )}
              onClick={() => handleSelectAmount(3000)}
            >
              ¥3000
            </button>
            <button
              className={cn(
                `btn-primary ${
                  selectedAmount === 5000 ? 'opacity-100' : 'opacity-50'
                }`
              )}
              onClick={() => handleSelectAmount(5000)}
            >
              ¥5000
            </button>
            <button
              className={cn(
                `btn-primary ${
                  selectedAmount === 10000 ? 'opacity-100' : 'opacity-50'
                }`
              )}
              onClick={() => handleSelectAmount(10000)}
            >
              ¥10,000
            </button>
            <input
              type="number"
              placeholder="¥_______"
              value={customAmount}
              onChange={handleCustomAmountChange}
              className="p-3 rounded-md border bg-white"
            />
          </div>
          <button
            onClick={() =>
              alert(`You funded: ¥${customAmount || selectedAmount}`)
            }
            className="btn-primary w-full"
          >
            {dict.projectDetails.fundingCard.fundThem}
          </button>
        </div>
      </Modal.Content>
    </Modal.Root>
  );
};

export default FundModal;
