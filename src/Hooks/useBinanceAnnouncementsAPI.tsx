import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { get } from "../Services/BinanceAnnouncementsAPIService";

const useBinanceAnnouncementsAPI = (options: object = {}) => {
  // console.log('Rodou o useBinanceAnnouncementsAPI')

  const { data, loading, error, request, setData } = useFetch();

  const [httpOptions, setHttpOptions] = useState(options);
  // const [ currenciesData, setCurrenciesData ] = useState(null);
  const url = get(100, 1);

  useEffect(() => {
    // console.log(data, '⬆️ antes useBinanceAnnouncementsAPI data')
    request(url, httpOptions);
    // console.log(data, '⬇️ depois useBinanceAnnouncementsAPI data')
  }, [httpOptions]);

  // console.log(data, '🏎️')
  return { data, loading, error, setHttpOptions };
};

export default useBinanceAnnouncementsAPI;
