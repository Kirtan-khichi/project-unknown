import React, { useState } from 'react';

function ColorChange() {
  const [bgColor, setBgColor] = useState('#ffffff'); // Initial background color is white

  const changeBackgroundColor = () => {
    // Generate a random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: bgColor, padding: '20px', textAlign: 'center' }}>
      <button onClick={changeBackgroundColor}>Change Color</button>
    </div>
  );
}

export default ColorChange;
