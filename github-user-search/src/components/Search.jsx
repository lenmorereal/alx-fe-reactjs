// src/components/Search.jsx
import React, { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle input change
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    handleSearch();
  };

  // Simulate a search function (replace with actual API call to GitHub API or other service)
  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      // Replace with GitHub API or other service call to search for users
      const response = await fetch(`https://api.github.com/search/users?q=${query}`);
      const data = await response.json();
      
      // Store the results containing 'login' and 'avatar_url'
      setResults(data.items);
    } catch (err) {
      setError('Something went wrong');
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
          placeholder="Search for a user"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!loading && results.length === 0 && query && (
        <p>Looks like we can't find the user</p>
      )}

      <ul>
        {results.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login} style={{ width: '50px', height: '50px' }} />
            <p>{user.login}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
