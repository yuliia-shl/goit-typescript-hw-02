import axios from 'axios';
import { FetchImgResponse } from '../components/App/App.types';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const API_KEY = 'HeMbYYXj0wwRAoSZlNpXduKD8cqLbP0b6WZTOvEIO4Y';

export const fetchImg = async (query: string, page: number): Promise<FetchImgResponse> => {
  const response = await axios.get<FetchImgResponse>(`/search/photos`, {
    params: {
      client_id: API_KEY,
      query,
      page,
      per_page: 12,
    },
  });

  return response.data;
};
