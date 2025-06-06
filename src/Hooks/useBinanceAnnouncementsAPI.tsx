import { useEffect, useState } from 'react';
import useFetch from './useFetch'
import { get } from '../Services/BinanceAnnouncementsAPIService'


const useBinanceAnnouncementsAPI = (options:object = {}) => {
  // console.log('Rodou o useBinanceAnnouncementsAPI')
  
  const { data, loading, error, request } = useFetch();

  const [ httpOptions, setHttpOptions ] = useState(options);
  const [ currenciesData, setCurrenciesData ] = useState(null);
  const url = get(15);
  
  useEffect(() => {
    // console.log(data, '⬆️ antes useBinanceAnnouncementsAPI data')
    request(url, httpOptions);
    // console.log(data, '⬇️ depois useBinanceAnnouncementsAPI data')
  }, [httpOptions])


  // const dataArray = data !== null && data && [...data.data]
  // setCurrenciesData(dataArray)
  // if(data !== null) {
  // }

// console.log(data, '🏎️')
  return {data, currenciesData, loading, error, setHttpOptions}
};


export default useBinanceAnnouncementsAPI;