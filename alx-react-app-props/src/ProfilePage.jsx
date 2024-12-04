// src/UserProfile.jsx
import React, { useContext } from 'react';
import { UserContext } from './Context/UserContext'; // Correct import path

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <p>Welcome, {user.name}</p>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default UserProfile;
