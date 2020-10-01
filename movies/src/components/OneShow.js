import React, { useEffect, useState } from "react";
import axios from 'axios'

function OneShow() {
    const [show, setShow] = useState([]);

    useEffect(() => {
      (async () => {
        try {
          const { data } = await axios.get("/https://www.episodate.com/api/show-details?q=29560");
          setShow(data);
        } catch (error) {
          console.log(error.message);
        }
      })();
      console.log(data)
    }, []);

    return (
        <div>
            <h2>{show.name}</h2>
            <img src={show.tvShow.image_path} />
            {show.tvShow.description}
            seasons:{show.episodes[length-1].season}
        </div>
    )
} 

export default OneShow
