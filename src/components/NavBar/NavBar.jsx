import React from 'react'
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
      <nav>
          <ul className='nav justify-content-center'>
              <li className='nav-item'>
                  <Link className='nav-link active' to='/'>Home</Link>
              </li>
              <li className='nav-item'>
                  <Link className='nav-link' to='/search'>Search</Link>
              </li>
              <li className='nav-item'>
                  <Link className='nav-link' to='/dashboard'>Dashboard</Link>
              </li>
           
            
            
          </ul>
         
    </nav>
  )
}

export default NavBar