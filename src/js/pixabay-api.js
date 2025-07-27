import axios from 'axios';

const API_KEY = '51467271-51a2ae32f63b997113462ef20';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  };
  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
