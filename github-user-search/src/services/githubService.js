// src/services/githubService.js

// Function to search GitHub users with location and minimum repository filters
export const searchGitHubUsers = async (query, location = '', minRepos = 0) => {
  try {
    // Construct the search URL with query parameters
    const baseUrl = 'https://api.github.com/search/users?q=';

    // Building the query string
    let queryString = query; // Base query (e.g., username)
    
    // Add location filter to the query string if provided
    if (location) {
      queryString += `+location:${location}`;
    }

    // Add minimum repositories filter to the query string if provided
    if (minRepos > 0) {
      queryString += `+repos:>=${minRepos}`;
    }

    // Construct the full URL
    const url = `${baseUrl}${encodeURIComponent(queryString)}`;

    // Fetch data from GitHub API
    const response = await fetch(url);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Failed to fetch data from GitHub API');
    }

    // Parse and return the result from the API
    const data = await response.json();
    return data.items;  // Return the list of users from the API response
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    throw error;
  }
};
