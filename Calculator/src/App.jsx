import { useState } from 'react';
import ButtonComponent from './components/ButtonComponent.jsx';
import ScreenComponent from './components/ScreenComponent.jsx';

function App() {
  const [input, setInput] = useState(''); 
  const [result, setResult] = useState(null); 

  const calculate = () => {
    let expression = input.replace('÷', '/').replace('×', '*');
    try {
      setResult(eval(expression));
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="container">
      {/* Pass current input and result to ScreenComponent */}
      <ScreenComponent value={result !== null ? result : input || '0'} />
      
      {/* Pass state setters and calculate function to ButtonComponent */}
      <ButtonComponent 
        input={input}
        setInput={setInput}
        setResult={setResult}
        calculate={calculate}
      />
    </div>
  );
}

export default App;
