import { useState } from 'react';

export function Number2() {
  const [number2, setNumber2] = useState(0);
  
  return [number2, setNumber2];
}

export default Number2