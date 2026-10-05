import { endpoints } from "../data/Endpoints";
import type { Attraction } from "../types/api.types";
import { useFetch } from "./useFetch";

export const useAttractions = () => {
  const { data, error, isLoading } = useFetch<Attraction[]>(
    endpoints.attractions,
  );

  return {
    attractions: data ?? [],
    isLoading,
    error,
  };
};

export const useAttraction = (id: string) => {
  const { data, error, isLoading } = useFetch<Attraction>(
    endpoints.attraction(id),
  );

  return {
    attraction: data,
    isLoading,
    error,
  };
};
