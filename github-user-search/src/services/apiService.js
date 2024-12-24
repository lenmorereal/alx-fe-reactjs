import axios from 'axios';

const API_URL = import.meta.env.VITE_GITHUB_API_URL;

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;
  }
};
