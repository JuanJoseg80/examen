import React, { useState } from 'react';
import InputNumbers from './components/InputNumbers';
import OperationSelector from './components/OperationSelector';
import CalculateButton from './components/CalculateButton';

const Calcular = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operation, setOperation] = useState('sumar');
  const [result, setResult] = useState();


  
  const calculateResult = () => {
    let calculatedResult = 0;
    switch (operation) {
      case 'sumar':
        calculatedResult = number1 + number2;
        break;
      case 'restar':
        calculatedResult = number1 - number2;
        break;
      case 'multiplicar':
        calculatedResult = number1 * number2;
        break;
      case 'dividir':
        calculatedResult = number1 / number2;
        break;
      default:
        break;
    }
    setResult(calculatedResult);
  };

  return (
    <div>
      <InputNumbers
        number1={number1}
        number2={number2}
        setNumber1={setNumber1}
        setNumber2={setNumber2}
      />
      <OperationSelector operation={operation} setOperation={setOperation} />
      <CalculateButton calculateResult={calculateResult} />
      <p>Resultado: {result}</p>
    </div>
  );
};

export default Calcular;
