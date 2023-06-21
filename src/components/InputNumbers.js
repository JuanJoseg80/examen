import React from 'react';

const InputNumbers = ({ number1, number2, setNumber1, setNumber2 }) => {
  const handleNumberChange1 = (e) => {
    setNumber1(Number(e.target.value));
  };

  const handleNumberChange2 = (e) => {
    setNumber2(Number(e.target.value));
  };

  return (
    <div>
      <input type="number" value={number1} onChange={handleNumberChange1} />
      <input type="number" value={number2} onChange={handleNumberChange2} />
    </div>
  );
};

export default InputNumbers;