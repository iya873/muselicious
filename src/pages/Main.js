import React from 'react'
import Search from '../components/Search'
import TopTracks from '../components/TopTracks'

const Main = ({tracks}) => {
  return (
    <>
      <Search />
      <TopTracks tracks={tracks} />
    </>
  )
}

export default Main