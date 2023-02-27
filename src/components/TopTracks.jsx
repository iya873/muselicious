import React from 'react'
import Track from './Track'

import { Link } from 'react-router-dom'

const TopTracks = ({tracks}) => {
  // console.log(tracks)
  return (
    <div>
      <h2 className='topTracks'>TOP TRACKS</h2>
      <br />
      <div className='container-fluid'>
        {tracks.map((track, index) => 
          <div key={index}>
           <Track track={track} />
         </div>
       )}
      </div>
    </div>
  )
}

export default TopTracks