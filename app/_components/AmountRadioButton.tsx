import React from 'react';

const AmountRadioButton = ({children}) => {
  return (
    <div className="text-white text-center bg-coralBlue px-1 rounded font-heading border-2 border-coralBlue text-3xl">
      ¥{children} 
    </div>
  );
};

export default AmountRadioButton;