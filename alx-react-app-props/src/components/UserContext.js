// src/UserContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUser = () => {
    return useContext(UserContext);
};

// Provider component that wraps the app and provides context values
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Example state to manage user info

    // You can update this logic to fit your specific user management needs
    const loginUser = (userData) => {
        setUser(userData); // Example login functionality
    };

    const logoutUser = () => {
        setUser(null); // Example logout functionality
    };

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};
