import React, { useState, useEffect } from 'react';

export default function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //useEffect Similar to componentDidMount and componentDidUpdate:
  //run on every render
  useEffect(() => {
    document.title = `"${counter1}"-"${counter2}"`;
  });

  //run when counter1 changes
  useEffect(() => {
    document.title = `count1="${counter1}"`;
  },[counter1]);

  //run on first render
  useEffect(() => {
    document.title = `Welcome`;
  },[]);

  return (
    <div className="container">
      <div>
        <button onClick={() => setCounter1(counter1 - 1)}>-</button>
        <p>{counter1}</p>
        <button onClick={() => setCounter1(counter1 + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCounter2(counter2 - 1)}>-</button>
        <p>{counter2}</p>
        <button onClick={() => setCounter2(counter2 + 1)}>+</button>
      </div>
    </div>
  );
}