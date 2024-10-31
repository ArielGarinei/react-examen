import React from 'react';
import './Alert.css';

function Alert({ onClose }) {
  return (
    <div className="Alert">
      <span className="Alert-message">¡Alerta!</span>
      <button onClick={onClose} className="Alert-close">X</button>
    </div>
  );
}

export default Alert;