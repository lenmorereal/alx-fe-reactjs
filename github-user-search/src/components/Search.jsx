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

  // Fetch user data using advanced search criteria
  const fetchUserData = async (query, location, minRepos) => {
    try {
      setLoading(true);
      setError(null);

      // Fetch users from the API using the searchGitHubUsers function
      const users = await searchGitHubUsers(query, location, minRepos);
      setResults(users);
    } catch (err) {
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call fetchUserData on form submission with the current search parameters
    fetchUserData(query, location, minRepos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a GitHub user"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(Number(e.target.value))}
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
            {/* Link to GitHub profile */}
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
