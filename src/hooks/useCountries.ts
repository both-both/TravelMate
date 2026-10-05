import type { Country } from "../types/sanity.types";
import { useLanguage } from "../context/LanguageContext/LanguageContext";
import { useSanityQuery } from "./useSanityQuery";
import { countriesQuery, countryQuery } from "../data/queries";
import type { CountryDetail } from "../types/sanity.types";

export const useCountries = () => {
  const { language } = useLanguage();
  const { data, isLoading, error } = useSanityQuery<Country[]>(countriesQuery, {
    lang: language,
  });

  return {
    countries: data ?? [],
    isLoading,
    error,
  };
};

export const useCountry = (slug: string) => {
  const { language } = useLanguage();
  const { data, isLoading, error } = useSanityQuery<CountryDetail>(
    countryQuery,
    { slug, lang: language },
  );

  return {
    country: data,
    isLoading,
    error,
  };
};
