import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {
  return (
      <div className='navbar'>
          <Link to={'/'}>HOME</Link>
          <Link to={'/lyrics'}>LYRICS</Link>
          <Link to={'/playlists'}>PLAYLISTS</Link>
          <Link to={'/dashboard'}>DASHBOARD</Link>
    </div>
  )
}

export default Nav