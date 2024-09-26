import React from 'react';
import AmountRadioButton from './AmountRadioButton';
import PrimaryButton from './PrimaryButton';

const FundingAmountSelector = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-1 mb-3">
        <AmountRadioButton>3000</AmountRadioButton>
        <AmountRadioButton>5000</AmountRadioButton>
        <AmountRadioButton>10000</AmountRadioButton>
        <input type="text" />
      </div>
      <PrimaryButton width="100%" href={'/'}>Fund them</PrimaryButton>
    </div>
  );
};

export default FundingAmountSelector;
