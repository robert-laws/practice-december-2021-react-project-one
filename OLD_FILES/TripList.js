import { useState } from 'react';
import { useFetch } from './useFetch';

const TripList = () => {
  // const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState('http://localhost:3001/trips');
  const { data, isPending, error } = useFetch(url);

  // const getTrips = useCallback(async () => {
  //   const response = await fetch(url);
  //   const json = await response.json();
  //   setTrips(json);
  // }, [url]);

  return (
    <div className='trip-list'>
      <h2>Trip List</h2>
      {isPending && <p>Loading...</p>}
      {error && <div>{error}</div>}
      <ul>
        {data &&
          data.map((trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p>price: {trip.price}</p>
            </li>
          ))}
      </ul>
      <div className='filters'>
        <button
          onClick={() => setUrl('http://localhost:3001/trips?loc=europe')}
        >
          European Trips
        </button>
        <button onClick={() => setUrl('http://localhost:3001/trips')}>
          All Trips
        </button>
      </div>
    </div>
  );
};

export default TripList;
