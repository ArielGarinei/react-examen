import React from 'react';
import './Input.css';

function Input({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="Input"
    />
  );
}

export default Input;