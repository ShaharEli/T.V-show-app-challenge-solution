import React from 'react'
import "./Show.css"
function Show({show}) {
    return (
        <div className="tv-show">
            <img src={show.image_thumbnail_path} alt={show.name} />
            <h2>{show.name}</h2>
        </div>
    )
}

export default Show
