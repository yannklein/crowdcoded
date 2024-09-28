import React from 'react';

const AmountRadioButton = ({amount, selectedAmount, setFreeInputAmount, setSelectedAmount}) => {
  const handleChange = (e) => {
    setFreeInputAmount(0);
    setSelectedAmount(amount);
  };
  
  return (
    <div onClick={handleChange} style={{opacity: amount === selectedAmount ? 1 : 0.5}} className="cursor-pointer text-white text-center bg-coralBlue px-1 rounded font-heading border-2 border-coralBlue text-xl lg:text-3xl">
      ¥{amount} 
    </div>
  );
};

export default AmountRadioButton;