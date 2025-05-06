import { useCallback, useState } from 'react';

const useFetch = () => {
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const request = useCallback( async(url:string, options:object = {}) => {
    let response;
    let json;
    
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if(response.ok === false) throw new Error(json.message);
    }catch(err:any) {
      // ajustar pR objeto promise e colocar o tipo certo dentro do arquivo de tipos standard
      json = null;
      setError(err.message);
      console.error('Error', err.status, err.message, new Error(err));
    }finally{
      setData(json);
      setLoading(false)
      console.log(data, json, loading)
      return {loading, json};
    }
  }, [])
  
  
  
  return {data, loading, error, request}
}

export default useFetch;