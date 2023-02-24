
import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header.jsx'
import Nav from './components/Nav';
import Main from './pages/Main'
import Lyrics from './pages/Lyrics'
import Playlists from './pages/Playlists'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/lyrics' element={<Lyrics />} />
        <Route path='/playlists' element={<Playlists />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
