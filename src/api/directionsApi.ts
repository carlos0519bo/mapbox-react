import axios from 'axios';
import { ACCESS_TOKEN_MAPBOX, DRIVING_URL } from '../config';


const directionsApi = axios.create({
  baseURL: DRIVING_URL,
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: ACCESS_TOKEN_MAPBOX,
  },
});

export default directionsApi;