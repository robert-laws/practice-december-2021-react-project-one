import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setIsPending(false);
    };

    fetchData();
  }, [url]);

  return { data, isPending };
};
