import React, { useState } from 'react';
import { fetchGitHubUser } from '../services/apiService';

function SearchUser() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setError(null);
    setUserData(null);
    try {
      const data = await fetchGitHubUser(username);
      setUserData(data);
    } catch (err) {
      setError('User not found or an error occurred.');
    }
  };

  return (
    <div>
      <h2>GitHub User Search</h2>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userData && (
        <div>
          <h3>{userData.login}</h3>
          <img src={userData.avatar_url} alt="Avatar" width="100" />
          <p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default SearchUser;
