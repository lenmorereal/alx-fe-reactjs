import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); // Initialize state with 0

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p>Current Count: {count}</p>
            <button 
                onClick={() => setCount(count + 1)} 
                style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
            >
                Increment
            </button>
            <button 
                onClick={() => setCount(count - 1)} 
                style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
            >
                Decrement
            </button>
            <button 
                onClick={() => setCount(0)} 
                style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
            >
                Reset
            </button>
        </div>
    );
};

export default Counter;
