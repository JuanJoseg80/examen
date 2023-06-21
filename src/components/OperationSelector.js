import React from 'react';

const OperationSelector = ({ operation, setOperation }) => {
  const handleOperationChange = (event) => {
    setOperation(event.target.value);
  };

  return (
    <select value={operation} onChange={handleOperationChange}>
      <option value="sumar">sumar</option>
      <option value="restar">restar</option>
      <option value="multiplicar">multiplicar</option>
      <option value="dividir">dividir</option>
    </select>
  );
};

export default OperationSelector;