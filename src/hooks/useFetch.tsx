import { useEffect, useState } from "react";

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const json: T = await response.json();
        setData(json);
        setIsLoading(false);
      } catch {
        setError("Der skete en fejl");
      }
    };
    fetchData();
  }, [url]);
  return { data, isLoading, error };
};
