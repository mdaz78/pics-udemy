import axios from 'axios';

export const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}`,
    },
    params: {
      query: 'cars',
    },
  });

  console.log(response);

  return response;
};
