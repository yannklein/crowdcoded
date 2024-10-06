import React from 'react';
import { cn } from '@/lib/twMerge';

const AmountRadioButton = ({
  amount,
  selectedAmount,
  setFreeInputAmount,
  setSelectedAmount
}) => {
  const handleChange = (e) => {
    setFreeInputAmount("");
    setSelectedAmount(amount);
  };

  return (
    <button
      onClick={handleChange}
      className={cn(
        `btn-primary ${
          amount === selectedAmount ? 'opacity-100' : 'opacity-50'
        }`
      )}
    >
      ¥{amount}
    </button>
  );
};

export default AmountRadioButton;
