import axios from 'axios';

const unsplashClient = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}`,
  },
  timeout: 10000,
});

/**
 * Search for images on Unsplash
 * @param {string} searchTerm - The search query
 * @param {number} page - Page number for pagination (default: 1)
 * @param {number} perPage - Results per page (default: 20)
 * @returns {Promise<Array>} Array of image results
 * @throws {Error} If the API request fails
 */
export const searchImages = async (searchTerm, page = 1, perPage = 20) => {
  if (!searchTerm || searchTerm.trim() === '') {
    throw new Error('Search term cannot be empty');
  }

  try {
    const response = await unsplashClient.get('/search/photos', {
      params: {
        query: searchTerm.trim(),
        page,
        per_page: perPage,
      },
    });

    return response.data.results;
  } catch (error) {
    if (error.response) {
      const statusCode = error.response.status;
      const message = error.response.data?.message || 'API Error';

      if (statusCode === 401) {
        throw new Error('Invalid API key. Please check your configuration.');
      } else if (statusCode === 429) {
        throw new Error('Rate limit exceeded. Please try again later.');
      } else if (statusCode === 400) {
        throw new Error(`Invalid request: ${message}`);
      }

      throw new Error(`API Error (${statusCode}): ${message}`);
    } else if (error.request) {
      throw new Error('No response from server. Please check your connection.');
    } else {
      throw new Error(`Error: ${error.message}`);
    }
  }
};
