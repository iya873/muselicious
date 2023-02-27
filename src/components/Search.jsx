import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Search = () => {

let  [input, setInput] = useState(' ')

  
  
    const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key':
					'7651dbf5damshee51e519d85f7a3p114055jsn8a25013e673c',
				'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
			},
    };
    const url = `https://shazam.p.rapidapi.com/search?term=${input}&locale=en-US&offset=0&limit=5`;

  const getTracks = async (input) => {
    try {
      let response = await fetch(url, options);
      let data = await response.json();
      console.log(data.tracks);
    } catch (err) {
      console.error(err.message);
      }
    }

  
  
  const handleChange = (e) => {
    setInput(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(input);
    setInput(' ');
    getTracks(input);
  } 
  
  return (
    <div className='search-title'>
      <h2 >Search for the music that inspires you</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={input}
        onChange={handleChange}/>
        <button type='submit'>Search</button>
      </form>
      <br />
    </div>
  )
}

export default Search