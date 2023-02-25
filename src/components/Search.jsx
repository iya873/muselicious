import React, { useState } from 'react'

const Search = () => {

let  [input, setInput] = useState(' ')

  
  const handleChange = (e) => {
    setInput(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setInput(' ');
  } 
  
  return (
    <div>
      <h2>Search for the music that inspires you</h2>
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