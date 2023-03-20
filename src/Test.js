import { useState, useEffect } from 'react';
import { Result } from './Result';

function Test() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, calculateResult] = Result(number1, number2);

  useEffect(() => {
    calculateResult();
  }, [number1, number2]);

  return (
    <div>
      <input type="text" value={number1} onChange={(e) => setNumber1(e.target.value)} />
      <input type="text" value={number2} onChange={(e) => setNumber2(e.target.value)} />
      <div>Result: {result}</div>
    </div>
  );
}

export default Test;
