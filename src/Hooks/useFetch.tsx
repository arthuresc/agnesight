import React, { useCallback, useState } from 'react';

const useFetch = () => {
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(null);
  const [ error, setError ] = useState(null);

  const request = useCallback((url, options) => {
    let response;
    let json;
    
    try {
      response = fetch()
    }
  })
  
  
  
  return {data, loading, error, request}
}

export default useFetch