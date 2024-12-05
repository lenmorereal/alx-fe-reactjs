// src/App.jsx
import React from 'react';
import { UserProvider } from './UserContext'; // Import the UserProvider component
import UserProfile from './components/UserProfile'; // Import the UserProfile component

function App() {
    return (
        // Wrap the app with UserProvider to provide the context
        <UserProvider>
            <div className="App">
                <h1>Welcome to My React App</h1>
                <UserProfile />
            </div>
        </UserProvider>
    );
}

export default App;
