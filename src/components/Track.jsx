import React from 'react'
// import { Link } from 'react-router-dom'


const Track = ({ track }) => {
  // console.log(track)
  return (
    <div className='track'>
      <img src={track.images.coverart} alt='cover art' />
      <h3>{track.title}</h3>
      <p>{track.subtitle }</p>
    </div>
	);
}

export default Track