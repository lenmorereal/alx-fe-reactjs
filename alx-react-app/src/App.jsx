import React from 'react';
import './App.css';
import Counter from './components/Counter'; // Ensure this is the correct path for the Counter component

function App() {
  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <Counter />  {/* Include the Counter component to render it in the App */}
    </div>
  );
}

export default App;
