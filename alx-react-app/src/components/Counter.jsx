// src/components/Counter.jsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ margin: '5px', padding: '10px', backgroundColor: 'green', color: 'white' }}
      >
        Increment
      </button>
      <button 
        onClick={() => setCount(count - 1)} 
        style={{ margin: '5px', padding: '10px', backgroundColor: 'red', color: 'white' }}
      >
        Decrement
      </button>
      <button 
        onClick={() => setCount(0)} 
        style={{ margin: '5px', padding: '10px', backgroundColor: 'blue', color: 'white' }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
