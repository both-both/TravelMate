export const SERVER_URL = import.meta.env.VITE_API_URL;

const BASE_URL = "http://localhost:4000/api/";

export const endpoints = {
  countries: `${BASE_URL}countries`,
  country: (id: string) => `${BASE_URL}countries/${id}`,
  cities: `${BASE_URL}cities`,
  city: (id: string) => `${BASE_URL}cities/${id}`,
  attractions: `${BASE_URL}attractions`,
  attraction: (id: string) => `${BASE_URL}attractions/${id}`,
};

export const imageUrl = (path: string) => `${SERVER_URL}$`;
