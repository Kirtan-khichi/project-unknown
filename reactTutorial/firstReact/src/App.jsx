import React from 'react';
import './App.css';
import ToggleButton from './togglebutton.jsx'; 
import TemperatureConverter from './temperature.jsx'; 
import ColorChange from './bgcolorchange.jsx';
import SimpleCalculator from './simpleCalculate.jsx'; // Import the SimpleCalculator component

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <ToggleButton />
      <h1>Temperature Converter</h1>
      <TemperatureConverter /> 
      <h1>Background Color Change</h1>
      <ColorChange />
      <h1>Simple Calculator</h1>
      <SimpleCalculator /> {/* Include the SimpleCalculator component */}
    </div>
  );
}

export default App;
