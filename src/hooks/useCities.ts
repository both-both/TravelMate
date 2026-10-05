import type { City } from "../types/api.types";
import { endpoints } from "../data/Endpoints";
import { useFetch } from "./useFetch";

export const useCities = () => {
  const { data, isLoading, error } = useFetch<City[]>(endpoints.cities);

  return {
    cities: data ?? [],
    isLoading,
    error,
  };
};

export const useCity = (id: string) => {
  const { data, isLoading, error } = useFetch<City>(endpoints.city(id));

  return {
    city: data,
    isLoading,
    error,
  };
};
