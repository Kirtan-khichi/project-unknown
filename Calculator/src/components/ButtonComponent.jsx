import React from 'react';

function ButtonComponent({ input, setInput, setResult, calculate }) {
  const buttons = [
    'C', '÷', '×', '-', 
    '7', '8', '9', '+', 
    '4', '5', '6', '=', 
    '1', '2', '3', '0', 
    '.'
  ];

  // The handleClick function is now part of ButtonComponent
  const handleClick = (button) => {
    if (button === 'C') {
      setInput('');
      setResult(null);
    } else if (button === '=') {
      calculate();
    } else {
      setInput((prevInput) => prevInput + button);
    }
  };

  return (
    <div className="button-grid">
      {buttons.map((button, index) => (
        <button 
          key={index} 
          onClick={() => handleClick(button)} 
          className="button"
        >
          {button}
        </button>
      ))}
    </div>
  );
}

export default ButtonComponent;
