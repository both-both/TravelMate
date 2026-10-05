import { endpoints } from "../data/Endpoints";
import type { Country } from "../types/api.types";
import { useFetch } from "./useFetch";

export const useCountries = () => {
  const { data, isLoading, error } = useFetch<Country[]>(endpoints.countries);

  return {
    countries: data ?? [],
    isLoading,
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
