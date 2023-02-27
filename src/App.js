
import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header.jsx'
import Nav from './components/Nav';
import Main from './pages/Main'
import Lyrics from './pages/Lyrics'
import Playlists from './pages/Playlists'
import Dashboard from './pages/Dashboard'
import Loading from './components/Loading';
import {  useState,useEffect } from 'react';

function App() {

  let [tracks, setTopTracks] = useState([])
  let [loading, setLoading] = useState(false)

  useEffect(() => {
    getTopTracks();
  }, [setTopTracks])

const options = {
	method: 'GET',
	headers: {
			'X-RapidAPI-Key': '7651dbf5damshee51e519d85f7a3p114055jsn8a25013e673c',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
};
const url = 'https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=10&startFrom=0'


  const getTopTracks = async () => {
    try {
      setLoading(true)
      let response = await fetch(url, options);
      let data = await response.json();
      setLoading(false)
      setTopTracks(data.tracks);
      console.log(data.tracks)
    } catch (err) {
      setLoading(false)
      console.error(err.message)
    }
    
    
    
}

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        {loading ? <Route path='/' element={<Loading />} /> :<Route path='/' element={<Main tracks={tracks} />} />}
        <Route path='/lyrics' element={<Lyrics />} />
        <Route path='/playlists' element={<Playlists />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
