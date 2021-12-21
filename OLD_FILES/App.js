import { useState } from 'react';
import TripList from './components/TripList';
import './sass/App.scss';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className='App'>
      <button onClick={() => setShow(false)}>Toggle</button>
      <h1>App</h1>
      {show && <TripList />}
    </div>
  );
}

export default App;
