import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Show from './components/Show';
import './App.css';

function App() {
  const [shows, setShows] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = async (searchInput) => { 
    const {data : shows} = await axios.get(
      `https://www.episodate.com/api/search?q=${searchInput}`
      );
       setShows[shows.tv_shows];
  }

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
      <form onSubmit={(e) =>{
        e.preventDefault(),
        handleSubmit(searchInput)
      }}>
      <input type="text" onChange={(e) => {setSearchInput(e.target.value)}}></input>
      <button type="submit">Search</button>
      </form>
      {shows.map((show) => (
        <Show show={show} />
      ))}
    </div>
  );
}

export default App;
