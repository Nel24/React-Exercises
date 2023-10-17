import React, { useState, useMemo, useCallback } from 'react';

// define a counter function using React.memo
const Counter = React.memo(({ count }) => {
  console.log('Render Counter');

  return <div>Count: {count}</div>;
});

const ReactMemoAndProfiler = () => {
  // Create a count using useState and initial value to zero
  const [count, setCount] = useState(0);

  // Create `increment` function using useCallback
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  // Create `double` function using useMemo
  const double = useMemo(() => {
    console.log('Calculate double');
    return count * 2;
  }, [count]);

  return (
    <div>
    {/* Create the React.Profiler and wrap the <Counter /> component */}
      <React.Profiler id="counter" onRender={(id, phase, actualDuration) => {
        console.log(`${id} ${phase} phase: ${actualDuration}ms`);
      }}>
        <Counter count={count} />
      </React.Profiler>

      <div>
        <button onClick={increment}>Increment</button>
        <div>Double: {double}</div>
      </div>
    </div>
  );
};

export default ReactMemoAndProfiler;

