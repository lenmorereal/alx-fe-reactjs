// src/components/Search.jsx
import React, { useState } from 'react';

function Search() {
  const [query, setQuery] = useState(''); // Holds the search query
  const [results, setResults] = useState([]); // Holds the search results
  const [loading, setLoading] = useState(false); // Manages the loading state
  const [error, setError] = useState(null); // Manages any errors during the API request

  // Handle input change and update query state
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Handle form submission (to trigger the search)
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    handleSearch(query); // Call the search function
  };

  // Function to fetch data from GitHub API
  const handleSearch = async (searchQuery) => {
    setLoading(true); // Start loading
    setError(null); // Reset any previous errors
    try {
      // Make the API request to GitHub's user search endpoint
      const response = await fetch(`https://api.github.com/search/users?q=${searchQuery}`);
      
      // Check if the response is okay
      if (!response.ok) {
        throw new Error('Failed to fetch data from GitHub');
      }
      
      // Parse the JSON response
      const data = await response.json();
      
      // Update state with the search results
      setResults(data.items);
    } catch (err) {
      // Handle any errors during the API request
      setError('Something went wrong: ' + err.message);
    } finally {
      setLoading(false); // Stop loading once the request is complete
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
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>} {/* Show loading text */}

      {error && <p>{error}</p>} {/* Show error message */}

      {/* Display results */}
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
