// src/App.jsx
import React from 'react';
import { UserProvider } from './Context/UserContext'; // Ensure correct import path
import UserProfile from './UserProfile'; // Example component that uses the context

const App = () => {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
};

export default App;
