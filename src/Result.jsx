import { useState } from 'react';

export function Result(number1, number2) {
  const [result, setResult] = useState(0);

  const calculateResult = () => {
    const sum = parseInt(number1) + parseInt(number2);
    setResult(sum);
  };

  return [result, calculateResult];
}

export default Result