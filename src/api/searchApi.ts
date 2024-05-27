import axios from 'axios';
import { API_URL_MAPBOX, ACCESS_TOKEN_MAPBOX } from '../config';


const searchApi = axios.create({
  baseURL: API_URL_MAPBOX,
  params: {
    access_token: ACCESS_TOKEN_MAPBOX,
    language: 'es',
  },
});

export default searchApi;