import { useCallback, useState, useEffect } from "react";
import { BinanceMarketNotices } from "../Types/binance";

const useFetch = () => {
  const [data, setData] = useState<BinanceMarketNotices>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    return () => setMounted(false);
  }, []);

  const request = useCallback(
    async (url: string, options: object = {}) => {
      const abortController = new AbortController();
      let response;
      let json;

      try {
        if (!mounted) return;
        setError(null);
        setLoading(true);

        response = await fetch(url, {
          ...options,
          signal: abortController.signal,
        });
        json = await response.json();

        if (!response.ok) throw new Error(json.message);
      } catch (err: any) {
        if (err.name !== "AbortError" && mounted) {
          setError(err.message);
        }
      } finally {
        setData(json)
        setLoading(false);
      }

      return () => abortController.abort();
    },
    [mounted]
  );
  // console.log(data , '🚀 no return do useFetch data');
  return { data, loading, error, request, setData };
};

export default useFetch;
