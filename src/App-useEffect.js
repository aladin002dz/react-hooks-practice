import React, { useState, useEffect } from 'react';

export default function App(props) {
  const [counter, setCounter] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${counter}`;
  });

  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}