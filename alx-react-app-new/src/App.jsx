// App.jsx
import React from 'react';
import CounterProvider from './context/CounterContext'; // Assuming CounterContext provides the context
import Counter from './components/Counter';

const App = () => {
  return (
    <CounterProvider>
      <div className="App">
        <h1>Welcome to the Counter App</h1>
        <Counter />
      </div>
    </CounterProvider>
  );
};

export default App;

