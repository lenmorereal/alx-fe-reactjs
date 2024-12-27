import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';  // Import the API service
import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;  // Return the user data
  } catch (error) {
    throw new Error("User not found");  // Throw an error in case of failure
  }
};

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Clear error message
    setUserData(null); // Clear previous user data

    try {
      const data = await fetchUserData(username);  // API request to get user data
      if (data.message === 'Not Found') {  // Check if user is not found
        setError("Looks like we can't find the user");
      } else {
        setUserData(data); // Set user data if API response is successful
      }
    } catch (err) {
      setError("Looks like we can't find the user"); // Set error message in case of network issues
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="Enter GitHub username"
          className="border-2 p-2 mb-4 w-1/2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}  {/* Error message displayed here */}
      {userData && (
        <div className="mt-4 p-4 border rounded shadow-lg">
          <img src={userData.avatar_url} alt={userData.login} className="w-32 h-32 rounded-full" />
          <h3 className="text-xl font-semibold">{userData.name || userData.login}</h3>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            Visit Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
