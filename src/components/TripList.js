import { useState, useEffect } from 'react';

const TripList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/trips')
      .then((response) => response.json())
      .then((json) => {
        setTrips(json);
        console.log(json);
      });
  }, []);

  return (
    <div className='trip-list'>
      <h2>Trip List</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>price: {trip.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripList;
