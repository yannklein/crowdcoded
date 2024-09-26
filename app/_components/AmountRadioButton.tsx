import React from 'react';

const AmountRadioButton = ({amount, selectedAmount, setSelectedAmount}) => {
  const handleClick = () => {
    setSelectedAmount(amount);
  };
  return (
    <div onClick={handleClick} className="cursor-pointer text-white text-center bg-coralBlue px-1 rounded font-heading border-2 border-coralBlue text-3xl" style={{opacity: amount === selectedAmount ? 1 : 0.5}}>
      ¥{amount} 
    </div>
  );
};

export default AmountRadioButton;