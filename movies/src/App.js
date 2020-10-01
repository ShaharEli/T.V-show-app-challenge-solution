import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Show from './components/Show';
import './App.css';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    (async () => {
      const { data: theShows } = await axios.get(
        'https://www.episodate.com/api/most-popular'
      );
      setShows(theShows.tv_shows);
    })();
  }, []);
  return (
    <div className='app'>
      {shows.map((show) => (
        <Show show={show} />
      ))}
    </div>
  );
}

export default App;
