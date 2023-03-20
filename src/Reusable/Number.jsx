import React from 'react';

function Number({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input type="number" value={value} onChange={onChange} />
    </div>
  );
}

export default Number
