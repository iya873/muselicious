import React from 'react'
// import { Link } from 'react-router-dom'


const Track = ({ track }) => {
  // console.log(track)
  return (
    <div className='card track' style={{width: '10rem'}} >
      <img src={track.images.coverart} className='card-img-top' alt='cover art' />
      <div className='card-body'>
        <h3 className='card-title title'>{track.title}</h3>
        <p className='card-text'>{track.subtitle }</p>
      </div>
    </div>
	);
}

export default Track