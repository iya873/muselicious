import React, { useState } from 'react'
import Search from '../components/Search'
import TopTracks from '../components/TopTracks'

const Main = ({ tracks }) => {
  
//   let [loaded, setLoaded] = useState(true)
  
//   const loading = props.loading;

//   const loadedState = () => {
//     return (
//       <TopTracks tracks={tracks} />
//     )
//   }
//   const loadingState = () => {
//     return (
//     <div class="spinner-border text-primary" role="status">
//   <span class="visually-hidden">Loading...</span>
// </div>
//     )
//   }


  return (
    <>
      <Search />
      <TopTracks tracks={tracks}/>
    </>
  )
}

export default Main