import { useEffect, useState } from 'react';
import useFetch from './useFetch'
import { get } from '../Services/BinanceAnnouncementsAPIService'


const useBinanceAnnouncementsAPI = (options:object = {}) => {
  
  const { data, loading, error, request } = useFetch();

  const [ httpOptions, setHttpOptions ] = useState(options);
  const [ currenciesData, setCurrenciesData ] = useState(null);
  const url = get(15);
  
  useEffect(() => {
    request(url, httpOptions);
  }, [httpOptions])

  console.log(data, '🚨')

  // const dataArray = data !== null && data && [...data.data]
  // setCurrenciesData(dataArray)
  // if(data !== null) {
  // }


  return {data, currenciesData, loading, error, setHttpOptions}
};


export default useBinanceAnnouncementsAPI;