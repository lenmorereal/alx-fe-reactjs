// src/components/UserProfile.jsx
import React from 'react';
import { useUser } from '../UserContext'; // Import the custom hook to access the context

const UserProfile = () => {
    const { user, loginUser, logoutUser } = useUser(); // Destructure the context values

    const handleLogin = () => {
        loginUser({ name: 'John Doe', email: 'john.doe@example.com' }); // Example login
    };

    const handleLogout = () => {
        logoutUser(); // Example logout
    };

    return (
        <div>
            <h2>User Profile</h2>
            <p>User: {user ? `${user.name} (${user.email})` : 'Not logged in'}</p>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default UserProfile;
