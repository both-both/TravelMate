import { useLanguage } from "../context/LanguageContext/LanguageContext";
import { attractionQuery, attractionsQuery } from "../data/queries";
import type { Attraction } from "../types/sanity.types";
import { useSanityQuery } from "./useSanityQuery";

export const useAttractions = () => {
  const { language } = useLanguage();
  const { data, isLoading, error } = useSanityQuery<Attraction[]>(
    attractionsQuery,
    { lang: language },
  );

  return { attractions: data ?? [], isLoading, error };
};

export const useAttraction = (slug: string) => {
  const { language } = useLanguage();
  const { data, isLoading, error } = useSanityQuery<Attraction>(
    attractionQuery,
    { slug, lang: language },
  );

  return { attraction: data, isLoading, error };
};
