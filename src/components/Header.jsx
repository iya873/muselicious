import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <>
      <Link to='/'>
        <img
          className='logo'
          src='https://cdn-icons-png.flaticon.com/128/2907/2907197.png'
          alt='logo' />
        <h1 className='logo-title'>Muselicious</h1>
      </Link>
    </>
  )
}

export default Header