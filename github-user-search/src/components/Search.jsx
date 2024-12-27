import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';  // Import the API service

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
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(username);  // API request to get user data
      setUserData(data);
    } catch (err) {
      setError('Looks like we can\'t find the user');  // Error handling message
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
