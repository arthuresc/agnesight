import { useEffect } from 'react'
import useFetch from './useFetch'
import { get } from '../Services/BinanceAnnouncementsAPIService'


const useBinanceAnnouncementsAPI = () => {
  
  const { data, loading, error, request } = useFetch();
  const url = get(15);
  
  useEffect(() => {
    request(url);
  }, [request])

console.log(data, '🚨')


};


export default useBinanceAnnouncementsAPI;