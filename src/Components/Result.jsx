import React, { useState, useEffect } from 'react';
import Number from '../Reusable/Number';

function Result() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  function calculateResult() {
    const sum = parseInt(number1) + parseInt(number2);
    setResult(sum);
  }

  useEffect(() => {
    calculateResult();
  }, [number1, number2]);

  return (
    <div>
      <Number label="Number 1: " value={number1} onChange={(e) => setNumber1(e.target.value)} />
      <Number label="Number 2: " value={number2} onChange={(e) => setNumber2(e.target.value)} />
      <div>Result: {result}</div>
    </div>
  );
}

export default Result;
