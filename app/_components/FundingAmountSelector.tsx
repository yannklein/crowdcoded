"use client";

import React from 'react';
import AmountRadioButton from './AmountRadioButton';
import PrimaryButton from './PrimaryButton';

const FundingAmountSelector = () => {
  const [selectedAmount, setSelectedAmount] = React.useState(5000);

  const handleChange = (e) => {
    setSelectedAmount(e.target.value);
  };
  return (
    <div>
      <div className="hidden lg:grid grid-cols-2 gap-1 mb-3">
        <AmountRadioButton amount={3000} selectedAmount={selectedAmount} setSelectedAmount={setSelectedAmount} />
        <AmountRadioButton amount={5000} selectedAmount={selectedAmount} setSelectedAmount={setSelectedAmount} />
        <AmountRadioButton amount={10000} selectedAmount={selectedAmount} setSelectedAmount={setSelectedAmount} />
        <div className=" flex px-1 rounded font-heading border-2 border-coralBlue text-xl lg:text-3xl bg-white">
          <span className='px-1'>¥</span>
          <input type="number" step="1000" min="0" className='w-full focus:outline-none text-xl lg:text-3xl' onInput={handleChange} onFocus={handleChange}/>
        </div>
      </div>
      <PrimaryButton width="100%" href={'/'}>
        Fund them
      </PrimaryButton>
    </div>
  );
};

export default FundingAmountSelector;
