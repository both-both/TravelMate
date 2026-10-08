import { languagesQuery } from "../data/queries";
import { useSanityQuery } from "./useSanityQuery";

type Language = { code: string; name: string };

export const useLanguages = () => {
  const { data } = useSanityQuery<Language[]>(languagesQuery, {});
  return data ?? [];
};
