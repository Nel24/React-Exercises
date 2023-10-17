import React, { useState, useCallback } from 'react';

const UseCallback = () => {
  const [count, setCount] = useState(0);

  // define increment function using useCallback
  const increment = useCallback(() => {
    console.log('using useCallback');
    setCount(count + 1);
  }, [count]); // re-create function only if count changes

  // const increment = () => {
  //   console.log('using ordinary function');
  //   setCount(count + 1);
  // }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UseCallback;
