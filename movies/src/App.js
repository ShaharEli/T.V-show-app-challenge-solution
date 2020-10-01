import React, { useEffect, useState } from 'react';
import axios from "axios"

  function App() {
    const [shows,setShows] = useState([])
    useEffect(()=>{
  (async ()=>{
    const theShows = await axios.get("")
    console.log(theShows);
    return
  }
  )()
},[])
  return (
    <div className="App">

    </div>
  );
}

export default App;
