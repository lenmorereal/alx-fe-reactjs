// src/App.jsx
import React from 'react';
import './App.css';
import Counter from './components/Counter';  // Import the Counter component

function App() {
  return (
    <div className="App">
      <h1>Counter Application</h1>
      <Counter />  {/* Use the Counter component */}
    </div>
  );
}

export default App;
