import React from 'react';
import './Button.css';

function Button({ disabled, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="Button"
    >
      Mostrar Alerta
    </button>
  );
}

export default Button;