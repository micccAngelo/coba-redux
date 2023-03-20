import { useState } from 'react';

export function Number1() {
  const [number1, setNumber1] = useState(0);

  return [number1, setNumber1];
}

export default Number1