import { endpoints } from "../data/Endpopints";
import type { Country } from "../data/Api.types";
import { useFetch } from "./useFetch";

export const useCountries = () => {
  const { data, error } = useFetch<Country[]>(endpoints.countries);

  return {
    countries: data ?? [],
    error,
  };
};

export const useCountry = (id: string) => {
  const { data, error } = useFetch<Country>(endpoints.country(id));

  return {
    country: data,
    error,
  };
};
