import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Show from './Show';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  const [shows, setShows] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const getPopularShows = useCallback(async () =>{
    const { data: theShows } = await axios.get(
      'https://www.episodate.com/api/most-popular'
    );
    setShows(theShows.tv_shows);
  },[])


  const handleSubmit = async (e) => { 
    e.preventDefault()
    if(searchInput.length===0){
      getPopularShows()
    }else{
      const {data : shows} = await axios.get(
        `https://www.episodate.com/api/search?q=${searchInput}`
        );
         setShows(shows.tv_shows);
    }
  }

  useEffect(() => {
    getPopularShows()
    // eslint-disable-next-line
  },[]);
  
  return (
    <div className='app'>
      <form onSubmit={(e) =>handleSubmit(e)}>
      <input type="text" onChange={(e) => {setSearchInput(e.target.value)}}></input>
      <button type="submit">Search</button>
      </form>
      <div className="top-shows">
      {shows.map((show) => (
        <Show show={show} />
      ))}
      </div>
    </div>
  );
}

export default Home;
