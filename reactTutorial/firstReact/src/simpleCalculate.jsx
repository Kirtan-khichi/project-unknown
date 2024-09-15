import React, { useState } from 'react';

function SimpleCalculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleOperation = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult('Please enter valid numbers');
      return;
    }

    switch (operation) {
      case 'add':
        setResult(number1 + number2);
        break;
      case 'subtract':
        setResult(number1 - number2);
        break;
      case 'multiply':
        setResult(number1 * number2);
        break;
      case 'divide':
        if (number2 === 0) {
          setResult('Cannot divide by zero');
        } else {
          setResult(number1 / number2);
        }
        break;
      default:
        setResult('Unknown operation');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Simple Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <div>
        <button onClick={() => handleOperation('add')}>Add</button>
        <button onClick={() => handleOperation('subtract')}>Subtract</button>
        <button onClick={() => handleOperation('multiply')}>Multiply</button>
        <button onClick={() => handleOperation('divide')}>Divide</button>
      </div>
      <h3>Result: {result !== null ? result : 'No result'}</h3>
    </div>
  );
}

export default SimpleCalculator;
