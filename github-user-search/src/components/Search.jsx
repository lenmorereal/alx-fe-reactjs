// src/services/githubService.js
import axios from 'axios';

// Function to fetch user data from GitHub API based on advanced search criteria
export const fetchUserData = async (query, location = '', minRepos = 0) => {
  try {
    // GitHub API URL for searching users
    const baseUrl = 'https://api.github.com/search/users?q=';

    // Building the search query string
    let queryString = query; // Base query (e.g., GitHub username)

    // Add location filter if provided
    if (location) {
      queryString += `+location:${location}`;
    }

    // Add minimum repositories filter if provided
    if (minRepos > 0) {
      queryString += `+repos:>=${minRepos}`;
    }

    // Full URL for the API request
    const url = `${baseUrl}${encodeURIComponent(queryString)}`;

    // Making GET request using Axios
    const response = await axios.get(url);

    // Returning the list of users from the response
    return response.data.items; // 'items' contains the list of users from the search query
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    throw error; // Propagate error for handling in the calling function
  }
};
