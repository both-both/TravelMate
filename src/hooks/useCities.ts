import { useLanguage } from "../context/LanguageContext/LanguageContext";
import { citiesQuery, cityQuery } from "../data/queries";
import type { City, CityDetail } from "../types/sanity.types";
import { useSanityQuery } from "./useSanityQuery";

export const useCities = () => {
  const { language } = useLanguage();
  const { data, isLoading, error } = useSanityQuery<City[]>(citiesQuery, {
    lang: language,
  });

  return { cities: data ?? [], isLoading, error };
};

export const useCity = (slug: string) => {
  const { language } = useLanguage();
  const { data, isLoading, error } = useSanityQuery<CityDetail>(cityQuery, {
    slug,
    lang: language,
  });

  return { city: data, isLoading, error };
};
