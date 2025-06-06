import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { get } from "../Services/BinanceAnnouncementsAPIService";

const useBinanceAnnouncementsAPI = (options: object = {}) => {
  // console.log('Rodou o useBinanceAnnouncementsAPI')

  const { data, loading, error, request, setData } = useFetch();
  const [newCurrencies, setNewCurrencies] = useState([]);

  const [httpOptions, setHttpOptions] = useState(options);
  // const [ currenciesData, setCurrenciesData ] = useState(null);
  const url = get(16, 32);

  function formatData(value) {
    let filteredCurrencies;
    const array = [ ...value.data ]
    if (value && value.data) {
      filteredCurrencies = array.filter((item) => {
        console.log(item.footer.title === "New Listing", "Teste 🐦‍⬛");
        return item.footer.title === "New Listing" || item.footer.title === "New Listing (Spot)";
      });
    }
    setData([...filteredCurrencies])
  }

  useEffect(() => {
    // console.log(data, '⬆️ antes useBinanceAnnouncementsAPI data')
    request(url, httpOptions, formatData);
    // console.log(data, '⬇️ depois useBinanceAnnouncementsAPI data')
  }, [httpOptions]);

  // const dataArray = data !== null && data && [...data.data]
  // setCurrenciesData(dataArray)

  console.log(newCurrencies, "🚀 useBinanceAnnouncementsAPI data");


  // console.log(data, '🏎️')
  return { newCurrencies, loading, error, setHttpOptions };
};

export default useBinanceAnnouncementsAPI;
