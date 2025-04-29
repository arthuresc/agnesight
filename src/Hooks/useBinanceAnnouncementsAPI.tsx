import { useEffect } from 'react';
import useFetch from './useFetch'
import { get } from '../Services/BinanceAnnouncementsAPIService'


const useBinanceAnnouncementsAPI = (options:object = {}) => {
  
  const { data, loading, error, request } = useFetch();
  const url = get(15);
  
  useEffect(() => {
    request(url, options);
  }, [request, url, options])

  console.log(data, '🚨')
  return {data, loading, error, options}
};


export default useBinanceAnnouncementsAPI;