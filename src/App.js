import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Alert from './Alert';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (value) => {
    setInputValue(value);
    if (showAlert) {
      setShowAlert(false);
    }
  };

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="App">
      <Input value={inputValue} onChange={handleInputChange} />
      <Button disabled={!inputValue} onClick={handleButtonClick} />
      {showAlert && <Alert onClose={handleCloseAlert} />}
    </div>
  );
}

export default App;