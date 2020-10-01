import React from 'react';
import './Show.css';
function Show({ show }) {
  return (
    <div className='tv-show'>
      <img
        height='350px'
        width='250px'
        src={show.image_thumbnail_path}
        alt={show.name}
      />
      <h2 className='show-header'>{show.name}</h2>
    </div>
  );
}

export default Show;
