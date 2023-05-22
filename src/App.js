import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Dashboard from './pages/Dashboard/Dashboard';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
