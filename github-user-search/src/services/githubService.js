import axios from 'axios';

/**
 * Fetches user data from GitHub API.
 * @param {string} username - GitHub username to search for.
 * @returns {Promise<object>} - Promise resolving to user data.
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};
