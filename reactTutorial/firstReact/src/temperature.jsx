import React, { useState } from 'react';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  // Convert Celsius to Fahrenheit
  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
    } else {
      setFahrenheit((value * 9/5 + 32).toFixed(2));
    }
  };

  // Convert Fahrenheit to Celsius
  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
    } else {
      setCelsius(((value - 32) * 5/9).toFixed(2));
    }
  };

  return (
    <div className="converter">
      <div>
        <label>
          Celsius:
          <input 
            type="number" 
            value={celsius} 
            onChange={handleCelsiusChange} 
            placeholder="Enter Celsius" 
          />
        </label>
      </div>
      <div>
        <label>
          Fahrenheit:
          <input 
            type="number" 
            value={fahrenheit} 
            onChange={handleFahrenheitChange} 
            placeholder="Enter Fahrenheit" 
          />
        </label>
      </div>
    </div>
  );
}

export default TemperatureConverter;
