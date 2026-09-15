import { useEffect, useState } from "react";

type HttpMethod = "GET" | "PUT" | "POST" | "DELETE";

const DELAY = 2000;

export const useFetch = <T,>(
  url: string,
  method: HttpMethod = "GET",
  token?: string | null,
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
        });

        if (!response.ok)
          throw new Error(`HTTP ${response.status}: {response.status}`);

        const result: T = await response.json();
        setTimeout(() => {
          setData(result);
          setIsLoading(false);
        }, DELAY);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    };
    fetchData();
  }, [url, method, token]);
  return { data, isLoading, error };
};
