// src/components/Search.jsx
import React, { useState } from 'react';
import { searchGitHubUsers } from '../services/githubService';

function Search() {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => setQuery(event.target.value);
  const handleLocationChange = (event) => setLocation(event.target.value);
  const handleMinReposChange = (event) => setMinRepos(Number(event.target.value));

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      setError(null);
      const users = await searchGitHubUsers(query, location, minRepos);
      setResults(users);
    } catch (err) {
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for a GitHub user"
        />
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Location (optional)"
        />
        <input
          type="number"
          value={minRepos}
          onChange={handleMinReposChange}
          placeholder="Min Repositories"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul>
        {results.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login} width={50} />
            <p>{user.login}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
