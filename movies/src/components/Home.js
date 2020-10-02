import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Show from './Show';
import './Home.css';
import bg from "../video/popcorn.mp4"

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
      <video src={bg} playsInline autoPlay muted loop id="bgvid"/>
      <h1>The Best T.V Shows</h1>
      <form onSubmit={(e) =>handleSubmit(e)}>
      <input id="search-bar" placeholder="Search t.v show..." type="text" onChange={(e) => {setSearchInput(e.target.value)}}></input>
      <button id="submit-btn" type="submit">Search</button>
      </form>
      <div className="top-shows">
      {shows.map((show) => (
        <Show show={show} key={show.id} />
      ))}
      </div>
    </div>
  );
}

export default Home;
