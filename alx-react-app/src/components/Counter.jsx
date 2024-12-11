import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    // Increment function
    const increment = () => {
        setCount(count + 1);
    };

    // Decrement function
    const decrement = () => {
        setCount(count - 1);
    };

    // Reset function
    const reset = () => {
        setCount(0);
    };

    return (
        <div>
            <h1>Current Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;
