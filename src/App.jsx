import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Occassions from './pages/Occassions';
import Numbers from './pages/Numbers';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/numbers' element={<Numbers/>} />
          <Route path='/occassions' element={<Occassions/>} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
