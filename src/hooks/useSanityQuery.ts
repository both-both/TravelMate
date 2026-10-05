import { useEffect, useState } from "react";

// Dit Sanity Query API endpoint
const API_URL = `https://${import.meta.env.VITE_SANITY_PROJECT_ID}.api.sanity.io/v2026-10-01/data/query/${import.meta.env.VITE_SANITY_DATASET}`;

type QueryParams = Record<string, string>;

export const useSanityQuery = <T>(query: string, params: QueryParams = {}) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Et nyt params-objekt laves ved hver render. Som tekst kan React se, om indholdet er ændret.
  const paramsKey = JSON.stringify(params);

  useEffect(() => {
    let ignore = false;

    const getData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Hver parameter sendes som &$navn="værdi". Værdien skal være JSON, derfor JSON.stringify.
        const paramString = Object.entries(JSON.parse(paramsKey) as QueryParams)
          .map(
            ([key, value]) =>
              `&${encodeURIComponent(`$${key}`)}=${encodeURIComponent(JSON.stringify(value))}`,
          )
          .join("");

        const url = `${API_URL}?query=${encodeURIComponent(query)}${paramString}`;

        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`Sanity svarede med status ${response.status}`);

        const json = await response.json();

        if (!ignore) setData(json.result);
      } catch (error) {
        if (!ignore) {
          setError(
            error instanceof Error ? error.message : "Kunne ikke hente data",
          );
        }
      } finally {
        if (!ignore) setIsLoading(false);
      }
    };

    getData();

    // Hvis sprog eller slug skifter, før svaret er kommet, smides det gamle svar væk
    return () => {
      ignore = true;
    };
  }, [query, paramsKey]);

  return { data, isLoading, error };
};
